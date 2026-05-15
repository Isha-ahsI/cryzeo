import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import Logo from '../../images/logo-sm.svg';
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ConnectWallet from "../modal/ConnectWallet";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Check if the user has scrolled down the page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Disable body scroll and add blur to the background when the navbar is expanded
    if (expanded) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("blur-background");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("blur-background");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
      document.body.classList.remove("blur-background"); // Ensure scroll is enabled and no blur when the component unmounts
    };
  }, [expanded]);

  // Close the sidebar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the sidebar when a link is clicked
  const handleLinkClick = () => {
    setExpanded(false);
  };

  // render words with animation
  const renderWords = (text, linkId) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className="word"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: hoveredLink === linkId ? 360 : 0, transition: { duration: 0.6, delay: index * 0.1, ease: [0.175, 0.885, 0.32, 1.275], } }}
        style={{
          display: "inline-block",
          marginRight: "0.2em",
          transformOrigin: "center",
          perspective: "1000px",
          backfaceVisibility: "hidden",
        }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <>
      <Navbar expand="lg" className={`custom-navbar p-0 my-lg-0 ${scrolled ? "navbar-scrolled" : ""}`} expanded={expanded} onToggle={setExpanded} fixed="top" ref={navbarRef}>
        {/* Logo */}
        <Container fluid className="d-flex justify-content-between px-lg-5 py-2 align-items-center">
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="d-flex gap-2 align-items-center">
              <Image src={Logo} alt="Logo" height="40" />
              <h3 className="d-none d-sm-inline mb-0">Cryzeo</h3>
            </Navbar.Brand>
          </Link>

          <div className="d-lg-none d-flex align-items-center gap-4">
            <Button variant="polygon" onClick={handleShow}
            >
              <span className="z-1 position-relative fw-semibold">Connect Wallet</span>
            </Button>

            <button className="custom-toggler-icon p-2 text-primary position-relative overflow-hidden"
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle navigation"
            >
              <FaBars size={26} />
            </button>
          </div>

          <Navbar.Collapse id="main-navbar">
            <div className="d-lg-none position-absolute top-0 end-0 p-3">
              <button className="custom-toggler-icon p-2 text-primary position-relative overflow-hidden"
                onClick={() => setExpanded(false)}
                aria-label="Close navigation"
              >
                <FaTimes size={26} />
              </button>
            </div>
            {/* Navbar Links */}
            <Nav className="navbar-nav d-flex mx-auto px-5 py-2 justify-content-center text-center gap-2">
              {[
                { to: "/", text: "Home", id: "home" },
                { to: "/about", text: "About", id: "about" },
                { to: "/prices", text: "Price", id: "price" },
                { to: "/blog", text: "Blog", id: "blog" },
                { to: "/contact", text: "Contact us", id: "contact" },
              ].map((link) => (
                <NavLink className="nav-link position-relative rounded-2 fw-semibold px-4 py-2"
                  key={link.id}
                  to={link.to}
                  onClick={handleLinkClick}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {renderWords(link.text, link.id)}
                </NavLink>
              ))}
            </Nav>

            <div className="d-none d-lg-block">
              <Button
                variant="polygon"
                className=""
                onClick={handleShow}
              >
                <span className="z-1 position-relative fw-semibold">Connect Wallet</span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ConnectWallet show={show} handleClose={handleClose} />
    </>
  );
};

export default AppNavbar;
