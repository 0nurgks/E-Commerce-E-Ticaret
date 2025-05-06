import { useEffect } from "react";
import { FavLink } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setFav } from "../redux/favSlice.ts";

export const useGetFav = () =>{
    const dispatch = useDispatch();
    
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch(FavLink, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          }
        })
          .then((res) => res.json())
          .then((data) => dispatch(setFav(data.fav)));
         
      }, []);
}
export const GetFav = () =>{
    const dispatch = useDispatch();

        const accessToken = localStorage.getItem("accessToken");
        fetch(FavLink, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          }
        })
          .then((res) => res.json())
          .then((data) => dispatch(setFav(data.fav)));

}


export const AddFav= (product) =>{

    
        const accessToken = localStorage.getItem("accessToken");
        fetch(FavLink,{
            method:"POST",
            headers:{"Content-Type":"application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body:JSON.stringify({product})
        }
        ).then((response)=> response.json())
        .then((data)=>data.ok?alert("Favorilere Eklendi"):<></>)
        .catch((err)=>alert("Favorilere Eklenemedi"));

}

export const RemoveFromFav = (product) =>{
    const accessToken = localStorage.getItem("accessToken");
        fetch(FavLink,{
            method:"DELETE",
            headers:{"Content-Type":"application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body:JSON.stringify({product})
        }
        ).then((response)=> response.json())
        .then((data)=>data.ok?alert("Favorilere çıkarıldı"):<></>)
        .catch((err)=>alert("Favorilerden çıkarma işlemi başarısız"));
        

}