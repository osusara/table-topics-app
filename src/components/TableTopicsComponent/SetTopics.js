import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

import ErrorPage from "./ErrorPage";

const SetTopics = ({ db, setPage, setNumber, topicObj, setTopicObj, authId }) => {
  const [topic, setTopic] = useState(topicObj);
  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

  const addTopics = (topic) =>
    db
      .collection("topics")
      .doc(`${authId}`)
      .set(topic)
      .then(function (docRef) {
        setTopicObj(topic);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  const onSubmit = (e) => {
    e.preventDefault();
    addTopics(topic);
    setNumber(0);
    setPage("main");
  };

  const goBack = () => {
    setNumber(0);
    setPage("main");
  };

  const onChange = (e) =>
    setTopic({ ...topic, [e.target.name]: e.target.value });

  return authId ? (
    <animated.div style={anim}>
      <Container className="m-5 mx-auto">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="text-center">
              <h2 className="display-4">Set 10 Topics</h2>
            </Card.Title>
            <Form onSubmit={(e) => onSubmit(e)} className="m-4">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic1"
                  placeholder="Topic 1"
                  value={topic.topic1}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic2"
                  placeholder="Topic 2"
                  value={topic.topic2}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic3"
                  placeholder="Topic 3"
                  value={topic.topic3}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic4"
                  placeholder="Topic 4"
                  value={topic.topic4}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic5"
                  placeholder="Topic 5"
                  value={topic.topic5}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic6"
                  placeholder="Topic 6"
                  value={topic.topic6}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic7"
                  placeholder="Topic 7"
                  value={topic.topic7}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic8"
                  placeholder="Topic 8"
                  value={topic.topic8}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic9"
                  placeholder="Topic 9"
                  value={topic.topic9}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="topic10"
                  placeholder="Topic 10"
                  value={topic.topic10}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <div className="text-center pt-4">
                <Button type="submit" className="btn-dark mx-2">
                  Submit
                </Button>
                <Button className="btn-secondary mx-2" onClick={() => goBack()}>
                  Back
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </animated.div>
  ) : (
    <ErrorPage page={300} />
  );
};

export default SetTopics;
