import React from 'react'
import { useProduct } from '../fetch/ProductsFetch'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
const Interested = () => {
    const navigate = useNavigate();
    useProduct();
    const datas = useSelector((state)=>state.product.value)
  return (
    <div>
      {datas.slice(0,50).map((obj,index)=>(
        <div key={index} >
            <a className='!no-underline' href={`/product?query=${obj._id}`}>{obj?.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Interested
