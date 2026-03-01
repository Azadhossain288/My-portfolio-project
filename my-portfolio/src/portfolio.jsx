
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

import myPicture from "./assets/My-picture.png";
import { useState, useEffect, useRef } from "react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Azadhossain288",
    color: "#e8e8e8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/azad-hossain-293960347/",
    color: "#0a66c2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/azad288",
    color: "#1890ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4.5 7.5A1.5 1.5 0 013 6V4.5A1.5 1.5 0 014.5 3h3A1.5 1.5 0 019 4.5V6a1.5 1.5 0 01-1.5 1.5h-3zm0 13.5A1.5 1.5 0 013 19.5v-9A1.5 1.5 0 014.5 9h3A1.5 1.5 0 019 10.5v9A1.5 1.5 0 017.5 21h-3zm7.5 0a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 0112 12h3a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0115 21h-3zm7.5 0A1.5 1.5 0 0118 19.5V9A1.5 1.5 0 0119.5 7.5h3A1.5 1.5 0 0124 9v10.5A1.5 1.5 0 0122.5 21h-3z"/>
      </svg>
    ),
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/azad288",
    color: "#5b4638",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.257.004C5.285.104.2 5.089 0 11.062c-.114 3.331.996 6.088 3.044 8.274.53.571 1.117 1.112 1.66 1.587.386.336.753.596 1.074.802.264.17.582.26.903.26h10.638c.32 0 .639-.09.902-.26.322-.206.688-.466 1.075-.802.543-.475 1.129-1.016 1.659-1.587C22.903 17.204 24 14.393 24 11.062 24 4.875 18.55-.104 11.904 0c-.217.003-.431.003-.647.004zm.395 2.141c.109 0 .217.003.325.006 5.317.148 9.623 4.544 9.623 9.913 0 2.78-.974 5.086-2.717 6.869-.328.337-.688.64-1.088.965-.26.211-.525.406-.782.586H6.987a14.81 14.81 0 01-.782-.586c-.4-.325-.76-.628-1.088-.965C3.374 17.15 2.4 14.844 2.4 12.064c0-5.412 4.367-9.835 9.736-9.917.04-.001.074-.002.116-.002z"/>
      </svg>
    ),
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/azadhossain01621",
    color: "#00ea64",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 11.885 0 13-.642 1.114-9.107 6-10.392 6-1.284 0-9.75-4.886-10.392-6C.963 17.885.963 7.115 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057a.258.258 0 00-.258-.258h-1.93a.258.258 0 00-.26.258v9.886c0 .141.116.258.26.258h1.93a.258.258 0 00.258-.258v-3.875h4.074v3.875c0 .141.117.258.258.258h1.932a.258.258 0 00.258-.258V7.057a.258.258 0 00-.258-.258h-1.932z"/>
      </svg>
    ),
  },
];


const SKILLS = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "UI / Figma", level: 70 },
];

const PROJECTS = [
 {
  num: "01",
  title: "ShohojPay",
  category: "Mobile Financial Services",
  year: "2026",
  tags: ["TailwindCSS", "JavaScript", "Logic"],
  liveUrl: "https://azadhossain288.github.io/ShohojPay-project/", 
  desc: "This is a ShojPay digital payment application that allows users to send money, cash out, add money, pay bills, and receive bonuses easily. ",
  color: "#c8a97e",
  bg: "linear-gradient(135deg, #1a0812 0%, #020d12 100%)",
  icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22C16.59 21.05 20 16.19 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12.5L11 14.5L15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
},
  {
    num: "02",
    title: "Job Tracker",
    category: "Track Your Job Applications Smarter",
    year: "2026",
    tags: ["JavaScript", "TailwindCSS", "LocalStorage"],
    liveUrl: "https://azadhossain288.github.io/Job-Tracker-Project-Using-Javascript-A-4-/",
    desc: "This is a Job Tracker web application that helps users manage and monitor their job applications in one organized dashboard.It allows users to track application status (Interview, Rejected), view job details, filter listings, and manage their job search efficiently.",
    color: "#e8c47a",
    bg: "linear-gradient(135deg, #041a12 0%, #020e0a 100%)",

    icon: "🗂️",
  },
  {
    num: "03",
    title: "WeatherVerse",
    category: "Data Dashboard",
    year: "2023",
    tags: ["React", "REST API", "GSAP"],
    liveUrl: "https://azadhossain288.github.io/ShohojPay-project/",
    desc: "Cinematic weather dashboard with OpenWeather API integration, animated transitions and real-time atmospheric data.",
    color: "#d4b896",
    bg: "linear-gradient(135deg, #031a10 0%, #021020 100%)",
    icon: "🌦️",
  },
  {
    num: "04",
    title: "DevBlog",
    category: "Content Platform",
    year: "2023",
    tags: ["Next.js", "MDX", "Vercel"],
    liveUrl: "https://azadhossain288.github.io/ShohojPay-project/",
    desc: "Markdown-powered personal blog with syntax highlighting, dark/light toggle, and RSS feed for developer storytelling.",
    color: "#c9a870",
    bg: "linear-gradient(135deg, #050f28 0%, #020d0a 100%)",
    icon: "✍️",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function HeroName() {
  const greeting = "Hi, I'm";
  const firstName = "Azad";
  const lastName = "Hossain";

  const [greetDone, setGreetDone] = useState(false);
  const [firstDone, setFirstDone] = useState(false);
  const [greetCount, setGreetCount] = useState(0);
  const [firstCount, setFirstCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const reset = () => {
    setGreetDone(false);
    setFirstDone(false);
    setGreetCount(0);
    setFirstCount(0);
    setLastCount(0);
  };

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Type greeting
  useEffect(() => {
    if (greetCount < greeting.length) {
      const t = setTimeout(() => setGreetCount(c => c + 1), 70);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setGreetDone(true), 200);
      return () => clearTimeout(t);
    }
  }, [greetCount]);

  // Type firstName after greeting
  useEffect(() => {
    if (!greetDone) return;
    if (firstCount < firstName.length) {
      const t = setTimeout(() => setFirstCount(c => c + 1), 90);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setFirstDone(true), 150);
      return () => clearTimeout(t);
    }
  }, [greetDone, firstCount]);

  // Type lastName after firstName
  useEffect(() => {
    if (!firstDone) return;
    if (lastCount < lastName.length) {
      const t = setTimeout(() => setLastCount(c => c + 1), 90);
      return () => clearTimeout(t);
    }
  }, [firstDone, lastCount]);

  // Loop: after all done, wait 2s then restart
  const allDone = lastCount === lastName.length;
  useEffect(() => {
    if (!allDone) return;
    const t = setTimeout(() => reset(), 2000);
    return () => clearTimeout(t);
  }, [allDone]);

  return (
    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1, marginBottom: "2rem" }}>
      {/* "Hi, I'm" — light typewriter */}
      <div className="text-2xl md:text-3xl font-light tracking-widest mb-3"
        style={{ color: "rgba(255,255,255,.35)", minHeight: "2rem" }}>
        {greeting.slice(0, greetCount)}
        {!greetDone && (
          <span style={{ opacity: cursorVisible ? 1 : 0, color: "#c8a97e", transition: "opacity .1s" }}>|</span>
        )}
      </div>

      {/* "Azad" — letter-by-letter with stagger */}
      <div className="text-6xl md:text-7xl xl:text-8xl font-light tracking-tight mb-1 overflow-hidden"
        style={{ color: "rgba(255,255,255,.15)" }}>
        {firstName.split("").map((ch, i) => (
          <span key={i} style={{
            display: "inline-block",
            opacity: i < firstCount ? 1 : 0,
            transform: i < firstCount ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.4s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms`,
          }}>{ch}</span>
        ))}
      </div>

      {/* "Hossain" — gold shimmer, letter-by-letter */}
      <div className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight" style={{ minHeight: "5rem" }}>
        {lastName.split("").map((ch, i) => (
          <span key={i} className={i < lastCount ? "gold-shimmer" : ""}
            style={{
              display: "inline-block",
              fontFamily: "'Cormorant Garamond', serif",
              opacity: i < lastCount ? 1 : 0,
              transform: i < lastCount ? "translateY(0) scale(1)" : "translateY(50px) scale(.8)",
              transition: `opacity 0.5s ease ${i * 50}ms, transform 0.6s cubic-bezier(.34,1.56,.64,1) ${i * 50}ms`,
              WebkitTextFillColor: i < lastCount ? undefined : "rgba(200,169,126,.08)",
            }}>{ch}</span>
        ))}
        {/* Cursor at end */}
        {!allDone && firstDone && (
          <span style={{ opacity: cursorVisible ? 1 : 0, color: "#c8a97e", transition: "opacity .1s", fontSize: "0.8em" }}>|</span>
        )}
      </div>
    </h1>
  );
}

function Avatar3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setMouse({ x: dx, y: dy });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <div ref={containerRef} className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ width: 380, height: 380 }}>

      {/* Outer rotating ring */}
      <div className="absolute inset-0 rounded-full border border-[#c8a97e]/10"
        style={{ animation: "spin1 20s linear infinite" }} />
      <div className="absolute rounded-full border border-[#c8a97e]/20"
        style={{ inset: 20, animation: "spin2 14s linear infinite" }}>
        {/* Orbit dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c8a97e]"
          style={{ boxShadow: "0 0 8px #c8a97e, 0 0 20px #c8a97e88" }} />
      </div>
      <div className="absolute rounded-full border border-[#c8a97e]/10"
        style={{ inset: 48, animation: "spin1 10s linear infinite reverse" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#e8d5b0]/60" />
      </div>

      {/* Main card — 3D tilt */}
      <div className="relative z-10 transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(800px) rotateY(${mouse.x * 15}deg) rotateX(${-mouse.y * 12}deg)`,
          width: 200, height: 240,
        }}>
        {/* Card body */}
        <div className="w-full h-full rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #061a10, #030c1e)",
            border: "1px solid rgba(200,169,126,.25)",
            boxShadow: `
              0 30px 80px rgba(0,0,0,.8),
              0 0 0 1px rgba(200,169,126,.05),
              inset 0 1px 0 rgba(200,169,126,.15),
              ${mouse.x * 20}px ${mouse.y * 20}px 60px rgba(0,0,0,.4)
            `,
          }}>
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl"
            style={{ background: `radial-gradient(circle at ${50 + mouse.x * 30}% ${50 + mouse.y * 30}%, rgba(200,169,126,.08), transparent 60%)` }} />

          {/* Avatar emoji section*/}
<div className="absolute inset-0 flex flex-col items-center justify-center">
  
 
<img 
    src={myPicture}
    alt="Azad Hossain"  
    className="w-56 h-56 rounded-[2.5rem] object-cover mb-4" 
    style={{ 
      border: "4px solid rgba(200,169,126,.45)", 
      boxShadow: "0 15px 50px rgba(0,0,0,.7)", 
      animation: "float 4s ease-in-out infinite",
      display: "block"
    }}
/>

  <div className="text-[#c8a97e]/60 text-xs tracking-[.25em] uppercase font-mono">Frontend Dev</div>
   </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-[#c8a97e]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" style={{ animation: "pulse 2s infinite" }} />
            <span className="text-[9px] text-[#c8a97e]/70 font-mono tracking-widest">AVAILABLE</span>
          </div>

          {/* Bottom shine */}
          <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-3xl"
            style={{ background: "linear-gradient(to top, rgba(200,169,126,.06), transparent)" }} />
          {/* Top left corner accent */}
          <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-[#c8a97e]/40 to-transparent" />
          <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-[#c8a97e]/40 to-transparent" />
        </div>

        {/* Floating skill badges */}
        <div className="absolute -right-12 top-6 bg-[#041a12]/90 backdrop-blur-sm border border-[#c8a97e]/20 rounded-xl px-3 py-2 whitespace-nowrap"
          style={{ animation: "floatBadge1 3.5s ease-in-out infinite", boxShadow: "0 8px 20px rgba(0,0,0,.5)" }}>
          <span className="text-[10px] font-mono text-[#c8a97e]">⚛️ React</span>
        </div>
        <div className="absolute -left-14 bottom-14 bg-[#041a12]/90 backdrop-blur-sm border border-[#c8a97e]/20 rounded-xl px-3 py-2 whitespace-nowrap"
          style={{ animation: "floatBadge2 4s ease-in-out infinite", boxShadow: "0 8px 20px rgba(0,0,0,.5)" }}>
          <span className="text-[10px] font-mono text-[#c8a97e]">🎨 Tailwind</span>
        </div>
        <div className="absolute -left-10 top-8 bg-[#041a12]/90 backdrop-blur-sm border border-[#c8a97e]/20 rounded-xl px-3 py-2 whitespace-nowrap"
          style={{ animation: "floatBadge1 5s ease-in-out infinite reverse", boxShadow: "0 8px 20px rgba(0,0,0,.5)" }}>
          <span className="text-[10px] font-mono text-[#c8a97e]">⚡ JS</span>
        </div>
      </div>
    </div>
  );
}

const SKILL_META = {
  "HTML5":           { icon: "🌐", color: "#e8a87e" },
  "CSS3 / Tailwind": { icon: "🎨", color: "#7eb8e8" },
  "JavaScript":      { icon: "⚡", color: "#e8d87e" },
  "React.js":        { icon: "⚛️", color: "#7ee8e8" },
  "TypeScript":      { icon: "🔷", color: "#7e9de8" },
  "UI / Figma":      { icon: "✏️", color: "#c87ee8" },
};

function SkillRow({ name, level, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);
  const meta = SKILL_META[name] || { icon: "💡", color: "#c8a97e" };

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-b border-[#0a2a1a] overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 70}ms, transform 0.6s ease ${index * 70}ms`,
      }}>

      {/* Hover background glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${meta.color}08, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Left gold border reveal */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent, ${meta.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }} />

      <div className="relative z-10 py-5 px-4 flex items-center gap-5">
        {/* Number */}
        <span className="font-mono text-xs w-6 transition-colors duration-300"
          style={{ color: hovered ? meta.color : "rgba(200,169,126,.3)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-400 flex-shrink-0"
          style={{
            background: hovered ? `${meta.color}15` : "transparent",
            border: `1px solid ${hovered ? meta.color + "40" : "transparent"}`,
            transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-10deg)",
            opacity: hovered ? 1 : 0,
          }}>
          {meta.icon}
        </div>

        {/* Name */}
        <span className="flex-1 text-lg tracking-wide transition-colors duration-300"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: hovered ? meta.color : "white",
          }}>
          {name}
        </span>

        {/* Bar + percent */}
        <div className="flex items-center gap-4">
          {/* Progress bar */}
          <div className="relative w-28 md:w-52 h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ background: hovered ? `${meta.color}18` : "#0a2a1a" }}>
            <div className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${level}%` : "0%",
                background: hovered
                  ? `linear-gradient(90deg, ${meta.color}88, ${meta.color})`
                  : "linear-gradient(90deg, #c8a97e55, #c8a97e)",
                boxShadow: hovered ? `0 0 10px ${meta.color}80` : "0 0 4px rgba(200,169,126,.3)",
                transitionDelay: `${index * 70 + 300}ms`,
              }} />
          </div>

          {/* Percent */}
          <span className="font-mono text-xs w-8 text-right transition-all duration-300"
            style={{ color: hovered ? meta.color : "rgba(200,169,126,.4)" }}>
            {level}%
          </span>
        </div>
      </div>
    </div>
  );
}



function ProjectRow({ project, index }) {
  const [ref, visible] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} className="relative border-b border-green-600 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `all 0.6s ease ${index * 100}ms` }}>

      {/* Hover background reveal */}
      <div className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{ background: project.bg, opacity: hovered ? 1 : 0 }} />
      <div className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${project.color}0a, transparent)`, opacity: hovered ? 1 : 0 }} />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 py-7 md:py-8 grid grid-cols-12 gap-4 items-center">
        
        {/* Number */}
        <div className="col-span-1 font-mono text-xs transition-colors duration-300"
          style={{ color: hovered ? `${project.color}80` : "green" }}>{project.num}</div>

        {/* Icon — appears on hover */}
        <div className="col-span-1 text-2xl transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-20deg)" }}>
          {project.icon}
        </div>

        {/* Title */}
        <div className="col-span-10 md:col-span-4">
          <div className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? project.color : "white" }}>
            {project.title}
          </div>
          <div className="text-xs font-mono tracking-widest uppercase mt-0.5 transition-colors duration-300"
            style={{ color: hovered ? `${project.color}60` : "white" }}>
            {project.category}
          </div>

          {/* Mobile only — Live Demo button */}
          {project.liveUrl && (
            
              <a href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="md:hidden mt-3 inline-flex items-center gap-2 text-[10px] tracking-[.2em] uppercase font-mono px-3 py-1.5 border transition-all duration-300"
              style={{
                borderColor: project.color + "60",
                color: project.color,
                background: project.color + "15",
              }}
            >
              Live Demo ↗
            </a>
          )}
        </div>

        {/* Description + Live Button — desktop */}
        <div className="col-span-12 md:col-span-4 hidden md:block">
          <p className="text-sm leading-relaxed font-light transition-all duration-500 mb-4"
            style={{ color: hovered ? "#4a8a6a" : "transparent", transform: hovered ? "translateX(0)" : "translateX(10px)" }}>
            {project.desc}
          </p>
          {project.liveUrl && (
            
              <a href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[10px] tracking-[.25em] uppercase font-mono px-4 py-2 border transition-all duration-500"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(6px)",
                borderColor: project.color + "50",
                color: project.color,
                background: project.color + "10",
                pointerEvents: hovered ? "auto" : "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = project.color + "28";
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = project.color + "10";
                e.currentTarget.style.borderColor = project.color + "50";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>Live Demo</span>
              <span style={{ fontSize: "14px" }}>↗</span>
            </a>
          )}
        </div>

        {/* Tags + Year */}
        <div className="col-span-10 md:col-span-2 flex flex-col items-end gap-2">
          <div className="font-mono text-xs transition-colors duration-300"
            style={{ color: hovered ? `${project.color}60` : "white" }}>{project.year}</div>
          <div className="flex flex-wrap gap-1 justify-end">
            {project.tags.slice(0, 2).map(t => (
              <span key={t} className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 border rounded transition-all duration-300"
                style={{
                  borderColor: hovered ? `${project.color}40` : "white",
                  color: hovered ? project.color : "white",
                  background: hovered ? project.color + "0a" : "transparent",
                }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="col-span-2 md:col-span-1 flex justify-end">
          <div className="text-lg transition-all duration-500"
            style={{
              color: project.color,
              opacity: hovered ? 1 : 0.2,
              transform: hovered ? "translate(3px, -3px)" : "translate(0,0)"
            }}>↗</div>
        </div>
      </div>
    </div>
  );
}







export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#020d12", color: "white", minHeight: "100vh" }} className="antialiased">
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
        @keyframes fadeUp{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:none}}
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

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          borderBottom: scrolled ? "1px solid rgba(200,169,126,.08)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          background: scrolled ? "rgba(2,13,18,.92)" : "transparent",
        }}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <button onClick={() => scrollTo("About")} className="text-2xl font-bold tracking-widest"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="gold-shimmer">AH</span>
          </button>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-[#4a9a7a] hover:text-[#c8a97e] transition-colors duration-300 text-[11px] tracking-[.28em] uppercase font-mono">
                {l}
              </button>
            ))}
            <button className="text-[11px] tracking-[.22em] uppercase font-mono px-5 py-2.5 border border-[#c8a97e]/30 text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black transition-all duration-300">
              Hire Me
            </button>
          </div>
          <button className="md:hidden text-[#c8a97e]" onClick={() => setMenuOpen(m => !m)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-[#0a2a1a] px-8 py-6 flex flex-col gap-5"
            style={{ background: "#020d12" }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-[#4a9a7a] hover:text-[#c8a97e] text-[11px] tracking-[.28em] uppercase font-mono text-left">{l}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "20%", right: "10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,120,80,.12), transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,126,.05), transparent 70%)" }} />
        </div>

        {/* Subtle horizontal lines */}
        <div className="absolute left-0 right-0 h-px gold-line" style={{ top: "33%" }} />
        <div className="absolute left-0 right-0 h-px gold-line opacity-40" style={{ bottom: "25%" }} />

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

            {/* Social icons strip */}
            <div className="flex items-center gap-3 mb-14">
              <span className="text-green-400 text-[9px] tracking-[.35em] uppercase font-mono">Find me on</span>
              <div className="h-px flex-shrink-0 w-6 bg-[#0a2a1a]" />
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                    title={name}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#0a2a1a] transition-all duration-300"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + "60"; e.currentTarget.style.background = color + "15"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.color = color; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.background = ""; e.currentTarget.style.transform = ""; e.currentTarget.style.color = ""; }}
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

          {/* Right — 3D Avatar */}
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

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 border-t border-[#0a2a1a]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16 items-end">
            <div>
              <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono mb-3">Expertise</div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Skills</h2>
            </div>
            <p className="md:col-span-2 text-[#4a9a7a] text-sm leading-relaxed font-light">
              A curated set of technologies mastered through years of building real-world products — from pixel-perfect UIs to scalable React applications.
            </p>
          </div>
          {SKILLS.map((s, i) => <SkillRow key={s.name} {...s} index={i} />)}
          <div className="flex flex-wrap gap-2.5 mt-12">
            {["Git & GitHub", "Figma", "Vite", "Webpack", "Vercel", "Firebase", "REST APIs", "Responsive Design"].map(t => (
              <span key={t} className="text-green-400 tracking-[.25em] uppercase font-mono px-3 py-2 border border-[#0a2a1a] text-[#071e18] hover:border-[#c8a97e]/25 hover:text-[#c8a97e]/50 transition-all duration-200 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 border-t border-[#0a2a1a]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-end justify-between mb-4 flex-wrap gap-6">
            <div>
              <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono mb-3">Portfolio</div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Selected Work</h2>
            </div>
            <div className="text-[#071e18] text-xs font-mono tracking-widest uppercase">0{PROJECTS.length} Projects</div>
          </div>
          <p className="text-[#4a9a7a] text-sm font-light mb-10 max-w-xl">Hover over each project to explore details and see the full scope of the work.</p>
          <div className="border-t border-[#0a2a1a]">
            {PROJECTS.map((p, i) => <ProjectRow key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 border-t border-[#0a2a1a]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono mb-4">Let's Connect</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Start a <span className="gold-shimmer">Conversation</span>
            </h2>
            <p className="text-green-500 text-sm font-light">Have a project in mind? I'd love to bring your vision to life.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2 space-y-8">
              {[
                { label: "Email", value: "azadhossain016288@gmail.com" },
                { label: "Location", value: "Sylhet, Bangladesh" },
                { label: "Availability", value: "Open to work" },
              ].map(({ label, value }) => (
                <div key={label} className="border-b border-[#0cb360] pb-6">
                  <div className="text-[#061210] text-[9px] tracking-[.4em] uppercase font-mono mb-2">{label}</div>
                  <div className="text-[#c8a97e] text-sm font-light">{value}</div>
                </div>
              ))}
              <div className="flex flex-col gap-2.5 pt-2">
                {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 border border-[#0a2a1a] px-4 py-3 rounded-xl transition-all duration-300"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.background = color + "0d"; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.background = ""; e.currentTarget.style.transform = ""; }}>
                    {/* Icon box */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: color + "18", color }}>
                      {icon}
                    </div>
                    <span className="text-[11px] tracking-[.2em] uppercase font-mono text-[#0cb360] group-hover:text-white transition-colors duration-300 flex-1">{name}</span>
                    <span className="text-[#0a2a1a] group-hover:text-[#c8a97e] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSend} className="md:col-span-3 space-y-7">
              {[
                { label: "Full Name", key: "name", type: "text", placeholder: "Your Name" },
                { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="border-b border-[#0cb360] pb-1 focus-within:border-[#c8a97e]/25 transition-colors duration-300">
                  <label className="text-green-500 text-[9px] tracking-[.4em] uppercase font-mono block mb-3">{label}</label>
                  <input type={type} required placeholder={placeholder} value={formData[key]}
                    onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full text-sm pb-2 font-light" />
                </div>
              ))}
              <div className="border-b border-[#0cb360] pb-1 focus-within:border-[#c8a97e]/25 transition-colors duration-300">
                <label className="text-green-500 text-[9px] tracking-[.4em] uppercase font-mono block mb-3">Message</label>
                <textarea required rows={4} placeholder="Tell me about your project..." value={formData.message}
                  onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                  className="w-full text-sm font-light resize-none pb-2" />
              </div>
              <button type="submit"
                className="w-full py-4 text-[11px] tracking-[.3em] uppercase font-mono font-medium transition-all duration-500"
                style={{
                  background: sent ? "transparent" : "linear-gradient(135deg, #c8a97e, #a0784e)",
                  color: sent ? "#c8a97e" : "black",
                  border: sent ? "1px solid rgba(200,169,126,.25)" : "none",
                  boxShadow: sent ? "none" : "0 10px 40px rgba(200,169,126,.2)",
                }}>
                {sent ? " Message Received" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-green-300 py-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
          <div className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="gold-shimmer">Azad Hossain</span>
          </div>
          {/* Footer social icons */}
          <div className="flex gap-2">
            {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name}
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#0a2a1a] transition-all duration-300"
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.background = color + "12"; e.currentTarget.style.color = color; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.background = ""; e.currentTarget.style.color = ""; }}
                style={{ color: "green-400" }}>
                {icon}
              </a>
            ))}
          </div>
          <div className="text-green-400 text-[9px] tracking-[.35em] uppercase font-mono">© 2026 — All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}
