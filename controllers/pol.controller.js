const Pol = require("../models/Pol.model.js");

module.exports.polController = {
  getAllClin: async (req, res) => {
    try {
      const getAllClin = await Pol.find({});
      res.json(getAllClin);
    } catch (err) {
      res.json({ error: err });
    }
  },
  getClinById: async (req, res) => {
    try {
      const getClinById = await Pol.findById(req.params.id);
      res.json(getClinById);
    } catch (err) {
      res.json({ error: err });
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
      res.json(addClin);
    } catch (err) {
      res.json({ error: err });
    }
  },
};
