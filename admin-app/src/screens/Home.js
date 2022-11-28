import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function Home() {
  return (
        <Container fluid>
          <Row className="d-flex h-100">
            <Col md={3} className="bg-secondary">side bar</Col>
            <Col md={9}>main</Col>
          </Row>
        </Container>

    )
}

export default Home;
