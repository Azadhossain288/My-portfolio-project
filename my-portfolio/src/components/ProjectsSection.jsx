import { useState } from "react";
import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";

function ProjectCard({ project, index }) {
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
        background: "#0a1628",
        border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px ${project.color}20` : "0 4px 24px rgba(0,0,0,0.4)",
        transition: `all 0.4s ease ${index * 100}ms`,
      }}>

      {/* Preview area */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold"
          style={{ background: project.color + "22", color: project.color, border: `1px solid ${project.color}40`, backdropFilter: "blur(8px)" }}>
          {project.category}
        </div>

        {/* IMAGE or ICON */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative" style={{ background: project.bg }}>
            <span className="absolute text-[120px] font-bold select-none pointer-events-none"
              style={{ color: project.color + "08", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>
              {project.num}
            </span>
            <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
              style={{
                background: project.color + "15",
                border: `1px solid ${project.color}30`,
                transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                transition: "transform 0.5s ease",
                color: project.color,
              }}>
              {project.icon}
            </div>
          </div>
        )}

        {/* Bottom fade */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 40%, #0a1628 100%)" }} />
        {/* Hover shine */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}12, transparent 70%)`, opacity: hovered ? 1 : 0 }} />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-2xl font-bold leading-tight transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? project.color : "white" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "rgba(255,255,255,0.45)" }}>
          {project.desc.length > 100 ? project.desc.slice(0, 100) + "..." : project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono tracking-[.2em] uppercase px-3 py-1.5 rounded-lg transition-all duration-300"
              style={{
                background: hovered ? project.color + "15" : "rgba(255,255,255,0.05)",
                color: hovered ? project.color : "rgba(255,255,255,0.5)",
                border: `1px solid ${hovered ? project.color + "30" : "rgba(255,255,255,0.08)"}`,
              }}>
              {tag}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[11px] tracking-[.25em] uppercase font-mono font-semibold mt-1"
            style={{
              background: hovered ? `linear-gradient(135deg, ${project.color}, ${project.color}cc)` : "rgba(255,255,255,0.05)",
              color: hovered ? "#000" : "rgba(255,255,255,0.5)",
              border: `1px solid ${hovered ? "transparent" : "rgba(255,255,255,0.08)"}`,
              boxShadow: hovered ? `0 8px 30px ${project.color}40` : "none",
              transition: "all 0.3s ease",
            }}>
            Live Preview
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [ref, visible] = useInView(0.05);
  return (
    <section id="projects" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c8a97e]/50" />
              <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono">Portfolio</div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c8a97e]/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Featured <span className="gold-shimmer">Work</span>
            </h2>
            <p className="text-[#4a9a7a] text-sm font-light max-w-xl mx-auto">
              From concept to code, here are some of my favorite projects that showcase my frontend skills.
            </p>
            <div className="text-[#c8a97e]/30 text-xs font-mono tracking-widest uppercase mt-3">
              0{PROJECTS.length} Projects
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
