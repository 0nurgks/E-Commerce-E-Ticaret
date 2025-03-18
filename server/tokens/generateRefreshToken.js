const jwt = require("jsonwebtoken");
const TokenModel = require("../models/TokenModel");

const generateRefreshToken= async(userID) =>{
const refreshToken = jwt.sign({userID},process.env.SECRET_KEY,{expiresIn:"30d"});
 await TokenModel.create({userID,token:refreshToken,expiredAt:"30d"});
 return refreshToken;
}