import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { trendingTopics } from "../../utils/data";
import { motion } from "framer-motion";

const TrendingTopics = () => {
  return (
    <motion.section className="trending-topics py-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={7} xs={12}>
            <div className="section-header text-center">
              <h2 className="text-primary mb-4">Trending Topics</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4 my-4 justify-content-center">
          {trendingTopics.map((topic) => (
            <Col xs={12} sm={6} md={4} lg={3} key={topic.id}>
              <motion.div className=" text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="card-effect-one">
                  <Card.Body className="p-30">
                    <h5 className="text-primary">{topic.title}</h5>
                    <p className="text-muted mb-0">{topic.posts} posts</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default TrendingTopics;
