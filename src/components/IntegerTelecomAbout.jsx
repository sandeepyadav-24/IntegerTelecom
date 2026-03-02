import { useState } from "react";

const PRIMARY = "#259df4";

const NAV_LINKS = ["Home", "About", "Services", "Contact"];
const MOBILE_NAV = [
  { icon: "home", label: "Home", id: "home" },
  { icon: "info", label: "About", id: "about" },
  { icon: "settings", label: "Services", id: "services" },
  { icon: "mail", label: "Contact", id: "contact" },
];

const APPROACH_CARDS = [
  { icon: "architecture", title: "Engineering Excellence", desc: "High-level technical precision in wireless, fiber, and chipset solutions." },
  { icon: "bolt", title: "Execution at Scale", desc: "Rapid deployment capabilities across 30+ states with consistent quality." },
  { icon: "smart_toy", title: "Automation-Driven", desc: "Proprietary tools to streamline delivery and minimize manual errors." },
  { icon: "monitoring", title: "Predictable Outcomes", desc: "Transparent reporting that provides real-time visibility into project status." },
];

const FOOTPRINT = [
  { country: "United States", desc: "Active operations in 30+ states, covering coastal and inland regions." },
  { country: "India", desc: "Global engineering hub providing 24/7 support and specialized chipset expertise." },
  { country: "Canada", desc: "Extended field service reach for North American enterprises." },
];

const FOOTER_SERVICES = ["Wireless Engineering", "Fiber Solutions", "Data Centers", "Chipset Design"];
const FOOTER_CONTACT = [
  { icon: "phone", text: "+1 (800) INT-EGER" },
  { icon: "pin_drop", text: "North America / India" },
  { icon: "email", text: "contact@integertelecom.com" },
];

const TOWER_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5BVLb8H37JpJmcy_s7rLtibDs4h4HL59LIuW8UxqkXPNDAwYlxI1MyE6o0p4nm2A_jCWil3DnL1MH-gN9j5EV0xGJlfb7WZ4dtHgCu3UT6M5h91noz2mtNkycjgzzYpzyiSLHUxGBuPi_Yv1BwTIXGCSMFjiZec0xSo1nfZ7tnYfrsDxQcgs3YOeSsiRfzMQtuKyVmom54ji4qdk3Br08lhnOZt6wQOPD160Jaq-wKPfS14YRwf34pDVmhetqCyXBcg2Qm2-pd0V";
const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBMd2r9owmNp9t0mPhldl7dflhywAFbP6FEQqNWVy_jl6Qs7ocqslp6opxeLRHEB714zprKcF4Ml14W33unz6KPJ4JJJu_bEj2lfy6JFAirO3DW6QHwn26K7ZdfUOz1hZTYr5aygv1DkGjuImbn8zutu_WUX59p3InO08YHZNvxPIELGCG2xnJy18EgORxYEqRiSBrmOTAY5XVzb3JQ5xXR2xooFZAm4pRnydFQpsiM_ggHsGd3L9zBM7_krRbOogS_znpeyEwv3z2v";

export default function IntegerTelecomAbout() {
  const [activeNav, setActiveNav] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }
        .ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }
        .approach-card:hover .approach-icon { transform: scale(1.12); }
        .approach-icon { transition: transform 0.2s ease; }
        .footer-social:hover { background: ${PRIMARY}; border-color: ${PRIMARY}; }
        .footer-social { transition: all 0.2s; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        

        <main className="pb-16 md:pb-0">

          {/* ═══ HERO ═══ */}
          <section className="relative py-16 md:py-24 px-4 bg-white overflow-hidden">
            {/* Subtle bg grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#259df4_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left */}
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#259df4] text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="ping absolute inline-flex h-full w-full rounded-full bg-[#259df4] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#259df4]" />
                  </span>
                  Global Presence
                </div>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  About Integer <br />
                  <span className="text-[#259df4]">Telecom Services</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Integer Telecom Services is a telecom engineering and field services company delivering wireless, fiber, chipset, tower, and data center solutions across North America and India.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {[["600+", "Engineers & Techs"], ["30+", "U.S. States"], ["3", "Countries Active"]].map(([num, label], i) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-[#259df4]" style={{ fontFamily: "'Syne', sans-serif" }}>{num}</span>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest">{label}</span>
                      </div>
                      {i < 2 && <div className="hidden sm:block w-px h-10 bg-slate-200" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-blue-50 border border-blue-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent z-10" />
                  <img src={TOWER_IMG} alt="Telecom Infrastructure" className="w-full h-full object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#259df4] text-white px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider">Est. 2008</p>
                  <p className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>15+ Years</p>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ MISSION ═══ */}
          <section className="py-20 px-4 bg-[#259df4] text-white">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="material-symbols-outlined text-6xl opacity-40">ads_click</span>
              <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Our Mission</h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-50">
                "Deliver high-quality network engineering and field execution supported by automation, global scale, and deep telecom expertise."
              </p>
            </div>
          </section>

          {/* ═══ OUR APPROACH ═══ */}
          <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-4">
                <div>
                  <p className="text-[#259df4] font-bold uppercase tracking-widest text-xs mb-3">Methodology</p>
                  <h2 className="text-4xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Our Approach</h2>
                </div>
                <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
                  We combine years of field experience with modern software solutions to ensure every project is handled with precision.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {APPROACH_CARDS.map(({ icon, title, desc }) => (
                  <div key={title} className="approach-card bg-white p-7 rounded-2xl border border-blue-50 hover:border-[#259df4] transition-all duration-200 hover:shadow-lg group cursor-pointer">
                    <span className="approach-icon material-symbols-outlined text-[#259df4] text-4xl mb-5 block">{icon}</span>
                    <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ DELIVERY FOOTPRINT ═══ */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div className="space-y-8">
                  <div>
                    <p className="text-[#259df4] font-bold uppercase tracking-widest text-xs mb-3">Coverage</p>
                    <h2 className="text-4xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Our Delivery Footprint</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We help operators, OEMs, and enterprises deploy reliable, high-performing networks at scale through our strategic hubs.
                  </p>
                  <div className="space-y-4">
                    {FOOTPRINT.map(({ country, desc }) => (
                      <div key={country} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200">
                        <span className="material-symbols-outlined text-[#259df4] mt-0.5 shrink-0">location_on</span>
                        <div>
                          <h4 className="font-bold text-base mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>{country}</h4>
                          <p className="text-sm text-slate-500">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="relative bg-slate-100 rounded-2xl p-4 overflow-hidden min-h-[380px]">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#259df4_1px,transparent_1px)] [background-size:20px_20px]" />
                  <img src={MAP_IMG} alt="Global operations map"
                    className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10" />
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ═══ FOOTER ═══ */}
        <footer className="bg-slate-900 text-slate-400 py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
            {/* Brand col */}
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-[#259df4] text-3xl">router</span>
                <span className="text-xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>Integer Telecom</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Delivering the infrastructure of the future. From fiber to chipsets, we are the engineering partner of choice for the world's leading telecom operators.
              </p>
              <div className="flex gap-3">
                {["public", "mail", "share"].map(icon => (
                  <a key={icon} href="#"
                    className="footer-social w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white font-bold mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>Services</h5>
              <ul className="space-y-3 text-sm">
                {FOOTER_SERVICES.map(s => (
                  <li key={s}><a href="#" className="hover:text-[#259df4] transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-bold mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>Contact</h5>
              <ul className="space-y-3 text-sm">
                {FOOTER_CONTACT.map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#259df4] text-base">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-3">
            <p>© 2024 Integer Telecom Services. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </footer>

        
      </div>
    </>
  );
}