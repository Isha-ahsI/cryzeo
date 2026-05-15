import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Stats from "../../components/about/Stats";
import Features from "../../components/about/Features";
import WhatCrypto from "../../components/about/WhatCrypto";


const AboutPage = () => {
  return (
    <div className="main-section ">
      {/* Hero Header */}
      <section className="hero-section position-relative overflow-hidden">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={7}>
              <motion.div className="text-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="fw-bold mb-2 text-primary">Revolutionizing Digital Finance</h2>
                <p className="text-muted fs-6">We're building the future of cryptocurrency trading and investment. Our platform combines cutting-edge technology with unmatched security to provide you with the best crypto experience. Join millions of users who trust us for their digital asset needs.</p>
              </motion.div>
              <div className="text-center">
                <Button variant="polygon" className="fw-bold"><span className="z-1 position-relative fw-semibold">Start Your Journey</span></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <Features />

      {/* What is Crypto */}
      <WhatCrypto />

      {/* Stats Section */}
      <Stats />
    </div>
  );
};

export default AboutPage;
