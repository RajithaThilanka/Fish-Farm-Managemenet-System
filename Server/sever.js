const express = require('express');
const app = express();
const morgan = require('morgan');

//use log middleware
//first check middleware
app.use(log)

//use morgon middleware
app.use(morgan('tiny'));

//import requests file
const user = require('./routers/userRoute');


//use middleware to get json object
//it is using to responce bodu make json type
app.use(express.json());


//re route all api/users route to users 
//adn check log middleware
//app.use('/api/users', log, user);
app.use('/api/users', user);
 
//log middleware function
//log mean middlewate
//add id to middleware
function log(req,res,next) { 
    // console.log("Printed");
   //add feild to the  request usage to log auth
    req.id = "10";
    next();
}

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`App is running on port ${port}`));
