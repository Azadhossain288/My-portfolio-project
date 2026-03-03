import { useState } from "react";
import { EDUCATION } from "../data/education";
import useInView from "../hooks/useInView";

function EducationCard({ edu, index }) {
  const [ref, visible] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-8 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 150}ms`,
        background: "rgba(10,22,40,0.8)",
        border: `1px solid ${hovered ? edu.color + "40" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${edu.color}15` : "0 4px 20px rgba(0,0,0,0.3)",
      }}>

      {/* Big faded background icon */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[140px] select-none pointer-events-none transition-opacity duration-500"
        style={{ opacity: hovered ? 0.06 : 0.03, color: edu.color, lineHeight: 1 }}>
        {edu.icon}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 20% 50%, ${edu.color}08, transparent 60%)`, opacity: hovered ? 1 : 0 }} />

      <div className="relative z-10">
        {/* Top — icon + status */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-mono font-bold"
            style={{ background: edu.color + "18", border: `1px solid ${edu.color}30`, color: edu.color }}>
            {edu.icon}
          </div>
          <div className="px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold"
            style={{
              background: edu.status === "ongoing" ? edu.color + "20" : "rgba(200,169,126,0.15)",
              color: edu.status === "ongoing" ? edu.color : "#c8a97e",
              border: `1px solid ${edu.status === "ongoing" ? edu.color + "40" : "rgba(200,169,126,0.3)"}`,
            }}>
            {edu.statusLabel}
          </div>
        </div>

        {/* Degree */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? edu.color : "white", fontStyle: "italic" }}>
          {edu.degree}
        </h3>

        {/* Institution + Location */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center gap-2">
            <span style={{ color: edu.color + "80" }}>📖</span>
            <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.7)" }}>{edu.institution}</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: edu.color + "80" }}>📍</span>
            <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.5)" }}>{edu.location}</span>
          </div>
        </div>

        {/* Active dot */}
        {edu.status === "ongoing" && (
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]" style={{ animation: "pulse 2s infinite" }} />
            <span className="text-[10px] font-mono tracking-widest text-[#4ade80]/60 uppercase">Currently Enrolled</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          {edu.desc}
        </p>

        {/* Subject tags */}
        <div className="flex flex-wrap gap-2">
          {edu.subjects.map(subject => (
            <span key={subject}
              className="text-[10px] font-mono tracking-[.2em] uppercase px-3 py-1.5 rounded-lg transition-all duration-300"
              style={{
                background: hovered ? edu.color + "12" : "rgba(255,255,255,0.04)",
                color: hovered ? edu.color : "rgba(255,255,255,0.45)",
                border: `1px solid ${hovered ? edu.color + "25" : "rgba(255,255,255,0.08)"}`,
              }}>
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  const [ref, visible] = useInView(0.05);
  return (
    <section id="education" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-4xl mx-auto px-8">
        <div ref={ref} className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8a97e]/50" />
            <span className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono">Background</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c8a97e]/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span style={{ color: "white" }}>My </span>
            <span className="gold-shimmer">Education</span>
          </h2>
          <p className="text-[#4a9a7a] text-sm font-light max-w-xl mx-auto">
            Academic foundation and professional training that shaped my technical thinking.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;