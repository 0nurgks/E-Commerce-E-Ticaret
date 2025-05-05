import React, { useEffect, useState } from 'react'
import ProductCardPage from './ProductCardPage'
import { useSearchParams } from 'react-router-dom'
import { getProductByIdLink } from '../../utils';

export const Layout = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get("query");
  
  const [product,setProduct]= useState({});
  useEffect(()=>{
    fetch(`${getProductByIdLink}?query=${id}`,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then((response)=>response.json())
    .then((data)=>setProduct(data.obj))
    .catch((err)=>console.log(err));
  
},[])

  return (
    <div>
      <ProductCardPage product={product}/>
    </div>
  )
}


