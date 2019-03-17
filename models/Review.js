const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const common = {
  type: String,
  trim: true,
  required: true
};

const ReviewSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    body: {
      ...common
    },
    like: [
      {
        author: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    dislike: [
      {
        author: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
