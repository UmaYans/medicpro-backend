const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  lastName: String,
  login: {
    type: String,
    unique: true,
  },
  password: String,
  telephone: String,
  eMail: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
