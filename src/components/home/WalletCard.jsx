"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { FaWallet, FaBitcoin } from "react-icons/fa";
import { motion } from "framer-motion";

const WalletCard = ({
  title = "Crypto Wallet",
  cryptoDetails = [
    { name: "Bitcoin", amount: "0.45 BTC", value: "$8,250.00" },
    { name: "Ethereum", amount: "2.75 ETH", value: "$3,200.75" },
  ],
  cardId = "wallet-1",
  icon = <FaWallet />,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div className="wallet-card-wrapper p-3"
      ref={cardRef} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section for displaying wallet information */}
      <Card className="position-relative  overflow-hidden rounded-4 card-effect-two card-soft-primary">
        <div className="card-background"></div>
        <div className="card-glow"></div>
        <Card.Body className="position-relative p-4">
          <motion.div className="avatar avatar-xxxl wallet-icon posiiton-relative text-primary rounded-circle position-relative justify-content-center avatar-soft-primary  mb-3" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            {icon}
          </motion.div>
          <Card.Title className="mb-3 text-primary fs-5">{title}</Card.Title>
          <div className="crypto-details">
            {cryptoDetails.map((crypto, index) => (
              <motion.div className="crypto-item p-3 rounded-3  d-flex justify-content-between align-items-center mb-2" key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                <div className="d-flex align-items-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <FaBitcoin className="me-2 crypto-icon" />
                  </motion.div>
                  <span>{crypto.name}</span>
                </div>
                <div className="text-end crypto-amount">{crypto.amount}</div>
              </motion.div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default WalletCard;
