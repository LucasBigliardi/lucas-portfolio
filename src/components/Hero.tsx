"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-zinc-800/10 blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-zinc-700/10 blur-[160px] animate-blob [animation-delay:2s]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 mb-6 font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponível para novos desafios
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
            >
              Lucas Bigliardi Vicente
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-light text-zinc-400 tracking-wide mb-6"
            >
              Desenvolvedor Full-Stack Junior
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl mb-10"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
            >
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 font-medium px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg shadow-white/5 group"
              >
                Ver Projetos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-200"
              >
                Entrar em Contato
              </a>
            </motion.div>
          </div>

          {/* Visual Element / Placeholder Space */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center"
            >
              {/* Outer spinning ring */}
              <div className="absolute inset-0 border border-zinc-800/60 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-zinc-700/40 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Inner geometric representation */}
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center group shadow-2xl">
                {/* Abstract grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                {/* Visual Placeholder (Sleek CSS Illustration) */}
                <div className="z-10 flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 flex items-center justify-center mb-4 border border-zinc-700/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-mono text-zinc-300">&lt;/&gt;</span>
                  </div>
                  <span className="text-sm font-mono text-zinc-500 mb-1">C:\Users\Lucas</span>
                  <span className="text-xs font-mono text-emerald-500/80 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
                    System.ready()
                  </span>
                </div>

                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Rolar para baixo</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-zinc-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
