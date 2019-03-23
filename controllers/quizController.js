const Quiz = require("../models/Quiz");
const Question = require("../models/Question");
const User = require("../models/User");
const { catchError } = require("../utils/error");
const quizValidator = require("../validator/quizValidator");

module.exports = {
  async createQuiz(req, res) {
    const {
      title = "",
      description = "",
      tags = [],
      category = "",
      skill = "",
      questions = [],
      durations = "",
      published = false
    } = req.body;

    const author = req.user._id;

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
      try {
        const questionID = questions.map(async question => {
          let newQuestion = await new Question({ ...question }).save();
          return newQuestion._id;
        });
        let savedQuestion = await Promise.all(questionID);
        console.log(savedQuestion);

        const quiz = await new Quiz({
          title,
          description,
          tags,
          category,
          questions: savedQuestion,
          skill,
          author,
          durations,
          published
        }).save();

        res.status(200).json(quiz);
      } catch (err) {}
    }
  },
  async all(req, res) {
    try {
      const quizs = await Quiz.find();
      if (quizs.length < 1) {
        return res.status(400).json({ message: "quiz none" });
      }
      res.status(200).json(quizs);
    } catch (err) {
      catchError(err);
    }
  },
  async singleQuiz(req, res) {
    let { id } = req.params;
    console.log(id);
    try {
      let quiz = await Quiz.findById(id)
        .populate("author", "name email")
        .populate("questions")
        .populate("category")
        .populate("skill");
      res.status(200).json(quiz);
    } catch (error) {
      catchError(error);
    }
  }
};
