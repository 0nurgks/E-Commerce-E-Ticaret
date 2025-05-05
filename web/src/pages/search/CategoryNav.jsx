
import React, { useEffect, useState } from 'react'
import {categoryLink} from "../../utils";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setClicked } from '../../redux/clickedSlice.ts';
import {useCategory} from "../../fetch/CategoryFetch.jsx"
import { useSelector } from 'react-redux';
const CategoryNav = () => {
  const dispatch = useDispatch();
  const category = useSelector((state)=> state.category.value)
  const nav = useNavigate();
  useCategory();


  return (
    <div className='flex-col sticky top-40 my-5 py-5 mr-5 pr-5'>
      {category.map((ob,index)=>(
        <div key={index}>
          <button></button>
        <table>
        <tbody>
          <tr>
            <td>
              <a href="" onClick={()=>(nav('/search?query='+ob.name)&&dispatch(setClicked(0)))} className='!no-underline ! !text-black w-md h-md'>{ob.name}</a>
            </td>
          </tr>
          </tbody>
        </table>
        </div>
      ))}
      <button onClick={()=>dispatch(setClicked(1))}>Tüm ürünler</button>
    </div>
  )
}

export default CategoryNav