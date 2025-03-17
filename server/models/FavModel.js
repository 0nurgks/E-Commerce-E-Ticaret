const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const ProductModel = require("./ProductModel");

const Fav = mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId, ref:"UserModel"},
    product:[{type:mongoose.Schema.ObjectId, ref:"ProductModel"}]
});

module.exports = mongoose.model("FavModel",Fav,"favs");