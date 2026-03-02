import { useState } from "react";

const PRIMARY = "#259df4";

const NAV_ITEMS = [
  { id: "home", icon: "home", label: "Home" },
  { id: "services", icon: "settings", label: "Services" },
  { id: "projects", icon: "rss_feed", label: "Projects" },
  { id: "contact", icon: "call", label: "Contact" },
];

const DESKTOP_NAV = ["Home", "Services", "Projects", "Contact"];

const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3yRNshB0NBw-LSEPfm0ajOxfGd60DA-zAELMOIHkctynmXHXjanNlJoP-yXwSjhUd-iohszv1IiBqpMwAJlNM0qH_te6Ts4-2PcV8Cq5KWzFUOctJ7eZ4CgdxESIkRNjC3Yoa9idagUyKPnVihqDRLkD_U9y9k1ELWy51-RVc6jH3aqHxHOKhAO0YHNM3ex-Z3Xy-zNbw7phg6_a_G__0MyHUZj0TmMqQEfQ8XsdbPi0808mtppCCLG1DKJFIMITkCYVnTRlR5ZGf";

const CONTACT_DETAILS = [
  { icon: "mail", label: "Email Us", value: "support@integertel.com", href: "mailto:support@integertel.com", link: true },
  { icon: "call", label: "Call Us", value: "+1 972 539 4100", href: "tel:+19725394100", link: true },
  { icon: "location_on", label: "Headquarters", value: "Richardson, Texas, USA", link: false },
];

const SERVICES_LIST = [
  "Network Deployment",
  "Engineering Consultation",
  "Field Services",
  "System Maintenance",
  "Other",
];

const QUICK_LINKS = ["Our Process", "Client Portal", "Career Opportunities", "Privacy Policy"];

export default function ContactUs() {
  const [activeNav, setActiveNav] = useState("contact");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "Network Deployment", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        .input-field { transition: border-color 0.2s, box-shadow 0.2s; }
        .input-field:focus { border-color: ${PRIMARY}; box-shadow: 0 0 0 3px rgba(37,157,244,0.15); outline: none; }
        .contact-card:hover { border-color: rgba(37,157,244,0.35); box-shadow: 0 4px 16px rgba(37,157,244,0.08); }
        .contact-card { transition: all 0.2s ease; }
        .cta-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(37,157,244,0.35) !important; }
        .cta-btn { transition: all 0.2s ease; }
        .footer-link:hover { color: ${PRIMARY}; }
        .footer-link { transition: color 0.15s; }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        

        {/* ══════════ MAIN ══════════ */}
        <main className="flex-grow pb-20 md:pb-0">

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-14 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "rgba(37,157,244,0.08)", color: PRIMARY, border: "1px solid rgba(37,157,244,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Contact Us
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Let's accelerate your network deployment. Talk to our engineering and field teams today.
            </p>
          </section>

          {/* Content Grid */}
          <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Contact Info + Map ── */}
            <div className="space-y-6">

              {/* Contact Details Card */}
              <div className="contact-card bg-white rounded-2xl border border-blue-50 shadow-sm p-7">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <span className="material-symbols-outlined" style={{ color: PRIMARY }}>info</span>
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {CONTACT_DETAILS.map(({ icon, label, value, href, link }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl shrink-0" style={{ background: "rgba(37,157,244,0.08)", color: PRIMARY }}>
                        <span className="material-symbols-outlined">{icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {link
                          ? <a href={href} className="text-base font-semibold hover:text-[#259df4] transition-colors">{value}</a>
                          : <p className="text-base font-semibold">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="cta-btn flex items-center justify-center gap-2 text-white font-bold py-4 px-6 rounded-2xl shadow-lg"
                  style={{ background: PRIMARY, boxShadow: `0 6px 20px rgba(37,157,244,0.3)` }}>
                  <span className="material-symbols-outlined">description</span>
                  Request a Proposal
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border-2 font-bold py-4 px-6 rounded-2xl hover:border-[#259df4] transition-all"
                  style={{ borderColor: "rgba(37,157,244,0.25)", color: PRIMARY }}>
                  <span className="material-symbols-outlined">chat</span>
                  Talk to an Expert
                </button>
              </div>

              {/* Map */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-blue-50 grayscale contrast-125">
                <img src={MAP_IMG} alt="Richardson Texas HQ" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(37,157,244,0.08)" }}>
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" style={{ color: PRIMARY }}>location_on</span>
                    <span className="text-sm font-bold text-slate-900">Integer Telecom HQ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-7 md:p-10">
              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Send us a Message</h3>
              <p className="text-slate-500 text-sm mb-7 leading-relaxed">
                Have a specific project in mind? Our team typically responds within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[32px]" style={{ color: PRIMARY }}>check_circle</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Message Sent!</h4>
                  <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold hover:underline" style={{ color: PRIMARY }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input
                        name="name" type="text" placeholder="John Doe" value={form.name}
                        onChange={handleChange} required
                        className="input-field w-full px-4 py-3 rounded-xl border border-blue-100 bg-slate-50 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Work Email</label>
                      <input
                        name="email" type="email" placeholder="john@company.com" value={form.email}
                        onChange={handleChange} required
                        className="input-field w-full px-4 py-3 rounded-xl border border-blue-100 bg-slate-50 text-sm"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Service Required</label>
                    <div className="relative">
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="input-field w-full px-4 py-3 rounded-xl border border-blue-100 bg-slate-50 text-sm appearance-none cursor-pointer">
                        {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea
                      name="message" rows={5} placeholder="Tell us about your project requirements..."
                      value={form.message} onChange={handleChange} required
                      className="input-field w-full px-4 py-3 rounded-xl border border-blue-100 bg-slate-50 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit"
                    className="cta-btn w-full text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
                    style={{ background: PRIMARY, boxShadow: `0 6px 20px rgba(37,157,244,0.3)` }}>
                    Send Inquiry
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>

        

        {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
          <div className="flex justify-around items-center px-2 pb-4 pt-1.5">
            {NAV_ITEMS.map(({ id, icon, label }) => {
              const active = activeNav === id;
              return (
                <button key={id} onClick={() => setActiveNav(id)}
                  className="flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-colors"
                  style={{ color: active ? PRIMARY : "#94a3b8" }}>
                  <span className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>
                    {icon}
                  </span>
                  <p className="text-[10px] font-medium">{label}</p>
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </>
  );
}