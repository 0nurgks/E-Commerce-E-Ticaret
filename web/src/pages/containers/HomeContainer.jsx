import React from 'react'
import TopNav from '../TopNav';
import CategoryTab from '../../components/CategoryTab';
import ProductSlider from "../../components/ProductSlider";
import Search from '../search/Search';
import CardSlider from '../../components/CardSlider';
import BotNav from '../BotNav';
import Interested from '../Interested';
const HomeContainer = () => {
  return (
    <div >
    <TopNav/>
    <div></div>
    <div className='container flex flex-col justify-end'> </div>
    <div className='container '> <CategoryTab/></div>
    <CardSlider></CardSlider>
    <Interested></Interested>
    <BotNav></BotNav>
    </div>
  )
}

export default HomeContainer
