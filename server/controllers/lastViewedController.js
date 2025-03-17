const LastViewedModel =require("../models/LastViewedModel");

module.exports.getLastViewed = async(req,res)=>{
try {
    const user = req.user;
    const lastViewed = await LastViewedModel.find({user:user});
    if(!lastViewed){return res.status(404).json({message:"Göz atılanlar boş"});}
    res.status(200).json({message:"Göz atılanlar"},lastViewed);


} catch (error) {
    res.status(500).json({message:"connection error on server"});
    
}

}