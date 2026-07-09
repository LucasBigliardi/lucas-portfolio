"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Server, ShieldCheck, Zap } from "lucide-react";
import { Github } from "./Icons";

export default function FeaturedProject() {
  const challenges = [
    {
      icon: <Server className="w-4 h-4 text-zinc-400" />,
      title: "Alta Concorrência",
      desc: "Tratar picos de tráfego com mais de 5.000 requisições simultâneas sem degradar o banco principal.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-zinc-400" />,
      title: "Segurança de Dados",
      desc: "Garantir integridade e criptografia fim-a-fim de dados financeiros sensíveis dos clientes.",
    },
    {
      icon: <Zap className="w-4 h-4 text-zinc-400" />,
      title: "Tempo de Resposta",
      desc: "Manter latência média das APIs principais abaixo de 150ms na entrega de relatórios complexos.",
    },
  ];

  const solutions = [
    { title: "Cache de Dados", desc: "Integração do Redis como camada de cache distribuído, reduzindo a carga do banco em 60%." },
    { title: "Arquitetura Assíncrona", desc: "Uso do Apache Kafka/RabbitMQ para processar o fluxo de e-mails e transações de forma assíncrona." },
    { title: "Criptografia Forte", desc: "Implementação de criptografia AES-256 nas colunas sensíveis do banco de dados MySQL." },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">04. Em Destaque</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Projeto Principal</h3>
        </div>

        {/* Large Layout Card */}
        <div className="glass-panel rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-zinc-800/10 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Visual Column (Left) */}
            <div className="lg:col-span-6 flex flex-col h-full justify-between">
              <div>
                {/* Visual Placeholder for Big Project Image */}
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between group relative overflow-hidden mb-6 shadow-2xl select-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">PROJETO PRINCIPAL // CORE</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  
                  {/* Central Concept Mockup */}
                  <div className="z-10 text-center my-auto transition-transform duration-300 group-hover:scale-102">
                    <div className="inline-block bg-zinc-950/80 border border-zinc-800/80 px-4 py-2 rounded-xl backdrop-blur mb-2 font-mono text-zinc-300 text-sm">
                      REST API Gateway
                    </div>
                    <p className="text-[10px] text-zinc-600 font-mono">localhost:8080/api/v1/dashboard</p>
                  </div>

                  <div className="flex justify-between items-center z-10 text-zinc-600 font-mono text-[9px] border-t border-zinc-900 pt-3">
                    <span>BUILD: SUCCESSFUL</span>
                    <span>VERSÃO 1.4.0</span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">GateWay Manager API</h4>
                <p className="text-zinc-500 leading-relaxed text-sm sm:text-base mb-6">
                  Uma plataforma unificada para gerenciar requisições e monitoramento de tráfego de microsserviços. O sistema atua como ponto de entrada central, validando autenticações JWT, aplicando limite de taxa (rate limiting), registrando métricas de acesso e encaminhando requisições de forma segura e inteligente.
                </p>
              </div>

              {/* Technologies used */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Java", "Spring Boot", "TypeScript", "React", "Docker", "MySQL", "Redis"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-zinc-300 bg-zinc-900 border border-zinc-800/80 px-3 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
              {/* Challenges */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  Principais Desafios
                </h5>
                <div className="space-y-4">
                  {challenges.map((c) => (
                    <div key={c.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {c.icon}
                      </div>
                      <div>
                        <h6 className="text-zinc-300 text-sm font-medium">{c.title}</h6>
                        <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h5 className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  Soluções Implementadas
                </h5>
                <ul className="space-y-3.5">
                  {solutions.map((s) => (
                    <li key={s.title} className="text-sm">
                      <span className="font-medium text-zinc-300">{s.title}:</span>{" "}
                      <span className="text-zinc-500 text-xs block mt-0.5 leading-relaxed">{s.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-900">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg shadow-white/5 group"
                >
                  GitHub
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 text-white font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-200"
                >
                  Demonstração
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
