const jwt = require('jsonwebtoken');
const UserModel = require('../model/User.model');

function verifyToken(req,res,next){
    if( req.headers &&
        req.headers.authorization && 
        req.headers.authorization.split(' ')[0] === "JWT"
    ){
        jwt.verify( 
            req.headers.authorization.split(' ')[1] ,
            'SECRETKEY',
            async (err,verifiedToken)=>{
                if(err){
                    return res.status(403).json({msg: "Invalid JWT token"})
                }
                // console.log(verifiedToken);
                let user = await UserModel.findById(verifiedToken.id)
                // console.log(user);
                let {fullName,email} = user;
                req.user = {fullName,email};
                console.log(req , "req");
                
                next();
            }
        )
    }
    else{
        return res.status(404).json({msg: "token doesnot exists"})
    }
}
module.exports = verifyToken;