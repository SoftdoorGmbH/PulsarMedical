import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top when the route changes (e.g. via `<Link>`). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
