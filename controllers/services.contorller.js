const Service = require("../models/Service.model");

module.exports.ServiceController = {
  postService: async (req, res) => {
    try {
      const { name, text, price, oldPrice, doc } = req.body;

      const service = await Service.create({
        name,
        text,
        price,
        oldPrice,
        doc,
      });

      return res.json(service);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении услуги: " + error.toString(),
      });
    }
  },

  getService: async (req, res) => {
    try {
      const service = await Service.find().populate("doc");

      return res.json(service);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех услуг: " + error.toString(),
      });
    }
  },

  getServiceById: async (req, res) => {
    try {
      const service = await Service.findById(req.params.id);
      return res.json(service);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе услуги по id: " + error.toString(),
      });
    }
  },

  getServiceDocId: async (req, res) => {
    try {
      const service = await Service.find({ doc: req.params.id });
      return res.json(service);
    } catch (error) {
      return res.status(400).json({
        error:
          "Ошибка при выводе услуг определенного доктора: " + error.toString(),
      });
    }
  },
};
