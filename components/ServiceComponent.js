import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img src="assets/11.png" className="img-fluid service-img" />
            <h2>Student 2 Student</h2>
            <p>
              Our goal is to help students interact with each other and we will assist the students in interacting with each other
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/12.png" className="img-fluid service-img" />
            <h2>Analysis Reporting</h2>
            <p>
              Students' interests are analysed and bonds are strengthened and Our team analyzes students' interests to strengthen their ties
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="assets/13.png"
              className="img-fluid service-img"
            />
            <h2>Conselling</h2>
            <p>
              We provide assistance in resolving conflicts between friends and We assist with resolving disputes between friends.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;
