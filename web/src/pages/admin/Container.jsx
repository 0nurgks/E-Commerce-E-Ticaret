import React from 'react'
import { useNavigate } from 'react-router-dom'

const Container = () => {
    const nav = useNavigate();

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <button onClick={()=>nav("/admin/message")} className='my-1'>Mesajlarım</button>
      <button onClick={()=>nav("/admin/product")} className='my-1'>Ürün Ekle</button>
      <button onClick={()=>nav("/admin/category")} className='my-1'>Kategori Ekle</button>
    </div>
  )
}

export default Container
