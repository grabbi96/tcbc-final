const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const common = {
  type: String,
  trim: true,
  required: true
};

const CategorySchema = new Schema(
  {
    name: {
      ...common
    },
    slug: String,
    body: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
