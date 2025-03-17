const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

module.exports.authenticateToken = (req,res,next)=>{
const header = req.headers["authorization"];
const token = header && header.split("")[1];
if(!token){return res.status(403).json({message:"yetkisiz erişim"});}

jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
    if(err){res.status(403).json({message:"yetkisiz erişim"});}
})
req.user = user;

next();

}