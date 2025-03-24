import React from 'react'
import BottomNav from "../BottomNav";
import CategoryTab from '../../components/CategoryTab';
import ProductSlider from "../../components/ProductSlider";

const HomeContainer = () => {
  return (
    <div >
    <BottomNav/>
    <div></div>
    <div className='container flex flex-col justify-end'> </div>
    <div className='container '> <CategoryTab/></div>
    </div>
  )
}

export default HomeContainer
