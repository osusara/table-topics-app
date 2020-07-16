import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";

const Table = ({ setNumber, setSetting }) => {
  const onClick = (e) => setNumber(e.target.innerHTML);
  const setTopics = () => {
    setSetting(true);
    setNumber(0);
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <h2 className="text-center">Select a Number</h2>
          </Card.Title>
          <Row className="mx-auto px-auto my-2 text-center">
            <Col md={1} className="hidden-xs-down"></Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                1
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                2
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                3
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                4
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                5
              </Button>
            </Col>
            <Col md={1} className="hidden-xs-down"></Col>
            <Col md={1} className="hidden-xs-down"></Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                6
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                7
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                8
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                9
              </Button>
            </Col>
            <Col md={2} xs={6} className="p-2">
              <Button
                onClick={(e) => onClick(e)}
                className="btn-primary number-btn"
              >
                10
              </Button>
            </Col>
            <Col md={1} className="hidden-xs-down"></Col>
          </Row>
          <div className="text-center mx-auto pt-4">
            <Button className="btn-lg btn-dark" onClick={() => setTopics()}>
              Set Topics
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Table;
