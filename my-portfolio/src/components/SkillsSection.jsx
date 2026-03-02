import { useState } from "react";
import { SKILLS, SKILL_META, EXTRA_TOOLS } from "../data/skills";
import useInView from "../hooks/useInView";

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

      {/* Hover glow */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${meta.color}08, transparent 60%)`, opacity: hovered ? 1 : 0 }} />
      <div className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500"
        style={{ background: `linear-gradient(to bottom, transparent, ${meta.color}, transparent)`, opacity: hovered ? 1 : 0 }} />

      <div className="relative z-10 py-5 px-4 flex items-center gap-5">
        <span className="font-mono text-xs w-6 transition-colors duration-300"
          style={{ color: hovered ? meta.color : "rgba(200,169,126,.3)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-400 flex-shrink-0"
          style={{
            background: hovered ? `${meta.color}15` : "transparent",
            border: `1px solid ${hovered ? meta.color + "40" : "transparent"}`,
            transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-10deg)",
            opacity: hovered ? 1 : 0,
          }}>
          {meta.icon}
        </div>

        <span className="flex-1 text-lg tracking-wide transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? meta.color : "white" }}>
          {name}
        </span>

        <div className="flex items-center gap-4">
          <div className="relative w-28 md:w-52 h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ background: hovered ? `${meta.color}18` : "#0a2a1a" }}>
            <div className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${level}%` : "0%",
                background: hovered ? `linear-gradient(90deg, ${meta.color}88, ${meta.color})` : "linear-gradient(90deg, #c8a97e55, #c8a97e)",
                boxShadow: hovered ? `0 0 10px ${meta.color}80` : "0 0 4px rgba(200,169,126,.3)",
                transitionDelay: `${index * 70 + 300}ms`,
              }} />
          </div>
          <span className="font-mono text-xs w-8 text-right transition-all duration-300"
            style={{ color: hovered ? meta.color : "rgba(200,169,126,.4)" }}>
            {level}%
          </span>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
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
          {EXTRA_TOOLS.map((t) => (
            <span key={t}
              className="text-green-400 tracking-[.25em] uppercase font-mono px-3 py-2 border border-[#0a2a1a] text-[#071e18] hover:border-[#c8a97e]/25 hover:text-[#c8a97e]/50 transition-all duration-200 cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
