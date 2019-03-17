const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
};

module.exports = passport => {
  passport.use(
    new jwtStrategy(opts, async (payload, done) => {
      try {
        let user = User.findById(payload._id);
      } catch (error) {}

      done();
    })
  );
};
