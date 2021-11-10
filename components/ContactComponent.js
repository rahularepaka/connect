import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactComponent() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>CONNECT</h1>
            <p>When analysis reporting and reinforcement learning are combined, you can identify students with the same mindset</p>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
