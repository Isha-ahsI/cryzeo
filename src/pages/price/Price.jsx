import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import TableSection from "../../components/price/TableSection";
import CryptoChartSection from "../../components/price/CryptoChart";

const Prices = () => {
  return (
    <div className="main-section">
      {/* This section displays the cryptocurrency dashboard with charts and tables */}
      <Container fluid className="section">
        <Row className="justify-content-center text-center">
          <Col md={10} lg={7}>
           <motion.div className="text-center mb-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="fw-bold mb-2 text-primary">Cryptocurrency Dashboard</h2>
              <p className="text-muted fs-6">Track and analyze your favorite cryptocurrencies in real-time</p>
            </motion.div>
          </Col>
        </Row>
        {/* This section displays the cryptocurrency dashboard with charts and tables */}

        <TableSection />

        {/* This section displays the cryptocurrency  charts  */}
        <motion.div className=" my-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Row className="justify-content-center">
            <Col xs={12} md={10} xl={9}>
              <Row className="g-4">
                <Col xs={12} lg={4} xl={6}>
                  <div className="chart-wrapper px-2 rounded shadow-sm">
                    <CryptoChartSection />
                  </div>
                </Col>
                <Col xs={12} lg={4} xl={6}>
                  <div className="chart-wrapper px-2 rounded shadow-sm">
                    <CryptoChartSection />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Prices;
