import { FaChartBar, FaChartLine, FaClock, FaDiscord, FaEnvelope, FaExchangeAlt, FaGithub, FaGlobe, FaLock, FaMapMarkerAlt, FaMobileAlt, FaMoneyBillWave, FaPhone, FaTelegram, FaTwitter, FaUsers, FaWallet } from "react-icons/fa";

import Profile1 from "../images/avatars/1.jpg";
import Profile2 from "../images/avatars/2.jpg";
import Profile3 from "../images/avatars/3.jpg";

export const stats = [
  { label: "Total Value Locked", value: "$12.5B+" },
  { label: "24h Trading Volume", value: "$3.2B" },
  { label: "Active Users", value: "2M+" },
];

export const walletData = [
  {
    cardId: "multi-coin-wallet",
    title: "Multi-Coin Wallet",
    icon: <FaWallet />,
    cryptoDetails: [
      { name: "Bitcoin", amount: "1.25 BTC", value: "$38,750.00" },
      { name: "Ethereum", amount: "5.5 ETH", value: "$4,650.75" },
      { name: "Other", amount: "Various", value: "$1,850.00" },
    ],
  },
  {
    cardId: "portfolio-tracking",
    title: "Portfolio Tracking",
    icon: <FaChartLine />,
    cryptoDetails: [
      {
        name: "Total Value",
        amount: "$28,670.50",
        value: "Across 12 assets",
      },
      { name: "Best Performer", amount: "Solana", value: "+45.2%" },
      { name: "Worst Performer", amount: "Cardano", value: "-8.5%" },
    ],
  },
  {
    cardId: "buy-sell",
    title: "Buy & Sell",
    icon: <FaExchangeAlt />,
    cryptoDetails: [
      { name: "24h Volume", amount: "$5,250.00", value: "12 transactions" },
      { name: "Average Fee", amount: "0.25%", value: "Industry lowest" },
      { name: "Supported Pairs", amount: "150+", value: "Major exchanges" },
    ],
  },
  {
    cardId: "mobile-app",
    title: "Mobile App",
    icon: <FaMobileAlt />,
    cryptoDetails: [
      { name: "Downloads", amount: "50K+", value: "Last 30 days" },
      { name: "Active Users", amount: "25K+", value: "Daily average" },
      { name: "App Size", amount: "45MB", value: "Optimized" },
    ],
  },
  {
    cardId: "advanced-trading",
    title: "Advanced Trading",
    icon: <FaChartBar />,
    cryptoDetails: [
      { name: "Order Types", amount: "15+", value: "Including OCO" },
      { name: "Trading Pairs", amount: "100+", value: "Major pairs" },
      { name: "API Access", amount: "Yes", value: "Full integration" },
    ],
  },
];

export const features = [
  {
    icon: <FaLock />,
    title: "Bank-Grade Security",
    description:
      "Multi-layer security with advanced encryption and real-time monitoring",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Instant Trading",
    description:
      "Execute trades in milliseconds with our high-performance matching engine",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile First",
    description:
      "Seamless experience across all devices with our responsive platform",
  },
  {
    icon: <FaWallet />,
    title: "Multi-Currency Support",
    description: "Trade and store multiple cryptocurrencies with ease",
  },
];

export const cryptoData = [
  {
    name: "SNAP",
    subname: "RAPTOR",
    blockchain: "BNB",
    liquidityRate: "44.43%",
    tokensLocked: "68,750,001.00 (95.904%)",
    valueLocked: "$ 228,250,003.32",
    nextUnlock: "4 Months",
    marketCap: "$ 1.2B",
    volume24h: "$ 45.2M",
    priceChange: "+12.5%",
    riskLevel: "Low",
  },
  {
    name: "SINU",
    subname: "NUDGE",
    blockchain: "MATIC",
    liquidityRate: "9.09%",
    tokensLocked: "50,000.00 (99.99%)",
    valueLocked: "$ 500,000.00",
    nextUnlock: "No unlock",
    marketCap: "$ 2.5M",
    volume24h: "$ 120K",
    priceChange: "-3.2%",
    riskLevel: "Medium",
  },
  {
    name: "SPLA",
    subname: "PLANET",
    blockchain: "ARBITRUM",
    liquidityRate: "20.04%",
    tokensLocked: "30,500.00 (100.00%)",
    valueLocked: "$ 125,000,000.00",
    nextUnlock: "3 Months",
    marketCap: "$ 850M",
    volume24h: "$ 28.5M",
    priceChange: "+5.8%",
    riskLevel: "Low",
  },
  {
    name: "SSPY",
    subname: "SPIDER",
    blockchain: "BNB",
    liquidityRate: "50.43%",
    tokensLocked: "20,250.00 (92.33%)",
    valueLocked: "$ 200,250.00",
    nextUnlock: "6 Months",
    marketCap: "$ 1.5B",
    volume24h: "$ 65.8M",
    priceChange: "+8.3%",
    riskLevel: "Low",
  },
  {
    name: "SPEPE",
    subname: "Pepe Coin",
    blockchain: "ETHEREUM",
    liquidityRate: "20.00%",
    tokensLocked: "19,000,000.00 (90.50%)",
    valueLocked: "$ 125,000,00.00",
    nextUnlock: "3 Months",
    marketCap: "$ 950M",
    volume24h: "$ 35.2M",
    priceChange: "-2.1%",
    riskLevel: "Medium",
  },
  {
    name: "SMONG",
    subname: "MONGLIGHT",
    blockchain: "BNB",
    liquidityRate: "25.59%",
    tokensLocked: "30,000.00 (99.98%)",
    valueLocked: "$ 58,000.00",
    nextUnlock: "3 Months",
    marketCap: "$ 1.8M",
    volume24h: "$ 45K",
    priceChange: "+15.7%",
    riskLevel: "High",
  },
  {
    name: "SRDNT",
    subname: "Radiant Capital",
    blockchain: "ARBITRUM",
    liquidityRate: "59.00%",
    tokensLocked: "290,000.00 (88.00%)",
    valueLocked: "$ 6,025,000,0.00",
    nextUnlock: "34 Months",
    marketCap: "$ 3.2B",
    volume24h: "$ 125.5M",
    priceChange: "+4.2%",
    riskLevel: "Low",
  },
  {
    name: "SWOO",
    subname: "Woo Network",
    blockchain: "BNB",
    liquidityRate: "984.59%",
    tokensLocked: "29,000,000.00 (32.11%)",
    valueLocked: "$ 345,006,000.00",
    nextUnlock: "No unlock",
    marketCap: "$ 2.8B",
    volume24h: "$ 95.3M",
    priceChange: "+7.9%",
    riskLevel: "Medium",
  },
  {
    name: "SWOO",
    subname: "Woo Network",
    blockchain: "BNB",
    liquidityRate: "984.59%",
    tokensLocked: "29,000,000.00 (32.11%)",
    valueLocked: "$ 345,006,000.00",
    nextUnlock: "No unlock",
    marketCap: "$ 2.8B",
    volume24h: "$ 95.3M",
    priceChange: "+7.9%",
    riskLevel: "Medium",
  },
  {
    name: "SHEX",
    subname: "Woo Network",
    blockchain: "BNB",
    liquidityRate: "41.33%",
    tokensLocked: "50,050,000.00 (41.09%)",
    valueLocked: "$ 140,000,039.00",
    nextUnlock: "1 Month",
    marketCap: "$ 450M",
    volume24h: "$ 15.8M",
    priceChange: "-1.5%",
    riskLevel: "Medium",
  },
];
export const blockchains = ["All", "BNB", "MATIC", "ARBITRUM", "ETHEREUM"];

export const states = [
  {
    number: "2M+",
    label: "Active Users",
    icon: <FaUsers />,
    description: "Trust us worldwide",
    growth: "+25% YoY",
  },
  {
    number: "$500M+",
    label: "Daily Volume",
    icon: <FaChartLine />,
    description: "In secure transactions",
    growth: "+40% YoY",
  },
  {
    number: "150+",
    label: "Countries Served",
    icon: <FaGlobe />,
    description: "Global presence",
    growth: "Expanding monthly",
  },
];
export const trendingTopics = [
  { id: 1, title: "NFT Market Trends", posts: 156 },
  { id: 2, title: "DeFi Innovations", posts: 143 },
  { id: 3, title: "Crypto Regulations", posts: 128 },
  { id: 4, title: "Web3 Development", posts: 112 },
];

export const testimonials = [
  {
    id: 1,
    content:
      "This platform has completely transformed how I manage my crypto investments. The interface is intuitive and the security features give me peace of mind.",
    author: {
      name: "Sarah Johnson",
      role: "Crypto Investor",
      avatar: Profile1,
    },
    rating: 5,
  },
  {
    id: 2,
    content:
      "The best crypto trading platform I've used. Fast transactions, low fees, and excellent customer support. Highly recommended!",
    author: {
      name: "Michael Chen",
      role: "Day Trader",
      avatar: Profile2,
    },
    rating: 5,
  },
  {
    id: 3,
    content:
      "As a beginner in crypto, I found this platform extremely user-friendly. The educational resources helped me understand the market better.",
    author: {
      name: "Emma Wilson",
      role: "New Investor",
      avatar: Profile3,
    },
    rating: 4,
  },
];

export const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "support@cryptotrade.com",
    link: "mailto:support@cryptotrade.com",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    info: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    info: "123 Crypto Street, Blockchain City",
    link: "#",
  },
];

export const footerLinks = {
  Platform: {
    Trading: [
      "Spot Trading",
      "Futures Trading",
      "Margin Trading",
      "OTC Trading",
    ],
    Services: ["Staking", "Lending", "Launchpad", "NFT Marketplace"],
    Resources: [
      "API Documentation",
      "Trading Bots",
      "Market Data",
      "Trading Tools",
    ],
  },
  Company: {
    About: ["Careers", "Blog", "Press", "Community"],
    Support: ["Help Center", "Contact Us", "Status", "Security"],
    Legal: [
      "Terms of Service",
      "Privacy Policy",
      "Risk Warning",
      "Cookie Policy",
    ],
  },
};
export const socialLinks = [
  { icon: <FaTwitter />, url: "#", name: "Twitter" },
  { icon: <FaTelegram />, url: "#", name: "Telegram" },
  { icon: <FaDiscord />, url: "#", name: "Discord" },
  { icon: <FaGithub />, url: "#", name: "GitHub" },
];

export const serviceData = [
  {
    icon: <FaGlobe />,
    title: "INSTANT CONNECT",
    description:
      "Connect instantly with our secure platform. Fast and reliable service available worldwide.",
  },
  {
    icon: <FaClock />,
    title: "24/7 SUPPORT",
    description:
      "We Are Ready To Answer All Your Questions And Advise You 24/7. Feel Free To Reach Us Anytime.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "EASY WITHDRAWAL",
    description:
      "Our Withdrawal Process Takes Only 24 Hours. We Are Highly Transparent About Transactions.",
  },
  {
    icon: <FaChartBar />,
    title: "DETAILED STATISTICS",
    description:
      "We Make Detailed Statistics Of Your Transaction. Also You Will Get All The Mining Logs.",
  },
];

export const innerOrbit = [
  { class: "orbit-i1" },
  { class: "orbit-i2" },
  { class: "orbit-i3" },

];

export const middleOrbit = [
  { class: "orbit-m1" },
  { class: "orbit-m2" },
  { class: "orbit-m3" },
  { class: "orbit-m4" },
  { class: "orbit-m5" },

];

export const outerOrbit = [
  { class: "orbit-o1" },
  { class: "orbit-o2" },
  { class: "orbit-o3" },
  { class: "orbit-o4" },
  { class: "orbit-o5" },
  { class: "orbit-o6" },

];

export const outerOrbit1 = [
  { class: "orbit-o11" },
  { class: "orbit-o12" },
  { class: "orbit-o13" },
  { class: "orbit-o14" },
  { class: "orbit-o15" },
  { class: "orbit-o16" },

];

export const hero2Badge=[
  {icon:"🟡","title":"BNB"},
  {icon:"🟣","title":"MATIC"},
  {icon:"🔵","title":"ARBITRUM"},
  {icon:"🔷","title":"ETHEREUM"}
];


