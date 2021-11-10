import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/2.png" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>What Makes Us Different ?</h2><br/>
              <p>
                The goal of our program is to help students interact with each other. We will assist the students in interacting with each other. Students' interests are analyzed and their bonds are strengthened. Our team analyzes students' interests to strengthen their bonds.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
