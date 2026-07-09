"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Cpu, Calendar } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      // Animate duration total
      const duration = 1500; 
      const stepTime = Math.max(Math.floor(duration / end), 20);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 60); // dynamic increment
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Statistics() {
  const stats = [
    {
      icon: <Code2 className="w-5 h-5 text-zinc-400" />,
      label: "Projetos Desenvolvidos",
      value: 3,
      suffix: ""
    },
    {
      icon: <Cpu className="w-5 h-5 text-zinc-400" />,
      label: "Tecnologias Estudadas",
      value: 20,
      suffix: "+"
    },
    {
      icon: <Calendar className="w-5 h-5 text-zinc-400" />,
      label: "Anos Estudando TI",
      value: 3,
      suffix: "+"
    }
  ];

  return (
    <section className="py-16 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between items-center text-center group transition-all duration-300 hover:border-zinc-800"
            >
              <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-bold font-mono text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
