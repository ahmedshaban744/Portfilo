import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Software Testing Trainee",
    company: "Nezam Academy",
    period: "Sep 2025 – Feb 2026",
    type: "Training",
    color: "cyan",
    icon: "🎯",
    highlights: [
      "Completed 53+ hours of comprehensive QA training, testing 8+ real-world applications end-to-end",
      "Mastered Manual, Automation, API, and Performance Testing workflows within Agile environments",
      "Built automation suites using Selenium WebDriver and executed performance benchmarks with JMeter",
      "Managed test cycles with Jira and Trello, maintaining full traceability from requirements to test execution",
    ],
    tags: ["Selenium", "Postman", "JMeter", "Jira", "Agile"],
  },
  {
    role: "Software Engineer",
    company: "Egyptian Air Force",
    period: "Jan 2025 – Mar 2026",
    type: "Full-Time",
    color: "blue",
    icon: "🛡️",
    highlights: [
      "Performed Functional and Integration Testing on mission-critical, high-availability applications",
      "Ensured end-to-end data integrity through comprehensive database validation on SQL-backed systems",
      "Developed and delivered a desktop application integrated with SQL Server, shipping a reliable production-grade solution",
      "Operated under strict security and compliance standards, elevating personal discipline and engineering rigor",
    ],
    tags: ["Functional Testing", "Integration Testing", "SQL", "Desktop Apps", "C#"],
  },
  {
    role: "Embedded Software Engineer",
    company: "ITI (Information Technology Institute)",
    period: "Jun 2023 – Sep 2023",
    type: "Internship",
    color: "purple",
    icon: "⚡",
    highlights: [
      "Developed and validated real-time embedded systems on AVR and ARM Cortex-M microcontrollers",
      "Tested RTOS task scheduling, priority management, and communication protocols (UART, SPI, I2C, CAN)",
      "Delivered a Smart Home Automation capstone project with full system-level and integration testing coverage",
      "Gained deep hardware-software interface knowledge that informs every level of testing I now conduct",
    ],
    tags: ["AVR", "ARM", "RTOS", "UART", "SPI", "I2C", "Embedded C"],
  },
];

const colorMap = {
  cyan: { dot: "bg-cyan-400", border: "border-cyan-500/40", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", title: "text-cyan-400" },
  blue: { dot: "bg-blue-400", border: "border-blue-500/40", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", title: "text-blue-400" },
  purple: { dot: "bg-purple-400", border: "border-purple-500/40", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", title: "text-purple-400" },
};

export default function Experience() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">03.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              const isRight = i % 2 === 0;
              return (
                <div key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
                  style={{ transitionDelay: `${i * 150}ms` }}>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-6">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-[#080c14] shadow-lg`} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 group`}>
                    <div className={`p-6 rounded-xl border ${c.border} bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{exp.icon}</span>
                            <h3 className={`font-display font-bold text-xl ${c.title}`}>{exp.role}</h3>
                          </div>
                          <div className="text-white font-semibold">{exp.company}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-sm font-mono">{exp.period}</div>
                          <div className={`text-xs mt-1 px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>{exp.type}</div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span key={t} className={`text-xs font-mono px-2 py-0.5 rounded border ${c.badge}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
