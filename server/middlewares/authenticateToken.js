const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

module.exports.authenticateToken = (req,res,next)=>{
const header = req.headers["authorization"];
const token = header && header.split(" ")[1];
if(!token){return res.status(403).json({message:"yetkisiz erişim"});}

jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
    if(err){return res.status(403).json({message:"yetkisiz erişim"});}

    req.userID = decoded.userID || decoded.sub; // Token'dan userID al

})

const decode = jwt.decode(token);

req.userID = decode.[1]


next();

}