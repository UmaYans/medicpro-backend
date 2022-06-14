const Doc = require("../models/Doc.model");

module.exports.docsController = {
  postDoc: async (req, res) => {
    try {
      const {
        name,
        lastName,
        age,
        skill,
        telephone,
        place,
        spec,
        eMail,
        desc,
        rating,
        photo,
      } = req.body;

      const doc = await Doc.create({
        name,
        lastName,
        age,
        skill,
        telephone,
        place,
        spec,
        eMail,
        desc,
        rating,
        photo,
      });

      return res.json(doc);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Ошибка при добавлении доктора: " + error.toString() });
    }
  },

  getDocs: async (req, res) => {
    try {
      const docs = await Doc.find().populate("place", "name")
      .populate("spec", "name");

      return res.json(docs);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех докторов: " + error.toString(),
      });
    }
  },

  getDocsById: async (req, res) => {
    try {
      const doc = await Doc.findById(req.params.id).populate("place", "name")
      .populate("spec", "name");

      return res.json(doc);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе докторв по id: " + error.toString(),
      });
    }
  },
};
