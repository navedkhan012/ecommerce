import React, { useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
function SignUp() {

  let navigate = useNavigate();
  useEffect(() => {
    let LoggedIn = localStorage.getItem("token");
    if (LoggedIn) {
      return navigate("/", { replace: true });
    }
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col xs={10}>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>first name</Form.Label>
              <Form.Control type="firstName" placeholder="firstName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>lastName</Form.Label>
              <Form.Control placeholder="lastName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control placeholder="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control placeholder="password" />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
