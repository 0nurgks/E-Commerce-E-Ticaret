const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../tokens/generateAccessToken");
const generateRefreshToken = require("../tokens/generateRefreshToken");


module.exports.loginController=async(req,res)=>{
try {
    const {username,password} = request.body;
    const userExist = await UserModel.findOne({username});
    if(!userExist){
        res.status(404).json({message:"User not found"});
    }
    const hashedPassword = bcrypt(password,10);
    const gotPassword = userExist.password;
    const PasswordCorrect = bcrypt.compare(hashedPassword,gotPassword);

    if(PasswordCorrect){
    const AccessToken= generateAccessToken(userExist._id);
    const RefreshToken=  generateRefreshToken(userExist._id);
        res.status(200).json({message:"Giriş Başarılı"},AccessToken,RefreshToken);
    }
    else{
        res.status(400).json({message:"Password is wrong"});
    }


} catch (error) {
    res.status(500).json({message:"connection error on server"});
}

}