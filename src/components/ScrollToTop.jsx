import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force instant scroll (no smooth behavior)
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    
    // Reset scroll behavior after scroll
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

