import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(true);

  const mouseRef = useRef({ x: 0, y: 0 });
  const hoverTypeRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isClickingRef = useRef(false);

  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkDevice = () => {
      const isTouch = touchQuery.matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const reducedMotion = motionQuery.matches;
      setIsMobile(isTouch || reducedMotion);
    };

    checkDevice();
    touchQuery.addEventListener("change", checkDevice);
    motionQuery.addEventListener("change", checkDevice);

    return () => {
      touchQuery.removeEventListener("change", checkDevice);
      motionQuery.removeEventListener("change", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const containerEl = document.querySelector(".custom-cursor-container");

    const updateHoverType = (target) => {
      if (!target) {
        hoverTypeRef.current = null;
        return;
      }

      const isBtn = target.closest(".btn") || target.closest("button") || target.tagName === "BUTTON";
      const isNavLink = target.closest(".nav-link-animated") || target.closest("header nav a");
      const isProductCard = target.closest(".product-card");
      const isHeroImg = target.closest(".hero-editorial__img") || target.closest(".contact-hero__img");

      if (isBtn) {
        hoverTypeRef.current = "button";
      } else if (isNavLink) {
        hoverTypeRef.current = "nav-link";
      } else if (isProductCard) {
        hoverTypeRef.current = "product-card";
      } else if (isHeroImg) {
        hoverTypeRef.current = "hero-image";
      } else {
        hoverTypeRef.current = null;
      }
    };

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (containerEl) containerEl.classList.add("custom-cursor--visible");
      }

      updateHoverType(e.target);
    };

    const onMouseOver = (e) => updateHoverType(e.target);
    const onMouseDown = () => { isClickingRef.current = true; };
    const onMouseUp = () => { isClickingRef.current = false; };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      if (containerEl) containerEl.classList.remove("custom-cursor--visible");
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      if (containerEl) containerEl.classList.add("custom-cursor--visible");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Outer ring position (lerp-based, no spring)
    let currentX = 0;
    let currentY = 0;

    // Interpolated visual values
    let currentOuterScale = 1.0;
    let currentInnerScale = 1.0;
    let currentBgOpacity = 0.0;
    let currentBorderWidth = 1.5;
    let currentTextOpacity = 0.0;

    const history = [];

    const tick = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Smooth lerp for outer ring — 0.08 gives a gentle, premium trailing feel
      // (at 60fps this means ~87% of distance covered in ~250ms)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      // Snap to target when very close to eliminate micro-jitter
      if (Math.abs(targetX - currentX) < 0.1) currentX = targetX;
      if (Math.abs(targetY - currentY) < 0.1) currentY = targetY;

      // Determine target visual state from hover type
      let targetOuterScale = 1.0;
      let targetInnerScale = 1.0;
      let targetBgOpacity = 0.0;
      let targetBorderWidth = 1.5;
      let targetTextOpacity = 0.0;

      const activeHover = hoverTypeRef.current;

      if (isClickingRef.current) {
        targetOuterScale = 0.8;
        targetInnerScale = 0.8;
      } else if (activeHover === "button") {
        // Merge: outer shrinks into a small filled dot
        targetOuterScale = 0.45;
        targetInnerScale = 0.0;
        targetBgOpacity = 1.0;
        targetBorderWidth = 0.0;
      } else if (activeHover === "nav-link") {
        targetOuterScale = 0.4;
        targetInnerScale = 0.0;
        targetBgOpacity = 1.0;
        targetBorderWidth = 0.0;
      } else if (activeHover === "hero-image") {
        // Expand slightly, filled — NO text
        targetOuterScale = 1.3;
        targetInnerScale = 0.0;
        targetBgOpacity = 0.85;
        targetBorderWidth = 0.0;
      }

      // Smooth interpolation for all visual properties (~250ms equivalent)
      const ease = 0.12;
      currentOuterScale += (targetOuterScale - currentOuterScale) * ease;
      currentInnerScale += (targetInnerScale - currentInnerScale) * ease;
      currentBgOpacity += (targetBgOpacity - currentBgOpacity) * ease;
      currentBorderWidth += (targetBorderWidth - currentBorderWidth) * ease;
      currentTextOpacity += (targetTextOpacity - currentTextOpacity) * ease;

      // Compose transforms: translate3d(pos) + translate(-50%,-50%) + scale
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${currentInnerScale})`;
      }

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentOuterScale})`;
        outerRef.current.style.backgroundColor = `rgba(77, 54, 46, ${currentBgOpacity})`;
        outerRef.current.style.borderColor = `rgba(77, 54, 46, ${0.6 + currentBgOpacity * 0.4})`;
        outerRef.current.style.borderWidth = `${currentBorderWidth}px`;

        // Only show text for product-card hover
      }

      // Trail history
      history.unshift({ x: currentX, y: currentY });
      if (history.length > 8) history.pop();

      trailRefs.current.forEach((el, index) => {
        if (!el) return;
        const posIndex = (index + 1) * 2;
        const pos = history[posIndex] || history[history.length - 1];
        if (pos) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${currentOuterScale})`;
          el.style.backgroundColor = `rgba(77, 54, 46, ${currentBgOpacity * 0.05})`;
          el.style.borderWidth = `${currentBorderWidth}px`;
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    let rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="custom-cursor-container">
      {/* Subtle trail nodes */}
      <div
        ref={(el) => (trailRefs.current[0] = el)}
        className="custom-cursor__trail custom-cursor__trail--1"
      />
      <div
        ref={(el) => (trailRefs.current[1] = el)}
        className="custom-cursor__trail custom-cursor__trail--2"
      />
      <div
        ref={(el) => (trailRefs.current[2] = el)}
        className="custom-cursor__trail custom-cursor__trail--3"
      />
      <div ref={outerRef} className="custom-cursor__outer" />

      {/* Main inner dot */}
      <div ref={innerRef} className="custom-cursor__inner" />
    </div>
  );
}
