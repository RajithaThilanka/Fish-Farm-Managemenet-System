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
  position: String
}, { toObjest: { getter: true } }
);

//define getters
//whwen we get lastname then only display hellow
userSchema.path("lastname").get(function (v) {
  return "hellow";
 });

 //define setters
userSchema.path("email").set(function (v) {
  return v.toLowerCase();
});
 
 //define Virtuars
userSchema.virtual("myDomain").get(function (v) {
  return this.email.split("@")[1];
  });

userSchema.methods.sayHi = function () { 
  console.log("Say hi from " + this.firstname);
}

userSchema.methods.fullName = function () { 
  return this.firstname +" " + this.firstname;
}

module.exports = mongoose.model("User", userSchema); 