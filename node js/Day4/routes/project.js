const router = require('express').Router();
const projectcontroller=require('../controller/projectcontroller') 

router.get('/project/list', projectcontroller);

module.exports = router;