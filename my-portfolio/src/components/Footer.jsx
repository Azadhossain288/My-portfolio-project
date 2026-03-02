import { SOCIAL_LINKS } from "../data/socialLinks";

function Footer() {
  return (
    <footer className="border-t border-green-300 py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
        <div className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <span className="gold-shimmer">Azad Hossain</span>
        </div>

        <div className="flex gap-2">
          {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#0a2a1a] transition-all duration-300"
              onMouseEnter={e => { e.currentTarget.style.borderColor = color+"55"; e.currentTarget.style.background = color+"12"; e.currentTarget.style.color = color; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.background=""; e.currentTarget.style.color=""; }}
              style={{ color: "#4ade80" }}>
              {icon}
            </a>
          ))}
        </div>

        <div className="text-green-400 text-[9px] tracking-[.35em] uppercase font-mono">© 2026 — All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
