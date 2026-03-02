import { useState, useEffect } from "react";

import Navbar          from "./components/Navbar";
import HeroSection     from "./components/HeroSection";
import SkillsSection   from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection  from "./components/ContactSection";
import Footer          from "./components/Footer";

export default function Portfolio() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [heroVisible,  setHeroVisible]  = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 150);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#020d12", color: "white", minHeight: "100vh" }}
      className="antialiased"
    >
      {/* ── Global styles & animations ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#020d12}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#c8a97e,#a0784e);border-radius:99px}

        @keyframes spin1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes spin2{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes floatBadge1{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes floatBadge2{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(74,222,128,.4)}50%{opacity:.8;box-shadow:0 0 0 4px rgba(74,222,128,0)}}
        @keyframes shimmer{0%{background-position:-300% center}100%{background-position:300% center}}
        @keyframes grain{
          0%,100%{transform:translate(0,0)}20%{transform:translate(-2%,-2%)}
          40%{transform:translate(2%,1%)}60%{transform:translate(-1%,3%)}80%{transform:translate(3%,-1%)}
        }

        .gold-shimmer{
          background:linear-gradient(90deg,#a0784e,#c8a97e,#e8d5b0,#f0e0b8,#c8a97e,#a0784e);
          background-size:300%;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 6s linear infinite;
        }
        .gold-line{background:linear-gradient(90deg,transparent,rgba(200,169,126,.3),transparent)}

        .grain-overlay::before{
          content:'';position:fixed;inset:-100%;width:300%;height:300%;
          opacity:.025;pointer-events:none;z-index:9999;
          animation:grain 7s steps(1) infinite;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }

        input,textarea{outline:none;color:white;background:transparent!important}
        input::placeholder,textarea::placeholder{color:#071e18}
        input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus{
          -webkit-box-shadow:0 0 0 1000px #020d12 inset!important;
          -webkit-text-fill-color:white!important;
        }
      `}</style>

      <div className="grain-overlay" />

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection    heroVisible={heroVisible} scrollTo={scrollTo} />
      <SkillsSection  />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
