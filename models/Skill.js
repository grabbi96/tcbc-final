const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const common = {
  type: String,
  trim: true,
  required: true
};

const SkillSchema = new Schema(
  {
    name: {
      ...common
    },
    slug: String,
    body: String
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;
