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
        user,
        time,
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
        user,
        time,
        photo,
      });

      return await res.json(doc);
    } catch (error) {
      return res.status(401).json({ error: error.toString() });
    }
  },
  getDocs: async (req, res) => {
    try {
      const docs = await Doc.find();
      return await res.json(docs);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
};
