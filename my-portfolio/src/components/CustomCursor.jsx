import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animateRing);
    };

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest("a, button, input, textarea, [role='button']");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", checkHover);
    animateRing();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <>
      
      <div
        ref={dotRef}
        className="hidden md:block"
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#4ade80",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      <div
        ref={ringRef}
        className="hidden md:block"
        style={{
          position: "fixed",
          width: hovering ? 50 : 32,
          height: hovering ? 50 : 32,
          borderRadius: "50%",
          border: `1px solid ${hovering ? "#4ade80" : "rgba(200,169,126,0.6)"}`,
          background: hovering ? "rgba(74,222,128,0.08)" : "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        }}
      />
    </>
  );
}

export default CustomCursor;