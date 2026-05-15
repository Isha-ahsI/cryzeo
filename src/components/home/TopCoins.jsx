import React from "react";
import { Row, Col, Card, Badge, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { coins } from "../../utils/Coins.data";
import { Link } from "react-router-dom";

const TopCoins = () => {
  return (
    // section for displaying top coins with rewards
    <section className="main-section py-5">
      <div className="container-sm px-4">
        <Row className="justify-content-center">
          <Col md={10} lg={7}>
            <motion.div className=" text-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-primary">Earn Rewards on Your Crypto</h2>
              <p className="text-muted">Rewards are available on the assets listed below. Earnings are paid weekly in-kind.</p>
            </motion.div>
          </Col>
        </Row>
        {/* This section highlights the top coins available for earning rewards */}
        <Row className="gy-4 justify-content-center">
          {coins.map((coin, index) => (
            <Col key={coin.id} xs={12} sm={6} md={4} lg={3}>
              <motion.div className="coin-card " initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.03 }}>
                <Card className="card-effect-one">
                  <Card.Body className="p-3 h-100 d-flex flex-column ">
                    <div className="text-center d-flex align-items-center justify-content-center">
                    <div className="avatar avatar-xxl text-center mb-3">
                      <Image src={coin.img} alt={coin.name} className="img-fluid" />
                    </div>
                    </div>
                    <h5 className="coin-title text-center fw-semibold mb-1">{coin.name}</h5>
                    <div className="coin-desc text-center text-muted small mb-3">
                      {coin.description || "One marketplace. All crypto."}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-light-subtle">
                      <span className="text-white small">{coin.symbol}</span>
                      <Badge  className="text-black  bg-soft-gradient-primary fw-semibold">
                        {coin.apr ||
                          `${(Math.random() * (15 - 2) + 2).toFixed(0)}%`}{" "}
                        APR
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Link to="/prices" className="btn btn-polygon fw-bold">Start Earning Now</Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TopCoins;
