import React from 'react'
import { AddBasket } from '../../fetch/BasketFetch';
import { AddFav } from '../../fetch/FavFetch';
const ProductCardPage = ({product}) => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

      {/* Ürün Görseli */}
      <div className="md:w-1/2">
        <div className="border rounded-2xl overflow-hidden shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-contain bg-gray-100"
          />
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="md:w-1/2 flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.header}</p>

          {/* Özellikler / Açıklama vs. */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <p>{product.description}</p>
            
          </ul>
       {/* Fiyat & Butonlar */}
<div className="space-y-4">
  <div className="text-sm text-gray-500">
    {product.piece > 0 ? `Stokta ${product.piece} adet var` : "Stokta yok"}
  </div>
  <div className="text-2xl font-bold text-green-600">{product.price} ₺</div>
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-xl transition"
  onClick={()=>AddBasket(product._id)}>
    Sepete Ekle
  </button>
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-xl transition"
  onClick={()=>AddFav(product._id)}>
    Favorilere Ekle
  </button>
</div>

{/* Yorumlar */}
<div className="mt-12 border-t pt-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Yorumlar</h2>
  {!Array.isArray(product.comments)||product.comments.length===0? (
    <p className="text-gray-500">Henüz yorum yapılmamış.</p>
  ) : (
    <ul className="space-y-4">
      {product.comments.map((comment, index) => (
        <li key={index} className="bg-gray-100 p-4 rounded-xl shadow-sm">
          {comment}
        </li>
      ))}
    </ul>
  )}
</div>

      </div>
    </div>
  </div>
</div>
);
};
  


export default ProductCardPage
