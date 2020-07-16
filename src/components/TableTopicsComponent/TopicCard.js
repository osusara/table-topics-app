import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const TopicCard = ({ topic, setNumber }) => {
  return (
    <Container className="m-5 mx-auto">
      <Card className="shadow-sm">
        <Card.Body className="m-4 text-center">
          <h1>{topic}</h1>
          <Card className="bg-dark text-light my-3">
            <Card.Body>
              <h1>00:00</h1>
            </Card.Body>
          </Card>
          <Button onClick={() => setNumber(0)} className="btn-lg btn-primary">
            Return
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TopicCard;
