const BasketModel = require("../models/BasketModel");


module.exports.getBasket=async(req,res)=>{

try {
    const userID = req.userID;
    const basket = await BasketModel.find({user:userID});
    if(!basket){return res.status(404).json({message:"sepet boş"});}    
    res.status(200).json({message:"sepetiniz"},sepet);
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}


//post
module.exports.addBasket = async(req,res)=>{
try {
    const userID = req.userID;
const product = req.product;
if(!user||!product){return res.status(404).json({message:"istek alınamadı"});}

await BasketModel.create({user:userID, product:product});
res.status(202).json({message:"Ürün sepete eklendi"});



} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}
