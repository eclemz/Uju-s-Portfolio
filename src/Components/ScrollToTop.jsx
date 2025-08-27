import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    let timeoutId;
    const rafId = requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 5); // delay tweak
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash, location.key]);

  return null;
}
