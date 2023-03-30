const express = require('express');
const router = express.Router();

//get users
router.get('/', (req,res) => {
    res.send({ 'msg': 'thi is users get details'});
});

//user post request
router.post('/postdata', (req,res) => {  
    //res.send({ 'msg': 'this is post request' });
    res.send(req.body.name);
});





module.exports = router;
