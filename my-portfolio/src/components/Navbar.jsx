import { NAV_LINKS } from "../data/navLinks";

function Navbar({ scrolled, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled ? "1px solid rgba(200,169,126,.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        background: scrolled ? "rgba(2,13,18,.92)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollTo("About")}
          className="text-2xl font-bold tracking-widest"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="gold-shimmer">AH</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-[#4a9a7a] hover:text-[#c8a97e] transition-colors duration-300 text-[11px] tracking-[.28em] uppercase font-mono"
            >
              {l}
            </button>
          ))}
          <button className="text-[11px] tracking-[.22em] uppercase font-mono px-5 py-2.5 border border-[#c8a97e]/30 text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black transition-all duration-300">
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#c8a97e]" onClick={() => setMenuOpen((m) => !m)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#0a2a1a] px-8 py-6 flex flex-col gap-5"
          style={{ background: "#020d12" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-[#4a9a7a] hover:text-[#c8a97e] text-[11px] tracking-[.28em] uppercase font-mono text-left">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
