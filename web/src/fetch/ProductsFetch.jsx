import { useDispatch } from 'react-redux';
import { productLink } from '../utils';
import {getProductByCategoryLink} from "../utils";
import { useEffect } from 'react';
import { setProduct } from '../redux/productSlice.ts'; 
import {setFilteredProduct} from '../redux/filteredProductSlice.ts';
import { getProductByIdLink } from '../utils';
export const useProduct= ()=>{
    const dispatch = useDispatch();

    useEffect(() => {
          fetch(productLink, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then((data)=>dispatch(setProduct(data.products)))
            .catch((error) => console.error("Hata:", error));
        }, []);
}


export const useFilteredProducts = (value)=>{
    const dispatch = useDispatch();

     useEffect(()=>{
        fetch(`${getProductByCategoryLink}?query=${value}`)
        .then((response)=>response.json())
        .then((data)=>dispatch(setFilteredProduct(data.products)));
      },[])
}

