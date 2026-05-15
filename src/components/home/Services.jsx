import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { serviceData } from "../../utils/data";

const Services = () => {
  return (
    <section className="main-section py-5">
      {/* This Section showcases our services */}
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={7}>
            <motion.div className=" text-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-primary">Our Services</h2>
              <p className="text-muted text-center">Experience the best crypto services with our platform</p>
            </motion.div>
          </Col>
        </Row>
        {/* Section showcasing our services  */}
        <Row className="g-4 justify-content-center service-cards-container">
          {serviceData.map((service, index) => (
            <Col key={index} lg={5} className="service-col">
              <motion.div className="" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
                <Card>
                  <Card.Body className="service-card card-effect-three card-soft-primary p-4 position-relative rounded-4 overflow-hidden">
                    <div className="service-icon avatar avatar-xxxl bg-soft-primary rounded-circle text-primary mb-3"> {service.icon} </div>
                    <h5 className="text-gradient fw-semibold mb-3 text-uppercase">{service.title}</h5>
                    <p className="service-description">{service.description}</p>
                    <div className="service-card-bg"></div>
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

export default Services;
