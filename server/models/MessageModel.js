const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const ProductModel = require("./ProductModel");

const Message = new mongoose.Schema({
    text : {type:String , required:true},
    user:{type: mongoose.Schema.ObjectId , ref:"UserModel"},
    product:{type: mongoose.Schema.ObjectId , ref:"ProductModel", required:false},
    receiver : {type:String , required:true},
});

module.exports = mongoose.model("MessageModel",Message,"messages")