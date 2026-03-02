import { useState, useRef } from "react";
import myPicture from "../assets/My-picture.png";

function Avatar3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setMouse({
      x: (e.clientX - cx) / (rect.width  / 2),
      y: (e.clientY - cy) / (rect.height / 2),
    });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <div ref={containerRef}
      className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: 380, height: 380 }}
    >
      {/* Outer rotating rings */}
      <div className="absolute inset-0 rounded-full border border-[#c8a97e]/10"
        style={{ animation: "spin1 20s linear infinite" }} />
      <div className="absolute rounded-full border border-[#c8a97e]/20"
        style={{ inset: 20, animation: "spin2 14s linear infinite" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c8a97e]"
          style={{ boxShadow: "0 0 8px #c8a97e, 0 0 20px #c8a97e88" }} />
      </div>
      <div className="absolute rounded-full border border-[#c8a97e]/10"
        style={{ inset: 48, animation: "spin1 10s linear infinite reverse" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#e8d5b0]/60" />
      </div>

      {/* 3D tilt card */}
      <div className="relative z-10 transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(800px) rotateY(${mouse.x * 15}deg) rotateX(${-mouse.y * 12}deg)`,
          width: 200, height: 240,
        }}>
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

          {/* Photo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={myPicture}
              alt="Azad Hossain"
              className="w-56 h-56 rounded-[2.5rem] object-cover mb-4"
              style={{
                border: "4px solid rgba(200,169,126,.45)",
                boxShadow: "0 15px 50px rgba(0,0,0,.7)",
                animation: "float 4s ease-in-out infinite",
                display: "block",
              }}
            />
            <div className="text-[#c8a97e]/60 text-xs tracking-[.25em] uppercase font-mono">Frontend Dev</div>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-[#c8a97e]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" style={{ animation: "pulse 2s infinite" }} />
            <span className="text-[9px] text-[#c8a97e]/70 font-mono tracking-widest">AVAILABLE</span>
          </div>

          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-3xl"
            style={{ background: "linear-gradient(to top, rgba(200,169,126,.06), transparent)" }} />
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

export default Avatar3D;
