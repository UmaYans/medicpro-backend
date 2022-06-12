const Service = require("../models/Service.model");

module.exports.ServiceController = {
  postService: async (req, res) => {
    try {
      const { name, text, price, oldPrice, doc } = req.body;

      const service = await create({
        
        name,
        text,
        price,
        oldPrice,
        doc,
      });
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
  getService: async (req, res) => {
    try {
      const service = await Service.find();
      return await res.json(service);
    } catch (e) {
      res.json(e);
    }
  },
  getServiceById: async (req, res) => {
    try {
      const service = await Service.findById(req.params.id);
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },

  getServiceDocId: async (req, res) => {
    try {
      const service = await Service.findById({ doc: req.params.id });
      res.json(service);
    } catch (e) {
      res.json(e);
    }
  },


};


