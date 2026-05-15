import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { contactInfo } from "../../utils/data";
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    // Contact Section
    <section className="contact-section hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={7}>
            <motion.div className="text-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="fw-bold mb-2 text-primary">Contact Us</h2>
              <p className="text-muted fs-6">Have questions or need assistance? We're here to help!</p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-5 align-items-start">
          {/* Contact Info Card */}
          <Col lg={4}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="border-0 shadow-sm rounded-4 bg-light">
                <Card.Body className="p-30 d-flex flex-column gap-3">
                  {contactInfo.map((item, index) => (
                    <motion.a key={index} href={item.link} className="d-flex align-items-start gap-3 text-decoration-none text-dark" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Card className="border-0 shadow-sm rounded-4 w-100 card-effect-one">
                        <Card.Body className="d-flex align-items-center p-3 gap-4">
                          <div className="bg-soft-primary text-white rounded-circle avatar avatar-xxl fs-5">
                            {item.icon}
                          </div>
                          <div>
                            <h6 className="fw-semibold mb-1">{item.title}</h6>
                            <p className="mb-0 small text-muted">{item.info}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.a>
                  ))}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <motion.div initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}>
              <Form className="p-4  rounded-4 bg-light shadow-sm" onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} className="" placeholder="Enter your name" required />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} className="form-control " placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject"  value={formData.subject} onChange={handleChange} placeholder="Enter subject" required />
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="message" as="textarea" value={formData.message} onChange={handleChange} rows="5" placeholder="Write your message..." required />
                  </Form.Group>
                  <Col md={12}>
                    <Button variant="primary" size="lg" className=" fs-6 bg-primary text-black w-100 rounded-3 d-flex align-items-center justify-content-center gap-2" type="submit">
                      <FaPaperPlane />
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};
export default Contact;