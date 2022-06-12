const mongoose = require("mongoose");

const docsSchema = mongoose.Schema({
  name: String,
  lastName: String,
  age: Number,
  skill: Number,
  telephone: String,
  eMail: String,
  desc: String,
  rating: Number,
  photo: String,

  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pol",
  },
  spec: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Doc = mongoose.model("Doc", docsSchema);

module.exports = Doc;
