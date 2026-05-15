import React from "react";
import HeroSection4 from "../../components/home/HeroSection4"
import Marquee from "../../components/home/Marquee"
import WalletGrid from "../../components/home/WalletGrid"
import TopCoins from "../../components/home/TopCoins"
import Services from "../../components/home/Services"
import Testimonials from "../../components/home/Testimonials"
import Questions from "../../components/home/Questions"


const Home4 = () => {
  return (
    <div className="home-section position-relative overflow-hidden">
      <HeroSection4 />
      <Marquee />
      <WalletGrid />
      <TopCoins />
      <Services />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default Home4;
