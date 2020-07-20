import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const Register = ({ signup, setIsLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    setIsLogin(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">Register</h2>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <div className="text-center pt-4">
            <Button type="submit" className="btn-dark mx-2">
              Register
            </Button>
            <Button
              className="btn-secondary mx-2"
              onClick={() => setIsLogin(true)}
            >
              Back to Login
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
