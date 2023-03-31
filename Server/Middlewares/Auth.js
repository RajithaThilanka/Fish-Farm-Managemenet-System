class Auth{ 
    static validate(req, res, next) { 
        
    //     //middlewre logic written in here
        console.log("From auth middleware");
        next();
     }
}


module.exports=Auth;