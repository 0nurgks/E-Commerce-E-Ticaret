import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ico from"./basket/shopping-basket-32.ico";
import { useSelector } from 'react-redux';
import { useGetBasket } from '../fetch/BasketFetch';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function TopNav() {
  useGetBasket();
  const basketElement = useSelector((state)=>state.basket.value);
  const basketElementNumber = basketElement?.length;
  const nav = useNavigate();
  return (
    
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Nav className="flex flex-1 me-auto ">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Tüm Ürünler</Nav.Link>
        <Nav.Link href="help">Destek</Nav.Link>
  
      </Nav>
      <Nav className="me-auto justify-end">
        <Nav.Link href="/fav">Favoriler</Nav.Link>
        <Nav.Link href="/basket">Sepet</Nav.Link>
        <img src={ico} onClick={()=>nav("/basket")}/>
        <p>{basketElementNumber}</p>
      </Nav>
      <Nav.Link href="/" className='flex mx-5'>Siparişler</Nav.Link>
      <Nav.Link href="/login" className='flex mx-5'>Giriş Yap</Nav.Link>
    </Container>
  </Navbar>
  );
}

export default TopNav;