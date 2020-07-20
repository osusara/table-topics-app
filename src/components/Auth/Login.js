import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const Login = ({login, setIsLogin}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
    setIsLogin(true);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body className="m-4 text-center">
        <h2 className="display-4 mb-4">Login</h2>
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
              Login
            </Button>
            <Button
              className="btn-secondary mx-2"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
