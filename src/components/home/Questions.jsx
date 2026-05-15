import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Questions = () => {
  return (

    // This section contains frequently asked questions and their answers.
    <div className="main-section">
      <Container className="position-relative container-sm">
        <Row className="mb-4 justify-content-center mx-auto text-center">
          <Col md={10} lg={7}>
            <div className="my-5">
              <h2 className="text-center text-primary">Leading in Digital Excellence</h2>
              <p className="text-muted text-center ">We are experts in delivering high-quality mobile development, web development, UI/UX design, and digital marketing services. Here's why you should collaborate with us.</p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mx-auto text-center">
          <Col md={10} lg={8}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              <Accordion.Item eventKey="0" className="mb-3 rounded-4 overflow-hidden">
                <Accordion.Header >What services do you offer?</Accordion.Header>
                <Accordion.Body> We offer a range of services including mobile development, web development, UI/UX design, and digital marketing. You can learn more on our 'Our Services' page.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="mb-3 rounded-4 overflow-hidden">
                <Accordion.Header >How can we start working together?</Accordion.Header>
                <Accordion.Body>You can contact us through our website's contact form or schedule a call directly. We'll guide you through our onboarding process.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mb-3 rounded-4 overflow-hidden">
                <Accordion.Header>Do you offer maintenance after launch?</Accordion.Header>
                <Accordion.Body>Absolutely! We offer ongoing maintenance, updates, and support to keep your product running smoothly post-launch.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Questions;
