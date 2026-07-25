import HeroName from "./HeroName";
import Avatar3D from "./Avatar3D";
import { SOCIAL_LINKS } from "../data/socialLinks";

function HeroSection({ heroVisible, scrollTo }) {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 lg:py-32">

      {/* Background glows - scaled for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"20%", right:"10%", width: "min(600px, 80vw)", height: "min(600px, 80vw)", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(20,120,80,.12), transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"10%", left:"5%", width: "min(400px, 70vw)", height: "min(400px, 70vw)", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(200,169,126,.05), transparent 70%)" }} />
      </div>
      <div className="absolute left-0 right-0 h-px gold-line hidden md:block" style={{ top:"33%" }} />
      <div className="absolute left-0 right-0 h-px gold-line opacity-40 hidden md:block" style={{ bottom:"25%" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">

        {/* Left — text */}
        <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px)", transition: "all 1.1s ease" }}>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#c8a97e]" />
            <span className="text-[#c8a97e]/70 text-[9px] sm:text-[10px] tracking-[.4em] sm:tracking-[.5em] uppercase font-mono">Mern Stack Developer</span>
          </div>

          <HeroName />

          <div className="h-px gold-line mb-6 sm:mb-8 opacity-40 max-w-xs" />

          <p className="text-[#4a9a7a] text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8 sm:mb-10 max-w-lg">
            I am a passionate MERN Stack and Full-Stack Developer specializing in building scalable web applications using Next.js, React.js, Node.js, Express.js, and MongoDB.
            My programming journey is driven by a love for problem-solving, clean logic, and crafting seamless, user-friendly digital experiences from scratch.
            Outside of coding, I enjoy exploring new places through travel and staying active with sports to keep my mind sharp.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button onClick={() => scrollTo("Projects")}
              className="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[.2em] sm:tracking-[.25em] uppercase font-mono font-medium transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,169,126,.3)]"
              style={{ background: "linear-gradient(135deg, #c8a97e, #a0784e)", color: "black" }}>
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
            <button onClick={() => scrollTo("Contact")}
              className="px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[.2em] sm:tracking-[.25em] uppercase font-mono border border-[#071e18] text-[#4a9a7a] hover:border-[#c8a97e]/40 hover:text-[#c8a97e] transition-all duration-300">
              Contact
            </button>

            {/* Download CV Button */}
            <a href="https://drive.google.com/uc?export=download&id=1xGTOngWL_vkiiZKZOebEMLRQuZrm1mns" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] tracking-[.2em] sm:tracking-[.25em] uppercase font-mono border border-[#c8a97e]/40 text-[#c8a97e] hover:bg-[#c8a97e]/10 transition-all duration-300 cursor-pointer">
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center flex-wrap gap-3 mb-10 sm:mb-14">
            <span className="text-green-400 text-[9px] tracking-[.3em] sm:tracking-[.35em] uppercase font-mono">Find me on</span>
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
          <div className="flex gap-8 sm:gap-10">
            {[["2+", "Years Exp"], ["20+", "Projects"],].map(([n, l]) => (
              <div key={l}>
                <div className="gold-shimmer text-2xl sm:text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n}</div>
                <div className="text-green-400 text-[8px] sm:text-[9px] tracking-[.3em] sm:tracking-[.35em] uppercase font-mono">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="flex justify-center lg:justify-end w-full overflow-hidden mt-8 lg:mt-0"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px) scale(.95)", transition: "all 1.3s ease .2s" }}>
          <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none">
            <Avatar3D />
          </div>
        </div>
      </div>

      {/* Scroll cue - Hidden on small mobile screens to prevent overlap */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-30">
        <span className="text-[8px] tracking-[.4em] uppercase font-mono text-[#c8a97e]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c8a97e] to-transparent" />
      </div>
    </section>
  );
}

export default HeroSection;