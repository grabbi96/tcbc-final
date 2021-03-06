const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const common = {
  type: String,
  trim: true,
  required: true
};

const QuestionSchema = new Schema(
  {
    question: {
      ...common
    },
    options: [String],
    answer: {
      ...common
    }
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
