export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold">
          <span className="text-cyan-400">A</span>hmed<span className="text-cyan-400">.</span>
        </div>
        <p className="text-slate-600 text-sm font-mono text-center">
          © 2026 Ahmed Shaban Mohamed · QA Engineer & Embedded Systems Engineer
        </p>
        <div className="flex gap-4">
          {[
            ["💼", "https://linkedin.com/in/ahmed-shaban744"],
            ["💻", "https://github.com/ahmedshaban744"],
            ["📧", "mailto:ahmedshaban744@gmail.com"],
          ].map(([icon, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors duration-200 text-lg">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
