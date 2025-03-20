import React, { useState } from 'react'
import { categoryLink, productLink } from '../../utils'
import CategoryPicker from "../../components/admin/CategoryPicker";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProduct = () => {

  const nav = useNavigate();

    const [selectedCategory,setSelectedCategory] = useState();
  

  const [name,setName] = useState();
  const [categories,setCategories] = useState([]);
  const [image,setImage] = useState();
  const [price,setPrice] = useState();
  const [description,setDescription] = useState();
  const [piece,setPiece] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // İlk seçilen dosyayı al
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Dosyayı Base64 formatına çevir
      reader.onloadend = () => {
        setImage(reader.result); // Base64 verisini state'e kaydet
      };
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await fetch(productLink,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,image,price,description,selectedCategory,piece})
    }).then((response)=>response.json()).then((response)=> response.ok?alert("Ürün Kaydedildi"):alert("Ürün Kaydedilemedi")).catch(console.log("fetch başarısız"))
    
  }

 useEffect(()=>{
  fetch(categoryLink,{
      method:"GET",
      headers:{"Content-Type":"application/json"},
    }).then((response)=>response.json()).then((categories)=>setCategories(categories.categories)).catch((error)=>console.log("fetch hatası"))
    
 
  },[])
 



  return (
    <div className='flex flex-1 justify-end '>
      <button onClick={()=>nav("/admin")} className='absolute my-0'>geri</button>
      <div className='flex flex-1 '>
      <form method="submit" onSubmit={(e)=>handleSubmit(e)} className='flex flex-1 flex-col justify-center items-center '>
      <input type="text" placeholder='Ürün adı' onChange={(e)=>setName(e.target.value)} className='my-3'/>
     <div className='my-3'>
     <p>Görsel Seç</p>
     <input type="file" accept="image/*" onChange={(e)=>handleImageChange(e)} />
     {image && <img src={image} alt="Seçilen görsel" width="100" />} {/* Önizleme */}
     </div>
     <input type="text" placeholder='Ürün fiyatı' onChange={(e)=>setPrice(e.target.value)} className='my-3'/>
     <textarea type="text" placeholder='ürün açıklama' onChange={(e)=>setDescription(e.target.value)}/>
     <div>      <CategoryPicker   setSelectedCategory={setSelectedCategory}  selectedCategory={selectedCategory} categories={categories}/>
     </div>
     <input type="text" placeholder='Adet' onChange={(e)=>setPiece(e.target.value)}/>
     <button type='submit' >gönder</button>
   </form>
      </div>
    </div>
  )
}

export default AdminProduct
