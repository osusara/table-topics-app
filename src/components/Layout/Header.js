import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

const Header = ({ logout, authId }) => {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm">
      <Navbar.Brand href="/">Table Topics Master</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {authId ? (
            <Button
              variant="link"
              onClick={(e) => logout()}
              className="text-dark"
            >
              <i className="fas fa-power-off"></i>
            </Button>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;