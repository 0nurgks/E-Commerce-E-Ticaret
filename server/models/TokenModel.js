const mongoose= require("mongoose");
const UserModel = require("./UserModel");

const Token = mongoose.Schema({
    userID:{type:mongoose.Schema.ObjectId, ref:"UserModel",required:true},
    token:{type:String, required:true},
    expiresAt:{type:Date , required:true},
    createdAt: { type: Date, default: Date.now }

});

module.exports=mongoose.model("TokenModel",Token,"/tokens")
