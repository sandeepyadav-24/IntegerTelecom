import { useState } from "react";

const PRIMARY = "#259df4";

const NAV_ITEMS = [
  { id: "home", icon: "home", label: "Home" },
  { id: "services", icon: "settings_input_component", label: "Services" },
  { id: "projects", icon: "work", label: "Projects" },
  { id: "profile", icon: "account_circle", label: "Profile" },
];

const DESKTOP_NAV = ["Home", "About", "Services", "Contact"];

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCbxhRy26cc09_Be2KjhnrJhcgFLdOoa8KrNr8UNnLs_jthPoLnM00j5WxcPdIII4OaaIqsdh1UpExfnF2WCeZo7RVs6L4eB-_vrg_66iRR2zh7IYbv9MO9dIEdg3F3b6d97Ha3Exz_7Sf76wZKKbVtk0410-C1PlbVBrrgJ_vJMm6nmlXzsuOAlRvNgTBFS40ZAEOmGEx9m35C33PS191bpWgX2guLFvxZmTzkzqa3c8HNxi9bInvsagmBAdYwcOke0IEPDklxsQb1";

const DRIVE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqC5GSm6vl9b1YSfaAI2iVj_bbpocaKqF5Wu_iWX4g1kSzqnj8mKKEgNWAxG3pOJtgwCMyTLLjbR5hsApISnNP13z2Z9wMz8t6fkcmOXRjm2Xrm7cfxoKYoDuQ4TGi7bwir0EWSB2sqpKHsdTrTDh2UMyYz2hENePciNaQBmD2wHef58x5FzqQj63E1dMPW7OlKszX-08DRChhqE5rk_apLxO6dRZs96RorRW9_Jnj8XzoCErMwIl94R3kqtWVLUyT0-lWdf74rDl2";

const CRASH_ITEMS = [
  { icon: "fertile", title: "Field-based crash reproduction", desc: "Capturing real-world failure scenarios that lab simulators often miss." },
  { icon: "troubleshoot", title: "Failure mode identification", desc: "Deep-dive root cause analysis for modem software and hardware stack faults." },
];

const MODEM_ITEMS = [
  { icon: "login", title: "Registration & Attach", desc: "Analyzing network entry behavior across diverse PLMNs." },
  { icon: "cell_tower", title: "Mobility & Handover", desc: "Evaluation of inter-RAT and intra-frequency transitions." },
  { icon: "speed", title: "Throughput & Signaling", desc: "End-to-end data rate and protocol efficiency analysis." },
];

const VALIDATION_ITEMS = [
  { label: "SA/NSA Stability", tag: "4G/5G Dual Connectivity" },
  { label: "Carrier Feature Behavior", tag: "VoNR / VoLTE / CA" },
];

const DRIVE_LIST = [
  { icon: "map", text: "Urban, suburban & rural route coverage" },
  { icon: "layers", text: "Multi-band, multi-technology testing (Sub-6, mmWave)" },
];

const DELIVERABLES = [
  { num: "01", title: "Log Analysis & Traces", desc: "L1/L2/L3 message parsing and KPI extraction." },
  { num: "02", title: "Optimization Specs", desc: "Actionable parameters to improve device-network handshake." },
];

const STATS = [
  { n: "4G/5G", l: "SA & NSA" },
  { n: "Multi", l: "Region Testing" },
  { n: "L1-L3", l: "Log Analysis" },
  { n: "<24hr", l: "Response Time" },
];

export default function ChipsetDeviceTesting() {
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        .item-card { transition: all 0.2s ease; }
        .item-card:hover { border-color: ${PRIMARY}; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,157,244,0.1); }
        .modem-card { transition: all 0.2s ease; }
        .modem-card:hover { border-color: ${PRIMARY}; box-shadow: 0 4px 14px rgba(37,157,244,0.1); }
        .val-row:hover { border-color: rgba(37,157,244,0.4); background: rgba(37,157,244,0.02); }
        .val-row { transition: all 0.15s ease; }
        .cta-btn { transition: all 0.2s ease; }
        .cta-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(37,157,244,0.4) !important; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        .pulse { animation: pulse 1.5s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ══════════ HEADER ══════════ */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3.5">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>developer_board</span>
              </div>
              <h1 className="text-base font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Engineering <span style={{ color: PRIMARY }}>Services</span>
              </h1>
            </div>

            

           
          </div>

          {/* Mobile Dropdown */}
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
                backgroundImage: `linear-gradient(to top, rgba(16,26,34,0.92) 0%, rgba(16,26,34,0.18) 60%), url("${HERO_IMG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

              {/* Desktop floating badge */}
              <div className="hidden md:flex absolute top-6 left-6 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(37,157,244,0.2)", color: PRIMARY, backdropFilter: "blur(8px)", border: "1px solid rgba(37,157,244,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
                Field Services
              </div>

              <div className="p-6 md:p-10 space-y-2">
                <span className="md:hidden inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-white mb-1" style={{ background: PRIMARY }}>
                  Field Services
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Chipset & Device<br className="hidden md:block" /> Field Testing
                </h2>
                <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed pt-1">
                  Comprehensive validation of wireless performance in real-world environments.
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

          {/* Mobile stats strip */}
          <div className="md:hidden bg-slate-900 grid grid-cols-4">
            {STATS.map(({ n, l }, i) => (
              <div key={l} className={`py-3 text-center ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{l}</p>
              </div>
            ))}
          </div>

          {/* ══════════ DESKTOP: content grid ══════════ */}
          <div className="hidden md:block max-w-7xl mx-auto px-6 py-10">

            {/* Row 1: Crash + Modem side by side */}
            <div className="grid grid-cols-2 gap-6 mb-6">

              {/* Crash & Stability */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100" style={{ background: "rgba(37,157,244,0.03)" }}>
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>bug_report</span>
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Crash & Stability Testing</h3>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {CRASH_ITEMS.map(({ icon, title, desc }) => (
                    <div key={title} className="item-card flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
                      <div className="p-2.5 rounded-xl h-fit shrink-0" style={{ background: "rgba(37,157,244,0.1)" }}>
                        <span className="material-symbols-outlined text-[20px]" style={{ color: PRIMARY }}>{icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modem Performance */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100" style={{ background: "rgba(37,157,244,0.03)" }}>
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>router</span>
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Modem Performance</h3>
                </div>
                <div className="p-5 grid grid-cols-3 gap-3">
                  {MODEM_ITEMS.map(({ icon, title, desc }) => (
                    <div key={title} className="modem-card bg-slate-50 p-4 rounded-2xl border border-slate-100 cursor-pointer">
                      <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color: PRIMARY }}>{icon}</span>
                      <p className="font-bold text-xs mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Validation + Drive Testing + Reporting */}
            <div className="grid grid-cols-3 gap-6 mb-8">

              {/* Next-Gen Validation */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100" style={{ background: "rgba(37,157,244,0.03)" }}>
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>5g</span>
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Next-Gen Validation</h3>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {VALIDATION_ITEMS.map(({ label, tag }) => (
                    <div key={label} className="val-row flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[18px] text-slate-400">check_circle</span>
                        <span className="font-medium text-sm">{label}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ color: PRIMARY, background: "rgba(37,157,244,0.08)" }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drive Testing */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100" style={{ background: "rgba(37,157,244,0.03)" }}>
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>directions_car</span>
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Drive Testing</h3>
                </div>
                <div className="p-5">
                  <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                    <img src={DRIVE_IMG} alt="Drive testing" className="w-full h-full object-cover grayscale opacity-75" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 px-3 py-1.5 rounded-full border border-blue-100 shadow-md">
                        <p className="text-[10px] font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 pulse" />
                          Active Route: Urban Core
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {DRIVE_LIST.map(({ icon, text }) => (
                      <li key={text} className="flex gap-2 items-start text-xs text-slate-600">
                        <span className="material-symbols-outlined text-[15px] shrink-0 mt-0.5" style={{ color: PRIMARY }}>{icon}</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reporting */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100" style={{ background: "rgba(37,157,244,0.03)" }}>
                  <div className="p-2.5 rounded-xl" style={{ background: "rgba(37,157,244,0.1)" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>assessment</span>
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Intelligent Reporting</h3>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {DELIVERABLES.map(({ num, title, desc }) => (
                    <div key={num} className="p-4 rounded-xl border border-dashed border-slate-300 hover:border-blue-300 transition-colors cursor-pointer">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deliverable {num}</p>
                      <p className="font-bold text-sm mb-1">{title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="relative bg-slate-900 rounded-2xl px-10 py-8 overflow-hidden flex items-center justify-between gap-6">
              <div className="absolute right-0 top-0 h-full w-2/5 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #259df4 0%, transparent 70%)" }} />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Ready to validate your device?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our field teams deliver comprehensive chipset testing reports in real-world network conditions across the US.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 shrink-0">
                <button className="cta-btn flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-sm"
                  style={{ background: PRIMARY, boxShadow: `0 4px 16px rgba(37,157,244,0.35)` }}>
                  Request a Proposal
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-slate-500 text-xs">Typical response time: &lt; 24 hours</p>
              </div>
            </div>
          </div>

          {/* ══════════ MOBILE CONTENT ══════════ */}
          <div className="md:hidden flex flex-col gap-0">

            {/* Crash & Stability */}
            <section className="px-4 py-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined" style={{ color: PRIMARY }}>bug_report</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Crash & Stability Testing</h3>
              </div>
              <div className="flex flex-col gap-3">
                {CRASH_ITEMS.map(({ icon, title, desc }) => (
                  <div key={title} className="item-card flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer">
                    <div className="p-2.5 rounded-xl h-fit shrink-0" style={{ background: "rgba(37,157,244,0.1)" }}>
                      <span className="material-symbols-outlined" style={{ color: PRIMARY }}>{icon}</span>
                    </div>
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Modem Performance */}
            <section className="px-4 py-7 bg-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined" style={{ color: PRIMARY }}>router</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Modem Performance</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {MODEM_ITEMS.map(({ icon, title, desc }) => (
                  <div key={title} className="modem-card bg-white p-4 rounded-2xl border border-slate-200 shadow-sm cursor-pointer flex gap-3 items-start">
                    <span className="material-symbols-outlined text-2xl shrink-0" style={{ color: PRIMARY }}>{icon}</span>
                    <div>
                      <p className="font-bold text-sm">{title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Next-Gen Validation */}
            <section className="px-4 py-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined" style={{ color: PRIMARY }}>5g</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Next-Gen Validation</h3>
              </div>
              <div className="flex flex-col gap-3">
                {VALIDATION_ITEMS.map(({ label, tag }) => (
                  <div key={label} className="val-row flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">check_circle</span>
                      <span className="font-medium">{label}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ color: PRIMARY, background: "rgba(37,157,244,0.08)" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Drive Testing */}
            <section className="px-4 py-7" style={{ background: "rgba(37,157,244,0.04)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined" style={{ color: PRIMARY }}>directions_car</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Drive Testing</h3>
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden mb-4 grayscale opacity-80">
                <img src={DRIVE_IMG} alt="Drive testing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full border border-blue-100 shadow-lg">
                    <p className="text-xs font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 pulse" />
                      Active Route: Urban Core
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {DRIVE_LIST.map(({ icon, text }) => (
                  <li key={text} className="flex gap-2.5 items-center text-sm text-slate-600">
                    <span className="material-symbols-outlined text-sm shrink-0" style={{ color: PRIMARY }}>{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Reporting */}
            <section className="px-4 py-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined" style={{ color: PRIMARY }}>assessment</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Intelligent Reporting</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {DELIVERABLES.map(({ num, title, desc }) => (
                  <div key={num} className="p-4 rounded-2xl border border-dashed border-slate-300 bg-white hover:border-blue-300 transition-colors cursor-pointer">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deliverable {num}</p>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile CTA */}
            <section className="px-4 py-8 text-center">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Request a Proposal
              </h3>
              <button className="cta-btn w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2"
                style={{ background: PRIMARY, boxShadow: `0 8px 24px rgba(37,157,244,0.3)` }}>
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-xs text-slate-400 mt-3">Typical engagement response time: &lt; 24 hours</p>
            </section>
          </div>

        </main>

        {/* ══════════ DESKTOP FOOTER ══════════ */}
        <footer className="hidden md:block bg-slate-900 text-slate-400 py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-2xl" style={{ color: PRIMARY }}>developer_board</span>
              <span className="font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Integer Telecom — Chipset Division</span>
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
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
          <div className="flex px-2 pb-5 pt-2">
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