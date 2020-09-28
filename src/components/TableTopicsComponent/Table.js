import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Table = ({ setNumber, setPage }) => {

  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  const onClick = (e) => {
    setNumber(e.target.innerHTML)
    setPage("view");
  };

  const setTopics = () => {
    setPage("set");
    setNumber(0);
  };

  return (
    <animated.div style={anim}>
      <Container className="my-5">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>
              <h2 className="text-center display-4">Select a Number</h2>
            </Card.Title>
            <Row className="mx-auto px-auto my-2 text-center">
              <Col md={1} className="d-none d-sm-flex"></Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  1
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  2
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  3
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  4
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  5
                </Button>
              </Col>
              <Col md={1} className="d-none d-sm-flex"></Col>
              <Col md={1} className="d-none d-sm-flex"></Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  6
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  7
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  8
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  9
                </Button>
              </Col>
              <Col md={2} xs={6} className="p-2">
                <Button
                  onClick={(e) => onClick(e)}
                  className="btn-light shadow-sm number-btn"
                >
                  10
                </Button>
              </Col>
              <Col md={1} className="d-none d-sm-flex"></Col>
            </Row>
            <div className="text-center mx-auto pt-4">
              <Button className="btn-dark mx-2" onClick={() => setTopics()}>
                Set Topics
              </Button>
              <Button
                className="btn-secondary mx-2"
                onClick={() => setPage("rules")}
              >
                Instructions
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </animated.div>
  );
};

export default Table;
