const FavModel = require("../models/FavModel");


module.exports.getFav=async(req,res)=>{
try {
    const user = req.user;
    const fav = awaitFavModel.find({user:user});
    if(!fav){ return res.status(404).json({message:"Favoriler boş"});}
    res.status(200).json({message:"favorileriniz"},fav);


} catch (error) {
    res.status(500).json({message:"connection error on server"});

}

}

module.exports.addFav = async(req,res)=>{
try {
    const user = req.user;
const product = req.body.product;
if(!user||!product){return res.status(404).json({message:"istek alınamadı"});}

await FavModel.create({user:user, product:product});
res.status(202).json({message:"Ürün favorilere eklendi"});


} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}