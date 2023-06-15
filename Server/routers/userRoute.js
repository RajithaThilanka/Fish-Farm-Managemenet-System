const express =require("express");
const router = express.Router();
const userController=require("../Controllers/userControllers")

router
    .route('/createUser')
    .post(userController.createUser);

router
    .route('/getAllUsers')
    .get(userController.getAllUsers);

router
    .route('/getUser/:id')
    .get(userController.getUser);

router
    .route('/updateUser/:id')
    .patch(userController.updateUser);

router
    .route('/deleteUser/:id')
    .delete(userController.deleteUser);


module.exports = router;
