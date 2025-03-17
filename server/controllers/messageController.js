const MessageModel = require("../models/MessageModel");


module.exports.addMessage =async(req,res)=>{
const [text,receiver] = req.body;
const username = req.user.username;
try {
    if(!text||!username||!receiver){
        return res.status(404).json({message:"İstek alınamadı"});
    }
    
    MessageModel.create({text:text,username:username,receiver:receiver});
    res.status(202).json({message:"Mesaj gönderildi"});
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}

module.exports.getMessage=(req,res)=>{

const username = req.user.username;
try {
    if(!username){return res.status(404).json({message:"istek alınamadı"});}
   const usernameExist= MessageModel.find({username:username});

   if(!usernameExist){return res.status(404).json({message:"Mesaj bulunamadı"});}
   res.status(200).json({message:"mesajlar alındı"});
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}


}