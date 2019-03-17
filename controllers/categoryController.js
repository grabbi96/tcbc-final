const categoryValidator = require("../validator/categoryValidator");
const Category = require("../models/Category");
const { catchError } = require("../utils/error");
module.exports = {
  async createCategory(req, res) {
    const { name = "", slug = "", body = "" } = req.body;

    let { isValid, error } = categoryValidator({ name, slug });

    if (!isValid) {
      return res.status(400).json(error);
    }

    const checkCategory = await Category.find({ slug });
    if (checkCategory) {
      console.log(checkCategory);
      error.slug = "slug already taken";
      return res.status(400).json(error);
    }

    try {
      let category = new Category({ name, slug, body });
      let newCategory = await category.save();

      res.status(200).json({
        message: "category created successfully",
        ...newCategory
      });
    } catch (err) {
      return catchError(err);
    }
  },
  async all(req, res) {
    try {
      const categories = await Category.find();
      if (categories.length === 0) {
        return res.status(400).json({
          message: "category none"
        });
      }
      res.json(categories);
    } catch (err) {
      return catchError(err);
    }
  }
};
