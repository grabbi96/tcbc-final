const skillValidator = require("../validator/skillValidator");
const Skill = require("../models/Skill");
const { catchError } = require("../utils/error");
module.exports = {
  async createSkill(req, res) {
    const { name = "", slug = "", body = "" } = req.body;

    let { isValid, error } = skillValidator({ name, slug });

    if (!isValid) {
      return res.status(400).json(error);
    }

    // const checkSkill = await Skill.find({ slug });
    // if (checkSkill) {
    //   console.log(checkSkill);
    //   error.slug = "slug already taken";
    //   return res.status(400).json(error);
    // }

    try {
      let skill = new Skill({ name, slug, body });
      let newSkill = await skill.save();

      res.status(200).json({
        message: "category created successfully",
        ...newSkill
      });
    } catch (err) {
      return catchError(err);
    }
  },
  async all(req, res) {
    try {
      const Skills = await Category.find();
      if (Skills.length === 0) {
        return res.status(400).json({
          message: "category none"
        });
      }
      res.json(Skills);
    } catch (err) {
      return catchError(res, err);
    }
  }
};
