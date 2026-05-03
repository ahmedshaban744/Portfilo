import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">01.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Software Testing Engineer</span> with a rare dual expertise 
              in both software QA and embedded systems — a combination that gives me a uniquely 
              deep perspective on software quality at every layer of the stack.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My engineering background from Sohag University, paired with hands-on experience in mission-critical 
              applications at the <span className="text-white font-medium">Egyptian Air Force</span> and intensive QA training 
              at Nezam Academy, has sharpened my ability to find bugs others miss and build robust test strategies from scratch.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether it's designing a Selenium automation framework, stress-testing APIs with Postman, 
              or validating RTOS task scheduling on ARM microcontrollers — I approach every testing challenge 
              with precision, curiosity, and an engineer's mindset.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ["📍", "Location", "Egypt"],
                ["🎓", "Degree", "B.Eng Electronics & Comms"],
                ["⚡", "Focus", "QA & Automation"],
                ["🌐", "Languages", "Arabic, English"],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs font-mono">{label}</div>
                    <div className="text-slate-200 text-sm font-medium">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal-style card */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-slate-500 text-xs font-mono">ahmed-profile.json</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-1">
              <div><span className="text-slate-500">{"{"}</span></div>
              {[
                ["name", '"Ahmed Shaban Mohamed"', "text-green-400"],
                ["role", '"QA & Automation Engineer"', "text-green-400"],
                ["experience", '"3+ years"', "text-blue-400"],
                ["testing", '["Manual","Automation","API","Performance"]', "text-yellow-400"],
                ["tools", '["Selenium","Postman","JMeter","Jira"]', "text-yellow-400"],
                ["embedded", '["AVR","ARM","RTOS","STM32"]', "text-purple-400"],
                ["education", '"Sohag University - Very Good with Honors"', "text-green-400"],
                ["openToWork", "true", "text-cyan-400"],
              ].map(([k, v, vc]) => (
                <div key={k} className="pl-4">
                  <span className="text-slate-400">"{k}"</span>
                  <span className="text-slate-500">: </span>
                  <span className={vc}>{v}</span>
                  <span className="text-slate-500">,</span>
                </div>
              ))}
              <div><span className="text-slate-500">{"}"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
