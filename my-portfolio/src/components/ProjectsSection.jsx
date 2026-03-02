import { useState } from "react";
import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";

function ProjectRow({ project, index }) {
  const [ref, visible] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref}
      className="relative border-b border-green-600 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `all 0.6s ease ${index * 100}ms` }}>

      {/* Hover background */}
      <div className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{ background: project.bg, opacity: hovered ? 1 : 0 }} />
      <div className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${project.color}0a, transparent)`, opacity: hovered ? 1 : 0 }} />

      <div className="relative z-10 px-6 md:px-10 py-7 md:py-8 grid grid-cols-12 gap-4 items-center">

        {/* Number */}
        <div className="col-span-1 font-mono text-xs transition-colors duration-300"
          style={{ color: hovered ? `${project.color}80` : "green" }}>{project.num}</div>

        {/* Icon */}
        <div className="col-span-1 text-2xl transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-20deg)" }}>
          {project.icon}
        </div>

        {/* Title + category */}
        <div className="col-span-10 md:col-span-4">
          <div className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? project.color : "white" }}>
            {project.title}
          </div>
          <div className="text-xs font-mono tracking-widest uppercase mt-0.5 transition-colors duration-300"
            style={{ color: hovered ? `${project.color}60` : "white" }}>
            {project.category}
          </div>

          {/* Mobile — live demo */}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="md:hidden mt-3 inline-flex items-center gap-2 text-[10px] tracking-[.2em] uppercase font-mono px-3 py-1.5 border transition-all duration-300"
              style={{ borderColor: project.color + "60", color: project.color, background: project.color + "15" }}>
              Live Demo ↗
            </a>
          )}
        </div>

        {/* Description + live button — desktop */}
        <div className="col-span-12 md:col-span-4 hidden md:block">
          <p className="text-sm leading-relaxed font-light transition-all duration-500 mb-4"
            style={{ color: hovered ? "#4a8a6a" : "transparent", transform: hovered ? "translateX(0)" : "translateX(10px)" }}>
            {project.desc}
          </p>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
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
              onMouseEnter={e => { e.currentTarget.style.background = project.color+"28"; e.currentTarget.style.borderColor = project.color; e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`; }}
              onMouseLeave={e => { e.currentTarget.style.background = project.color+"10"; e.currentTarget.style.borderColor = project.color+"50"; e.currentTarget.style.boxShadow = "none"; }}>
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
                style={{ borderColor: hovered ? `${project.color}40` : "white", color: hovered ? project.color : "white", background: hovered ? project.color+"0a" : "transparent" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="col-span-2 md:col-span-1 flex justify-end">
          <div className="text-lg transition-all duration-500"
            style={{ color: project.color, opacity: hovered ? 1 : 0.2, transform: hovered ? "translate(3px,-3px)" : "translate(0,0)" }}>
            ↗
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
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
  );
}

export default ProjectsSection;
