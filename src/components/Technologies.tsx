"use client";

import React from "react";

// Inline Elementor Icon (perfectly styled and mathematically correct to avoid broken CDN links)
const ElementorIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#92003B" />
    <rect x="5" y="5" width="3" height="14" fill="white" />
    <rect x="10.5" y="5" width="3" height="14" fill="white" />
    <rect x="16" y="5" width="3" height="14" fill="white" />
  </svg>
);

const row1 = [
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const row2 = [
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "WordPress", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Elementor", icon: <ElementorIcon /> },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "C#", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

// Duplicate rows 4 times to ensure seamless infinite looping on all screen sizes
const row1Duplicated = Array(4).fill(row1).flat();
const row2Duplicated = Array(4).fill(row2).flat();

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center md:text-left">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">02. Stack</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Tecnologias</h3>
          <p className="text-zinc-500 text-sm mt-2 max-w-xl">
            As principais tecnologias, linguagens e ferramentas de desenvolvimento que utilizo no meu cotidiano para construir soluções.
          </p>
        </div>
      </div>

      {/* Infinite Carousels Container */}
      <div className="relative w-full flex flex-col gap-6 select-none">
        
        {/* Row 1: Scrolling Left */}
        <div className="relative flex w-full overflow-hidden py-2">
          {/* Blurred overlays for gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused] w-max">
            {row1Duplicated.map((tech, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center gap-3.5 bg-zinc-900/30 border border-zinc-900 px-6 py-4 rounded-2xl hover:border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 group"
              >
                <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.iconUrl ? (
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    tech.icon
                  )}
                </div>
                <span className="text-zinc-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative flex w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-right whitespace-nowrap hover:[animation-play-state:paused] w-max">
            {row2Duplicated.map((tech, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center gap-3.5 bg-zinc-900/30 border border-zinc-900 px-6 py-4 rounded-2xl hover:border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 group"
              >
                <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.iconUrl ? (
                    <img
                      src={tech.iconUrl}
                      alt={tech.name}
                      className={`w-full h-full object-contain ${tech.name === "GitHub" ? "invert" : ""}`}
                      loading="lazy"
                    />
                  ) : (
                    tech.icon
                  )}
                </div>
                <span className="text-zinc-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
