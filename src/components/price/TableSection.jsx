import React, { useMemo, useState } from "react";
import { Table, InputGroup, FormControl, Container, Row, Col, Pagination, Dropdown, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFilter, FaLock, FaCoins } from "react-icons/fa";
import { blockchains, cryptoData } from "../../utils/data";

const TableSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlockchain, setSelectedBlockchain] = useState("All");
  const itemsPerPage = 5;

  const getBlockchainIcon = (blockchain) => {
    switch (blockchain) {
      case "BNB":
        return "🟡";
      case "MATIC":
        return "🟣";
      case "ARBITRUM":
        return "🔵";
      case "ETHEREUM":
        return "🔷";
      default:
        return "⚪️";
    }
  };

  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case "Low":
        return "success";
      case "Medium":
        return "warning";
      case "High":
        return "danger";
      default:
        return "secondary";
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = cryptoData;
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.subname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedBlockchain !== "All") {
      filtered = filtered.filter(
        (item) => item.blockchain === selectedBlockchain
      );
    }
    return filtered;
  }, [searchTerm, selectedBlockchain]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const currentData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <motion.section className="d-flex my-4 justify-content-center align-items-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <Container>
          <Row className="g-4 justify-content-center text-center">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="card-effect-one">
                <Card.Body >
                  <div className="stat-card">
                    <FaCoins className="fs-3 mb-2" />
                    <h3 className="text-primary">{cryptoData.length}</h3>
                    <p className="mb-0">Total Tokens</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="card-effect-one">
                <Card.Body >
                  <div className="stat-card">
                    <FaLock className="fs-3 mb-2" />
                    <h3 className="text-primary">$7.5B+</h3>
                    <p className="mb-0">Total Value Locked</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="card-effect-one">
                <Card.Body >
                  <div className="stat-card">
                    <FaCoins className="fs-3 mb-2" />
                    <h3 className="text-primary">4</h3>
                    <p className="mb-0">Blockchains</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="card-effect-one">
                <Card.Body >
                  <div className="stat-card">
                    <FaCoins className="fs-3 mb-2" />
                    <h3 className="text-primary">95%</h3>
                    <p className="mb-0">Average Lock Rate</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.section>

      <motion.section className="d-flex flex-column align-items-center justify-content-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <Container>
          <div className="filters-section  mb-4">
            <Row className="g-3 w-100">
              <Col sm={10}>
                <div className="search-bar">
                  <InputGroup>
                    <FormControl className="rounded-2" placeholder="Search token name or token symbol" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <InputGroup.Text>🔍</InputGroup.Text>
                  </InputGroup>
                </div>
              </Col>
              <Col sm={2}>
                <div className="blockchain-filter w-100">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="blockchain-dropdown">
                      <FaFilter className="me-2" />
                      {selectedBlockchain}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {blockchains.map((chain) => (
                        <Dropdown.Item key={chain}  onClick={() => setSelectedBlockchain(chain)}>{chain}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>

          <div className="table-wrapper">
            <Table striped bordered hover responsive className="crypto-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Blockchain</th>
                  <th>Liquidity Rate</th>
                  <th>Tokens Locked</th>
                  <th>Value Locked</th>
                  <th>Market Cap</th>
                  <th>24h Change</th>
                  <th>Risk Level</th>
                  <th>Next Unlock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((crypto, index) => (
                  <motion.tr key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
                    <td>
                      <div className="icon-container d-flex  gap-3">
                        <span className="avatar avatar-sm bg-soft-primary rounded-circle fw-bold">{crypto.name.charAt(0)}</span>
                        <div>
                          <h6 className="mb-0">{crypto.name}</h6>
                          <p className="text-muted mb-0">{crypto.subname}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="icon-container">
                        <span>{getBlockchainIcon(crypto.blockchain)}</span>
                        <span>{crypto.blockchain}</span>
                      </div>
                    </td>
                    <td>{crypto.liquidityRate}</td>
                    <td>{crypto.tokensLocked}</td>
                    <td>{crypto.valueLocked}</td>
                    <td>{crypto.marketCap}</td>
                    <td className={
                      crypto.priceChange.startsWith("+")
                        ? "text-success"
                        : "text-danger"
                    }
                    >
                      {crypto.priceChange}
                    </td>
                    <td>
                      <span className={`badge rounded-pill text-${getRiskLevelColor(crypto.riskLevel
                      )} bg-soft-${getRiskLevelColor(
                        crypto.riskLevel
                      )}-sm`}
                      >
                        {crypto.riskLevel}
                      </span>
                    </td>
                    <td>
                      <Badge className={`rounded-pill ${crypto.nextUnlock === "No unlock"
                        ? "bg-soft-dark-sm"
                        : "bg-soft-primary-sm"
                        }`}
                      >
                        {crypto.nextUnlock}
                      </Badge>
                    </td>
                    <td>
                      <div className="actions">
                        <button className="btn bg-soft-primary rounded-3 text-primary border-primary px-3 py-2">View</button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </Table>
          </div>

          {totalPages > 1 && (
            <div className="pagination-container mt-4 d-flex justify-content-center">
              <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}> {i + 1}</Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
              </Pagination>
            </div>
          )}
        </Container>
      </motion.section>
    </>
  );
};

export default TableSection;
