import { BrowserRouter, Routes, Route } from "react-router";
import HomeContainer from "./pages/containers/HomeContainer.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Container from "./pages/admin/Container.jsx";
import AdminMessage from "./pages/admin/AdminMessage.jsx";
import AdminProduct from "./pages/admin/AdminProduct.jsx";
import AdminCategory from "./pages/admin/AdminCategory.jsx";
import AdminMyProducts from "./pages/admin/AdminMyProducts.jsx";
import SearchLayout from "./pages/search/SearchLayout.jsx";
import{Layout as Product_Layout} from "./pages/card/Layout.jsx";
import BasketPage from "./pages/basket/BasketPage.jsx";
import FavPage from "./pages/fav/FavPage.jsx";
const useTokenRoute = ()=>{
  const nav = useNavigate();
  const AccessToken = localStorage.getItem("AccessToken");
    useEffect(()=>{
      if(!AccessToken){
        nav("/login");
      }
    },[])
}

function App() {
 

  return (
    <div className="flex h-screen w-screen">
       <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/search" element={<SearchLayout/>} />
      <Route path="/admin" element={<Container/>} />
      <Route path="/admin/message" element={<AdminMessage/>} />
      <Route path="/admin/product" element={<AdminProduct/>} />
      <Route path="/admin/category" element={<AdminCategory/>} />
      <Route path="/admin/myproducts" element={<AdminMyProducts/>} />
      <Route path="/product" element={<Product_Layout/>} />
      <Route path="/basket" element={<BasketPage/>} />
      <Route path="/basket" element={<BasketPage/>} />
      <Route path="/fav" element={<FavPage/>} />



    </Routes>
  </BrowserRouter>
  </div>
  );
 
}

export default App;
