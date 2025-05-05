import { useEffect } from "react";
import { categoryLink } from "../utils";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice.ts";


export const useCategory = ()=>{    
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(categoryLink, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
            .then((data)=>dispatch(setCategory(data.categories)))
          .catch((error) => console.error("Hata:", error));
      }, []);
}