import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router's client-side navigation never resets scroll position on its
 * own — the new page just renders wherever the old page's scrollY happened
 * to be, and the global `scroll-behavior: smooth` then animates any further
 * adjustment, making a link click look like a random scroll rather than a
 * real page change. Jumps to the top instantly (bypassing the smooth CSS)
 * on every path change, same as a normal multi-page site.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
