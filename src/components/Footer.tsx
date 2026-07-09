import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-medium text-lg tracking-tight">
              Lucas<span className="text-zinc-500 font-light">.dev</span>
            </span>
            <p className="text-sm text-zinc-500 mt-2 text-center md:text-left">
              &copy; {currentYear} Lucas Bigliardi Vicente. Todos os direitos reservados.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#inicio" className="text-sm text-zinc-400 hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="text-sm text-zinc-400 hover:text-white transition-colors">Sobre</a>
            <a href="#tecnologias" className="text-sm text-zinc-400 hover:text-white transition-colors">Tecnologias</a>
            <a href="#projetos" className="text-sm text-zinc-400 hover:text-white transition-colors">Projetos</a>
            <a href="#trajetoria" className="text-sm text-zinc-400 hover:text-white transition-colors">Trajetória</a>
            <a href="#contato" className="text-sm text-zinc-400 hover:text-white transition-colors">Contato</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lucas@example.com"
                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <a
              href="#inicio"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white p-2.5 rounded-full transition-colors"
              aria-label="Voltar ao início"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
