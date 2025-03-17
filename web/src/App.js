import { BrowserRouter, Routes, Route } from "react-router";
import BottomNav from "./pages/BottomNav.jsx";
import HomeContainer from "./pages/containers/HomeContainer.jsx";

function App() {
  return (
    
       <BrowserRouter>
       
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
