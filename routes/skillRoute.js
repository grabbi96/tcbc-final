const router = require("express").Router();
const passport = require("passport");
const { createSkill, all } = require("../controllers/skillController");

router.post("/create", createSkill);

router.get("/all", passport.authenticate("jwt", { session: false }), all);

module.exports = router;
