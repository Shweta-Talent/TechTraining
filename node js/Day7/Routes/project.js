const router = require("express").Router();
const projectController = require("../Controllers/projects");

router.post("/createproject", projectController.createProjects);
// router.post("/agg", projectController.Aggregate);

module.exports = router;
