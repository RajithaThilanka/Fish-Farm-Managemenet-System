const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

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

app.use(cors());

//use morgon middleware
app.use(morgan('tiny'));

//import requests file
const user = require('./routers/userRoute');
const farm   = require('./routers/farmRoute');


//use middleware to get json object
//it is using to responce bodu make json type
app.use(express.json());

//re route all api/users route to users 
//adn check log middlewaren
app.use('/api/v1/users', user);
app.use('/api/v1/farms', farm);

const server = app.listen(port, () => {
  console.log('Listening to port ' + port);
});
