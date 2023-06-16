const axios = require('axios');
const { request } = require('express');
const Farms=require("../Models/farmModel")

//Create Farm
exports.createFarm = async (req, res, next) => {
    try {   
        const Farm=await Farms.create(req.body);
        res.status(200).json(Farm);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//get all Farms
exports.getAllFarms=async(req,res,next)=>{
try {

    const AllFarms=await Farms.find({});
    res.status(200).json(AllFarms);

 } catch (error) {
    res.status(500).json({message:error.message});
 }

}

//get Farm by Id
exports.getFarm=async(req,res,next)=>{
try {
      const {id} = req.params;
      const AFarm = await Farms.findById(id);
      res.status(200).json(AFarm);
} catch (error) 
  {
    res.status(500).json({message:error.message});
  }
}

//Update farm
exports.updateFarm=async(req,res,next)=>{
try {
        const {id} = req.params;
        const AFarm = await Farms.findByIdAndUpdate(id,req.body);
        if(!AFarm){
            return res.status(404).json({message:`Cannot find any Farm with Id ${id}`})
        }
        const UpdatedFarm=await Farms.findById(id);
        res.status(200).json(UpdatedFarm);

} catch (error) 
  {
    res.status(500).json({message:error.message});
  }
}

//Delete Farm
exports.deleteFarm=async(req,res,next)=>{
try {
       const {id} = req.params;
        const AFarm = await Farms.findByIdAndDelete(id,req.body);

        if(!AFarm){
            return res.status(404).json({message:`Cannot find any Farm with Id ${id}`})
        }

        res.status(200).json({message:`${id} Farm has been deleted success`});
} catch (error) 
  {
    res.status(500).json({message:error.message});
  }
}