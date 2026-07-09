"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "C# / .NET Core", level: 60 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React / Next.js", level: 75 },
      { name: "HTML / CSS / Tailwind", level: 90 }
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 50 }
    ]
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "WordPress / Elementor", level: 85 }
    ]
  },
  {
    title: "Infraestrutura",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Linux OS", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Resolução de Problemas", level: 95 },
      { name: "Comunicação Eficiente", level: 90 },
      { name: "Trabalho em Equipe", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">06. Competências</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Habilidades Técnicas</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h4 className="text-white font-semibold text-base mb-6 border-b border-zinc-900 pb-3 flex items-center justify-between">
                  {category.title}
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                </h4>

                {/* Progress bars list */}
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                        <span className="text-zinc-500 font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-900">
                        {/* Bar Progress with Scroll Reveal Animation */}
                        <motion.div
                          className="h-full bg-white rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
