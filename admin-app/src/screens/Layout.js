import React from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Layout(props) {
  return (
      <Container fluid>
          <Row className="d-flex h-100">
            <Col md={3} className="bg-secondary">
              <ListGroup>
                <ListGroup.Item><NavLink to='/products'>product</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink to='/orders'>orders</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink to='/category'> category</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink to='/'> Cras justo odio</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink to='/'> Cras justo odio</NavLink></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={9}>
              {props.children}
            </Col>
          </Row>
        </Container>

    )
}

export default Layout;
