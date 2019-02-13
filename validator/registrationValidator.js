const validator = require("validator");

const registrationValidator = data => {
  let errors = {};

  if (!data.name) {
    errors.name = "Please Provide Your name";
  }
  if (!data.email) {
    errors.email = "Please Provide your email";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Your email not a valid email";
  }
  if (!data.password) {
    errors.password = "Please Provide a password";
  } else if (data.password.length < 6) {
    errors.password = "Password must be Greater or equal 6 Character";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please Provite a confirm password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Password dosen't match";
  }

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
};

module.exports = registrationValidator;
