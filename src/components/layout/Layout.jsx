import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Footer from "./Footer";
import LoadingScreen from "../LoadingScreen";
import highlightImg from "../../images/highligt.svg";
import AppNavbar from "./AppNavbar";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    // Layout Component
    <div className="layout-wrapper text-white position-relative overflow-hidden">
      {/* Add Loading Screen */}
      <LoadingScreen onFinish={handleLoadingFinish} />

      {/* Background Elements */}
      <div className="animated-bg">
        <div className="grid-overlay"></div>
      </div>

      <Image src={highlightImg} alt="highlight" className="highlighted highlight-1" />
      <Image src={highlightImg} alt="highlight" className="highlighted highlight-2" />
      <Image src={highlightImg} alt="highlight" className="highlighted highlight-3" />
      <Image src={highlightImg} alt="highlight" className="highlighted highlight-4" />
      <Image src={highlightImg} alt="highlight" className="highlighted highlight-5" />

      {/* Main Layout */}
      {!loading && (
        <div className="position-relative z-2">
          <AppNavbar />
          <Container fluid className="p-0 mt-5">
            {children}
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
