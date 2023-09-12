
const router = require('express').Router();
const signController = require('../controller/users');
const client=require('./updateNo')

router.POST('/sign',signController.signup)


module.exports = router;