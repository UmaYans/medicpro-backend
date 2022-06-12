const Category = require("../models/Category.model");

module.exports.CategoryController = {
  getCategory: async (req, res) => {
    try {
      const todos = await Category.find();
      return res.json(todos);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе: " + error.toString(),
      });
    }
  },

  postCategory: async (req, res) => {
    try {
      const { name, text } = req.body;
      const cat = await Category.create({
        name,
        text,
      });
      return res.json(cat);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении: " + error.toString(),
      });
    }
  },
};
