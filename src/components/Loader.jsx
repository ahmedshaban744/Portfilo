import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#080c14] flex flex-col items-center justify-center z-50">
      <div className="relative mb-8">
        <div className="w-16 h-16 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: "3s" }} />
        <div className="absolute inset-2 w-12 h-12 border-2 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: "1s" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-cyan-400 font-mono text-xs">{Math.min(100, Math.floor(progress))}%</span>
        </div>
      </div>
      <div className="w-48 h-[1px] bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
      <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">Initializing Portfolio</p>
    </div>
  );
}
