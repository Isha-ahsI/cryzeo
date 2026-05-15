import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { stats } from "../../utils/data";
import StarField from "../StarField";

const HeroSection = () => {
  return (
    <Container fluid className="position-relative z-3 overflow-hidden py-5 ">
      <StarField />
    <div className="hero-glow position-absolute top-0 start-50 translate-middle-x"></div>
      <Row className="align-items-center justify-content-center hero-container">
        <Col lg={7} className="text-center px-lg-5 d-flex flex-column align-items-center justify-content-center">
          {/* Animated Wrapper */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-100">
            {/* Badge */}
            <div className="hero-badge d-inline-flex align-items-center rounded-4 mb-3">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Next Generation Crypto Platform</span>
            </div>

            {/* Heading */}
            <motion.h1 className="mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              The Future of <span className="highlight">Digital Finance</span> <br /> is Here
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="mb-4 text-muted" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              Experience seamless trading, real-time analytics, and secure transactions with our cutting-edge cryptocurrency platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="d-flex gap-3 flex-wrap justify-content-center mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <Button variant="polygon" className="  btn-md fw-bold px-4">
                <span className="z-1 position-relative">Get Started</span>
              </Button>
              <Button variant="outline">
                <span className="z-1 position-relative">Watch Demo</span>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <Row className="g-3 justify-content-center">
                {stats.map((stat, index) => (
                  <Col xs={12} sm={6} md={3} key={index}>
                    <Card className="card-effect-one text-center h-100">
                      <Card.Body>
                        <h3 className="text-primary">{stat.value}</h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
