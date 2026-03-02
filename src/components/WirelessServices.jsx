import { useState } from "react";

const PRIMARY = "#259df4";




const RF_CARDS = [
  { icon: "map", title: "RF Planning", desc: "Advanced modeling and design using industry-standard simulation tools." },
  { icon: "analytics", title: "Capacity Analysis", desc: "Traffic modeling and interference mitigation strategies for peak performance." },
  { icon: "reorder", title: "Neighbor Planning", desc: "Optimizing handovers through rigorous parameter and neighbor list reviews." },
];

const DRIVE_TEST_ITEMS = [
  { title: "Route-Based", desc: "Comprehensive cluster and corridor testing." },
  { title: "Autonomous", desc: "Next-gen vehicle connectivity verification." },
  { title: "Benchmarking", desc: "Multicarrier performance comparisons." },
  { title: "Mobility Audits", desc: "Dense-market performance deep-dives." },
];

const WALK_TEST_ITEMS = [
  { title: "Indoor & Venue Specialists", desc: "Stadiums, airports, campuses, and high-rise venues." },
  { title: "Scanning & Measurements", desc: "HB Flex / GFlex scanner-based data collection." },
  { title: "Heatmap Generation", desc: "Visual coverage, quality, and capacity reporting." },
];

const POST_PROC_ITEMS = [
  { label: "KPI Extraction", icon: "done_all" },
  { label: "Issue Classification", icon: "layers" },
  { label: "Optimization Plans", icon: "assignment" },
];

const INTEGRATION_CARDS = [
  { title: "Node Integration", desc: "Seamless site turn-up and connectivity." },
  { title: "Software Deployment", desc: "OS loads and parameter baseline audits." },
  { title: "Feature Validation", desc: "New feature activation and performance tracking." },
];

const ADDITIONAL = [
  { icon: "cell_merge", title: "DAS & Small Cells", desc: "End-to-end deployment for distributed antenna systems." },
  { icon: "build", title: "Hardware Updates", desc: "Sign changing, fiber swaps, and hardware technology updates." },
  { icon: "emergency_home", title: "Troubleshooting", desc: "Rapid response audits and field issue resolution." },
];

const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBd5TO5N75U4utv64qa0O62BG5B2h7vSU68DvHo4DyLgIPE-YH7vFiEkgTLTCb2Hck7we1LvHhI25ESlACcPNIeQXG6673eAklkH9jUyrniIMmhstg6Qvwl_SESiO0lF7TsnTBEask_hDNVlUHkm63qbXpeST3cGSkQTshejR_nfRlZX6f5xCZHG5zuskM5-5t5_rPZ4yTVdSNp0auFUwf7O-Z8Za6Mwda-hc9S_1H28Z5W7V5M0w6jqNqGzeW0iiiemuzm3KO7PaOw";

function SectionHeader({ icon, title, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="material-symbols-outlined p-2 rounded-lg text-2xl"
        style={{
          color: light ? "white" : PRIMARY,
          background: light ? "rgba(255,255,255,0.2)" : `rgba(37,157,244,0.1)`,
        }}
      >
        {icon}
      </span>
      <h3 className={`text-xl font-bold ${light ? "text-white" : "text-slate-900"}`}
        style={{ fontFamily: "'Syne', sans-serif" }}>
        {title}
      </h3>
    </div>
  );
}

export default function WirelessServices() {
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <style>{`
        .service-card:hover { border-color: ${PRIMARY}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,157,244,0.1); }
        .service-card { transition: all 0.2s ease; }
        .nav-link:hover { color: ${PRIMARY}; }
      `}</style>

      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ══════════════ HEADER ══════════════ */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3.5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: "rgba(37,157,244,0.1)" }}>
                <span className="material-symbols-outlined text-[22px]" style={{ color: PRIMARY }}>cell_tower</span>
              </div>
              <h1 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                Wireless <span style={{ color: PRIMARY }}>Services</span>
              </h1>
            </div>

           
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-3">
              {DESKTOP_NAV.map(link => (
                <a key={link} href="#" onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-sm font-medium border-b border-slate-50 last:border-0 transition-colors ${link === "Services" ? "font-bold" : "text-slate-500"}`}
                  style={link === "Services" ? { color: PRIMARY } : {}}>
                  {link}
                </a>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 pb-20 md:pb-0">

          {/* ══════════════ HERO ══════════════ */}
          <div className="md:px-4 md:py-6">
            <div
              className="flex flex-col justify-end min-h-[260px] md:min-h-[340px] md:rounded-2xl overflow-hidden relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(16,26,34,0.1) 0%, rgba(16,26,34,0.85) 100%), url("${HERO_BG}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6 md:p-10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: PRIMARY }}>
                  Field Solutions
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Wireless Engineering<br className="hidden md:block" /> & Field Services
                </h2>
                <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed pt-1">
                  End-to-end network lifecycle management, from initial RF design to deployment and performance optimization.
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════ RF DESIGN ══════════════ */}
          <section className="max-w-7xl mx-auto px-4 py-10">
            <SectionHeader icon="settings_input_antenna" title="RF Design & Optimization" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RF_CARDS.map(({ icon, title, desc }) => (
                <div key={title} className="service-card flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-2xl" style={{ color: PRIMARY }}>{icon}</span>
                  <h4 className="font-bold text-base" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════ DRIVE TESTING ══════════════ */}
          <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">
              <SectionHeader icon="directions_car" title="Drive Testing" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DRIVE_TEST_ITEMS.map(({ title, desc }) => (
                  <div key={title}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200 cursor-pointer">
                    <div className="w-2 h-2 rounded-full mb-3" style={{ background: PRIMARY }} />
                    <h5 className="font-bold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════ WALK TEST + POST PROC (2-col) ══════════════ */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 px-4 py-10">
            {/* Walk Testing */}
            <div className="md:border-r md:border-slate-100 md:pr-6 pb-8 md:pb-0">
              <SectionHeader icon="directions_walk" title="RF Walk Testing" />
              <ul className="space-y-4">
                {WALK_TEST_ITEMS.map(({ title, desc }) => (
                  <li key={title} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-sm mt-0.5 shrink-0" style={{ color: PRIMARY }}>check_circle</span>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Post Processing */}
            <div className="md:pl-2">
              <SectionHeader icon="data_thresholding" title="Post Processing" />
              <div className="rounded-2xl p-5 border" style={{ background: "rgba(37,157,244,0.04)", borderColor: "rgba(37,157,244,0.12)" }}>
                <div className="space-y-3">
                  {POST_PROC_ITEMS.map(({ label, icon }, i) => (
                    <div key={label}
                      className={`flex justify-between items-center pb-3 ${i < POST_PROC_ITEMS.length - 1 ? "border-b border-blue-100" : ""}`}>
                      <span className="text-sm font-medium">{label}</span>
                      <span className="material-symbols-outlined text-xl" style={{ color: PRIMARY }}>{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════ INTEGRATION & COMMISSIONING ══════════════ */}
          <section className="py-10" style={{ background: PRIMARY }}>
            <div className="max-w-7xl mx-auto px-4">
              <SectionHeader icon="router" title="Integration & Commissioning" light />
              <div className="flex flex-wrap gap-4">
                {INTEGRATION_CARDS.map(({ title, desc }) => (
                  <div key={title}
                    className="flex-1 min-w-[180px] p-4 rounded-2xl border border-white/20 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.1)" }}>
                    <p className="font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</p>
                    <p className="text-xs text-blue-50/80 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════ EME ANALYSIS ══════════════ */}
          <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at center, #259df4 0%, transparent 70%)" }} />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined" style={{ color: PRIMARY }}>security</span>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>EME Analysis</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Rigorous electromagnetic exposure assessments ensuring site compliance and public safety documentation.
                  </p>
                </div>
                <button
                  className="shrink-0 self-start md:self-center px-6 py-3 rounded-xl font-bold text-sm text-white transition-colors hover:opacity-90"
                  style={{ background: PRIMARY }}>
                  Request Compliance Audit
                </button>
              </div>
            </div>
          </section>

          {/* ══════════════ ADDITIONAL SERVICES ══════════════ */}
          <section className="max-w-7xl mx-auto px-4 pb-12">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADDITIONAL.map(({ icon, title, desc }) => (
                <div key={title}
                  className="flex gap-4 items-start p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-2xl" style={{ color: PRIMARY }}>{icon}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        

        

      </div>
    </>
  );
}