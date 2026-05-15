import React from 'react'
import { Modal, Card, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { MdKeyboardArrowRight } from 'react-icons/md'
import wc_coin from '../../images/wc-coin.png'
import wc_connect from '../../images/wc-connect.png'
import wc_kapir from '../../images/wc-kapir.png'
import wc_meta from '../../images/wc-meta.png'

const walletOptions = [
    { name: "MetaMask", icon: wc_meta, alt: "MetaMask" },
    { name: "Coinbase Wallet", icon: wc_coin, alt: "Coinbase" },
    { name: "Kapir", icon: wc_kapir, alt: "Kapir" },
    { name: "WalletConnect", icon: wc_connect, alt: "WalletConnect" },
]

const ConnectWallet = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered backdrop={true} size="md">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="fw-bold text-white">🔐 Connect Wallet</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="position-relative overflow-hidden bg-soft-primary border-0">
                            <Card.Body className="p-4 h-100 d-flex flex-column">
                                <p className="text-white mb-3 fw-semibold">Choose a wallet to connect:</p>
                                <ul className="list-group">
                                    {walletOptions.map((wallet, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{
                                                scale: 1.03,
                                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="list-group-item wallet-item d-flex align-items-center justify-content-between gap-2 bg-transparent text-white border rounded-3 mb-3 shadow-sm"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="d-flex gap-3 align-items-center">
                                                <Image src={wallet.icon} alt={wallet.alt} width={30} height={30} />
                                                <span className="fw-medium">{wallet.name}</span>
                                            </div>
                                            <MdKeyboardArrowRight size={20} />
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Modal.Body>

                <Modal.Footer className="border-0 d-flex flex-md-row flex-column  justify-content-md-between">
                    <motion.button
                        className="btn btn-outline-danger"
                        onClick={handleClose}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Cancel
                    </motion.button>

                    <motion.button
                        className="btn btn-polygon"
                        onClick={handleClose}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className='fw-bold z-1 position-relative'>Connect Wallet</span>
                    </motion.button>
                </Modal.Footer>
            </motion.div>
        </Modal>
    )
}

export default ConnectWallet
