const mongoose = require("mongoose");

const docsSchema = mongoose.Schema({
  name: String,
  lastName: String,
  age: Number,
  skill: Number,
  telephone: String,
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pol",
  },
  spec: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cat",
  },
  eMail: String,
  desc: String,
  rating: Number,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  time: String,
  photo: String,
});

const Doc = mongoose.model("Doc", docsSchema);

module.exports = Doc;
