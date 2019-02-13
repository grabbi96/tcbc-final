const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const registrationValidator = require("../validator/registrationValidator");
const { catchError } = require("../utils/error");
const { PENDING, ACTIVE } = require("../utils/accountStatus");
const nodemailer = require("nodemailer");
const generateEmailOption = require("../utils/generateEmailoption");
const varificationTemplate = require("../emailTemplate/verificationTemplate");

const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        "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"
    }
  })
);
module.exports = {
  async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;
    const validResult = registrationValidator({
      name,
      email,
      password,
      confirmPassword
    });

    if (!validResult.isValid) {
      res.json(validResult.errors);
    } else {
      try {
        const findUser = await User.findOne({ email });
        if (findUser) {
          return res.status(400).json({
            message: "Email Already exits"
          });
        }
        const activeToken = jwt.sign({ name, email }, "SECRET", {
          expiresIn: "1d"
        });
        bcrypt.hash(password, 11, async (err, hash) => {
          if (err) return catchError(res, err);

          let user = new User({
            name,
            email,
            password: hash,
            accountStatus: PENDING,
            isActivated: false,
            activateToken: activeToken
          });
          const newUser = await user.save();
          let activateLink = `http:/localhost:4000/api/users/activateaccount/${
            newUser.activateToken
          }`;
          let template = varificationTemplate({
            name: newUser.name,
            link: activateLink
          });
          let mapOption = generateEmailOption({
            to: newUser.email,
            subject: "Activate Your account",
            template: template
          });
          transporter.sendMail(mapOption, (err, info) => {
            if (err) return catchError(res, err);
            res.status(201).json({
              message: "user created successfully",
              activateLink: `http:/localhost:4000/api/users/activateaccount/${
                newUser.activateToken
              }`,
              user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
              }
            });
          });
        });
      } catch (error) {
        return catchError(res, error);
      }
    }
  },
  async activateAccount(req, res) {
    const token = req.params.token;
    const decode = jwt.verify(token, "SECRET");
    if (!decode) {
      return catchError(res, new Error("invalid token"));
    }

    try {
      const user = await User.findOne({ email: decode.email });
      if (!user) {
        return catchError(res, new Error("Invalid email"));
      }
      if (user.isActivated) {
        return catchError(res, new Error("already activated"));
      }
      if (token === user.activateToken) {
        const updateUser = await User.findOneAndUpdate(
          { email: user.email },
          {
            $set: {
              accountStatus: ACTIVE,
              isActivated: true,
              activateToken: ""
            }
          }
        );
        res.status(200).json({
          message: "Account activated",
          user: {
            _id: updateUser._id,
            email: updateUser.email
          }
        });
      }
    } catch (err) {
      return catchError(res, err);
    }
  },

  async getAllUsers(req, res) {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        users
      });
    }
  },
  async mailTesting(req, res) {
    try {
      transporter.sendMail({
        to: "grabbi96@gmail.com",
        from: "shop96@gmail.com",
        subject: "signup",
        html: "<h2>you successfully signed up!</h2>"
      });
      res.json({
        name: "golam rabb"
      });
    } catch (err) {
      console.log(err);
    }
  }
};
