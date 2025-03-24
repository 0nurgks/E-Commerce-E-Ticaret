const mongoose= require("mongoose");
const ProductModel = require("../models/ProductModel");
const CategoryModel = require("../models/CategoryModel");

//admin
module.exports.addProduct = async(req,res)=>{
try {
    
    const {name,header,image,price,description,category,piece} = req.body;
    const categoryExist = await CategoryModel.findOne({name:category});

if(!categoryExist){return res.status(404).json({message:"Kategori bulunamadı"})}

const productExist = await ProductModel.create({name:name,header:header,image:image,price:price,description:description,category:categoryExist._id,piece:piece});

    if(!productExist){return res.status(400).json({message:"Ürün kaydedilemedi"})}
    return res.status(202).json({message:"Ürün Kaydedildi"});

} catch (error) {
    res.status(500).json({message:"connection error on server"});
}

}

module.exports.getAllProducts = async(req,res)=>{
    try {
        const products = await ProductModel.find();
        if(!products){return res.status(404).json({message:"Ürün Yok"});}
        return res.status(200).json({message:"ürünler",products});
    } catch (error) {
        res.status(500).json({message:"connection error on server"});
    }
}


module.exports.deleteProduct=async(req,res)=>{
    try {
        const {id} = req.body;
        if(!id){return res.status(404).json({message:"istek alınamadı"});}
        await ProductModel.findOneAndDelete({_id:id});
        res.status(200).json({message:"Eleman silindi"});

    } catch (error) {
        res.status(500).json({message:"connection error on server"});

    }
}

module.exports.addCommentToProduct=async(req,res)=>{

}
module.exports.getProductByCategory=async(req,res)=>{}
