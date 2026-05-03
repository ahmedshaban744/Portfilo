import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-slate-800/50 py-3" : "py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display text-lg font-bold tracking-wider">
          <span className="text-cyan-400">A</span>hmed<span className="text-cyan-400">.</span>
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-slate-400 hover:text-cyan-400 text-sm font-mono tracking-wider transition-colors duration-200 hover:scale-105">
              {l}
            </button>
          ))}
          <a href="mailto:ahmedshaban744@gmail.com"
            className="border border-cyan-500/50 text-cyan-400 px-4 py-1.5 text-sm font-mono rounded hover:bg-cyan-500/10 transition-all duration-200">
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-400 hover:text-white">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a1020]/95 backdrop-blur-xl border-t border-slate-800/50 px-6 py-4 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 font-mono text-sm py-2 border-b border-slate-800/50">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
