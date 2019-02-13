const router = require("express").Router();
const {
  register,
  activateAccount,
  getAllUsers,
  mailTesting
} = require("../controllers/userController");

router.post("/", register);

router.get("/activateaccount/:token", activateAccount);

router.get("/all", getAllUsers);

router.get("/mailcheaking", mailTesting);

module.exports = router;
