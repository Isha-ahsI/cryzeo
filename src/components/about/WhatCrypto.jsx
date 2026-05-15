import React from "react";

import whatCrypto from "../../images/what-crypto.png";
import whyBuild from "../../images/why_built.png";
import visionImg from '../../images/vision-img.jpg';
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

const WhatCrypto = () => {
  return (
    <>
      <section className="my-100 ">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={{ span: 6, order: 1 }} sm={{ span: 10 }} xs={{ span: 12, order: 2 }} className="mb-5">
              <motion.div className="info-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="fw-bold mb-4 text-primary display-5">Understanding Cryptocurrency</h2>
                <p className="text-muted fs-6  mb-3">Cryptocurrency represents the evolution of finance in the digital age. Built on blockchain technology, it offers unprecedented security, transparency, and freedom in financial transactions. Our platform makes this revolutionary technology accessible to everyone.</p>
                <div className="d-flex gap-3 mt-4 ">
                  <Card className="card-effect-one rounded-4 border-0">
                    <Card.Body className="px-4  py-3">
                      <div className="d-flex align-items-center gap-3 card-icon">
                        <FaBitcoin className="fs-4" />
                        <span>Bitcoin</span>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="card-effect-one rounded-4 border-0">
                    <Card.Body className="px-4  py-3">
                      <div className="d-flex align-items-center gap-3 card-icon">
                        <FaEthereum className="fs-4" />
                        <span>Ethereum</span>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <Button variant="polygon" className="mt-4 fw-bold">Explore Crypto</Button>
              </motion.div>
            </Col>
            <Col lg={{ span: 5, order: 2, offset: 1 }} sm={{ span: 10 }} xs={{ span: 12, order: 1 }} className="mb-lg-5 mb-4">
              <motion.div className="image-wrapper" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <Image src={whatCrypto} alt="Understanding Cryptocurrency" className="img-fluid shadow" rounded />
              </motion.div>
            </Col>
          </Row>



          {/* Why We Built This */}
          <Row className="align-items-center justify-content-between flex-lg-row-reverse">
            <Col lg={5} sm={10} xs={12} className="mb-lg-5 mb-4">
              <motion.div className="image-wrapper" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <Image src={whyBuild} alt="Our Mission" className="img-fluid shadow" rounded />
              </motion.div>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} sm={10} xs={12} className="mb-5">
              <motion.div className="info-text" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="fw-bold mb-4 display-6 text-primary">Our Mission & Purpose</h2>
                <p className="text-muted fs-6  mb-3">We believe in democratizing access to cryptocurrency trading...</p>
                <ul className="list-unstyled mt-3 mb-4 ps-0 ">
                  <li className="position-relative ps-4 point mb-2">Secure and transparent trading environment</li>
                  <li className="position-relative ps-4 point mb-2">User-friendly interface for all experience levels</li>
                  <li className="position-relative ps-4 point mb-2">24/7 customer support and educational resources</li>
                  <li className="position-relative ps-4 point mb-2">Continuous innovation and platform improvements</li>
                </ul>
                <Button variant="polygon" className="mt-4 fw-bold">Join Our Mission</Button>
              </motion.div>
            </Col>
          </Row>
          
          {/* Vision & Future */}
          <Row className="align-items-center justify-content-center">
            <Col lg={{ span: 6, order: 1 }} sm={{ span: 10 }} xs={{ span: 12, order: 2 }} className="mb-5">
              <motion.div className="info-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="fw-bold mb-4 display-6 text-primary">Vision for the Future</h2>
                <p className="muted fs-6  mb-3">We envision a world where digital assets are seamlessly integrated...</p>
                <ul className="list-unstyled mt-3 mb-4 ps-0 mission-list">
                  <li className="position-relative point ps-4 mb-2">Expand to new markets and regions</li>
                  <li className="position-relative point ps-4 mb-2">Introduce innovative trading features</li>
                  <li className="position-relative point ps-4 mb-2">24/7 customer support and educational resources</li>
                  <li className="position-relative point ps-4 mb-2">Enhance security and performance</li>
                </ul>
                <Button variant="polygon" className="mt-4 fw-bold">See Our Roadmap</Button>
              </motion.div>
            </Col>
            <Col lg={{ span: 5, order: 2, offset: 1 }} sm={{ span: 10 }} xs={{ span: 12, order: 1 }} className="mb-lg-5 mb-4">
              <motion.div className="image-wrapper" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <Image src={visionImg} alt="Our Vision" className="img-fluid  shadow" rounded />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatCrypto;
