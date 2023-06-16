const mongoose = require('mongoose');

const farmSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    hasBerge: {
        type: Boolean,
        required: true
      },
    description: {
        type: String,
        required: true
      },
    location: {
        type: String,
        required: true
      },
    farmPhoto: {
        type: String,
        required: true
      },    
},
{
    timestamps:true
}
);

module.exports=mongoose.model("Farms",farmSchema);