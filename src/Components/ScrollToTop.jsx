// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) return; // let HashLink handle hash scrolling
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}
