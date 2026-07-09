"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category: "Experiência" | "Formação" | "Certificações";
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Desenvolvedor Full-Stack Freelancer",
    subtitle: "Trabalho Autônomo",
    date: "2025 - Presente",
    category: "Experiência",
    description: "Criação de landing pages de alta conversão voltadas para o setor de educação e saúde, utilizando WordPress, Elementor, HTML e CSS. Foco na otimização de performance, responsividade e SEO."
  },
  {
    id: 5,
    title: "Estagiário de TI & Suporte Técnico",
    subtitle: "Empresa de Serviços Tecnológicos",
    date: "2025 - 2026",
    category: "Experiência",
    description: "Suporte técnico geral, diagnóstico de infraestrutura de hardware e rede, formatação e parametrização de servidores Linux, além de auxílio na manutenção de scripts SQL corporativos."
  },
  {
    id: 3,
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Graduação Superior de Tecnologia",
    date: "2024 - 2026",
    category: "Formação",
    description: "Estudos focados em engenharia de requisitos, modelagem e administração de banco de dados, lógica de programação estruturada, orientação a objetos e arquitetura cliente-servidor."
  },
  {
    id: 4,
    title: "Desenvolvimento Web Full Stack",
    subtitle: "Bootcamp Profissionalizante",
    date: "2024",
    category: "Certificações",
    description: "Formação intensiva abordando ecossistema JavaScript/TypeScript, React, Next.js, Node.js, banco de dados relacionais e não-relacionais, versionamento com Git e metodologias ágeis."
  }
];

export default function Timeline() {
  const [filter, setFilter] = useState<"Tudo" | "Experiência" | "Formação" | "Certificações">("Tudo");

  const filteredData = filter === "Tudo"
    ? timelineData
    : timelineData.filter(item => item.category === filter);

  return (
    <section id="trajetoria" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">05. Trajetória</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Linha do Tempo</h3>
          
          {/* Timeline Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(["Tudo", "Experiência", "Formação", "Certificações"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  filter === cat
                    ? "bg-white text-zinc-950 border-white font-medium"
                    : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 py-2">
          {filteredData.map((item, idx) => {
            // Pick corresponding icon
            let icon = <Briefcase className="w-4 h-4 text-white" />;
            if (item.category === "Formação") icon = <GraduationCap className="w-4 h-4 text-white" />;
            if (item.category === "Certificações") icon = <Award className="w-4 h-4 text-white" />;

            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline node icon container */}
                <span className="absolute -left-4 top-1.5 bg-zinc-950 border border-zinc-800 rounded-full w-8 h-8 flex items-center justify-center group-hover:border-zinc-500 transition-colors duration-300">
                  {icon}
                </span>

                {/* Card details */}
                <div className="glass-panel p-6 rounded-2xl group-hover:border-zinc-700 transition-all duration-300">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono bg-zinc-900 border border-zinc-800/80 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="text-white font-semibold text-lg mt-2 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-sm">{item.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {filteredData.length === 0 && (
            <div className="text-center py-12 text-zinc-500 text-sm">
              Nenhum evento registrado nesta categoria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
