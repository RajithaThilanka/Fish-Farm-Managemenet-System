const express = require('express');
const router = express.Router();
const userController=require("../Controllers/userControllers")


router.get('/getUser', userController.getUser);

router.post('/postUser', userController.postUser);

router.get('/postData', userController.getData);

router.get('/getMe', userController.getMe);

module.exports = router;
