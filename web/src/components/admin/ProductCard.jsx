import React from 'react'

const ProductCard= ({name,header,image,price}) => {

    



  return (
    <a href='' className='!no-underline ! !text-black w-md h-md' >
      <div>
        <img src={image} alt=""   className="w-[168px] h-[210px] object-cover" />
      </div>
      <div>
        <p className='bold'>{name}</p>
        <p>{header}</p>
        <p>{price} TL</p>
      </div>
    </a>
  )
}

export default ProductCard
