const UserModel = require("../model/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req,res){
    try{
        let {fullName,email,password} = req.body;
        let data = await UserModel.findOne({email}) //already exists
        if(data){
            return res.status(409).json({msg: "User already exists"})
        }else{
            let newUser = await UserModel.create({
                fullName,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({"user": newUser})
        }
    }
    catch(err){
        return res.status(500).json({msg: "Error while registering user"})
    }
}

async function login(req,res){
    try{
        let {email,password} = req.body;
        let data = await UserModel.findOne({email}) 
        if(!data){
            return res.status(409).json({msg: "User doesnot exists"})
        }else{
            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(403).json({msg: "Invalid Credentials"})
            }
            const token = jwt.sign({ id: data._id }, 'SECRETKEY');
            return res.status(200).json({
                user:{
                    fullName: data.fullName,
                    email: data.email,
                    password: data.password
                },
                accessToken: token
            })
        }
    }
    catch(err){
        return res.status(500).json({msg: "Error while login user"})
    }
}

module.exports = {register,login}