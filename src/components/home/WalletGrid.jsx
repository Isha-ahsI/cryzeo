import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WalletCard from "./WalletCard";
import { Link } from "react-router-dom";
import { walletData } from "../../utils/data";

const WalletGrid = () => {


  return (
    <div className="wallet-grid-section ">
      {/* This section displays a grid of wallet services with their descriptions and buttons. */}
      <Container>
        <Row className="my-6">
          <Col xs={12}>
            <h2 className="text-center text-primary">Wallet Services</h2>
            <p className="text-muted text-center ">Explore our comprehensive suite of cryptocurrency services</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
            {/* Map through the walletData array and render WalletCard components for each wallet service */}
            {walletData.map((wallet, index) => (
              <Col xs={12} md={6} xl={4} key={index}>
                <div>
                  <WalletCard {...wallet} />
                </div>
              </Col>
            ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Link to="/about" className="btn btn-polygon fw-bold">Read More</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WalletGrid;
