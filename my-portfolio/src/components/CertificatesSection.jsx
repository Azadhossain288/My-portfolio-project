import { useState } from "react";
import useInView from "../hooks/useInView";
import { CERTIFICATES } from "../data/certificates";

function CertCard({ cert, index }) {
  const [ref, visible] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 120}ms`,
        background: "#0a1628",
        border: `1px solid ${hovered ? cert.color + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${cert.color}20` : "0 4px 20px rgba(0,0,0,0.4)",
        
      }}>

      {/* Certificate image */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(to bottom, transparent 50%, #0a1628 100%)`,
            opacity: hovered ? 0.7 : 0.5,
          }} />
        {/* Hover shine */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${cert.color}18, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }} />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-6 flex-1">

        {/* Issuer badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
            style={{ background: cert.color + "18", border: `1px solid ${cert.color}30` }}>
            {cert.icon}
          </div>
          <span className="text-[10px] font-mono tracking-[.25em] uppercase font-semibold"
            style={{ color: cert.color }}>
            {cert.issuer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight transition-colors duration-300"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: hovered ? "white" : "rgba(255,255,255,0.9)",
            fontSize: "1.3rem",
          }}>
          {cert.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-light flex-1"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          {cert.desc}
        </p>

        {/* Bottom row — year + view button */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <span className="font-mono text-[10px] tracking-widest"
            style={{ color: "rgba(255,255,255,0.25)" }}>
            {cert.year}
          </span>
          {cert.url && (
            <a href={cert.url} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-[10px] tracking-[.2em] uppercase font-mono px-3 py-1.5 border transition-all duration-300"
              style={{
                borderColor: cert.color + "50",
                color: cert.color,
                background: hovered ? cert.color + "18" : "transparent",
              }}>
              View ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertificatesSection() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="certificates" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-6xl mx-auto px-8">

        {/* Section header */}
        <div ref={ref} className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8a97e]/50" />
            <span className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono">Achievements</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c8a97e]/50" />
          </div>

          {/* "Verified Excellence" heading — matching screenshot style */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span style={{ color: "white" }}>Verified </span>
            <span className="gold-shimmer">Excellence</span>
          </h2>
          <p className="text-[#4a9a7a] text-sm font-light max-w-xl mx-auto">
            Certified credentials earned through dedicated learning and real-world practice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
