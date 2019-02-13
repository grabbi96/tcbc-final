const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is on fire${PORT}`);
  mongoose
    .connect(
      "mongodb://localhost:27017/mern-project",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("mongobd connected successfully");
    });
});
