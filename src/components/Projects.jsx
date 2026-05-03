import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Test Automation Framework",
    category: "Automation Testing",
    icon: "🤖",
    color: "cyan",
    description: "Architected a full Selenium WebDriver + TestNG automation suite for SauceDemo, achieving 100% functional coverage across all critical user flows.",
    impact: "Reduced regression testing time by ~70% through parallel execution and Allure-powered reporting.",
    tech: ["Selenium WebDriver", "TestNG", "Java", "Allure Reports", "GitHub"],
    links: { github: "#" },
    achievements: ["Full functional coverage", "Allure reporting integration", "Page Object Model design"],
  },
  {
    title: "HR Management System — Manual Testing",
    category: "Manual QA",
    icon: "📋",
    color: "blue",
    description: "Designed comprehensive test cases for a complete HR platform covering onboarding, payroll, leave management, and approval workflows from Figma design specs.",
    impact: "Identified and documented 40+ edge cases across 6 core modules with zero missed critical-path defects.",
    tech: ["Zephyr Scale", "Jira", "Figma", "Test Design", "BDD"],
    links: {},
    achievements: ["40+ edge cases documented", "Figma-to-test coverage", "Zephyr Scale management"],
  },
  {
    title: "Trello API Automation + CI/CD Pipeline",
    category: "API Testing",
    icon: "🔌",
    color: "purple",
    description: "Engineered automated API tests for the Trello REST API using Postman collections and Newman CLI, integrated into GitHub Actions for continuous quality gates.",
    impact: "Tests run automatically on every code push, catching API regressions before they reach staging.",
    tech: ["Postman", "Newman", "GitHub Actions", "REST API", "CI/CD"],
    links: { postman: "#" },
    achievements: ["Full CRUD validation", "GitHub Actions CI/CD", "Auth & error handling tests"],
  },
  {
    title: "Gazara Marketplace — Cross-Platform QA",
    category: "Manual QA",
    icon: "🛒",
    color: "green",
    description: "Executed end-to-end manual test campaigns for Gazara's web, mobile, and admin panel from TRM specifications, ensuring consistent UX across all surfaces.",
    impact: "Delivered full cross-platform test coverage with structured Zephyr Scale reporting for stakeholder visibility.",
    tech: ["Zephyr Scale", "Mobile Testing", "Web Testing", "Admin Panel QA"],
    links: {},
    achievements: ["Cross-platform coverage", "Web + Mobile + Admin", "TRM-based test design"],
  },
  {
    title: "Petstore API — Comprehensive REST Testing",
    category: "API Testing",
    icon: "🐾",
    color: "yellow",
    description: "Conducted thorough API testing of the Petstore REST service, validating all CRUD operations, authentication flows, and response schema consistency.",
    impact: "Documented response integrity across 30+ endpoints with systematic error boundary and status code validation.",
    tech: ["Postman", "REST API", "JSON Validation", "CRUD Testing"],
    links: { postman: "#" },
    achievements: ["30+ endpoint coverage", "Schema validation", "Error boundary testing"],
  },
  {
    title: "Driving Monitoring System — Capstone",
    category: "Embedded Systems",
    icon: "🚗",
    color: "orange",
    description: "Built a real-time driver safety system using STM32, ESP32, and Raspberry Pi with sensor fusion, RTOS, and alert mechanisms — sponsored by ITIDA.",
    impact: "Achieved Excellent grade; demonstrated real-time reliability through comprehensive integration and system-level testing.",
    tech: ["STM32", "ESP32", "Raspberry Pi", "Custom RTOS", "Sensor Fusion"],
    links: {},
    achievements: ["ITIDA sponsored", "Excellent grade", "Real-time safety alerts"],
  },
];

const colorMap = {
  cyan: "border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 bg-cyan-500/5",
  blue: "border-blue-500/30 hover:border-blue-500/60 text-blue-400 bg-blue-500/5",
  purple: "border-purple-500/30 hover:border-purple-500/60 text-purple-400 bg-purple-500/5",
  green: "border-green-500/30 hover:border-green-500/60 text-green-400 bg-green-500/5",
  yellow: "border-yellow-500/30 hover:border-yellow-500/60 text-yellow-400 bg-yellow-500/5",
  orange: "border-orange-500/30 hover:border-orange-500/60 text-orange-400 bg-orange-500/5",
};

const badgeMap = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function Projects() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">04.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            const b = badgeMap[p.color];
            return (
              <div key={p.title}
                className={`group relative p-6 rounded-xl border bg-slate-800/20 transition-all duration-300 hover:bg-slate-800/40 hover:scale-[1.02] hover:shadow-2xl ${c} flex flex-col`}
                style={{ transitionDelay: `${i * 80}ms` }}>

                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <span className={`text-xs font-mono px-2 py-1 rounded border ${b}`}>{p.category}</span>
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 mb-4">
                  <div className="text-xs text-slate-500 font-mono mb-1">⚡ Impact</div>
                  <p className="text-slate-300 text-xs leading-relaxed">{p.impact}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {p.achievements.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-green-400">✓</span> {a}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-400 rounded border border-slate-700/50">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
