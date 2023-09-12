const router = require("express").Router();
const resetController = require("../controller/user");

router.post("/reset", resetController.resetPassword);
router.post("/welcome", resetController.welcome);

module.exports = router;
