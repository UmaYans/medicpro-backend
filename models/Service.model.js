const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: String,
  text: String,
  price: String,
  oldPrice: String,

  doc: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Doc",
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
