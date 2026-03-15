import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const SERVICES_OPTS = [
  "UI/UX Design",
  "Front-End Development",
  "Data Analysis",
  "IT Support",
  "Other",
];

export default function Contact() {
  const ref = useReveal();
  const [form, setForm]       = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus]   = useState(null); // null | "sending" | "sent"

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-navy-900/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />

      <div className="max-w-6xl mx-auto section-reveal" ref={ref}>
        <div className="mb-14">
          <div className="font-mono text-xs text-sky/40 mb-3 flex items-center gap-2">
            <span className="text-mint">▸</span>
            <span>~/contact</span>
            <span className="text-navy-600">$</span>
            <span className="text-white/50">./send-message.sh</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold text-white">
            Let's <span className="text-mint text-glow-mint">connect.</span>
          </h2>
          <p className="font-mono text-xs text-sky/40 mt-2">// cultivating connections — reach out and build something great</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Availability card */}
            <div className="term-card p-5 rounded-xl border border-mint/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-mint animate-glow" />
                <span className="font-mono text-xs text-mint font-bold">Available now</span>
              </div>
              <p className="text-sm text-sky-300/60 leading-relaxed">
                Open to freelance projects, part-time roles, and internship opportunities.
              </p>
            </div>

            {/* Contact details */}
            <div className="term-card p-5 rounded-xl space-y-4">
              <div className="font-mono text-xs text-sky/30 mb-1">
                <span className="text-mint">▸</span> contact.json
              </div>
              {[
                { label: "email",    val: "cynthydigalra@gmail.com", color: "text-[#FF7EB3]" },
                { label: "phone",    val: "+250 791 222 275",        color: "text-lemon" },
                { label: "location", val: "Kigali, Rwanda",          color: "text-mint" },
              ].map(c => (
                <div key={c.label}>
                  <span className="font-mono text-[10px] text-sky/40">"{c.label}": </span>
                  <span className={`font-mono text-xs ${c.color}`}>"{c.val}"</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="term-card p-5 rounded-xl">
              <div className="font-mono text-xs text-sky/30 mb-3">
                <span className="text-mint">▸</span> socials/
              </div>
              <div className="space-y-2">
                {[
                  { name: "Instagram", handle: "@cynthia.dev",  color: "text-[#FF7EB3]" },
                  { name: "LinkedIn",  handle: "cynthia-niganze", color: "text-sky" },
                  { name: "GitHub",    handle: "@cynthia-dev",  color: "text-mint" },
                ].map(s => (
                  <div key={s.name} className="flex items-center justify-between">
                    <span className="font-mono text-xs text-sky/40">{s.name}</span>
                    <span className={`font-mono text-xs ${s.color}`}>{s.handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {status === "sent" ? (
              <div className="term-card p-8 rounded-xl border border-mint/30 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="text-4xl">✓</div>
                <div className="font-display text-2xl text-mint text-glow-mint font-bold">Message sent!</div>
                <div className="font-mono text-xs text-sky/50">exit code 0 — transmission successful</div>
                <button
                  onClick={() => { setStatus(null); setForm({ name:"",email:"",phone:"",service:"",message:"" }); }}
                  className="font-mono text-xs border border-mint/30 text-mint px-5 py-2 rounded mt-2 hover:bg-mint/10 transition-colors"
                >
                  $ ./new-message.sh
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="term-card p-6 rounded-xl">
                <div className="font-mono text-xs text-sky/40 mb-6">
                  <span className="text-mint">▸</span> composing message...
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-mono text-[10px] text-sky/40 uppercase tracking-wider block mb-1.5">--name</label>
                    <input className="term-input" placeholder="Your name" value={form.name} onChange={e => set("name", e.target.value)} required />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-sky/40 uppercase tracking-wider block mb-1.5">--email</label>
                    <input className="term-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => set("email", e.target.value)} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-mono text-[10px] text-sky/40 uppercase tracking-wider block mb-1.5">--phone</label>
                    <input className="term-input" placeholder="+250 ..." value={form.phone} onChange={e => set("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-sky/40 uppercase tracking-wider block mb-1.5">--service</label>
                    <select className="term-input" value={form.service} onChange={e => set("service", e.target.value)}>
                      <option value="">Select service...</option>
                      {SERVICES_OPTS.map(s => <option key={s} value={s} style={{ background: "#0C1525" }}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="font-mono text-[10px] text-sky/40 uppercase tracking-wider block mb-1.5">--message</label>
                  <textarea
                    className="term-input"
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ resize: "vertical" }}
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-sky/30">
                    {Object.values(form).filter(Boolean).length}/5 fields filled
                  </span>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-mono text-sm bg-mint text-navy-950 font-bold px-7 py-3 rounded hover:bg-mint-bright transition-colors duration-200 shadow-mint disabled:opacity-50 flex items-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="animate-pulse">sending</span>
                        <span className="animate-blink">█</span>
                      </>
                    ) : "$ ./send.sh →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
