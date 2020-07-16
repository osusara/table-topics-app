import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
      <Navbar expand="lg" bg="white" variant="light" className="shadow-sm">
        <Navbar.Brand href="/">Toastmasters</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;