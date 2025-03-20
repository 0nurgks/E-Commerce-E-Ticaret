import React, { useEffect, useState } from 'react'
import CategoryPicker from '../../components/admin/CategoryPicker'
import { useNavigate } from 'react-router-dom';
import { categoryLink } from '../../utils';
const AdminCategory = () => {
  const [categoryName,setCategoryName] = useState();
  const [selectedCategory,setSelectedCategory] = useState();
  const [categories,setCategories] = useState();
  const nav = useNavigate();

  useEffect(()=>{
    fetch(categoryLink,
    { 
      method:"GET",
      headers:{"Content-Type":"application/json"},
    }
    ).then((response)=>response.json())
    .then((data)=>setCategories(data.categories))
    .catch(console.log("fetch error"));

  }, [0]);
  const handleSubmit=async(e)=>{
      e.preventDefault();

      const response = await fetch(categoryLink,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({categoryName})
      })
        const data = response.json();
        data.ok?console.log("Kayır başarılı"):console.log("Kayıt başarısız");
    }
  
    const handleDelete = async (e) => {
      e.preventDefault();
    
      await fetch(categoryLink, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({selectedCategory})
      })
        .then((response) => response.json().then((data) => ({ ok: response.ok, data }))) // JSON'u parse et
        .then(({ ok, data }) => {
          if (ok) {
            alert("Eleman Silindi");
          } else {
            alert("Eleman silinemedi");
          }
        })
        .catch((error) => {
          console.error("Delete Error:", error);
          alert("Bir hata oluştu");
        });
    };
    

  return (
    <div className='flex flex-1 '>
      <button className=' absolute  my-0 right-5' onClick={()=>nav("/admin")}>geri</button>
      <div className='fixed top-20 left-20 '>
      <p className='my-2'>Kategoriler</p>
      <div className='flex flex-1 flex-row'>
      <CategoryPicker   setSelectedCategory={setSelectedCategory}  selectedCategory={selectedCategory} categories={categories}/>
      <button onClick={(e)=>handleDelete(e)} className='mx-5 border-s'>sil</button>
      </div>
        </div>  
    
      <form method='submit' onSubmit={(e)=>handleSubmit(e)} className='flex flex-1 justify-center items-center'>
      <input type="text" placeholder='kategori adı' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
      <button type='submit'>Ekle</button>
      </form>
    </div>
  )
}

export default AdminCategory
