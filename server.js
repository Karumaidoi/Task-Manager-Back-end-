const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Configuring the path
dotenv.config({ path: "./config.env" });

//Connecting to our DB
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

const app = require("./app");

const port = process.env.PORT || 9300;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
