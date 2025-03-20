const mongoose = require("mongoose");
const CategoryModel = require("./CategoryModel");

const Product =new  mongoose.Schema({
    name:{type:String,required:true},
    image : [{type: String, required:true}],
    price: {type: Number ,required: true},
    description:{type:String , required:false},
    category:[{type: mongoose.Schema.ObjectId ,ref:"CategoryModel" ,required:true}],
    piece:{type:Number , required:true},
    comments:[{type:String}],
},{timestamps: true});

module.exports = mongoose.model("ProductModel",Product,"products")