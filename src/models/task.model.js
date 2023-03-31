const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  isFinished: {
    type: Boolean,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: false,
  },
  key: {
    type: String,
    required: false,
  },
  _id: {
    type: String,
    required: false,
  },
});

const TaskModel = mongoose.model("tasks", userSchema);

module.exports = TaskModel;
