const TokenModel = require("../models/TokenModel");
const jwt = require("jsonwebtoken");
const generateAccessToken = require("./generateAccessToken");
const UserModel = require("../models/UserModel");

const user = UserModel.user;
const refreshToken = async(req,res) => {
const refreshToken  = req.cookies.refreshToken;
if(!refreshToken){res.status(404).json({message:"Refresh Token bulunamadı"});}

const tokenExist =await  TokenModel.findOne({token:refreshToken});
if(!tokenExist){
    res.status(401).json({message:"Token kayıtlı değil"});
}

jwt.verify(refreshToken,process.env.SECRET_KEY,(err,user)=>{
if(err){ res.status(401).json({message:"Token geçersiz"})   }
})

const newAccessToken = generateAccessToken(user.userID);
res.status(202).json({accessToken : newAccessToken});
}