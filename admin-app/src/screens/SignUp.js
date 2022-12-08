import React  from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../actions/register";
function SignUp() {

  const auth = useSelector(state => state.login)

  const registerAction = useSelector(state => state)

  console.log('registerAction',registerAction.register);
  
  const dispatch = useDispatch()

  const registerUser = (e) =>{
    e.preventDefault();
    dispatch(register({
      firstName: "abc",
      lastName:"acd",
      email:"acb1@gmail.com",
      password: "123456"
    }))
  }

  if(auth.authenticate){
    return <Redirect to="/"/>
  }
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
              <Button variant="primary" type="submit" onClick={registerUser}>
              { registerAction.register.loading ? 'Loading' : 'Submit'}
              </Button>
            </div>
            {registerAction.register.error ?? registerAction.register.error}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
