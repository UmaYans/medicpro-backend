const mongoose = require("mongoose");

const entryShema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  doc: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Doc",
  },
  time: String,
});

const Entry = mongoose.model("Entry", entryShema);

module.exports = Entry;
