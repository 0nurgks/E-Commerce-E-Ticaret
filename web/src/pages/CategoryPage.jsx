import React from 'react'
import {categoryLink,productLink} from "../utils";
import ProductCard from '../components/ProductCard';

const CategoryPage = async() => {

    const categories = fetch(categoryLink,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        },
        body:{}
    })
    const products = fetch(productLink,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        },
        body:{}
    })

  return (
    <div>
      {categories.map((key,index)=>{
       <ProductCard/>
      })}
    </div>
  )
}

export default CategoryPage
