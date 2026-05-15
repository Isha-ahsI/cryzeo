import React from "react";
import { Container, Row, Col, Card, Badge, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBookmark, FaShare } from "react-icons/fa";
import { featuredPosts } from "../../utils/featuredPosts.data";
import TrendingTopics from "../../components/blog/TrendingTopics";

const Blog = () => {
  const categories = ["All", "Crypto", "Technology", "Trading", "Security"];

  return (
    <div className="main-section">
      {/* Hero Section */}
      <section className="section position-relative overflow-hidden">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center ">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="d-inline-block">
              <div className="hero-badge rounded-5">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Latest Updates</span>
              </div>
            </motion.div>
            <h1 className="hero-title fw-bold  mb-3 mt-4">Discover the Future of <span className="highlight">Crypto</span></h1>
            <p className="lead text-muted mb-5">Dive into expert insights, market analysis, and the latest trends in blockchain technology and cryptocurrency</p>

            <div className="justify-content-center align-items-center d-flex gap-5">
              {[
                { number: "500+", label: "Articles Published" },
                { number: "50K+", label: "Active Readers" },
                { number: "100+", label: "Expert Contributors" },
              ].map((stat, index) => (
                <motion.div className="stat-item" key={index}>
                  <h3 className="h2 fw-bold mb-1 text-primary">{stat.number}</h3>
                  <p className="text-muted mb-0 small">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <motion.section className="featured-posts py-5" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Container>
          <h2 className="text-primary mb-4">Featured Articles</h2>
          <Row className="g-4">
            {featuredPosts.map((post) => (
              <Col md={6} key={post.id}>
                <motion.div>
                  <Card className="card-effect-one  h-100 overflow-hidden border-0 shadow-sm rounded-4">
                    {/* Image with hover scale and overlay */}
                    <div className="card-image-container position-relative">
                      <motion.img className="card-img-top rounded-top-4 " whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} src={post.image} alt={post.title} />
                      <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3">
                        <Badge bg="primary" className="align-self-start text-black  rounded-pill shadow-sm">{post.category}</Badge>
                        <div className="d-flex justify-content-between text-white">
                          <span className="small">{post.readTime}</span>
                          <span className="small">{post.likes} likes</span>
                        </div>
                      </div>
                    </div>

                    <Card.Body>
                      <div className="author-info d-flex align-items-center mb-3">
                        <Image src={post.author.avatar} alt={post.author.name} className="avatar-img-50 rounded-circle" />
                        <div className="ms-3">
                          <h6 className="mb-0">{post.author.name}</h6>
                          <small className="text-muted">{post.author.role}</small>
                        </div>
                      </div>
                      <Card.Title className="my-3 " as={"h4"}>{post.title}</Card.Title>
                      <Card.Text>{post.excerpt}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{post.date}</small>
                        <div className="post-actions d-flex gap-2">
                          <motion.span className="text-primary avatar-img-40 avatar border-0 bg-soft-primary rounded-circle" initial={{ opacity: 0, y: 10 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <FaBookmark />
                          </motion.span>
                              <motion.button className="text-primary avatar-img-40 avatar border-0 bg-soft-primary rounded-circle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <FaShare />
                          </motion.button>
                          <motion.button className="btn text-black rounded-2 bg-primary fw-bold " whileHover={{ scale: 1.05 }}>Read More</motion.button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      <TrendingTopics />

      {/* Categories */}
      <motion.section className="categories py-4" initial="hidden" whileInView="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 }, }, }} viewport={{ once: true }}>
        <Container>
          <motion.div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <motion.button key={index} whileHover={{ scale: 1.05 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, }} className="btn btn-primary">
                {category}
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </motion.section>

      {/* Newsletter */}
      <motion.section className="newsletter py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <motion.div className="newsletter-box text-center p-4 p-sm-5 bg-light rounded-4 position-relative overflow-hidden">
                <div className="newsletter-content">
                  <motion.h3 className="mb-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    Subscribe to Our Newsletter
                  </motion.h3>
                  <motion.p className="text-muted mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    Get the latest updates and insights delivered to your inbox
                  </motion.p>
                  <motion.div className="newsletter-form d-flex flex-column flex-sm-row gap-3 gap-sm-2 mx-auto" style={{ maxWidth: "500px" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <input type="email" placeholder="Enter your email" className="form-control form-control-lg" />
                    <motion.button whileHover={{ scale: 1.05 }} className="btn btn-primary bg-primary text-black rounded-4 btn-md fw-bold px-4 flex-shrink-0">Subscribe</motion.button>
                  </motion.div>
                  <motion.p className="form-text mt-3 mb-0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>No spam, unsubscribe at any time</motion.p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </div>
  );
};

export default Blog;
