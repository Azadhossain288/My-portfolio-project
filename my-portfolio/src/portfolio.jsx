import { useState, useEffect } from "react";
import { PROJECTS } from "./data/projects";

import Navbar              from "./components/Navbar";
import HeroSection         from "./components/HeroSection";
import SkillsSection       from "./components/SkillsSection";
import ProjectsSection     from "./components/ProjectsSection";
import ContactSection      from "./components/ContactSection";
import Footer              from "./components/Footer";
import CertificatesSection from "./components/CertificatesSection";
import EducationSection    from "./components/EducationSection";
import CodingProfilesSection from "./components/CodingProfilesSection";

export default function Portfolio() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [heroVisible,  setHeroVisible]  = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // আলাদা পেজের জন্য স্টেট

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 150);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setSelectedProject(null); 
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#020d12", color: "white", minHeight: "100vh" }}
      className="antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#020d12}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#c8a97e,#a0784e);border-radius:99px}
        .gold-shimmer{
          background:linear-gradient(90deg,#a0784e,#c8a97e,#e8d5b0,#f0e0b8,#c8a97e,#a0784e);
          background-size:300%;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 6s linear infinite;
        }
      `}</style>

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      
      {selectedProject ? (
        <div className="py-32 px-6 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedProject(null)}
            className="mb-8 text-xs font-mono uppercase tracking-widest text-[#c8a97e] hover:underline cursor-pointer">
            ← Back to Home / Projects
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: selectedProject.color || "#c8a97e" }}>
            {selectedProject.title}
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">{selectedProject.category}</p>

          <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-[400px] object-cover rounded-2xl mb-8 border border-white/10 shadow-2xl" />

          {/* Main Technology Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-3">Main Technology Stack Used:</h3>
            <div className="flex flex-wrap gap-2">
              {(selectedProject.techStack || selectedProject.tags || []).map(tech => (
                <span key={tech} className="text-xs font-mono px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Brief Description */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Brief Description:</h3>
            <p className="text-base text-gray-300 font-light leading-relaxed">{selectedProject.desc || selectedProject.description}</p>
          </div>

          {/* Challenges Faced While Developing */}
          <div className="mb-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Challenges Faced While Developing:</h3>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              {selectedProject.challenges || "Implementing secure session management, role-based access control, and ensuring synchronization between server-side filtering/pagination and smooth state updates presented minor architectural hurdles which were successfully resolved."}
            </p>
          </div>

          {/* Potential Improvements & Future Plans */}
          <div className="mb-10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#c8a97e] mb-2">Potential Improvements & Future Plans:</h3>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              {selectedProject.futurePlans || "Planning to introduce real-time interaction features, extended analytics dashboards, and enhanced responsive accessibility enhancements for broader user engagement."}
            </p>
          </div>

          {/* Live project link & GitHub repository link (only client) */}
          <div className="flex flex-wrap gap-4">
            {(selectedProject.liveUrl || selectedProject.live) && (
              <a href={selectedProject.liveUrl || selectedProject.live} target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold bg-[#c8a97e] text-black hover:opacity-90 transition">
                Live Project Link
              </a>
            )}
            {(selectedProject.githubUrl || selectedProject.github) && (
              <a href={selectedProject.githubUrl || selectedProject.github} target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold bg-white/10 text-white hover:bg-white/20 transition border border-white/10">
                GitHub Repository (Client)
              </a>
            )}
          </div>
        </div>
      ) : (
        <>
          <HeroSection heroVisible={heroVisible} scrollTo={scrollTo} />
          <EducationSection />
          <SkillsSection />
          <CodingProfilesSection />
          <CertificatesSection />
          <ProjectsSection onSelectProject={setSelectedProject} />
          <ContactSection />
        </>
      )}

      <Footer />
    </div>
  );
}