const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Modules/userModel');

dotenv.config({ path: './config.env' });

// check if DATABASE environment variable is defined
if (!process.env.DATABASE) {
  console.log('DATABASE environment variable is not defined');
  process.exit(1);
}

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => console.error('Error connecting to database:', err));

const port = process.env.PORT;

//log middleware function
//add id to middleware
function log(req,res,next) { 
  //add feild to the  request usage to log auth
  req.id = "10";
  next();
}

//use log middleware
//first check middleware
app.use(log);

//use morgon middleware
app.use(morgan('tiny'));

//import requests file
const user = require('./routers/userRoute');
const home = require('./routers/Home');

//use middleware to get json object
//it is using to responce bodu make json type
app.use(express.json());

//re route all api/users route to users 
//adn check log middleware
app.use('/api/users', user);
app.use('/api/me',home);


//mongoose model handel
//create
// async function run() {
//   try { 
//   const newUser = await User.create({
//     firstname: "Rajitha",
//     lastname: "Thilanka",
//     address: "Ihala imbulgoda",
//     age: 23,
//     dateBirth: new Date('1993-04-07'),
//     email:"rajithat1998@gmail.com",
//     position:"Head of dep"
//   });
//   await newUser.save();
//   console.log(newUser)
//   }
//   catch (error) { 
//     console.log(error);
//   } 
// }

//find all
// async function run() { 
//   //const allusers = await User .find();
//   //const allusers = await User.find({ lastname:"Thilanka"});
//  //const allusers = await User.findOne({ lastname: "Thilanka", age: 2 });
//   const allusers = await User.findOne({
//     //$or: [{ lastmane: "Thilanka" }, { age: 23 }],
//     $and: [{ lastname: "Thilanka" }, { age: {$gte:10}}],
//   });
//   //const allusers = await User.findOne({ lastname:"Thilanka"});
//  //const allusers = await User.find({ lastname:"Thilanka"}).count();

//   console.log(allusers);
//   //console.log(allusers[0]);
// }

//update
// async function run() { 
//   const updateUser = await User.findOne({
//     $and:[{ lastname: "Thilanka" },{age:23}],
//   });
  
//   updateUser.firstname = "RTJ";
//   updateUser.age = "25";
  
//  // await updateUser.save();
//   console.log(updateUser);
// }


//Delete
async function run() { 
 //const deleteUser = await User.deleteOne({ lastname: "Thilanka" });
  const deleteUser = await User.findOne({ lastname: "Thilanka" });
  await deleteUser.deleteOne({_id:deleteUser.id});
  console.log(deleteUser);
}

run();


//app.listen(port,() => console.log(`App is running on port ${port}`));
const server = app.listen(port, () => {
  console.log('Listening to port ' + port);
});
