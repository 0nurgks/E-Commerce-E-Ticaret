import React from 'react'
import BottomNav from "../BottomNav";
import CategoryTab from '../../components/CategoryTab';
import ProductCard from "../../components/ProductCard";

const HomeContainer = () => {
  return (
    <div >
    <BottomNav/>
    <div></div>
    <div className='container flex flex-col justify-end'> <p>adsglsdh</p></div>
    <ProductCard/>
    <div className='container '> <CategoryTab/></div>
    </div>
  )
}

export default HomeContainer
