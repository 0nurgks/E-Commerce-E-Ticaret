import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { productLink } from '../../utils';
import { useState,useEffect } from 'react';
import ProductCard from '../../components/admin/ProductCard';
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../../redux/productSlice.ts';
import {useProduct} from "../../fetch/ProductsFetch";
import { useFilteredProducts } from '../../fetch/ProductsFetch';
import { useSearchParams } from 'react-router-dom';
const Search = () => {
  const navigate = useNavigate();
  const clicked = useSelector((state)=>state.clicked.value);


  const [SearchParams]=useSearchParams();
  const value = SearchParams.get("query");
  useFilteredProducts(value);
   useProduct();  
  const filteredProducts = useSelector((state) => state.filteredProduct.value);
  const products = useSelector((state) => state.product.value);

  return (
    <div className='flex flex-1 left-50 my-20'>
    {clicked== !1 && Array.isArray(filteredProducts)
      ? filteredProducts.map((obj, index) => (
          <div className='px-5' key={index} onClick={() => navigate(`/product?query=${obj._id}`)} style={{ cursor: 'pointer' }}>
      <ProductCard  name={obj.name} header={obj.header} image={obj.image} price={obj.price} />
          </div>
        ))
      : products.map((obj, index) => (
          <div className='px-5' key={index}  style={{ cursor: 'pointer' }}>
            <div onClick={() => navigate(`/product?query=${obj._id}`)}>
            <ProductCard  name={obj.name} header={obj.header} image={obj.image} price={obj.price}  />
            </div>
          </div>
        ))
    }
  </div>
  )
}

export default Search