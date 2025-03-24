import React, { useEffect, useState } from 'react'
import {categoryLink} from "../../utils";
import { useNavigate } from 'react-router-dom';
const CategoryNav = () => {
  const [data,setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetch(categoryLink, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setData(data.categories))
      .catch((error) => console.error("Hata:", error));
  }, []);
    

  return (
    <div className='flex-col sticky top-40 my-5 py-5 mr-5 pr-5'>
      {data.map((ob,index)=>(
        <div key={index}>
          <button></button>
        <table>
        <tbody>
          <tr>
            <td>
              <a href="" onClick={()=>nav('/search/'+ob.name)} className='!no-underline ! !text-black w-md h-md'>{ob.name}</a>
            </td>
          </tr>
          </tbody>
        </table>
        </div>
      ))}
    </div>
  )
}

export default CategoryNav
