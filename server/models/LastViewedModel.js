/*
const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const ProductModel = require("./ProductModel");

const LastViewed = mongoose.Schema({
    user:{type: mongoose.Schema.ObjectId , ref:"UserModel"},
    product:[{type: mongoose.Schema.ObjectId , ref:"ProductModel", required:false}]

});

module.exports = mongoose.model("LastViewedModel",LastViewed,"lastViews");
*/