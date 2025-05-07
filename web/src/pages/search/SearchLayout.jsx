
import React, { useEffect, useState } from 'react'
import Search from './Search'
import CategoryNav from "./CategoryNav";
import TopNav from '../TopNav';
import BotNav from "../BotNav";
import Interested from "../Interested";
const SearchLayout = () => {
  

  return (
    <div className='flex flex-1 flex-col'>
      <TopNav/>
    <div className='flex flex-1 flex-row justify-start mx-5 '>
      <CategoryNav ></CategoryNav>
      <Search ></Search>
    </div>
    <Interested/>
    <BotNav/>
    </div>
  )
}

export default SearchLayout