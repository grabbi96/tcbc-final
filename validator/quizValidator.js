const mongoose = require("mongoose");
const questionValidator = require("./questionValidator");
module.exports = ({
  title,
  description,
  category,
  skill,
  author,
  questions,
  duration
}) => {
  let error = {};

  if (!title) {
    error.title = "you must provite a title";
  } else if (title.length > 100) {
    error.title = "your must provite title grater than 100";
  }
  if (!description) {
    error.description = "you must provite a description";
  } else if (description.length > 5000) {
    error.description = "your must provite description grater than 5000";
  }

  if (!category) {
    error.category = "you must provite a category";
  } else if (!mongoose.Types.ObjectId.isValid(category)) {
    error.category = "category invalid";
  }

  if (!skill) {
    error.skill = "you must provite a skill";
  } else if (!mongoose.Types.ObjectId.isValid(skill)) {
    error.skill = "skill invalid";
  }
  if (!author) {
    error.author = "you must provite a author";
  } else if (!mongoose.Types.ObjectId.isValid(author)) {
    error.author = "author invalid";
  }

  if (questions.length < 2) {
    error.questions = "you must provite a questions";
  } else {
    const questionError = questions.map(ques => {
      return questionValidator(ques).error;
    });
    for (let i = 0; i < questionError.length; i++) {
      if (Object.keys(questionError[i]).length > 0) {
        error.questions = questionError;
        break;
      }
    }
  }

  return {
    error,
    isValid: Object.keys(error).length === 0
  };
};
