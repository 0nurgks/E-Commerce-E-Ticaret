import React from 'react'
import { productLink } from '../../utils';
import { useState,useEffect } from 'react';
import ProductCard from '../../components/admin/ProductCard';
const Search = () => {

  const [data,setData] = useState([]);

   useEffect(() => {
      fetch(productLink, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => setData(data.products))
        .catch((error) => console.error("Hata:", error));
    }, []);
    

  return (
    <div className='flex flex-1 left-50 my-20'>
        {data.map((obj,index)=>(
          <div className='px-5'>
               <ProductCard key={index} name={obj.name} header={obj.header} image={obj.image} price={obj.price} />
             
          </div>
            ))}
    </div>
  )
}

export default Search
