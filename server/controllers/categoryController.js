const CategoryModel = require("../models/CategoryModel");


 module.exports.getCategories=async(req,res)=>{
try {
    const categories =await CategoryModel.find();

    if(!categories){return res.status(404).json({message:"kategoriler bulunamadı"})}
    res.status(200).json({message:"Kategoriler alındı",categories})
} catch (error) {
    res.status(500).json({message:"connection error on server"})
}
    
}

module.exports.addCategory=async(req,res)=>{
try {
    const {categoryName} = req.body;

    const categoryExist = await CategoryModel.create({
        name:categoryName
    });
    categoryExist?res.status(202).json({message:"Kategori Oluşturuldu"}):res.status(400);
} catch (error) {
    res.status(500).json({message:"connection error on server"});
}
}

module.exports.deleteCategory = async(req,res)=>{
   
        
try {

    const {selectedCategory} = req.body;
  
    await CategoryModel.findOneAndDelete({name:selectedCategory});
    res.status(200).json({message:"Eleman silindi"});
}
    
 catch (error) {
        res.status(500).json({message:"connection error on server"});
}
}