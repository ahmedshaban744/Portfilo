import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Testing Expertise",
    icon: "🧪",
    color: "cyan",
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Test Automation", level: 88 },
      { name: "API Testing", level: 92 },
      { name: "Performance Testing", level: 80 },
      { name: "Functional & Integration", level: 90 },
      { name: "Agile / Scrum QA", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "blue",
    skills: [
      { name: "Selenium WebDriver", level: 88 },
      { name: "Postman / Newman", level: 92 },
      { name: "JMeter", level: 80 },
      { name: "Jira & Zephyr Scale", level: 90 },
      { name: "Git & GitHub Actions", level: 85 },
      { name: "Trello", level: 88 },
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    color: "purple",
    skills: [
      { name: "Java", level: 82 },
      { name: "SQL", level: 85 },
      { name: "C / C#", level: 80 },
      { name: "Embedded C (AVR/ARM)", level: 85 },
      { name: "TestNG / Allure", level: 82 },
      { name: "CI/CD (GitHub Actions)", level: 78 },
    ],
  },
];

const colorMap = {
  cyan: { bar: "from-cyan-500 to-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400", icon: "text-cyan-400" },
  blue: { bar: "from-blue-500 to-blue-400", badge: "bg-blue-500/10 border-blue-500/30 text-blue-400", icon: "text-blue-400" },
  purple: { bar: "from-purple-500 to-purple-400", badge: "bg-purple-500/10 border-purple-500/30 text-purple-400", icon: "text-purple-400" },
};

function SkillBar({ name, level, color, delay }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setFilled(true), delay); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colorMap[color].bar} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: filled ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

const tools = [
  "Selenium", "Postman", "JMeter", "Jira", "Zephyr", "TestNG",
  "Allure Reports", "Git", "GitHub Actions", "Trello", "Newman",
  "IntelliJ IDEA", "STM32", "AVR Studio", "SQL Server",
];

export default function Skills() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">02.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Skills & Arsenal</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.title}
              className="p-6 rounded-xl border border-slate-700/40 bg-slate-800/20 hover:border-slate-600/60 transition-all duration-300 hover:bg-slate-800/40 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`font-display font-bold text-lg ${colorMap[group.color].icon}`}>{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} delay={i * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-slate-400 font-mono text-sm mb-6 text-center tracking-widest uppercase">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <span key={t}
                className="px-3 py-1.5 text-sm font-mono border border-slate-700/50 text-slate-400 rounded-lg bg-slate-800/30 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
