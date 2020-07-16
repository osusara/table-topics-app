import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid={true} className="bg-white py-3 shadow-sm">
      <Row>
        <Col md="4" xs="12">
          <h2>Column 1</h2>
          <p>
            Developers are finding new tools that help them optimize for
            performance without compromising on user experience. And digital
            agencies, more than anyone, are on the forefront of this website
            revolution.
          </p>
        </Col>
        <Col md="4" xs="12">
          <h2>Column 2</h2>
          <p>
            Developers are finding new tools that help them optimize for
            performance without compromising on user experience. And digital
            agencies, more than anyone, are on the forefront of this website
            revolution.
          </p>
        </Col>
        <Col md="4" xs="12">
          <h2>Column 3</h2>
          <p>
            Developers are finding new tools that help them optimize for
            performance without compromising on user experience. And digital
            agencies, more than anyone, are on the forefront of this website
            revolution.
          </p>
        </Col>
      </Row>
      <hr className="bg-light" />
      <Row>
        <Col className="text-center">
          © {new Date().getFullYear()}, Built by Xians
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
