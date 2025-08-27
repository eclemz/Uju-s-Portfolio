import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      let current = "";
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0) {
            current = id;
          }
        }
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
