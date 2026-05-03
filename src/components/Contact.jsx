import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ahmedshaban744@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { icon: "📧", label: "Email", value: "ahmedshaban744@gmail.com", href: "mailto:ahmedshaban744@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "ahmed-shaban744", href: "https://linkedin.com/in/ahmed-shaban744" },
    { icon: "💻", label: "GitHub", value: "ahmedshaban744", href: "https://github.com/ahmedshaban744" },
    { icon: "📱", label: "Phone", value: "+20 111 514 7685", href: "tel:+201115147685" },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">06.</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you need a QA engineer who can own your entire test strategy, or a technical tester
                who understands systems from the hardware up — I'm ready to make your software ship with confidence.
              </p>
            </div>

            <div className="space-y-4">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-700/40 bg-slate-800/20 hover:border-cyan-500/40 hover:bg-slate-800/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-mono">{c.label}</div>
                    <div className="text-slate-200 text-sm group-hover:text-cyan-400 transition-colors duration-300">{c.value}</div>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-cyan-400 transition-colors duration-300">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-xl border border-slate-700/40 bg-slate-800/20">
            <h3 className="font-display font-bold text-white text-xl mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm placeholder-slate-600"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm placeholder-slate-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm resize-none placeholder-slate-600"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold font-mono text-sm rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
                {sent ? "✓ Opening Email Client..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
