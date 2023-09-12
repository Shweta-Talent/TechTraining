const router = require("express").Router();
const userController = require("../Controllers/user");

router.post("/createuser", userController.talent);
router.post("/listCloseOnes", userController.nearByProjects);

module.exports = router;
