import { useState } from "react";
import { SOCIAL_LINKS } from "../data/socialLinks";

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 border-t border-[#0a2a1a]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono mb-4">Let's Connect</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Start a <span className="gold-shimmer">Conversation</span>
          </h2>
          <p className="text-green-500 text-sm font-light">Have a project in mind? I'd love to bring your vision to life.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Left info */}
          <div className="md:col-span-2 space-y-8">
            {[
              { label: "Email",        value: "azadhossain016288@gmail.com" },
              { label: "Location",     value: "Sylhet, Bangladesh" },
              { label: "Availability", value: "Open to work" },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-[#0cb360] pb-6">
                <div className="text-[#061210] text-[9px] tracking-[.4em] uppercase font-mono mb-2">{label}</div>
                <div className="text-[#c8a97e] text-sm font-light">{value}</div>
              </div>
            ))}

            <div className="flex flex-col gap-2.5 pt-2">
              {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-[#0a2a1a] px-4 py-3 rounded-xl transition-all duration-300"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color+"55"; e.currentTarget.style.background = color+"0d"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=""; e.currentTarget.style.background=""; e.currentTarget.style.transform=""; }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: color+"18", color }}>
                    {icon}
                  </div>
                  <span className="text-[11px] tracking-[.2em] uppercase font-mono text-[#0cb360] group-hover:text-white transition-colors duration-300 flex-1">{name}</span>
                  <span className="text-[#0a2a1a] group-hover:text-[#c8a97e] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSend} className="md:col-span-3 space-y-7">
            {[
              { label: "Full Name",      key: "name",    type: "text",  placeholder: "Your Name" },
              { label: "Email Address",  key: "email",   type: "email", placeholder: "your@email.com" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} className="border-b border-[#0cb360] pb-1 focus-within:border-[#c8a97e]/25 transition-colors duration-300">
                <label className="text-green-500 text-[9px] tracking-[.4em] uppercase font-mono block mb-3">{label}</label>
                <input type={type} required placeholder={placeholder} value={formData[key]}
                  onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full text-sm pb-2 font-light" />
              </div>
            ))}
            <div className="border-b border-[#0cb360] pb-1 focus-within:border-[#c8a97e]/25 transition-colors duration-300">
              <label className="text-green-500 text-[9px] tracking-[.4em] uppercase font-mono block mb-3">Message</label>
              <textarea required rows={4} placeholder="Tell me about your project..." value={formData.message}
                onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                className="w-full text-sm font-light resize-none pb-2" />
            </div>
            <button type="submit"
              className="w-full py-4 text-[11px] tracking-[.3em] uppercase font-mono font-medium transition-all duration-500"
              style={{
                background: sent ? "transparent" : "linear-gradient(135deg, #c8a97e, #a0784e)",
                color: sent ? "#c8a97e" : "black",
                border: sent ? "1px solid rgba(200,169,126,.25)" : "none",
                boxShadow: sent ? "none" : "0 10px 40px rgba(200,169,126,.2)",
              }}>
              {sent ? "✓ Message Received" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
