import React, { useEffect, useState } from 'react'
import {messageLink} from "../../utils";
import Message from "../../components/Message";
import { data } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminMessage = () => {
    const nav = useNavigate();
    const [text,setText] = useState();
    const [receiver,setReceiver] = useState();
  
    const [messages,setMessages] = useState();

    const getMessages = async () => {
        try {
          const token = localStorage.getItem("AccessToken"); 
          const response = await fetch(messageLink, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, 
            },
          });
          const data = response.json();
          setMessages(data);
        }
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
    
    <div className='relative  flex flex-1 justify-end'>
      <button onClick={()=>nav("../admin")}   className='absolute my-0 mx-5'>geri</button>
         <div className='flex flex-1 flex-row items-center justify-around'> 
        <div>
        <p>Gönderilen Mesaj</p>
        {messages?.messageSended.map((key,index)=>(
            <Message key={index} title={key.receiver} description={key.text}  />
        ))}
      </div>
      <div>
        <p>Alınan Mesaj</p>
        {messages?.messageReceived.map((key,index)=>(
            <Message key={index} title={key.sender} description={key.text}  />
        ))}
      </div>
      <div>
        <form method='POST' onSubmit={()=>addMessages} className='flex flex-1 flex-col'>
        <p>Alıcı gir</p>
        <input type="text" onChange={(e)=>setReceiver(e.target.value)} className='border-1 border-black' />
        <p>Text Gir</p>
        <textarea type="text" onChange={(e)=>setText(e.target.value)} className='border-1 border-black ' />
        <button type='submit' className='flex flex-1 my-1 justify-end'>Gönder</button>
        </form>
      </div>



        </div>
     
    </div>
  )
}

export default AdminMessage
