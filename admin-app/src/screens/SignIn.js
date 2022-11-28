import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { isUserLoggedIn, login } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function SignIn() {
  const [emails, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector(state => state.login)
  // let navigate = useNavigate();

  const onFromSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: "Naved@gmail.com", password: "123456" }));
    alert("redirect start");
    // navigate("/", { replace: true });
  };

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    // let LoggedIn = localStorage.getItem("token");
    // if (LoggedIn) {
    //   // return navigate("/", { replace: true });
    // }
  }, []);
  if(auth.authenticate){
    return <Redirect to="/"/>
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col xs={10}>
          <Form onSubmit={onFromSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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

export default SignIn;
