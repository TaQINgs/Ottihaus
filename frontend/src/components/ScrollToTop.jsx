import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser's automatic scroll restoration on mount.
  // This prevents the browser from restoring the previous scroll
  // position from history, which happens OUTSIDE React's lifecycle.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // useLayoutEffect fires synchronously AFTER DOM mutations but
  // BEFORE the browser paints. This guarantees the user never
  // sees the old scroll position on the new page.
  useLayoutEffect(() => {
    // Override CSS scroll-behavior: smooth to prevent animated scroll
    const htmlEl = document.documentElement;
    const prevBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";

    // Instant jump to top
    window.scrollTo(0, 0);

    // Double-rAF: wait for two paint frames before restoring smooth
    // scroll. This ensures the scrollY=0 position has fully committed
    // and IntersectionObservers have recalculated with the correct
    // viewport before smooth scrolling is re-enabled.
    let raf1;
    let raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        htmlEl.style.scrollBehavior = prevBehavior;
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
}
