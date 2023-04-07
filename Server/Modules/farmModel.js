const mongoose = require('mongoose');
const hod = require('./userModel');
const farmSchema =new mongoose.Schema({
    name: {type:String,required:true},
    id: { type: Number, required: true }
    address: { type: String }
    noOfEmp: Number,
    hod:[hod]
    
});

module.exports = mongoose.model("Farm ", farmSchema);