import React, { useEffect, useState } from 'react'
import {messageLink} from "../../utils";


const AdminMessage = () => {

    const [text,setText] = useState();
    const [receiver,setReceiver] = useState();

    const getMessages = async () => {
        try {
          const token = localStorage.getItem("AccessToken"); 
          const response = await fetch(messageLink, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, 
            },
          }); }
        catch(err){
                console.log("fetch error")
            }
    }

    const addMessages = async()=>{
                //text , receiver ,    token
       
        try {
            const token = localStorage.getItem("AccessToken");
            const response = await fetch(messageLink, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`, 
                },
                body:{text,receiver}
              }); 
        } catch (error) {
            console.log("fetch error")
        }

            }

  return (
    <div className='flex flex-1 flex-row items-center justify-center'>
      <div></div>
      <div>
        <form method='POST' onSubmit={()=>addMessages} className='flex flex-1 flex-col'>
        <p>Alıcı gir</p>
        <input type="text" onChange={(e)=>setReceiver(e.target.value)} className='border-1 border-black' />
        <p>Text Gir</p>
        <input type="text" onChange={(e)=>setText(e.target.value)} className='border-1 border-black' />
        <button type='submit' className='flex flex-1 my-1 justify-end'>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default AdminMessage
