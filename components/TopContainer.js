import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <img className="img-fluid" src="/assets/1.png" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <img
                  className="plate-img img-fluid"
                />
                <img
                  className="plate-img img-fluid"
                />
              </div>
              <h6>CONNECT</h6>
              <h1>STUDENTS</h1>
              <p>Get to know students with a similar mindsets and likely to succeed              </p>
              <button className="btn btn-custom">Learn More</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
