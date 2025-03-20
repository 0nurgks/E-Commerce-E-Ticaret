const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const ProductModel = require("./ProductModel");

const Basket = new mongoose.Schema([{
    user:{type: mongoose.Schema.ObjectId ,ref:"UserModel"},
    product :[{type: mongoose.Schema.ObjectId, ref:"ProductModel"}]
}]);

module.exports = mongoose.model("BasketModel",Basket,"baskets");