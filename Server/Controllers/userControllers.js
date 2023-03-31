class userControllers { 
    static getUser(req, res) { 
       res.send({ 'msg': 'thi is users get details'});
    }
    
    static postUser(req, res) { 
           //res.send({ 'msg': 'this is post request' });
       res.send(req.body.name);
    }

    static getData(req, res) { 
        res.send("get all data");
    }

    static getMe(req, res) { 
        res.send({ 'msg': 'thi is users my details'});
    }

    static home(req, res) { 
        res.send({ 'msg': 'from Home'});
    }
}
module.exports = userControllers;

