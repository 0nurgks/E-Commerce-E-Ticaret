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
      <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail'/>
      <input type="text" onChange={(e)=>setPassword(e.target.value)}placeholder='Password'/>
      <div className='flex flex-row my-2 '>
      <button type='submit' className='flex mx-2'>Kayıt Ol</button>
      <button onClick={()=>nav("/login")}>Giriş Yap</button>
      </div>
    </form>
   </div>
  )
}

export default Register
