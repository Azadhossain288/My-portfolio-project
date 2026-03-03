import { useState } from "react";
import { SKILL_CATEGORIES } from "../data/skills";
import useInView from "../hooks/useInView";

function SkillCard({ skill, index }) {
  const [ref, visible] = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  const isUrl = typeof skill.icon === "string" && skill.icon.startsWith("http");

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl p-4 flex flex-col gap-3 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `all 0.5s ease ${index * 60}ms`,
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? "0 8px 30px rgba(139,92,246,0.15)" : "none",
      }}>

      {/* Top row — icon + name + percent */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.05)" }}>
          {isUrl ? (
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
          ) : (
            <span className="text-lg">{skill.icon}</span>
          )}
        </div>
        <span className="flex-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
          {skill.name}
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color: "#8b5cf6" }}>
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            background: "linear-gradient(90deg, #6d28d9, #8b5cf6, #a78bfa)",
            boxShadow: hovered ? "0 0 8px rgba(139,92,246,0.6)" : "none",
            transitionDelay: `${index * 60 + 200}ms`,
          }} />
      </div>
    </div>
  );
}

function SkillsSection() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="skills" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <h2 className="text-4xl md:text-6xl font-bold italic mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}>
            Technical Expertise
          </h2>
          <div className="mx-auto w-16 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #6d28d9, #8b5cf6)" }} />
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.category}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #6d28d9, #8b5cf6)" }} />
                <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {cat.category}
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={ci * 10 + si} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;