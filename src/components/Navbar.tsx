"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Tecnologias", href: "#tecnologias" },
  { name: "Projetos", href: "#projetos" },
  { name: "Trajetória", href: "#trajetoria" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
          {/* Logo / Name */}
          <a href="#inicio" className="text-white font-medium text-lg tracking-tight hover:opacity-80 transition-opacity">
            Lucas<span className="text-zinc-400 font-light">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-wide transition-all duration-200 hover:text-white ${
                    isActive ? "text-white font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white after:rounded-full" : "text-zinc-400 font-normal"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-4 mt-2">
          <div className="glass-panel rounded-2xl py-4 px-6 flex flex-col space-y-4 animate-fade-in">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base py-2 border-b border-zinc-800/50 transition-colors ${
                    isActive ? "text-white font-medium" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
