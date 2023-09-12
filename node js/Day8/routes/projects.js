const router = require("express").Router();
const projectcontroller = require("../controller/projectController");

router.post("/list", projectcontroller.list);
router.post("/createproject", projectcontroller.CreateProject);

module.exports = router;
