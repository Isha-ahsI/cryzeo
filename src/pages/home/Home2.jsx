import React from "react";
import HeroSection2 from "../../components/home/HeroSection2"
import Marquee from "../../components/home/Marquee"
import WalletGrid from "../../components/home/WalletGrid"
import TopCoins from "../../components/home/TopCoins"
import Services from "../../components/home/Services"
import Testimonials from "../../components/home/Testimonials"
import Questions from "../../components/home/Questions"


const Home2 = () => {
  return (
    <div className="home-section position-relative overflow-hidden">
      <HeroSection2 />
      <Marquee />
      <WalletGrid />
      <TopCoins />
      <Services />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default Home2;
