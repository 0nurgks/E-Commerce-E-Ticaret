import React from 'react'
import Search from './Search'
import CategoryNav from "./CategoryNav";


const SearchLayout = () => {
  return (
    <div className='flex flex-1 flex-row justify-start mx-5 '>
      <CategoryNav ></CategoryNav>
      <Search></Search>
    </div>
  )
}

export default SearchLayout
