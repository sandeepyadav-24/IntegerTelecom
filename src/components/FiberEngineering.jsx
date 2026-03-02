import { useState } from "react";

const PRIMARY = "#259df4";



const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuATObHqdFpG0UO3266eMTtUPaIEiNE57fj4K3JBbBTV4tnRLkDhDQoRYQwiWXTSzg8bt0_dcC_v2G_F8ajiI3Gf68oz9NRdvcAFNQi5xNAGACZjPum1MuXe7I6PkHYAiWmWC70fYj8uXRDQVo0uuyarB5sqrmNDQ18ze8f_OIxrftNW5EmgFQiwRCe5XydlHXxoWZT-CDPYYiwQbnPryozo7Ujpq4ZLRAHAa-j51xSmZTswxAv7GP94heIrJPkGIOEJ5EpyGmvsgmY8";

const FIBER_ENG = [
  { icon: "map", title: "OSP / ISP Fiber Planning", desc: "Comprehensive outside and inside plant network strategy." },
  { icon: "architecture", title: "Route Design & Makeready", desc: "Precision engineering and utility pole preparation." },
  { icon: "layers", title: "GIS Redlines & Updates", desc: "Accurate digital mapping and as-built documentation." },
  { icon: "assignment_turned_in", title: "Permit & Compliance", desc: "Regulatory coordination and tracking." },
];

const SPLICING = [
  { icon: "flare", title: "Fusion Splicing", desc: "High-precision core alignment." },
  { icon: "view_column", title: "Ribbon Splicing", desc: "Mass fusion for high density." },
  { icon: "settings_input_component", title: "Enclosure Prep", desc: "Tray design and organization." },
  { icon: "network_check", title: "OTDR Testing", desc: "Loss and light measurements." },
];

const ACCEPTANCE = [
  { icon: "description", title: "Splice Diagrams", desc: "Detailed schematic of every fusion point." },
  { icon: "query_stats", title: "Fiber Light Readings", desc: "End-to-end power level verification reports." },
  { icon: "folder_zip", title: "Final Deliverables", desc: "Full certification package for project hand-off." },
];

export default function FiberEngineering() {
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        .eng-card:hover { border-color: ${PRIMARY}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(37,157,244,0.1); }
        .eng-card { transition: all 0.2s ease; }
        .splice-card:hover { border-color: ${PRIMARY}; box-shadow: 0 4px 14px rgba(37,157,244,0.12); }
        .splice-card { transition: all 0.2s ease; }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ══════════ HEADER ══════════ */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-blue-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3.5">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>cable</span>
              </div>
              <h1 className="text-lg font-bold hidden sm:block" style={{ fontFamily: "'Syne', sans-serif" }}>
                Fiber <span style={{ color: PRIMARY }}>Engineering</span>
              </h1>
              <h1 className="text-base font-bold sm:hidden" style={{ fontFamily: "'Syne', sans-serif" }}>
                Fiber <span style={{ color: PRIMARY }}>Eng.</span>
              </h1>
            </div>

            

            
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-3">
              {DESKTOP_NAV.map(link => (
                <a key={link} href="#" onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-sm border-b border-slate-50 last:border-0 transition-colors"
                  style={link === "Services" ? { color: PRIMARY, fontWeight: 700 } : { color: "#64748b" }}>
                  {link}
                </a>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 pb-20 md:pb-0">

          {/* ══════════ HERO ══════════ */}
          <div className="md:px-6 md:pt-6 md:max-w-7xl md:mx-auto">
            <div className="relative flex flex-col justify-end overflow-hidden md:rounded-2xl"
              style={{
                minHeight: "280px",
                backgroundImage: `linear-gradient(180deg, rgba(10,20,35,0.1) 0%, rgba(10,20,35,0.82) 100%), url("${HERO_IMG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              {/* Desktop overlay badge */}
              <div className="hidden md:flex absolute top-6 left-6 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(37,157,244,0.2)", color: PRIMARY, backdropFilter: "blur(8px)", border: "1px solid rgba(37,157,244,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
                Field Solutions
              </div>

              <div className="p-6 md:p-10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest md:hidden" style={{ color: PRIMARY }}>
                  Field Solutions
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Fiber Engineering<br className="hidden md:block" /> & Splicing
                </h2>
                <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed pt-1">
                  End-to-end fiber lifecycle management — from route planning and permitting to precision splicing and certified acceptance packages.
                </p>
              </div>

              {/* Desktop hero stats bar */}
              <div className="hidden md:flex gap-8 px-10 py-5 border-t border-white/10"
                style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}>
                {[["OSP/ISP", "Planning"], ["OTDR", "Testing"], ["GIS", "Mapping"], ["Fusion", "Splicing"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                    <p className="text-slate-400 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════ FIBER ENGINEERING ══════════ */}
          <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined" style={{ color: PRIMARY }}>engineering</span>
              <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Fiber Engineering</h2>
            </div>

            {/* Mobile: stacked list | Desktop: 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FIBER_ENG.map(({ icon, title, desc }) => (
                <div key={title}
                  className="eng-card flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(37,157,244,0.08)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>{icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-base leading-tight">{title}</p>
                    <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════ FIBER SPLICING ══════════ */}
          <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined" style={{ color: PRIMARY }}>cable</span>
              <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Fiber Splicing</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SPLICING.map(({ icon, title, desc }) => (
                <div key={title}
                  className="splice-card bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color: PRIMARY }}>{icon}</span>
                  <p className="font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════ ACCEPTANCE PACKAGES ══════════ */}
          <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined" style={{ color: PRIMARY }}>verified</span>
              <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Acceptance Packages</h2>
            </div>

            {/* Desktop: horizontal 3-col | Mobile: stacked list */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              {ACCEPTANCE.map(({ icon, title, desc }) => (
                <div key={title}
                  className="p-5 rounded-2xl border cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  style={{ background: "rgba(37,157,244,0.03)", borderColor: "rgba(37,157,244,0.15)" }}>
                  <span className="material-symbols-outlined text-2xl mb-3 block" style={{ color: PRIMARY }}>{icon}</span>
                  <p className="font-bold text-base mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile list */}
            <div className="md:hidden rounded-2xl p-4 border"
              style={{ background: "rgba(37,157,244,0.04)", borderColor: "rgba(37,157,244,0.12)" }}>
              <ul className="space-y-4">
                {ACCEPTANCE.map(({ icon, title, desc }, i) => (
                  <li key={title}
                    className={`flex items-start gap-3 ${i < ACCEPTANCE.length - 1 ? "pb-4 border-b" : ""}`}
                    style={{ borderColor: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-xl shrink-0 mt-0.5" style={{ color: PRIMARY }}>{icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ══════════ CTA ══════════ */}
          <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10 mb-4">
            {/* Mobile: full-width button */}
            <button className="md:hidden w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-lg"
              style={{ background: PRIMARY, boxShadow: `0 8px 24px rgba(37,157,244,0.3)` }}>
              Request a Proposal
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            {/* Desktop: full CTA banner */}
            <div className="hidden md:flex items-center justify-between bg-slate-900 rounded-2xl px-10 py-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at center, #259df4 0%, transparent 70%)" }} />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Ready to Start Your Fiber Project?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our team delivers end-to-end fiber solutions — from engineering and permitting to splicing and certified handoff packages.
                </p>
              </div>
              <button className="relative z-10 shrink-0 flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: PRIMARY, boxShadow: `0 4px 16px rgba(37,157,244,0.35)` }}>
                Request a Proposal
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            
          </section>

        </main>

        

      </div>
    </>
  );
}