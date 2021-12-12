const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A task must have a title"],
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    //required: [true, "A task must have a description"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  chip: {
    type: String,
    // required: [true, "A task must have a chip"],
  },
  startTime: {
    type: Date,
    // required: [true, "A task must have a start time"],
  },
  endTime: {
    type: Date,
    // required: [true, "A task must have the ending time"],
  },
  value: {
    type: String,
    // required: [true, "A task must have a value"],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
