const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  password_confirmation: {
    type: String,
    required: true,
    minlength: 6,
  },
  img: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
