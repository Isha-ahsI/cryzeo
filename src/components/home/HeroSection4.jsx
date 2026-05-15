import React from 'react'
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { avatars } from "../../utils/featuredPosts.data.js";
import IconEff from "../IconEffect.jsx";
import Hero4Img from "../../images/hero4.png";

const parent = {
  initial: {},
  animate: {
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
};

const child = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const HeroSection4 = () => {
  return (
    <div className='hero-sec4 position-relative min-vh-100 d-flex justify-content-center align-items-center overflow-hidden'>
      <IconEff />
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} lg={5}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <Image src={Hero4Img} alt="girl's Image" fluid className='hero4-img' />
            </motion.div>
          </Col>
          <Col xs={12} lg={{ span: 6, offset: 1 }} className='mb-lg-0 mb-5'>
            <motion.div variants={parent} initial="initial" animate="animate" className="text-lg-start text-center position-relative z-2">
              <motion.div variants={child} className="hero-badge d-inline-flex align-items-center rounded-4 mb-3">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Next Generation Crypto Platform</span>
              </motion.div>
              <motion.h1 variants={child} className="mb-3 title display-3 fw-bold">Explore the Future
                <br />of<span className="highlight"> Digital Finance </span>
              </motion.h1>
              <motion.p variants={child} className="mb-4 text-muted subtitle lead">Experience a smooth,secure,and
                hussle-free
                way to buy,sell,and store crypto effortlessly</motion.p>
              <motion.div variants={child} className="d-flex gap-3 mb-4 justify-content-lg-start flex-wrap justify-content-center">
                <Button variant="polygon" className=" btn-md fw-bold px-4">
                  <span className="z-1 position-relative">Explore platform</span>
                  <span className="ms-1 fs-5 lh-1"><i class="bi bi-arrow-right"></i></span>
                </Button>
                <Button variant="outline">
                  <span className="z-1 position-relative">Watch Demo</span>
                  <span className="ms-1 fs-5 lh-1"><i class="bi bi-play-fill"></i></span>
                </Button>
              </motion.div>
              <div className="d-flex flex-sm-row flex-column justify-content-center justify-content-lg-start align-items-center gap-sm-4 gap-2 mb-lg-0 mb-4">
                <div>
                  <motion.h2 variants={child} className="mb-0 highlight fw-bold">500k</motion.h2>
                  <motion.small variants={child} className="text-muted">Worldwide user</motion.small>
                </div>
                <motion.div variants={child} className="user-avatars d-flex align-items-center">
                  {avatars.map((avatars, i) => (
                    <Image key={i} src={avatars.src} alt={avatars.name} className="user-image" />
                  ))}
                  <div
                    className="more user-image d-flex justify-content-center align-items-center fw-semibold">
                    <i class="bi bi-plus fs-4 lh-1"></i>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroSection4