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

//название цена и страая цена реф на пользователя и реф на доктора..... вывод услуг по определенному доктору акции
