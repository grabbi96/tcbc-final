const router = require("express").Router();
const { createQuiz } = require("../controllers/quizController");

router.post("/create", createQuiz);

router.get("/create", (req, res) => {
  res.status(200).json({
    okay: "good"
  });
});

module.exports = router;
