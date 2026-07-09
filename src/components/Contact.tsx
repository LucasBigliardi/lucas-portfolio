"use client";

import { Mail, MessageSquare, Download } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-zinc-400" />,
      label: "E-mail",
      value: "lucas@example.com",
      href: "mailto:lucas@example.com"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-zinc-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/lucas",
      href: "https://linkedin.com/in/lucas"
    },
    {
      icon: <Github className="w-5 h-5 text-zinc-400" />,
      label: "GitHub",
      value: "github.com/lucas",
      href: "https://github.com/lucas"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-zinc-400" />,
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      href: "https://wa.me/5511999999999"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">05. Conexão</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Fale Comigo</h3>
        </div>

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
          <h4 className="text-xl font-medium text-zinc-300">Vamos conversar?</h4>
          <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
            Estou sempre aberto a conversar sobre oportunidades de emprego, projetos freelancers ou apenas trocar ideias sobre tecnologia. Sinta-se à vontade para entrar em contato através de qualquer uma das opções abaixo:
          </p>

          {/* Centered Contacts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-panel p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/40 group text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono block">
                    {info.label}
                  </span>
                  <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors duration-300 font-sans break-all">
                    {info.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Currículo Download Button */}
          <div className="pt-6 w-full max-w-xs">
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-850 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-all duration-200 w-full justify-center shadow-md shadow-black/10"
            >
              <Download className="w-4 h-4" />
              Baixar Currículo (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
