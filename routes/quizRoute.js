const router = require("express").Router();
const {
  createQuiz,
  all,
  singleQuiz
} = require("../controllers/quizController");
const authenticate = require("../passport/authenticateMiddleware");
router.get("/create", (req, res) => {
  console.log("done");
  res.status(200).json({
    okay: "good"
  });
});
router.post("/create", authenticate, createQuiz);
router.get("/all", authenticate, all);
router.get("/singlequiz/:id", singleQuiz);
module.exports = router;
