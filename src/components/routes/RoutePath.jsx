import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Home2 from "../../pages/home/Home2";
import Home3 from "../../pages/home/Home3";
import Home4 from "../../pages/home/Home4";
import Prices from "../../pages/price/Price";
import Blog from "../../pages/blog/Blog";
import Contact from "../../pages/contact-us/Contact";
import AboutPage from "../../pages/about/AboutPage";

const RoutePath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default RoutePath;