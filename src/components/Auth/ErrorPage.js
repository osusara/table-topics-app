import React from "react";
import { Container, Card } from "react-bootstrap";

const ErrorPage = ({ error }) => {
  return (
    <Container className="m-5 mx-auto">
      <Card className="shadow-sm">
        <Card.Body className="m-4 text-center">
          <h2 className="display-4 mb-4">{error.code}</h2>
          <span>
            {error.message} <br />
            Try refreshing the page
          </span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ErrorPage;
