import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = ({ logout, authId }) => {
  return (
    <Navbar bg="white" variant="light" className="shadow-sm">
      <Navbar.Brand href="/">Table Topics Master</Navbar.Brand>
      <Nav className="ml-auto">
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
    </Navbar>
  );
};

export default Header;
