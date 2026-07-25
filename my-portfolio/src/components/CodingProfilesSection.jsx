// src/components/CodingProfilesSection.jsx
import React from 'react';
import { CODING_PROFILES, IMUPC_ACHIEVEMENT } from '../data/codingProfiles';

export default function CodingProfilesSection() {
  const renderIcon = (platform) => {
    if (platform === "Codeforces") {
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#c8a97e">
          <path d="M4.5 13.5h3V21h-3v-7.5zM10.5 3h3V21h-3V3zM16.5 9h3V21h-3V9z" />
        </svg>
      );
    }
    if (platform === "CodeChef") {
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#c8a97e">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.698l-1.921 1.921a.508.508 0 01-.718 0l-3.255-3.255a.508.508 0 010-.718l1.921-1.921a.508.508 0 01.718 0l3.255 3.255a.508.508 0 010 .718zm-4.512-4.512l-1.921 1.921a.508.508 0 01-.718 0l-3.255-3.255a.508.508 0 010-.718l1.921-1.921a.508.508 0 01.718 0l3.255 3.255a.508.508 0 010 .718z" />
        </svg>
      );
    }
    if (platform === "HackerRank") {
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2ec866">
          <path d="M12 0L2.813 5.313v10.374L12 21l9.187-5.313V5.313L12 0zm0 2.25l7.313 4.219v8.062L12 18.75l-7.313-4.219V6.469L12 2.25zM12 6.75l-4.5 2.594v5.188L12 17.125l4.5-2.593V9.344L12 6.75z" />
        </svg>
      );
    }
    return (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" 
        alt={platform} 
        className="w-8 h-8 object-contain" 
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    );
  };

  return (
    <section id="Coding Profiles" className="py-20 px-4 bg-[#0a0f1c] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-mono tracking-[.2em] uppercase text-[#c8a97e] mb-12 text-center">
          Coding Profiles
        </h2>

        {/* ৪টি কোডিং প্রফাইল কার্ড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {CODING_PROFILES.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-[#c8a97e]/20 bg-[#0f172a] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#c8a97e] group cursor-pointer flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-14 h-14 mb-4 p-3 bg-[#0a0f1c] rounded-full flex items-center justify-center border border-[#c8a97e]/20 group-hover:border-[#c8a97e] transition-colors">
                {renderIcon(item.platform)}
              </div>

              <h3 className="text-[#c8a97e] font-mono font-bold text-lg tracking-wide group-hover:text-white transition-colors">
                {item.platform}
              </h3>

              {item.rating && (
                <p className="text-xs text-gray-400 mt-1 font-mono">{item.rating}</p>
              )}

              <p className="text-xs text-[#c8a97e] mt-4 font-mono bg-[#0a0f1c] py-1.5 px-3 rounded-full inline-block border border-[#c8a97e]/20">
                {item.solved}
              </p>
            </a>
          ))}
        </div>

        {/* IMUPC Achievement Banner with Drive Button */}
        <div className="p-6 md:p-8 rounded-xl border border-[#c8a97e]/30 bg-[#0f172a] backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <span className="text-xs font-mono bg-[#0a0f1c] text-[#c8a97e] py-1.5 px-3 rounded-full border border-[#c8a97e]/20">
              {IMUPC_ACHIEVEMENT.rank}
            </span>
            <h3 className="text-white font-mono font-bold text-xl mt-3">
              {IMUPC_ACHIEVEMENT.title}
            </h3>
            <p className="text-sm text-gray-300 mt-1 font-mono">
              Team: <span className="text-[#c8a97e]">{IMUPC_ACHIEVEMENT.teamName}</span>
            </p>
          </div>

          <a 
            href={IMUPC_ACHIEVEMENT.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#c8a97e] text-[#0a0f1c] font-mono font-bold text-sm rounded-lg hover:bg-white transition-all duration-300 shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            <span>View Certificate / Proof</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}