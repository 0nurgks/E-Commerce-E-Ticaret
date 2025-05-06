const FavModel = require("../models/FavModel");
const ProductModel = require("../models/ProductModel");


module.exports.getFav=async(req,res)=>{
try {
    const userID = req.userID;
    const fav = await FavModel.find({user:userID}).populate("product").then(data => data.filter(f => f.product && f.product.length > 0));
    if(fav.length === 0){ return res.status(404).json({message:"Favoriler boş"});}
    return res.status(200).json({fav});


} catch (error) {
    return res.status(500).json({message:"connection error on server"});

}

}

module.exports.addFav = async(req,res)=>{
try {
    const userID = req.userID;
const product = req.body.product;
if(!userID||!product){return res.status(404).json({message:"istek alınamadı"});}
const productObject = await ProductModel.findOne({_id:product})
await FavModel.create({user:userID, product:productObject});
return res.status(202).json({message:"Ürün favorilere eklendi"});


} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}

module.exports.removeFromFav = async(req,res)=>{
    try {
        const userID = req.userID;
    const product = req.body.product;
    if(!userID||!product){return res.status(404).json({message:"istek alınamadı"});}
    const productName = await ProductModel.find({_id:product})
    await FavModel.deleteOne({product:productName});
    res.status(202).json({message:"Ürün favorilerden çıkarıldı"});
    
    
    
    } catch (error) {
        res.status(500).json({message:"connection error on server"});
    }
    }
    