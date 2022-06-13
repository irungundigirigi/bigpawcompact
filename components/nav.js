import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';


function Nav() {
  return (
    <div>
         <Navbar bg="light" variant="light">
            <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Airport Transfers</Nav.Link>
              <Nav.Link href="#pricing">Nairobi Excursions</Nav.Link>
              <Nav.Link href="#pricing">Nairobi Car Hires</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            </Container>
          </Navbar>

    </div>
  )
}

export default Nav