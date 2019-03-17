const quizValidator = require("../validator/quizValidator");

module.exports = {
  async createQuiz(req, res) {
    const {
      title = "",
      description = "",
      tags = [],
      category = "",
      skill = "",
      author = "",
      questions = [],
      durations = "",
      published = false
    } = req.body;

    let validate = quizValidator({
      title,
      description,
      category,
      skill,
      author,
      questions
    });

    if (!validate.isValid) {
      res.status(400).json(validate.error);
    } else {
      res.status(200).json({
        message: "everything ok"
      });
    }
  }
};
