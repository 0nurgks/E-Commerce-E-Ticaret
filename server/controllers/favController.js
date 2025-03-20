const FavModel = require("../models/FavModel");
const ProductModel = require("../models/ProductModel");


module.exports.getFav=async(req,res)=>{
try {
    const userID = req.userID;
    const fav = await FavModel.find({user:userID});
    if(!fav){ return res.status(404).json({message:"Favoriler boş"});}
    res.status(200).json({message:"favorileriniz"},fav);


} catch (error) {
    res.status(500).json({message:"connection error on server"});

}

}

module.exports.addFav = async(req,res)=>{
try {
    const userID = req.userID;
const product = req.body.product;
if(!userID||!product){return res.status(404).json({message:"istek alınamadı"});}
const productName = await ProductModel.find({name:product})
await FavModel.create({user:userID, product:productName});
res.status(202).json({message:"Ürün favorilere eklendi"});


} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}