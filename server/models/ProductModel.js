const mongoose = require("mongoose");
const CategoryModel = require("./CategoryModel");

const Product = mongoose.Schema({
    image : [{type: String, required:true}],
    price: {type: Number ,required: true},
    comment:{type:String , required:false},
    category:[{type: mongoose.Schema.ObjectId ,ref:"CategoryModel" ,required:true}],
    piece:{type:Number , required:true},
    comment:[{type:String}],
},{timestamps: true});

module.exports = mongoose.model("ProductModel",Product,"products")