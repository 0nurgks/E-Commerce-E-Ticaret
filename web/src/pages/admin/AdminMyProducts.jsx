import React, { useState } from 'react'
import ProductCard from "../../components/admin/ProductCard";
import { useEffect } from 'react';
import { productLink } from '../../utils';
const AdminMyProducts = () => {
    
    const [products,setProducts] = useState([]);

   
    const handleDelete=async(id)=>{
        const response = await fetch(productLink,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id})
        });
        response.ok?alert("ürün silindi"):alert("ürün silenemedi");
        fetchProducts();
    }
      
    const fetchProducts=()=>{
        fetch(productLink,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        }).then((response)=>response.json()).then((data)=>setProducts(data.products));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);

    

  return (
    <div>
      {products.map((product,index)=>(<div className='flex flex-1 flex-row '>
        <ProductCard key={index} name={product.name} header={product.header} image={product.image} price={product.price} />
        <button className='mx-3' onClick={()=>handleDelete(product._id)}>Sil</button>
        </div>
      ))}
    </div>
  )
}

export default AdminMyProducts
