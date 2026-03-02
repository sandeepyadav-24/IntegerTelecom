import { useState } from "react";

const PRIMARY = "#259df4";

const NAV_ITEMS = [
  { id: "home", icon: "home", label: "Home" },
  { id: "services", icon: "build", label: "Services" },
  { id: "projects", icon: "grid_view", label: "Projects" },
  { id: "profile", icon: "person", label: "Profile" },
];

const DESKTOP_NAV = ["Home", "About", "Services", "Contact"];

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNA7cYWIym-vhYbf5aZyaaK2TVrL49XAXnjE6e0mBN3RcUVQOapBVSq1B3FCAz1PHynuBj6J49U3O0Zflx-gQiLH30NxM56GrpxtBQhHa8sbf1Xo5VP7SVlOV2GELFxz7JKX2EccdAFQqDBhUMOtagPVveKkWn1fmxGpIZ1ACJFr2PANKGCfxy551BYVeCgDi-zTAGi5pxRWbQGnc9GfXkNL225VcqSD4WqQNjxfck9jOx7F-xzThUSlzXqBxczRwWvy6yfC_u9u2r";

const SECTIONS = [
  {
    id: "cabling",
    icon: "settings_input_component",
    title: "Structured Cabling",
    items: [
      { title: "Fiber & Copper Cabling", desc: "High-performance backbone and horizontal distribution systems." },
      { title: "Cable Pathways & Management", desc: "Optimized routing for airflow and maintenance accessibility." },
      { title: "Labeling & Documentation", desc: "Comprehensive mapping and industry-standard identification." },
    ],
  },
  {
    id: "rack",
    icon: "dns",
    title: "Rack & Equipment Installation",
    items: [
      { title: "Rack, Cabinet & Ladder Rack Setup", desc: "Precision anchoring and seismic-rated infrastructure mounting." },
      { title: "Server, Switch & PDU Installation", desc: "Hardware mounting and intelligent power distribution unit setup." },
      { title: "Patch Panel Wiring & Cleanup", desc: "High-density termination and professional cable grooming." },
    ],
  },
  {
    id: "testing",
    icon: "verified",
    title: "Infrastructure Testing",
    items: [
      { title: "Cable Certification", desc: "Fluke testing for Cat6A, single-mode, and multi-mode fiber." },
      { title: "Equipment Powerup Verification", desc: "Phase balancing and circuit load verification for all devices." },
      { title: "Connectivity & Throughput Testing", desc: "End-to-end signal integrity and network latency benchmarking." },
    ],
  },
];

const STATS = [
  { n: "500+", l: "Racks Installed" },
  { n: "99.9%", l: "Uptime Delivered" },
  { n: "30+", l: "States Covered" },
  { n: "24/7", l: "Support" },
];

function CheckItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group">
      <span className="material-symbols-outlined text-sm mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
        style={{ color: PRIMARY, fontSize: "18px" }}>check_circle</span>
      <div>
        <p className="font-bold text-slate-900 text-sm">{title}</p>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function DataCenterInstallation() {
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        .section-card { transition: box-shadow 0.2s, border-color 0.2s; }
        .section-card:hover { box-shadow: 0 4px 20px rgba(37,157,244,0.08); border-color: rgba(37,157,244,0.25); }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ══════════ HEADER ══════════ */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3.5">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>dns</span>
              </div>
              <h1 className="text-base font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Data Center <span className="hidden sm:inline" style={{ color: PRIMARY }}>Installation</span>
              </h1>
            </div>
            </div>

            
        </header>

        <main className="flex-1 pb-20 md:pb-0">

          {/* ══════════ HERO ══════════ */}
          <div className="md:px-6 md:pt-6 md:max-w-7xl md:mx-auto">
            <div className="relative flex flex-col justify-end overflow-hidden md:rounded-2xl"
              style={{
                minHeight: "260px",
                backgroundImage: `linear-gradient(0deg, rgba(16,26,34,0.88) 0%, rgba(16,26,34,0.15) 60%), url("${HERO_IMG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              {/* Desktop badge top-left */}
              <div className="hidden md:flex absolute top-6 left-6 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(37,157,244,0.2)", color: PRIMARY, backdropFilter: "blur(8px)", border: "1px solid rgba(37,157,244,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
                Premium Infrastructure
              </div>

              <div className="p-6 md:p-10 space-y-2">
                {/* Mobile badge */}
                <span className="md:hidden inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-white"
                  style={{ background: PRIMARY }}>
                  Premium Infrastructure
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Expert Infrastructure<br className="hidden md:block" /> Setup
                </h2>
                <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed pt-1">
                  Professional data center installation from structured cabling to full rack deployment and certified testing.
                </p>
              </div>

              {/* Desktop stats bar */}
              <div className="hidden md:flex gap-10 px-10 py-5 border-t border-white/10"
                style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
                {STATS.map(({ n, l }) => (
                  <div key={l}>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                    <p className="text-slate-400 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════ MOBILE STATS STRIP ══════════ */}
          <div className="md:hidden bg-slate-900 grid grid-cols-4">
            {STATS.map(({ n, l }, i) => (
              <div key={l}
                className={`py-3 text-center ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}>
                <p className="text-base font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{l}</p>
              </div>
            ))}
          </div>

          {/* ══════════ SERVICE SECTIONS ══════════ */}

          {/* Mobile layout: stacked full-width */}
          <div className="md:hidden flex flex-col gap-8 p-4 pt-6">
            {SECTIONS.map(({ id, icon, title, items }) => (
              <section key={id} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined" style={{ color: PRIMARY }}>{icon}</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {items.map(({ title: t, desc }) => <CheckItem key={t} title={t} desc={desc} />)}
                </div>
              </section>
            ))}

            {/* Mobile CTA */}
            <div className="mt-2">
              <button className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ background: PRIMARY, boxShadow: `0 8px 24px rgba(37,157,244,0.3)` }}>
                Request a Proposal
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center text-slate-400 text-xs mt-3">Free site assessment for enterprise installations</p>
            </div>
          </div>

          {/* Desktop layout: 3-col cards */}
          <div className="hidden md:block max-w-7xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {SECTIONS.map(({ id, icon, title, items }) => (
                <div key={id}
                  className="section-card bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  {/* Card header */}
                  <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100"
                    style={{ background: "rgba(37,157,244,0.03)" }}>
                    <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                      <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>{icon}</span>
                    </div>
                    <h3 className="text-[15px] font-bold leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
                  </div>
                  {/* Card items */}
                  <div className="p-5 flex flex-col gap-3">
                    {items.map(({ title: t, desc }) => <CheckItem key={t} title={t} desc={desc} />)}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop CTA banner */}
            <div className="relative bg-slate-900 rounded-2xl px-10 py-8 overflow-hidden flex items-center justify-between gap-6">
              <div className="absolute right-0 top-0 h-full w-2/5 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #259df4 0%, transparent 70%)" }} />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Ready to Deploy Your Data Center?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  From structured cabling to certified testing — we handle the entire installation lifecycle with enterprise-grade precision.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 shrink-0">
                <button className="flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: PRIMARY, boxShadow: `0 4px 16px rgba(37,157,244,0.35)` }}>
                  Request a Proposal
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-slate-500 text-xs">Free site assessment for enterprise installations</p>
              </div>
            </div>
          </div>

        </main>

        {/* ══════════ DESKTOP FOOTER ══════════ */}
        <footer className="hidden md:block bg-slate-900 text-slate-400 py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-2xl" style={{ color: PRIMARY }}>dns</span>
              <span className="font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                Integer Telecom — Data Center Division
              </span>
            </div>
            <div className="flex gap-8 text-sm">
              {DESKTOP_NAV.map(l => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-xs">© 2024 Integer Telecom Services</p>
          </div>
        </footer>

        {/* ══════════ MOBILE BOTTOM NAV ══════════ */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg">
          <div className="flex max-w-md mx-auto h-16 px-2">
            {NAV_ITEMS.map(({ id, icon, label }) => {
              const active = activeNav === id;
              return (
                <button key={id} onClick={() => setActiveNav(id)}
                  className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1 rounded-xl transition-colors"
                  style={{ color: active ? PRIMARY : "#94a3b8" }}>
                  <span className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>
                    {icon}
                  </span>
                  <p className="text-[9px] font-bold uppercase tracking-wider">{label}</p>
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </>
  );
}