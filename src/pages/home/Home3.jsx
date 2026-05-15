import React from "react";
import HeroSection3 from "../../components/home/HeroSection3"
import Marquee from "../../components/home/Marquee"
import WalletGrid from "../../components/home/WalletGrid"
import TopCoins from "../../components/home/TopCoins"
import Services from "../../components/home/Services"
import Testimonials from "../../components/home/Testimonials"
import Questions from "../../components/home/Questions"


const Home3 = () => {
  return (
    <div className="home-section position-relative overflow-hidden">
      <HeroSection3 />
      <Marquee />
      <WalletGrid />
      <TopCoins />
      <Services />
      <Testimonials />
      <Questions />
    </div>
  );
};

export default Home3;
