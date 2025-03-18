import React from 'react'
import {loginLink} from "../../utils";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const nav = useNavigate();

const handleSubmit=async(e) =>{
  e.preventDefault();

const response = await fetch(loginLink, {
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({username,password})
});
const data = await response.json();
 if(response.ok){
  nav("/");
  await localStorage.setItem(data.AccessToken);
  document.cookie = `RefreshToken=${data.RefreshToken}; path=/`; }

}

  return (
    <div className='flex flex-1 items-center justify-center'>
      <form method='POST' className='flex flex-column' onSubmit={handleSubmit}>
        <p className='text-m my-10 items-center justify-center'>Demo Ticaret</p>
        <input type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='Kullanıcı adı' className='my-3'></input>
        <input type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='Şifre'></input>
       <div className='flex my-2'>
       <button type='submit' className='border-1 my-2 mx-2' >Giriş </button>
       <button onClick={()=>nav("/register")}>Kayıt Ol</button>
       </div>
      </form>
    </div>
  )
}

export default Login;
