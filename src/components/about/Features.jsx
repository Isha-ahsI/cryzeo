import React from "react";
import { features } from "../../utils/data";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="features-section py-lg-5  py-2 position-relative overflow-hidden">
      <Container>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <motion.div className="feature-card h-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="h-100 card-effect-five">
                  <Card.Body className="p-4 rounded-3 d-flex flex-column align-items-start justify-content-start">
                    <div className="avatar card-icon avatar-xxxl mb-3">{feature.icon}</div>
                    <h5 className="mb-2 card-title fw-bold">{feature.title}</h5>
                    <p className="mb-0 text-muted">{feature.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
