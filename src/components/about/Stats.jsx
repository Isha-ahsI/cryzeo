import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { states } from "../../utils/data";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="stats-section position-relative">
      <Container>
        <Row>
          {states.map((stat, index) => (
            <Col lg={4} sm={6} xs={12} key={index}>
              <motion.div className=" mb-4" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}  viewport={{ once: true }}>
                <Card className="card-effect-one">
                  <Card.Body>
                    <div className="card-icon fs-4 mb-3">{stat.icon}</div>
                    <h3 className="stat-number display-6 text-primary fw-bold mb-2">{stat.number}</h3>
                    <p className="stat-label text-white-50 fs-5 fw-medium mb-1">{stat.label}</p>
                    <p className="stat-description text-white-50 fs-6 mb-1">{stat.description}</p>
                    <p className="stat-growth d-flex align-items-center gap-2 text-primary fw-medium fs-6">{stat.growth}</p>
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

export default Stats;
