const router = require("express").Router();
const {
  register,
  activateAccount,
  getAllUsers,
  mailTesting,
  login
} = require("../controllers/userController");

router.post("/register", register);

router.get("/activateaccount/:token", activateAccount);

router.get("/all", getAllUsers);

router.get("/mailcheaking", mailTesting);
router.post("/login", login);

module.exports = router;
