import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import Timer from "./Timer";

const TopicCard = ({ topic, setNumber, setPage }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 126);

  return (
    <Container className="m-5 mx-auto">
      <Card className="shadow-sm">
        <Card.Body className="m-4 text-center">
          <h2 className="display-4 mb-4">{topic}</h2>
          <Row>
            <Col lg={6} md={8} sm={10} xs={12} className="mx-auto">
              <Timer expiryTimestamp={time} />
            </Col>
          </Row>
          <Button
            onClick={() => {
              setNumber(0);
              setPage("main");
            }}
            className="btn-dark mt-4"
          >
            Return
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TopicCard;
