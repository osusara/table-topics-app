import React from "react";
import { Container, Card } from "react-bootstrap";

const ErrorPage = ({ page }) => {
  return page === 500 ? (
    <ServerError page={page} />
  ) : page === 404 ? (
    <NotFoundError page={page} />
  ) : page === 300 ?(
    <AuthError page={page} />
  ) : (
    <UnknownError />
  );
};

const ServerError = ({ page }) => (
  <Container className="m-5 mx-auto">
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">{`${page} : Server Error`}</h2>
        <span>
          Sorry! something's wrong with the network
          <br />
          Please check your network connection and try refreshing
        </span>
      </Card.Body>
    </Card>
  </Container>
);

const NotFoundError = ({ page }) => (
  <Container className="m-5 mx-auto">
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">{`${page} : Not found`}</h2>
        <span>
          Sorry! something's wrong from our side
          <br />
          Please try refreshing the page
        </span>
      </Card.Body>
    </Card>
  </Container>
);

const AuthError = ({ page }) => (
  <Container className="m-5 mx-auto">
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">{`${page} : Not found`}</h2>
        <span>
          Sorry! something's wrong with recognizing you
          <br />
          Please login to proceed
        </span>
      </Card.Body>
    </Card>
  </Container>
);

const UnknownError = () => (
  <Container className="m-5 mx-auto">
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">"Unknown error"</h2>
        <span>
          Sorry! something's wrong
          <br />
          Please try refreshing the page and we'll try to fix the issue ASAP
        </span>
      </Card.Body>
    </Card>
  </Container>
);

export default ErrorPage;
