"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, GraduationCap } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-zinc-300" />,
      title: "Paixão por Tecnologia",
      description: "Fascínio em resolver problemas complexos e automatizar processos através da tecnologia, buscando sempre compreender as bases de cada conceito estudado.",
    },
    {
      icon: <Code className="w-5 h-5 text-zinc-300" />,
      title: "Desenvolvimento de Software",
      description: "Interesse contínuo no ciclo de vida de aplicações, desde a modelagem do banco de dados até a experiência do usuário final, criando códigos legíveis e eficientes.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-zinc-300" />,
      title: "Foco Full-Stack",
      description: "Dedicação tanto em linguagens robustas e estruturadas no backend quanto na interface de usuário limpa e otimizada, garantindo integrações seguras e fluidas.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-zinc-300" />,
      title: "Aprendizado Contínuo",
      description: "Busca diária por novos conhecimentos e frameworks, com foco na consolidação das boas práticas e arquitetura de sistemas modernos.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">01. Apresentação</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Sobre Mim</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-medium text-zinc-300">
              Olá, sou o Lucas Bigliardi Vicente.
            </h4>
            <p className="text-zinc-500 leading-relaxed">
              Sou um Desenvolvedor Full-Stack Junior altamente motivado a criar soluções robustas de software. Minha trajetória é marcada pela curiosidade insaciável e pelo desejo de entender a lógica profunda por trás das tecnologias. 
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Trabalho criando APIs escaláveis, otimizando bancos de dados e desenvolvendo interfaces modernas e interativas. Tenho foco contínuo em boas práticas de programação, padrões de projeto (Clean Code) e performance.
            </p>
            <div className="pt-4 border-t border-zinc-900 flex gap-8">
              <div>
                <span className="block text-2xl font-bold text-white font-mono">100%</span>
                <span className="text-xs text-zinc-600 uppercase tracking-wider font-mono">Foco em Evolução</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono">Clean</span>
                <span className="text-xs text-zinc-600 uppercase tracking-wider font-mono">Padrão de Código</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h5 className="text-white font-medium mb-2">{card.title}</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
