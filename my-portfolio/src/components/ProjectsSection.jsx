import { useState } from "react";
import { PROJECTS } from "../data/projects";
import useInView from "../hooks/useInView";

function ProjectCard({ project, index, onSelectProject }) {
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
        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold"
          style={{ background: project.color + "22", color: project.color, border: `1px solid ${project.color}40`, backdropFilter: "blur(8px)" }}>
          {project.category}
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 40%, #0a1628 100%)" }} />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-2xl font-bold leading-tight transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: hovered ? project.color : "white" }}>
          {project.title}
        </h3>
        
        {/* View More / Details Button */}
        <button
          onClick={() => onSelectProject(project)}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[11px] tracking-[.25em] uppercase font-mono font-semibold mt-auto cursor-pointer"
          style={{
            background: hovered ? `linear-gradient(135deg, ${project.color}, ${project.color}cc)` : "rgba(255,255,255,0.05)",
            color: hovered ? "#000" : "rgba(255,255,255,0.7)",
            border: `1px solid ${hovered ? "transparent" : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.3s ease",
          }}>
          View More / Details
        </button>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onSelectProject }) {
  const [ref, visible] = useInView(0.05);
  const [selectedTag, setSelectedTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const allTags = ["All", ...new Set(PROJECTS.flatMap(p => p.tags))];

  const filteredProjects = selectedTag === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(selectedTag));

  const displayedProjects = (selectedTag === "All" && !showAll) 
    ? filteredProjects.slice(0, 3) 
    : filteredProjects;

  return (
    <section id="projects" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Featured <span className="gold-shimmer">Work</span>
          </h2>
          <p className="text-[#4a9a7a] text-sm font-light max-w-xl mx-auto">
            Explore my projects by filtering technologies or viewing details.
          </p>
        </div>

        {/* ফিল্টার বাটন */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => { setSelectedTag(tag); setShowAll(false); }}
              className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
              style={{
                background: selectedTag === tag ? "#c8a97e" : "rgba(255,255,255,0.05)",
                color: selectedTag === tag ? "#000" : "rgba(255,255,255,0.6)",
                border: `1px solid ${selectedTag === tag ? "#c8a97e" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onSelectProject={onSelectProject} />
          ))}
        </div>

        {/* See More বাটন */}
        {selectedTag === "All" && PROJECTS.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-xl text-xs font-mono tracking-[.25em] uppercase font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(200, 169, 126, 0.1)",
                color: "#c8a97e",
                border: "1px solid rgba(200, 169, 126, 0.3)",
              }}
            >
              {showAll ? "Show Less" : "See More Projects"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}