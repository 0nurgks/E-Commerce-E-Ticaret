const CategoryModel = require("../models/CategoryModel");


const getCategories=async(req,res)=>{
try {
    const categories =await CategoryModel.find();

    if(!categories){return res.status(404).json({message:"kategoriler bulunamadı"})}
    res.status(200).json({message:"Kategoriler alındı",categories})
} catch (error) {
    res.status(500).json({message:"connection error on server"})
}
    
}