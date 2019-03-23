const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const userRoute = require("./routes/userRoute");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./passport/jwStrategy")(passport);

// app.get("/api/quiz", (req, res) => {
//   console.log("done");
//   res.status(200).json({
//     okay: "good"
//   });
// });
app.use("/api/users", userRoute);
app.use("/api/quiz", require("./routes/quizRoute"));
app.use("/api/category", require("./routes/categoryRoute"));
app.use("/api/skill", require("./routes/skillRoute"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is on fire${PORT}`);
  mongoose
    .connect("mongodb://localhost:27017/mern-project", {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("mongobd connected successfully");
    });
});
// 1. my status . study abroad 3. quiz test 4. payment
