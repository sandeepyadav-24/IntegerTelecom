import { useState } from "react";

const PRIMARY = "#259df4";

const NAV_ITEMS = [
  { id: "home", icon: "home", label: "Home" },
  { id: "services", icon: "settings_input_antenna", label: "Services" },
  { id: "projects", icon: "apartment", label: "Projects" },
  { id: "contact", icon: "mail", label: "Contact" },
];

const DESKTOP_NAV = ["Home", "About", "Services", "Contact"];

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD0VJdDhktUQBZOkjadz_b8WhvvSSdvM_KyfmnsicVPGD5YtsdZNWTAT_X4CsBcmh5nQiGRJNNlM1Ht6CTy8IDidOjZejVUzjmNZkgmHXYXMdm2Z9iXcaqsbLcUpJx-5EyJ9ssNh2JD2OvNdWlXPt8VtmqMLePI2METMHh-UOYQf95kQWsVjY6lvYef4Tn1maOm3lmirr2ngr4geGp_HXn59TffoWzJ4Hh7OI_hUAjTd9grRpKMJCwmrGZZqN36i8_DpgctBz7U5G1D";

const REPORT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNWluShFAIVS0AXKeLV2nPtYXUOY68NxncFbQcklSSUQjYpBEiZGJ-HCFDIqe-SlfOa-Wj8sF0Jq1KA6mIrz3Qkbo2CrtocKXt3i3FyeCIZh5ZaeOaoEvwLmZB3P8h-5zL8YWPDlXyEMJSZa6HLnFrqA1L2CBRFLJ5xIi5Zsu3PixEGFdHgEgihtbEG2p9g8c--fy9XAf3caLstg4z8F9w9siRKxQKiyKFeG8qMCtiKJLb_vLNpwBx6cpDLZfZCw17z4pt5X7FIRl9";

const AERIAL_ITEMS = [
  {
    icon: "high_res",
    title: "High-Resolution Imaging",
    desc: "Capture 4K visuals and sub-millimeter detail for precise defect detection.",
  },
  {
    icon: "settings_input_antenna",
    title: "Antenna & Radio Checks",
    desc: "Comprehensive visual verification of equipment condition and installation integrity.",
  },
  {
    icon: "architecture",
    title: "Structural Assessments",
    desc: "Non-climb evaluation of rust, damage, and structural fatigue on tower members.",
  },
];

const LOS_ITEMS = [
  {
    icon: "linear_scale",
    title: "Path Validation",
    desc: "Verify microwave and RF paths with drone-based visual confirmation.",
  },
  {
    icon: "block",
    title: "Obstruction ID",
    desc: "Identify vegetation growth or new structures blocking signal paths.",
  },
];

const REPORT_ITEMS = [
  "Detailed high-res photo documentation",
  "Categorized defect and issue summaries",
  "Prioritized corrective action recommendations",
];

const STATS = [
  { n: "FAA", l: "Part 107 Cert." },
  { n: "4K", l: "Imaging" },
  { n: "No-Climb", l: "Inspection" },
  { n: "48hr", l: "Report Turnaround" },
];

export default function DroneTowerAudits() {
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reportHover, setReportHover] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <style>{`
        .aerial-card:hover { border-color: ${PRIMARY}; transform: translateX(4px); box-shadow: 0 4px 16px rgba(37,157,244,0.1); }
        .aerial-card { transition: all 0.2s ease; }
        .los-card:hover { border-color: ${PRIMARY}; box-shadow: 0 4px 16px rgba(37,157,244,0.1); }
        .los-card { transition: all 0.2s ease; }
        .cta-btn:hover { opacity: 0.92; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(37,157,244,0.4) !important; }
        .cta-btn { transition: all 0.2s ease; }
      `}</style>

      <div
        className="min-h-screen bg-slate-50 text-slate-900 flex flex-col"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ══════════════ HEADER ══════════════ */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3.5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>
                  flight_takeoff
                </span>
              </div>
              <h1 className="text-base font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Integer <span style={{ color: PRIMARY }}>Telecom</span>
              </h1>
            </div>

            
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-3">
              {DESKTOP_NAV.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-sm border-b border-slate-50 last:border-0 transition-colors"
                  style={link === "Services" ? { color: PRIMARY, fontWeight: 700 } : { color: "#64748b" }}
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 pb-20 md:pb-0">

          {/* ══════════════ HERO ══════════════ */}
          <div className="md:px-6 md:pt-6 md:max-w-7xl md:mx-auto">
            <div
              className="relative flex flex-col justify-end overflow-hidden md:rounded-2xl"
              style={{
                minHeight: "280px",
                backgroundImage: `linear-gradient(0deg, rgba(16,26,34,0.92) 0%, rgba(16,26,34,0.2) 60%), url("${HERO_IMG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Desktop floating badge */}
              <div
                className="hidden md:flex absolute top-6 left-6 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: "rgba(37,157,244,0.2)",
                  color: PRIMARY,
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(37,157,244,0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
                Services
              </div>

              {/* FAA badge desktop */}
              <div
                className="hidden md:flex absolute top-6 right-6 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span className="material-symbols-outlined text-[14px]" style={{ color: PRIMARY }}>verified</span>
                FAA Part 107 Certified
              </div>

              <div className="p-6 md:p-10 space-y-2">
                <span
                  className="md:hidden inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-white"
                  style={{ background: PRIMARY }}
                >
                  Services
                </span>
                <h2
                  className="text-3xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Drone Tower Audits
                </h2>
                <p className="flex items-center gap-1 text-sm font-semibold" style={{ color: PRIMARY }}>
                  <span className="material-symbols-outlined text-sm">verified</span>
                  FAA Part 107 Certified
                </p>
                <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed pt-1 hidden md:block">
                  Precision aerial inspections delivering 4K visual data, structural assessments, and certified reporting — without a single climber.
                </p>
              </div>

              {/* Desktop stats bar */}
              <div
                className="hidden md:flex gap-10 px-10 py-5 border-t border-white/10"
                style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
              >
                {STATS.map(({ n, l }) => (
                  <div key={l}>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                    <p className="text-slate-400 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stats strip */}
          <div className="md:hidden bg-slate-900 grid grid-cols-4">
            {STATS.map(({ n, l }, i) => (
              <div
                key={l}
                className={`py-3 text-center ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <p className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{l}</p>
              </div>
            ))}
          </div>

          {/* ══════════════ DESKTOP: 2-col content grid ══════════════ */}
          <div className="hidden md:block max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 gap-8 mb-8">

              {/* Left col: Aerial Inspections */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div
                  className="flex items-center gap-3 px-6 py-5 border-b border-slate-100"
                  style={{ background: "rgba(37,157,244,0.03)" }}
                >
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>center_focus_strong</span>
                  </div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Aerial Inspections</h2>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {AERIAL_ITEMS.map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="aerial-card flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer"
                    >
                      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[22px]" style={{ color: PRIMARY }}>{icon}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-0.5">{title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right col: LOS Mapping + Reporting stacked */}
              <div className="flex flex-col gap-6">
                {/* Line of Sight */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div
                    className="flex items-center gap-3 px-6 py-5 border-b border-slate-100"
                    style={{ background: "rgba(37,157,244,0.03)" }}
                  >
                    <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                      <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>map</span>
                    </div>
                    <h2 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Line of Sight Mapping</h2>
                  </div>
                  <div className="p-5 grid grid-cols-2 gap-3">
                    {LOS_ITEMS.map(({ icon, title, desc }) => (
                      <div key={title} className="los-card bg-slate-50 p-4 rounded-2xl border border-slate-100 cursor-pointer">
                        <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color: PRIMARY }}>{icon}</span>
                        <h4 className="font-bold text-sm mb-1">{title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reporting */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div
                    className="flex items-center gap-3 px-6 py-5 border-b border-slate-100"
                    style={{ background: "rgba(37,157,244,0.03)" }}
                  >
                    <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                      <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>description</span>
                    </div>
                    <h2 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Comprehensive Reporting</h2>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3 mb-4">
                      {REPORT_ITEMS.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <span className="material-symbols-outlined text-[18px] shrink-0" style={{ color: PRIMARY }}>check_circle</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="relative rounded-xl overflow-hidden cursor-pointer group"
                      onMouseEnter={() => setReportHover(true)}
                      onMouseLeave={() => setReportHover(false)}
                    >
                      <div
                        className="w-full h-32 bg-slate-200"
                        style={{
                          backgroundImage: `url('${REPORT_IMG}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                        style={{
                          background: "rgba(37,157,244,0.25)",
                          opacity: reportHover ? 1 : 0,
                        }}
                      >
                        <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                          View Sample Report
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop CTA banner */}
            <div className="relative bg-slate-900 rounded-2xl px-10 py-8 overflow-hidden flex items-center justify-between gap-6">
              <div
                className="absolute right-0 top-0 h-full w-2/5 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #259df4 0%, transparent 70%)" }}
              />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Ready to optimize your tower maintenance?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Safe, efficient, and accurate — our FAA-certified drone team delivers full audit packages within 48 hours.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 shrink-0">
                <button
                  className="cta-btn flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm"
                  style={{ background: PRIMARY, boxShadow: `0 4px 16px rgba(37,157,244,0.35)` }}
                >
                  Request a Proposal
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Safe • Efficient • Accurate</p>
              </div>
            </div>
          </div>

          {/* ══════════════ MOBILE CONTENT ══════════════ */}
          <div className="md:hidden">

            {/* Aerial Inspections */}
            <section className="px-4 py-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ background: "rgba(37,157,244,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: PRIMARY }}>center_focus_strong</span>
                </div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Aerial Inspections</h2>
              </div>
              <div className="flex flex-col gap-3">
                {AERIAL_ITEMS.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="aerial-card flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined mt-0.5 shrink-0" style={{ color: PRIMARY }}>{icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Line of Sight */}
            <section className="px-4 py-8 bg-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ background: "rgba(37,157,244,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: PRIMARY }}>map</span>
                </div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Line of Sight Mapping</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {LOS_ITEMS.map(({ icon, title, desc }) => (
                  <div key={title} className="los-card bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color: PRIMARY }}>{icon}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reporting */}
            <section className="px-4 py-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg" style={{ background: "rgba(37,157,244,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: PRIMARY }}>description</span>
                </div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Comprehensive Reporting</h2>
              </div>
              <ul className="space-y-3 mb-6">
                {REPORT_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined shrink-0" style={{ color: PRIMARY }}>check_circle</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setReportHover(true)}
                onMouseLeave={() => setReportHover(false)}
              >
                <div
                  className="aspect-video w-full bg-slate-200"
                  style={{
                    backgroundImage: `url('${REPORT_IMG}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                  style={{
                    background: "rgba(37,157,244,0.22)",
                    opacity: reportHover ? 1 : 0,
                  }}
                >
                  <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                    View Sample Report
                  </span>
                </div>
              </div>
            </section>

            {/* Mobile CTA */}
            <section className="px-4 py-8 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Ready to optimize your tower maintenance?
              </h3>
              <button
                className="cta-btn w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
                style={{ background: PRIMARY, boxShadow: `0 8px 24px rgba(37,157,244,0.3)` }}
              >
                Request a Proposal
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest font-bold">
                Safe • Efficient • Accurate
              </p>
            </section>
          </div>

        </main>

       

        

      </div>
    </>
  );
}