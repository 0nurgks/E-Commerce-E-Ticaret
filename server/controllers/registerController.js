//Register => request-> username,email, password
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

module.exports.registerController= async(req,res) =>{

try {
    const {username,email,password} = req.body;
    const emailExist = await UserModel.findOne({email});
    if(emailExist){
        res.status(400).json({message: "This email is already exist!"});
    }

    const hashedPassword = bcrypt.hash(password, 10);

    try {
        const newUser = await UserModel.create({
            username: username,
            email:email,
            password:password
        });
        res.status(200).json({message:"User Created"});
    } catch (error) {
        res.status(400).json({message:"user can not create"});
    }


} catch (error) {
    res.status(500).json({message:"Connection error on server"});
}


}