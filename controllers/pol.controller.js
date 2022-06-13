const Pol = require("../models/Pol.model.js");

module.exports.polController = {
  getAllClin: async (req, res) => {
    try {
      const getAllClin = await Pol.find();

      return res.json(getAllClin);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех клиник: " + error.toString(),
      });
    }
  },

  getClinById: async (req, res) => {
    try {
      const getClinById = await Pol.findById(req.params.id);

      return res.json(getClinById);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе клиники по id: " + error.toString(),
      });
    }
  },

  regClin: async (req, res) => {
    const { name, desc, photo, place, coordinates } = req.body;

    try {
      const addClin = await Pol.create({
        name,
        desc,
        photo,
        place,
        coordinates,
      });

      return res.json(addClin);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении клиники: " + error.toString(),
      });
    }
  },
};
