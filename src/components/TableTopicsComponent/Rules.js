import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const Rules = ({ setPage }) => {
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });
  
  return (
    <animated.div style={anim}>
      <Container className="m-5 mx-auto">
        <Row>
          <Col md={10} xs={12} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">
                  <h2 className="display-4">Instructions</h2>
                </Card.Title>
                <ul>
                  <li>
                    First, you have to pick a number from 1 to 10 and each of
                    these numbers are assigned with a topic.
                  </li>
                  <li>
                    Then, you have to talk around 1 to 2 minutes about the
                    topic.
                  </li>
                  <li>Any one can volunteer and speak.</li>
                </ul>
                <p className="text-center">
                  <b>
                    With this you can improve your ability to generate ideas
                    quickly
                  </b>
                </p>
                <div className="text-center mx-auto pt-4">
                  <Button
                    className="btn-secondary"
                    onClick={() => setPage("main")}
                  >
                    Back
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default Rules;
