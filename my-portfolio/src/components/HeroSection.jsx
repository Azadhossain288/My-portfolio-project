import HeroName from "./HeroName";
import Avatar3D from "./Avatar3D";
import { SOCIAL_LINKS } from "../data/socialLinks";

function HeroSection({ heroVisible, scrollTo }) {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:"absolute", top:"20%", right:"10%", width:600, height:600, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(20,120,80,.12), transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"10%", left:"5%", width:400, height:400, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(200,169,126,.05), transparent 70%)" }} />
      </div>
      <div className="absolute left-0 right-0 h-px gold-line" style={{ top:"33%" }} />
      <div className="absolute left-0 right-0 h-px gold-line opacity-40" style={{ bottom:"25%" }} />

      <div className="max-w-6xl mx-auto px-8 py-32 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px)", transition: "all 1.1s ease" }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8a97e]" />
            <span className="text-[#c8a97e]/70 text-[10px] tracking-[.5em] uppercase font-mono">Frontend Developer</span>
          </div>

          <HeroName />

          <div className="h-px gold-line mb-8 opacity-40 max-w-xs" />

          <p className="text-[#4a9a7a] text-base md:text-lg leading-relaxed font-light mb-10 max-w-md">
            I am a Web Developer skilled in building modern, user-friendly web applications.
            I also specialize in DSA and problem solving, focusing on efficient algorithms and clean logic.
            Strong analytical thinking and code optimization are my core strengths.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => scrollTo("Projects")}
              className="group flex items-center gap-3 px-7 py-3.5 text-[11px] tracking-[.25em] uppercase font-mono font-medium transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,169,126,.3)]"
              style={{ background: "linear-gradient(135deg, #c8a97e, #a0784e)", color: "black" }}>
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
            <button onClick={() => scrollTo("Contact")}
              className="px-7 py-3.5 text-[11px] tracking-[.25em] uppercase font-mono border border-[#071e18] text-[#4a9a7a] hover:border-[#c8a97e]/40 hover:text-[#c8a97e] transition-all duration-300">
              Contact
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mb-14">
            <span className="text-green-400 text-[9px] tracking-[.35em] uppercase font-mono">Find me on</span>
            <div className="h-px flex-shrink-0 w-6 bg-[#0a2a1a]" />
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#0a2a1a] transition-all duration-300"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color+"60"; e.currentTarget.style.background = color+"15"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.color = color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.background=""; e.currentTarget.style.transform=""; e.currentTarget.style.color=""; }}
                  style={{ color: "#4a9a7a" }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {[["2+", "Years Exp"], ["20+", "Projects"], ["15+", "Clients"]].map(([n, l]) => (
              <div key={l}>
                <div className="gold-shimmer text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n}</div>
                <div className="text-green-400 text-[9px] tracking-[.35em] uppercase font-mono">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="flex justify-center lg:justify-end"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px) scale(.95)", transition: "all 1.3s ease .2s" }}>
          <Avatar3D />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[9px] tracking-[.5em] uppercase font-mono text-[#c8a97e]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c8a97e] to-transparent" />
      </div>
    </section>
  );
}

export default HeroSection;
