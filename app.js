const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

//Serving public or static files
app.use(express.static(path.join(__dirname, "public")));

//
const taskRouter = require("./routes/taskRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//
app.use("/api/v1/tasks", taskRouter);

module.exports = app;
