import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const CategoryTab = () => {
  return (


    <div className='flex flex-row justify-start align-center '>
        
        <Dropdown className='flex align-self-center'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="flex !bg-transparent !border-none !text-red-500 !opacity-50 !h-5 !py-0 !my-0 !mx-0 !text-nowrap ">
       Tüm Kategoriler
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </div>
  )
}

export default CategoryTab
