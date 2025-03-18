import React, { useState } from 'react';
import {registerLink} from "../../utils";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const nav = useNavigate();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await fetch(registerLink,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,email,password})
      });
      const data = await response.json();
  }

  return (
   <div className='flex flex-1 items-center justify-center'>
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col">
      <p>Demo Ticaret</p>
      <input type="text" onClick={(e)=>setUsername(e)} placeholder='Username'/>
      <input type="text" onClick={(e)=>setEmail(e)} placeholder='E-mail'/>
      <input type="text" onClick={(e)=>setPassword(e)}placeholder='Password'/>
      <div className='flex flex-row my-2 '>
      <button type='submit' className='flex mx-2'>Kayıt Ol</button>
      <button onClick={()=>nav("/login")}>Giriş Yap</button>
      </div>
    </form>
   </div>
  )
}

export default Register
