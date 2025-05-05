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
module.exports.getProductByCategory=async(req,res)=>{
    try {
        const {query} = req.query;
        if(!query){return  res.status(400).json({message:"query alınamadı"})}
            const category = await CategoryModel.findOne({name:query});
            if(!category){return res.status(404).json({message:"istek alınamadı"});}
            const products =   await ProductModel.find({category:category._id});
            if(!products){return res.status(404).json({message:"Ürünler bulunamadı"});}
            res.status(200).json({message:"Ürünler bulundu",products});

    } catch (error) {
        res.status(500).json({message:"connection error on server"});

    }
        
}



module.exports.getProductById = async (req, res) => {
  try {
    const { query } = req.query;

    // Geçerli bir ObjectId olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(query)) {
      return res.status(400).json({ message: "invalid id format" });
    }

    // ID'yi ObjectId'ye dönüştür
    const productId = new mongoose.Types.ObjectId(query);

    // MongoDB sorgusu
    const obj = await ProductModel.findOne({ _id: productId });

    if (!obj) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ obj });

  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ message: "server error", error: error.message });
  }
};
