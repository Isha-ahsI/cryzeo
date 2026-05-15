import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../../components/home/HeroSection"
import Marquee from "../../components/home/Marquee"
import WalletGrid from "../../components/home/WalletGrid"
import TopCoins from "../../components/home/TopCoins"
import Services from "../../components/home/Services"
import Testimonials from "../../components/home/Testimonials"
import Questions from "../../components/home/Questions"


const Home = () => {
  return (
    <div className="home-section position-relative overflow-hidden">
      <Container fluid className="hero-container position-relative z-1 ">
        <div style={{ maxHeight: "100vh" }}>
          <HeroSection />
        </div>
      </Container>
      <Marquee />
      <WalletGrid />
      <TopCoins />
      <Services />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default Home;
