const router = require("express").Router();
const authenticate = require("../passport/authenticateMiddleware");
const { createSkill, all } = require("../controllers/skillController");

router.post("/create", createSkill);

router.get("/all", authenticate, all);

module.exports = router;
