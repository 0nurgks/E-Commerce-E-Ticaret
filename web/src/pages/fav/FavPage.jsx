import React from "react";
import { useGetFav,GetFav } from "../../fetch/FavFetch";
import { useSelector } from "react-redux";
import {RemoveFromFav} from "../../fetch/FavFetch";
import { useNavigate } from "react-router-dom";
import TopNav from "../TopNav.jsx";
const FavPage = () => {
    useGetFav(); 

  const fav = useSelector((state) => state.fav.value);

 const nav = useNavigate();

  
  return (
    <div className="flex flex-1 flex-col">
    <TopNav></TopNav>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Favorilerim</h2>

        {(!fav || fav.length === 0) ? (
          <p className="text-center text-gray-500">Favoriler boş</p>
        ) : (
          <div className="space-y-4">
            {fav.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
              >
              
                {item.product.map((product) => (
                  <div key={product._id} className="flex space-x-4">
                    <div>
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-800">{product.name}</p>
                      <p className="text-gray-600 text-sm mt-1">{product.price} ₺</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">
                       <button onClick={()=>RemoveFromFav(product._id)&&GetFav()}>Çıkar</button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>);
};

export default FavPage;
