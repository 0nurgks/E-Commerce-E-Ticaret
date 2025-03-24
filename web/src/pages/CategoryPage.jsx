import React from 'react'
import {categoryLink,productLink} from "../utils";
import ProductSlider from '../components/ProductSlider';

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
       <ProductSlider/>
      })}
    </div>
  )
}

export default CategoryPage
