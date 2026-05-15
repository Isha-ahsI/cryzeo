import React from 'react'
import { Row, Col, Container, Image, InputGroup, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import StarFall from "../StarFall";
import Hero3Img from "../../images/hero3.png";

const HeroSection3 = () => {
    return (
        <div className="hero-sec3 position-relative min-vh-100 d-flex justify-content-center align-items-end overflow-hidden">
            <StarFall/>
            <Container>
                <Row className='align-items-center justify-content-center text-lg-start text-center'>
                    <Col xs={12}>
                        <motion.div className="d-flex justify-content-center align-items-center" initial={{ opacity: 0, scale: 0.3, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1 }}>
                            <Image src={Hero3Img} alt="heroImg" className="hero3-img" />
                        </motion.div>
                    </Col>
                    <Col xs={12} lg={6} className='mb-lg-5 mb-3'>
                        <motion.h1 className="title" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}>Your Gateway to <br /> the <span className="highlight">Crypto Economy</span></motion.h1>
                    </Col>
                    <Col xs={12} lg={{ span: 5, offset: 1 }} className='mb-5'>
                        <motion.p className='mb-4 text-white subtitle' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                            "Explore real-time crypto insights, market
                            trends, and smart investment tools designed to help you stay ahead in the
                            digital economy.Join thousands of traders exploring the future of digital
                            finance."
                        </motion.p>
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay:1 }}>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2" className="rounded-end-3">Get Early Access</InputGroup.Text>
                            </InputGroup>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection3