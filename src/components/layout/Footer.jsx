import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../images/logo-sm.svg';

import { footerLinks, socialLinks } from "../../utils/data";
const Footer = () => {
  return (
    // Footer Section
    <Container fluid className="footer-container position-relative overflow-hidden z-1 mt-5 p-0">
      <div className="footer-content  py-5 position-relative z-2">
        <Container>
          <Row className="g-4">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="footer-brand">
                <Link to="/" className="text-decoration-none ">
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <Image src={Logo} alt="Logo" height="40" />
                    <h3 className=" mb-0">Cryzeo</h3>
                  </div>
                </Link>
              </div>
              <p className="text-muted mb-4">The most trusted cryptocurrency platform for trading, staking, and earning.</p>
              <div className="social-links d-flex gap-2 mt-3">
                {socialLinks.map((social, index) => (
                  <Link key={index} to={social.url} className="avatar avatar-lg  rounded-circle social-link" aria-label={social.name}>{social.icon}</Link>
                ))}
              </div>
            </Col>
            {Object.entries(footerLinks).map(([category, sections], index) => (
              <Col lg={4} key={index} className="mb-4 mb-lg-0">
                <div className="footer-section">
                  <h5 className="section-title position-relative text-white mb-3 pb-2">{category}</h5>
                  <div className="footer-grid">
                    {Object.entries(sections).map(([title, items], i) => (
                      <div key={i} className="footer-column">
                        <h6 className="text-muted mb-3">{title}</h6>
                        <ul className="list-unstyled footel-links-content">
                          {items.map((item, j) => (
                            <li key={j} className="footel-link-item mb-2">
                              <Link to="#" className="footer-link">{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="footer-bottom mt-5 pt-4">
            <Row className="align-items-center">
              <Col md={6} className="mb-3 mb-md-0">
                <p className="mb-0 text-muted">
                  ©Copyright {new Date().getFullYear()} CryptoTrade.{" "}
                  <Link to="https://mantrakshdevs.com" target="_blank" className="text-primary">Mantraksh Devs</Link>{" "} Crafted with <i className="bi bi-heart-fill text-danger"></i>
                </p>
              </Col>
              <Col md={6} className="text-md-end">
                <div className="language-selector">
                  <select className="form-select w-auto mx-auto ms-md-auto me-lg-0 form-select-sm">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Container>
  );
};
export default Footer;
