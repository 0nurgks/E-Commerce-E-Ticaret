import { useEffect } from "react";
import { addBasketLink } from "../utils";
import { json } from "stream/consumers";


export const addBasket = (product) =>{

    useEffect(async()=>{
        fetch(addBasketLink,{
            method:"POST",
            headers:{"content/type":"application/json"},
            body:JSON.stringify({product})
        }
        );
        const data = await response.json();
        response.ok?alert("Sepete Eklendi"):alert("Sepete Eklenemedi");
       
    },[])
}