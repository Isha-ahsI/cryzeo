import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../../utils/data';

const Testimonials = () => {
  return (
    // Testimonial Section
    // This section displays user testimonials with their ratings and avatars.
    <section className="testimonial-section py-5 py-lg-5">
      <Container >
        <Row className="justify-content-center">
          <Col md={10} lg={7}>
            <div className="text-center mb-5">
              <h2 className="text-primary">What Our Users Say</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={12} md={6} lg={4}>
              <Card className='card-effect-four h-100'>
                <Card.Body className=' p-4'>
                  <div className="testimonial-card">
                    <p className="testimonial-content mb-4 text-muted">{testimonial.content}</p>
                    <div className="testimonial-author d-flex align-items-center gap-3">
                      <Image src={testimonial.author.avatar} alt={testimonial.author.name} className="avatar-img-50" roundedCircle  />
                      <div className="author-info">
                        <h5 className="mb-1">{testimonial.author.name}</h5>
                        <p className="mb-0 text-muted">{testimonial.author.role}</p>
                      </div>
                    </div>
                    <div className="rating d-flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} className="text-primary" />
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
