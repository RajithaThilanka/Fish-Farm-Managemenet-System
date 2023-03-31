const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userControllers")
const Auth=require("../Middlewares/Auth")

router.use(Auth.validate);
router.get('/home', userController.home);

module.exports = router;