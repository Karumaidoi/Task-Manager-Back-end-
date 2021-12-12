const Task = require("./../models/taskModel");

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
};
