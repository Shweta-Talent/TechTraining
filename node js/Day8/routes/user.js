const router = require("express").Router();
const usercontroller = require("../controller/userController");

router.post("/createuser", usercontroller.user);

module.exports = router;
