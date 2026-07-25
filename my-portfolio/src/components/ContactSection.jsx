import { useState } from "react";
import { SOCIAL_LINKS } from "../data/socialLinks";

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 border-t border-[#1e293b] bg-[#0a0f1c]">
      <div className="max-w-5xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#c8a97e]/60 text-[10px] tracking-[.45em] uppercase font-mono mb-4">Let's Connect</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Start a <span className="gold-shimmer">Conversation</span>
          </h2>
          <p className="text-gray-400 text-sm font-light">Have a project in mind? I'd love to bring your vision to life.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT — Form */}
          <div className="rounded-2xl p-8 border border-[#c8a97e]/20"
            style={{ background: "#0f172a" }}>
            <form onSubmit={handleSend} className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 text-[9px] tracking-[.4em] uppercase font-mono block mb-2">Full Name</label>
                  <input
                    type="text" required placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm font-light border border-[#c8a97e]/20 focus:border-[#c8a97e]/60 transition-colors duration-300"
                    style={{ background: "#0a0f1c", color: "white" }}
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-[9px] tracking-[.4em] uppercase font-mono block mb-2">Email Address</label>
                  <input
                    type="email" required placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm font-light border border-[#c8a97e]/20 focus:border-[#c8a97e]/60 transition-colors duration-300"
                    style={{ background: "#0a0f1c", color: "white" }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-gray-300 text-[9px] tracking-[.4em] uppercase font-mono block mb-2">Subject</label>
                <input
                  type="text" placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={e => setFormData(f => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm font-light border border-[#c8a97e]/20 focus:border-[#c8a97e]/60 transition-colors duration-300"
                  style={{ background: "#0a0f1c", color: "white" }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-300 text-[9px] tracking-[.4em] uppercase font-mono block mb-2">Message</label>
                <textarea
                  required rows={6} placeholder="Tell me about your vision..."
                  value={formData.message}
                  onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm font-light border border-[#c8a97e]/20 focus:border-[#c8a97e]/60 transition-colors duration-300 resize-none"
                  style={{ background: "#0a0f1c", color: "white" }}
                />
              </div>

              {/* Submit Button */}
              <button type="submit"
                className="w-full py-4 rounded-xl text-[11px] tracking-[.3em] uppercase font-mono font-semibold transition-all duration-500 flex items-center justify-center gap-3"
                style={{
                  background: sent ? "transparent" : "#c8a97e",
                  color: sent ? "#22c55e" : "#0a0f1c",
                  border: sent ? "1px solid #22c55e40" : "none",
                  boxShadow: sent ? "none" : "0 10px 30px rgba(200,169,126,.2)",
                }}>
                {sent ? "✓ Message Received" : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT — Info */}
          <div className="flex flex-col gap-4">

            {/* Email */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-[#c8a97e]/20 hover:border-[#c8a97e]/40 transition-all duration-300"
              style={{ background: "#0f172a" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0a0f1c] border border-[#c8a97e]/20">
                <svg className="w-5 h-5 text-[#c8a97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-[9px] tracking-[.4em] uppercase font-mono mb-1">Email</div>
                <div className="text-white text-sm font-light">azadhossain016288@gmail.com</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-[#c8a97e]/20 hover:border-[#c8a97e]/40 transition-all duration-300"
              style={{ background: "#0f172a" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0a0f1c] border border-[#c8a97e]/20">
                <svg className="w-5 h-5 text-[#c8a97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-[9px] tracking-[.4em] uppercase font-mono mb-1">Location</div>
                <div className="text-white text-sm font-light">Sylhet, Bangladesh</div>
              </div>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/8801628893299" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#c8a97e]/30 hover:border-[#c8a97e]/60 transition-all duration-300"
              style={{ background: "#0f172a" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0a0f1c] border border-[#c8a97e]/20 text-[#c8a97e]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-[#c8a97e] text-[9px] tracking-[.4em] uppercase font-mono mb-1">WhatsApp Now</div>
                <div className="text-white text-sm font-light">+880 1628893299</div>
              </div>
            </a>

            {/* Social Grid */}
            <div className="rounded-2xl p-5 border border-[#c8a97e]/20"
              style={{ background: "#0f172a" }}>
              <div className="text-gray-400 text-[9px] tracking-[.4em] uppercase font-mono mb-4">Connect With Me</div>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map(({ name, url, color, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#c8a97e]/20 transition-all duration-300 group"
                    style={{ background: "#0a0f1c" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = color + "55";
                      e.currentTarget.style.background = color + "0d";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.background = "#0a0f1c";
                      e.currentTarget.style.transform = "";
                    }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: color + "18", color }}>
                      {icon}
                    </div>
                    <span className="text-[10px] tracking-[.2em] uppercase font-mono text-gray-300 group-hover:text-white transition-colors duration-300">{name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;