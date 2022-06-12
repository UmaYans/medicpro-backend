const mongoose = require("mongoose");

const polSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  coordinates: [Number],
});

const Pol = mongoose.model("Pol", polSchema);

module.exports = Pol;
