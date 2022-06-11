const Category = require("../models/Category.model");

module.exports.CategoryController = {
  getCategory: async (req, res) => {
    try {
      const todos = await Category.find();
      res.json(todos);
    } catch (err) {
      res.json(err);
    }
  },
  postCategory: async (req, res) => {
    try {
      const { name, text } = req.body;
      const cat = await Category.create({
        name,
        text,
      });
      res.json(cat);
    } catch (err) {
      res.json(err);
    }
  },
};