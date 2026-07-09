"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    title: "Landing Page - Pós-Graduação Terapia de Casal",
    category: "CMS / Wordpress",
    description: "Landing page premium focada na captação de alunos para curso de pós-graduação em psicologia com especialização em terapia de casal.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "Copywriting"],
    githubUrl: "",
    demoUrl: "https://posterapiadecasal.com/",
    imageAlt: "Landing Page Pós-Graduação em Terapia de Casal"
  },
  {
    title: "Landing Page - Pós-Graduação Psicologia Sistêmica",
    category: "CMS / Wordpress",
    description: "Landing page desenvolvida para atração de psicólogos interessados na especialização em terapia e psicologia sistêmica de casal e família.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "SEO"],
    githubUrl: "",
    demoUrl: "https://posterapiasistemica.com/",
    imageAlt: "Landing Page Pós-Graduação em Psicologia Sistêmica"
  },
  {
    title: "Talent Boost AI",
    category: "Full-Stack",
    description: "Otimizador inteligente de currículos e perfis do LinkedIn utilizando Inteligência Artificial, gerando recomendações personalizadas para se destacar em processos seletivos.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Node.js"],
    githubUrl: "https://github.com/LucasBigliardi/talent-boost-ai",
    demoUrl: "https://lucasbigliardi.github.io/talent-boost-ai/",
    imageAlt: "Talent Boost AI Screenshot representation"
  }
];

const categories = ["Todos", "CMS / Wordpress", "Backend", "Frontend", "Full-Stack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">03. Portfólio</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projetos em Destaque</h3>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white text-zinc-950 border-white font-medium"
                    : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group h-full transition-all duration-300"
            >
              {/* Project Image Placeholder (Premium CSS Gradient) */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-850 to-zinc-950 border-b border-zinc-800 flex items-center justify-center p-8 select-none">
                {/* Decorative mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-black/20" />
                
                {/* Centered Graphic */}
                <div className="text-center z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-600 block mb-1">PROJETO {String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-white font-semibold tracking-wide text-lg block">{project.title.split(" ")[0]}</span>
                  <span className="text-zinc-500 font-light text-xs block">{project.category}</span>
                </div>

                {/* Categories Badge on Image */}
                <span className="absolute top-4 left-4 bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 border-t border-zinc-900/60 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors py-1.5 px-3 rounded-full hover:bg-zinc-900"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors py-1.5 px-3 rounded-full hover:bg-zinc-900"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demonstração
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
