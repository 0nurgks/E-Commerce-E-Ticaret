const BasketModel = require("../models/BasketModel");
const ProductModel = require("../models/ProductModel");


module.exports.getBasket=async(req,res)=>{

try {
    const userID = req.userID;
    const basket = await BasketModel.find({ user: userID }).populate("product");
   
    if (!basket || basket.length === 0) {
        
        return res.status(404).json({ message: "Sepet boş" });
      }
      else{
        return res.status(200).json({basket})
      }
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}



//post
module.exports.addBasket = async(req,res)=>{
try {
    const userID = req.userID;
const product = req.body.product;
if(!userID||!product){return res.status(404).json({message:"istek alınamadı"});}
const productObject = await ProductModel.findOne({_id:product})
await BasketModel.create({user:userID, product:productObject});
res.status(202).json({message:"Ürün sepete eklendi"});



} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}

module.exports.removeFromBasket = async(req,res)=>{
    try {
        const userID = req.userID;
    const product = req.body.product;
    if(!userID||!product){return res.status(404).json({message:"istek alınamadı"});}
    const productName = await ProductModel.find({_id:product})
    await BasketModel.deleteOne({product:productName});
    res.status(202).json({message:"Ürün sepetten çıkarıldı"});
    
    
    
    } catch (error) {
        res.status(500).json({message:"connection error on server"});
    }
    }
    