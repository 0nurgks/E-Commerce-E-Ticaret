import { BrowserRouter, Routes, Route } from "react-router";
import BottomNav from "./pages/BottomNav.jsx";
import HomeContainer from "./pages/containers/HomeContainer.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Container from "./pages/admin/Container.jsx";
import AdminMessage from "./pages/admin/AdminMessage.jsx";

const TokenRoute = ()=>{
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
    <div className="flex h-screen">
       <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/admin" element={<Container/>} />
      <Route path="/admin/message" element={<AdminMessage/>} />

    </Routes>
  </BrowserRouter>
  </div>
  );
 
}

export default App;
