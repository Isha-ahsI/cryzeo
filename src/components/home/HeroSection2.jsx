import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { innerOrbit, middleOrbit, outerOrbit, outerOrbit1, hero2Badge } from '../../utils/data'


const parent = {
  initial: {},
  animate: {
    transition: {
      duration:1,
      staggerChildren: 0.1,
      ease: "linear",
    },
  },
};

const child = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const HeroSection2 = () => {
  return (
    <div className="hero-sec2 position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden text-center">
      <motion.div className="orbit-container z-n1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {/* Inner Orbit */}
        <div className="orbit orbit-inner">
          {innerOrbit.map((dot, i) => (
            <div key={i} className={`orbit-dots ${dot.class}`}></div>
          ))}
        </div>

        {/*  Middle Orbit */}
        <div className="orbit orbit-middle">
          {middleOrbit.map((dot, i) => (
            <div key={i} className={`orbit-dots ${dot.class}`}></div>
          ))}
        </div>

        {/* Outer Orbit */}
        <div className="orbit orbit-outer">
          {outerOrbit.map((dot, i) => (
            <div key={i} className={`orbit-dots ${dot.class}`}></div>
          ))}
        </div>

        {/* Outer1 Orbit */}
        <div className="orbit orbit-outer-1">
          {outerOrbit1.map((dot, i) => (
            <div key={i} className={`orbit-dots ${dot.class}`}></div>
          ))}
        </div>
      </motion.div>
      <div className="overlay z-0"></div>
      <div className="content-overlay z-1"></div>
      <Container className='position-relative z-2'>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12}>
            <motion.div variants={parent} initial="initial" animate="animate" className="hero-content" >
              <motion.h1 variants={child} className="mb-3 title"><span className="highlight">Trade</span> Smarter.</motion.h1>
              <motion.h1 variants={child} className="mb-3 title"><span className="highlight">Grow</span> Faster.</motion.h1>
              <motion.h1 variants={child} className="mb-3 title">Own Your<span className="highlight"> Crypto Future.</span></motion.h1>
              <motion.p variants={child} className="mb-4 text-dark subtitle">A secure and intuitive platform built for traders, investors, and pioneers of decentralized finance.</motion.p>
              <motion.div variants={child}>
                <Button  href="/prices" variant="outline" className='hero-btn mb-4'>
                  <span className="z-1 position-relative">Explore Tokens</span>
                </Button>
              </motion.div>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
                {hero2Badge.map((data, i) => (
                  <motion.div variants={child} className="blockchain-badge" key={i}>
                    <span>{data.icon}</span>
                    <span className="badge-text">{data.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroSection2