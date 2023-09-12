const router=require('express').Router()
const cdcontroller=require('../controller/cdcontroller')

router.post('/project/create',cdcontroller);
router.post('/project/update',cdcontroller);
router.post('/project/delete',cdcontroller);


module.exports =router