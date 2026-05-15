import React from 'react';
import { motion } from 'framer-motion';
import { cryptoCompanies } from '../../utils/cryptoCompanies.data'; // Importing data for crypto companies

const Marquee = () => {
  // Duplicating the list of companies to create an infinite scroll effect
  const duplicatedCompanies = [...cryptoCompanies, ...cryptoCompanies];

  return (
    <div className="marquee-container w-100 overflow-hidden position-relative py-5">
      {/* Glowing lines on top and bottom */}
      <div className="glow-line-top bg-gradient-primary"></div>
      <div className="glow-line-bottom bg-gradient-primary"></div>
      
      {/* Wrapper for the scrolling content */}
      <div className="marquee-wrapper w-100 overflow-hidden">
        <motion.div className="px-4 shadow-sm flex-nowrap py-2 d-flex align-items-center gap-5 flex-nowrap" animate={{ x: [0, -1000] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}>
          {/* Mapping over the companies data to display each company */}
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="marquee-item px-3 py-2 d-flex align-items-center shadow-sm">
              <div className="d-flex align-items-center">
                {/* Company name and symbol */}
                <div className="me-3 d-flex flex-column">
                  <span className="fw-bold">{company.name}</span>
                  <span className="text-muted small">{company.symbol}</span>
                </div>
                
                {/* Badge showing the percentage change in value */}
                <span className={`badge ${company.change.startsWith('+') ? 'bg-soft-success' : 'bg-soft-danger'}`}>
                  {company.change}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
