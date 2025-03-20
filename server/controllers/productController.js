const mongoose= require("mongoose");
const ProductModel = require("../models/ProductModel");
const CategoryModel = require("../models/CategoryModel");

//admin
module.exports.addProduct = async(req,res)=>{
try {
    
    const [image,price,description,category,piece] = req.body;
    const categoryName = await CategoryModel.find({name:category});

if(req.body.lenght==0){return res.status(404).json({message:"istek alınamadı"})}
if(!categoryName){return res.status(404).json({message:"Kategori bulunamadı"})}

const productExist = await ProductModel.create({image:image,price:price,description:description,category:categoryName});

    if(!productExist){return res.status(400).json({message:"Ürün kaydedilemedi"})}
    return res.status(202).json({message:"Ürün Kaydedildi"})
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}

}

module.exports.getAllProduct = async(req,res)=>{
    try {
        const products = ProductModel.find();
        if(!products){return res.status(404).json({message:"Ürün Yok"});}
        return res.status(200).json({message:"ürünler",products});
    } catch (error) {
        res.status(500).json({message:"connection error on server"});
    }
}



module.exports.addCommentToProduct=async(req,res)=>{

}
module.exports.getProductByCategory=async(req,res)=>{}
