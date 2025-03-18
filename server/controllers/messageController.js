const MessageModel = require("../models/MessageModel");
const UserModel = require("../models/UserModel");

module.exports.addMessage =async(req,res)=>{
const [text,receiver] = req.body;
const userID = req.userID;
try {
    if(!text||!userID||!receiver){
        return res.status(404).json({message:"İstek alınamadı"});
    }
    const user= UserModel.findOneById({userID});
    const username = user.username; 
    MessageModel.create({text:text,username:username,receiver:receiver});
    res.status(202).json({message:"Mesaj gönderildi"});
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}

module.exports.getMessage=(req,res)=>{


try {
    const userID = req.userID;
    const user = UserModel.findOneById({userID});
    const username = user.username;

    if(!username){return res.status(404).json({message:"istek alınamadı"});}
   const messageExist= MessageModel.find({username:username});

   if(!messageExist){return res.status(404).json({message:"Mesaj bulunamadı"});}
   res.status(200).json({message:"mesajlar alındı"},messageExist);
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}


}