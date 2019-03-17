const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const common = {
  type: String,
  trim: true,
  required: true
};

const QuizSchema = new Schema(
  {
    title: {
      ...common
    },
    description: {
      ...common
    },
    tags: [String],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    skill: {
      type: Schema.Types.ObjectId,
      ref: "Skill",
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question"
      }
    ],
    duration: Date,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      }
    ],
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Participant"
      }
    ]
  },
  { timestamps: true }
);
const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
