module.exports = ({ question, options, answer }) => {
  let error = {};

  if (!question) {
    error.question = " you mush provide Valid Question";
  }
  if (!options || options.length < 2) {
    error.options = "you mush provide Valid 2 options";
  }

  if (!answer) {
    error.answer = "You Must Provide a valid Answer";
  } else if (options.includes(answer)) {
    error.answer = "you must provide answer in your options";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0
  };
};
