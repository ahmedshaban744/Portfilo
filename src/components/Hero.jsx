import { useEffect, useState } from "react";

const titles = ["QA Engineer", "Test Automation Engineer", "Embedded Systems Engineer", "Software Quality Specialist"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = titles[titleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-[160px] pointer-events-none" />

      <div className={`max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs font-mono tracking-widest">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Ahmed</span><br />
            <span className="text-white">Shaban</span><br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mohamed</span>
          </h1>

          <div className="flex items-center gap-3 h-8">
            <span className="text-slate-400 font-mono text-lg">&gt;</span>
            <span className="text-cyan-300 font-mono text-lg md:text-xl font-medium">{displayed}</span>
            <span className="w-0.5 h-6 bg-cyan-400 animate-[blink_1s_infinite]" />
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
            Engineering quality from the ground up — from embedded firmware to full-stack web automation. 
            I ensure software doesn't just work, it <span className="text-cyan-400 font-medium">excels under pressure</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-6 py-3 bg-cyan-500 text-black font-bold font-mono text-sm rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-slate-600 text-slate-300 font-mono text-sm rounded hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105">
              View Projects →
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-slate-800">
            {[["53+", "Training Hours"], ["10+", "Apps Tested"], ["1+", "Years Exp"], ["6+", "Projects"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-display font-bold text-white">{n}</div>
                <div className="text-xs text-slate-500 font-mono">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                    <img 
                           src="/FB_IMG_1722765136714.jpg" 
                          alt="Ahmed Shaban "
                      className="w-full h-full object-cover rounded-full"
                      />
                  </div>
                  <div className="space-y-1">
                    <div className="font-display font-bold text-white text-lg">Ahmed Shaban</div>
                    <div className="text-cyan-400 text-xs font-mono">QA Engineer</div>
                  </div>
                  <div className="flex gap-2 justify-center flex-wrap px-4">
                    {["Selenium", "Postman", "JMeter"].map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/50" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-400/50" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-400/50" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-600 text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
