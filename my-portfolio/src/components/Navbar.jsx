import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/navLinks";

function Navbar({ scrolled, menuOpen, setMenuOpen, scrollTo }) {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase()));
      const scrollY = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
          setActive(NAV_LINKS[i]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link) => {
    setActive(link);
    scrollTo(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-4 px-8"
      style={{ pointerEvents: "none" }}>

      {/* ── LEFT — AH Logo ── */}
      <button
        onClick={() => handleClick("About")}
        className="text-2xl font-bold tracking-widest"
        style={{
          pointerEvents: "auto",
          fontFamily: "'Cormorant Garamond', serif",
        }}>
        <span className="gold-shimmer">AH</span>
      </button>

      {/* ── RIGHT — Pill navbar ── */}
      <div className="flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          pointerEvents: "auto",
          background: "rgba(10, 15, 28, 0.92)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <button key={link}
              onClick={() => handleClick(link)}
              className="px-5 py-2 rounded-full text-[11px] tracking-[.2em] uppercase font-mono font-semibold transition-all duration-300"
              style={{
                background: active === link ? "#4ade80" : "transparent",
                color: active === link ? "#000" : "rgba(255,255,255,0.55)",
                boxShadow: active === link ? "0 4px 15px rgba(74,222,128,0.35)" : "none",
              }}
              onMouseEnter={e => { if (active !== link) e.currentTarget.style.color = "rgba(255,255,255,0.9)"; }}
              onMouseLeave={e => { if (active !== link) e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
              {link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden px-3 py-2 text-[#4ade80]"
          onClick={() => setMenuOpen(m => !m)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 rounded-2xl px-4 py-4 flex flex-col gap-2"
          style={{
            pointerEvents: "auto",
            background: "rgba(10,15,28,0.97)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
          }}>
          {NAV_LINKS.map(link => (
            <button key={link}
              onClick={() => handleClick(link)}
              className="px-4 py-3 rounded-xl text-[11px] tracking-[.2em] uppercase font-mono font-semibold text-left transition-all duration-200"
              style={{
                background: active === link ? "#4ade80" : "transparent",
                color: active === link ? "#000" : "rgba(255,255,255,0.6)",
              }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;