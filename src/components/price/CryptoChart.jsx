import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";
import { Card, Col, Form, Row } from "react-bootstrap";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

// Sample data for Bitcoin and Solana
const bitcoinData = {
  labels,
  datasets: [
    {
      label: "Bitcoin (BTC)",
      data: [100, 120, 130, 150, 180, 170, 190],
      borderColor: "#f2a900",
      backgroundColor: "rgba(242, 169, 0, 0.2)",
      tension: 0.4,
    },
  ],
};

const solanaData = {
  labels,
  datasets: [
    {
      label: "Solana (SOL)",
      data: [80, 85, 90, 100, 95, 110, 115],
      borderColor: "#00ffa3",
      backgroundColor: "rgba(0, 255, 163, 0.2)",
      tension: 0.4,
    },
  ],
};
// Combining both datasets for the "both" option
const bothData = {
  labels,
  datasets: [...bitcoinData.datasets, ...solanaData.datasets],
};
// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { labels: { color: "#fff" } },
    title: { display: false },
  },
  scales: {
    x: {
      ticks: { color: "#aaa" },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
    y: {
      ticks: {
        color: "#aaa",
        callback: (value) => `$${value}M`,
      },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
  },
};
// CryptoChartSection component
const CryptoChartSection = () => {
  const [selected, setSelected] = useState("both");

  const getChartData = () => {
    if (selected === "bitcoin") return bitcoinData;
    if (selected === "solana") return solanaData;
    return bothData;
  };

  return (
    // Main Chart Container
    <Card className="m-5 card-effect-one">
      <Card.Body className="p-32">

        <div className="stat-card text-center text-white">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold fs-6 fs-lg-4 text-primary text-nowrap">Crypto Value Locked</h4>
            <Form.Select className="w-auto" size="sm" onChange={(e) => setSelected(e.target.value)} value={selected}>
              <option value="both" className="bg-light">Bitcoin + Solana</option>
              <option value="bitcoin" className="bg-light">Bitcoin Only</option>
              <option value="solana" className="bg-light">Solana Only</option>
            </Form.Select>
          </div>

          {/* Responsive Chart Wrapper */}
          <Row className="justify-content-center">
            <Col>
              <div className="chart-wrapper rounded pt-4">
                <Line key={selected} data={getChartData()} options={options} className="w-100 h-auto" />
                {/* 👆 key={selected} forces chart to re-render on change */}
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CryptoChartSection;
