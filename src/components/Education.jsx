import { useEffect, useRef, useState } from "react";

export default function Education() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const certs = [
    { title: "QA & Software Testing (53+ hrs)", org: "Nezam Academy", year: "2026", icon: "🎯", color: "cyan" },
    { title: "Embedded Systems Engineering", org: "ITI — Information Technology Institute", year: "2023", icon: "⚡", color: "purple" },
    { title: "ISTQB Foundation Level (In Progress)", org: "ISTQB", year: "2026", icon: "📜", color: "blue" },
  ];

  return (
    <section id="education" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">05.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Education & Training</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="p-8 rounded-xl border border-cyan-500/30 bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl flex-shrink-0">🎓</div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">B.Eng. Electronics & Communications</h3>
                  <div className="text-cyan-400 font-medium mt-1">Sohag University — Faculty of Engineering</div>
                  <div className="text-slate-500 text-sm font-mono mt-1">2019 – 2024</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/40 text-center">
                  <div className="text-cyan-400 font-display font-bold text-lg">Very Good</div>
                  <div className="text-slate-500 text-xs font-mono">with Honors (80%)</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/40 text-center">
                  <div className="text-green-400 font-display font-bold text-lg">Excellent</div>
                  <div className="text-slate-500 text-xs font-mono">Graduation Project</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700/30">
                <div className="text-slate-400 text-xs font-mono mb-1 uppercase tracking-wider">Graduation Project</div>
                <div className="text-white font-semibold mb-1">Driving Monitoring System</div>
                <div className="text-slate-400 text-sm">Sponsored by ITIDA — Real-time driver safety using STM32, ESP32, Raspberry Pi and AI  with custom RTOS</div>
              </div>
            </div>
          </div>

          {/* Training & Certs */}
          <div className="space-y-4">
            <h3 className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-6">Training & Certifications</h3>
            {certs.map((c) => {
              const colors = {
                cyan: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
                purple: "border-purple-500/30 bg-purple-500/5 text-purple-400",
                blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
              };
              return (
                <div key={c.title}
                  className={`p-5 rounded-xl border ${colors[c.color]} bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4`}>
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{c.title}</div>
                    <div className={`text-sm ${colors[c.color].split(" ").pop()}`}>{c.org}</div>
                  </div>
                  <span className="text-slate-500 text-xs font-mono">{c.year}</span>
                </div>
              );
            })}

            <div className="p-5 rounded-xl border border-slate-700/30 bg-slate-800/20 mt-6">
              <h4 className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-4">Key Competencies</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Test Planning", "Defect Lifecycle", "Agile QA", "Risk-Based Testing", "CI/CD Pipelines", "RTOS Validation"].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-cyan-400 text-xs">▸</span>{s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
