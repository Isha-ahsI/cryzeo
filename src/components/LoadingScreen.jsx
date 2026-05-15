import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../images/logo-sm.svg';

const LoadingScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const text = "Cryzeo";
  const particles = Array.from({ length: 20 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="d-flex justify-content-center gap-2 align-items-center position-fixed top-0 start-0 w-100 h-100 z-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ background: "linear-gradient(45deg, rgba(0,0,0,0.95), rgba(0,0,0,0.98))" }}>
          {/* Particle effect */}
          {particles.map((_, i) => (
            <motion.div className="position-absolute rounded-circle" key={i} style={{ width: Math.random() * 4 + 2 + "px", height: Math.random() * 4 + 2 + "px", background: "var(--bs-primary)", left: Math.random() * 100 + "%", top: Math.random() * 100 + "%", }} animate={{ y: [0, -100, 0], x: [0, Math.random() * 100 - 50, 0], opacity: [0, 1, 0], }} transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2, }} />
          ))}

          {/* Center container */}
          <motion.div className="text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            {/* Animated circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div className="position-absolute start-50 top-50 translate-middle rounded-circle"  key={i} style={{ width: 120 + i * 40 + "px", height: 120 + i * 40 + "px", border: "1px solid var(--bs-primary)", opacity: 0.1, }} animate={{ rotate: 360, scale: [1, 1.1, 1], }} transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", }} />
            ))}

            {/* Logo */}
            <motion.img className="position-relative" src={Logo} alt="Logo" height="80" initial={{ opacity: 0 }} animate={{ opacity: 1, filter: ["brightness(1) drop-shadow(0 0 20px var(--bs-primary))", "brightness(1.2) drop-shadow(0 0 30px var(--bs-primary))",] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", }} />

            {/* Text */}
            <motion.div className="mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              {text.split("").map((char, index) => (
                <motion.span className="text-primary display-6 fw-bold" key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, textShadow: ["0 0 10px var(--bs-primary)", "0 0 20px var(--bs-primary)", "0 0 10px var(--bs-primary)",] }} transition={{ delay: 0.8 + index * 0.1, textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", }, }}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
