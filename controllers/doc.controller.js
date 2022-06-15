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

      const docs = await Doc.find().populate("spec")

      return res.json(docs);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех докторов: " + error.toString(),
      });
    }
  },

  getDocsById: async (req, res) => {
    try {

      const doc = await Doc.findById(req.params.id).populate("place spec")

      return res.json(doc);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе докторa по id: " + error.toString(),
      });
    }
  },
  getDocsPlaceId: async (req, res) => {
    try {
      const docs = await Doc.find({place: req.params.id})
      return res.json(docs);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе докторa по поликлинике: " + error.toString(),
      });
    }
  }
};
