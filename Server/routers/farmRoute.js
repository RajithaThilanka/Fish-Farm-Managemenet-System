const express =require("express");
const router = express.Router();
const farmcontroller=require("../Controllers/farmController")

router
    .route('/createFarm')
    .post(farmcontroller.createFarm);

router
    .route('/getAllFarms')
    .get(farmcontroller.getAllFarms);

router
    .route('/getFarm/:id')
    .get(farmcontroller.getFarm);

router
    .route('/updateFarm/:id')
    .patch(farmcontroller.updateFarm);

router
    .route('/deleteFarm/:id')
    .delete(farmcontroller.deleteFarm);

module.exports = router;