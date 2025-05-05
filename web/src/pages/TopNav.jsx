import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav() {
  return (
    
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Nav className="flex flex-1 me-auto ">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Tüm Ürünler</Nav.Link>
        <Nav.Link href="#pricing">Destek</Nav.Link>
        <Nav.Link href="#pricing">Hakkımızda</Nav.Link>
      </Nav>
      <Nav className="me-auto justify-end">
        <Nav.Link href="/">Favoriler</Nav.Link>
        <Nav.Link href="/">Sepet</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default TopNav;