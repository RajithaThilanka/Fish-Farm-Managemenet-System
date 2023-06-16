const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required:true
  },
  age: {
    type: Number,
    required: true
  },
  dateBirth: {
    type: Date,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  profilePhoto: {
    type: String,
    required:true
  },
  position: {
    type: String,
    required:true
  },
  ExpireDate: {
    type: Date,
    required:true
  },
},
{
   timestamps:true
}
);

module.exports = mongoose.model("Users", userSchema); 