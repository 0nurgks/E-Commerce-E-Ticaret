import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useCategory} from "../fetch/CategoryFetch"
import { useNavigate } from 'react-router-dom';
import { setClicked } from '../redux/clickedSlice.ts';
const CategoryTab = () => {
  useCategory();
    const categories = useSelector((state)=> state.category.value)
    const nav = useNavigate();
    const dispatch= useDispatch();
  return (
    <div className='flex  flex-row justify-start align-center  '>
        {categories.map((obj,index)=>(
            <div key={index} className='mx-5'>
                      <button></button>
                    <table>
                    <tbody>
                      <tr>
                        <td>
                          <a href="" onClick={()=>(nav('/search?query='+obj.name)&&dispatch(setClicked(0)))} className='!no-underline ! !text-black w-md h-md'>{obj.name}</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    </div>
          
        ))}
        
   
    </div>
  )
}

export default CategoryTab
