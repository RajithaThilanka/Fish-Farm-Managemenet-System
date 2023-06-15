const axios = require('axios');
const { request } = require('express');
const Users=require("../Models/userModel")

//Create User
exports.createUser = async (req, res, next) => {
    try {   
        const User=await Users.create(req.body);
        res.status(200).json(User);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


//Get All User
exports.getAllUsers = async (req, res, next) => {
    const AllUsers=await Users.find({});
    res.status(200).json(AllUsers);
};

//Get A user by Id
exports.getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const AUser = await Users.findById(id);
        res.status(200).json(AUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update User
exports.updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const AUser = await Users.findByIdAndUpdate(id,req.body);
        if(!AUser){
            return res.status(404).json({message:`Cannot find any User with Id ${id}`})
        }
        const UpdatedUser=await Users.findById(id);
        res.status(200).json(UpdatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Delete User
exports.deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const AUser = await Users.findByIdAndDelete(id);
        if(!AUser){
            return res.status(404).json({message:`Cannot find any User with Id ${id}`})
        }
        res.status(200).json({message:`${id} User has been deleted success`});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};