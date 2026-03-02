import { useState } from "react";

const WIRELESS_ITEMS = [
  "RF design & optimization",
  "Drive testing (including autonomous)",
  "RF walk testing (HB Flex / GFlex)",
  "Benchmarking & DAS / In-building",
  "Small cell & EME compliance",
  "Integration, Commissioning & Troubleshooting",
];

const SERVICES = [
  {
    id: "wireless",
    icon: "settings_input_antenna",
    tag: "RF & Network",
    title: "Wireless Services",
    desc: "End-to-end RF design, optimization and testing across all wireless technologies.",
  },
  {
    id: "fiber",
    icon: "router",
    tag: "Infrastructure",
    title: "Fiber Engineering & Splicing",
    desc: "Complete fiber lifecycle management from permit coordination to final documentation.",
  },
  {
    id: "datacenter",
    icon: "dns",
    tag: "Hardware",
    title: "Data Center Infrastructure",
    desc: "Full mechanical and network build-outs for modern, high-density data centers.",
  },
  {
    id: "tower",
    icon: "cell_tower",
    tag: "Field Services",
    title: "Tower Services",
    desc: "Antenna, radio & grounding upgrades with FAA 107-certified drone audits.",
  },
  {
    id: "chipset",
    icon: "developer_mode_tv",
    tag: "Testing",
    title: "Chipset & Device Testing",
    desc: "Multi-region drive testing and advanced log analysis for next-gen mobile devices.",
  },
];

const TOWER_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBPYY56VEh2tBhV9JLsLeL3NcymM0_0pjYom_Zp-NGywHWudMVEVIg9DlEIlTOzJA2hW-bRU25Oc-_9Ewfm5LRIBO4oc7UATD2Dr3RcZ_rcVaDetmxLVSYinEjlp_xPrlDI6G9u4BarN0Gfb3-Mt37LtVfMtDtFTxed-8eoozCy8J520zqLIJufPEg9bqhg7mn0rwkOK8sIonZUa1tk32JXLtp_lcuYztBsH6JGPQ7I5QqkIMZzAF4qlsjmhbs704Ck7ojOqPSEZeRZ";

const NAV_ITEMS = [
  { id: "home", icon: "home", label: "Home" },
  { id: "services", icon: "settings_suggest", label: "Services" },
  { id: "projects", icon: "analytics", label: "Projects" },
  { id: "more", icon: "more_horiz", label: "More" },
];



function ServiceDetail({ id }) {
  if (id === "wireless") return (
    <ul className="flex flex-col gap-2">
      {WIRELESS_ITEMS.map(item => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
          <span className="material-symbols-outlined text-[15px] text-[#259df4] mt-0.5 shrink-0">check_circle</span>
          {item}
        </li>
      ))}
    </ul>
  );

  if (id === "fiber") return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {["OSP/ISP Engineering", "Route Planning", "OTDR Testing"].map(t => (
          <span key={t} className="px-2.5 py-1 bg-white border border-slate-200 text-xs font-medium rounded-full text-slate-700">{t}</span>
        ))}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        Permit coordination, fusion/ribbon splicing, and comprehensive documentation for network integrity.
      </p>
    </div>
  );

  if (id === "datacenter") return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { l: "Mechanical", v: "Rack & Ladderrack, Cable Mgmt", icon: "settings" },
        { l: "Network", v: "Structured Cabling, PDU/Server", icon: "hub" },
        { l: "Power", v: "PDU Installation, UPS Systems", icon: "bolt" },
        { l: "Cooling", v: "Airflow Mgmt, Hot/Cold Aisle", icon: "ac_unit" },
      ].map(({ l, v, icon }) => (
        <div key={l} className="flex gap-2 items-start bg-white rounded-lg p-2.5 border border-slate-100">
          <span className="material-symbols-outlined text-[16px] text-[#259df4] mt-0.5">{icon}</span>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{l}</p>
            <p className="text-xs text-slate-800">{v}</p>
          </div>
        </div>
      ))}
    </div>
  );

  if (id === "tower") return (
    <div>
      <div className="relative rounded-xl overflow-hidden h-28 mb-3">
        <img src={TOWER_IMG} alt="Tower" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-3">
          <p className="text-white text-xs font-medium">Antenna, Radio & Grounding Upgrades</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-[#259df4]">flight_takeoff</span>
          <span className="text-sm font-semibold text-[#259df4]">FAA 107 Drone Audits</span>
        </div>
        <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
      </div>
    </div>
  );

  if (id === "chipset") return (
    <div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { l: "STABILITY", d: "Crash & Mobility Analysis" },
          { l: "VALIDATION", d: "4G/5G SA & NSA" },
        ].map(({ l, d }) => (
          <div key={l} className="bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
            <p className="text-[9px] font-bold text-[#259df4] mb-1">{l}</p>
            <p className="text-xs text-slate-700">{d}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500">Multi-region drive testing and advanced log analysis for next-gen devices.</p>
    </div>
  );

  return null;
}

function DesktopServiceCard({ svc, open, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-2xl border cursor-pointer transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-lg hover:border-blue-300
        ${open ? "border-[#259df4] shadow-[0_0_0_3px_rgba(37,157,244,0.1)]" : "border-slate-200"}`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 rounded-xl">
              <span className="material-symbols-outlined text-[22px] text-[#259df4]">{svc.icon}</span>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{svc.tag}</p>
              <h3 className="text-[15px] font-bold text-slate-900">{svc.title}</h3>
            </div>
          </div>
          <span className={`material-symbols-outlined text-slate-300 text-[20px] transition-transform duration-300 mt-0.5 shrink-0 ${open ? "rotate-90" : ""}`}>
            chevron_right
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
        {open && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <ServiceDetail id={svc.id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function TelecomServices() {
  const [activeNav, setActiveNav] = useState("services");
  const [openCard, setOpenCard] = useState(null);
  const toggle = (id) => setOpenCard(p => p === id ? null : id);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ====== DESKTOP md+ ====== */}
        <div className="hidden md:flex min-h-screen">
          {/* Main */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Topbar */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 py-3 flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>Our Services</h1>
                <p className="text-xs text-slate-400">Telecom Engineering & Infrastructure</p>
              </div>
              
            </header>

            {/* Hero */}
            <div className="relative bg-slate-900 px-8 py-8 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border border-blue-500/20 bg-blue-500/5 pointer-events-none" />
              <div className="absolute -bottom-16 right-28 w-40 h-40 rounded-full bg-blue-500/5 pointer-events-none" />
              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-1.5 bg-blue-500/20 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#259df4]" />
                  <span className="text-[11px] text-[#259df4] font-semibold tracking-wide">Professional Services</span>
                </div>
                <h2 className="text-[28px] font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Professional Telecom<br />Engineering Solutions
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Providing end-to-end infrastructure and testing services for the next generation of connectivity.
                </p>
              </div>
              <div className="flex gap-8 mt-6 relative z-10">
                {[["5", "Service Areas"], ["200+", "Projects Done"], ["15+", "Years Experience"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-[22px] font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                    <p className="text-[11px] text-slate-500">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div className="p-8 grid grid-cols-2 gap-5 flex-1 content-start">
              {SERVICES.map(svc => (
                <DesktopServiceCard key={svc.id} svc={svc} open={openCard === svc.id} onToggle={() => toggle(svc.id)} />
              ))}
            </div>
          </div>
        </div>

        {/* ====== MOBILE <md ====== */}
        <div className="md:hidden max-w-[430px] mx-auto bg-white min-h-screen flex flex-col shadow-xl">
          {/* Mobile header */}
          <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
            <div className="flex items-center justify-between px-4 py-3">
              
              <h2 className="text-[17px] font-bold text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>Our Services</h2>
              
            </div>
          </header>

          <main className="flex-1 pb-20">
            {/* Mobile hero */}
            <div className="px-4 pt-6 pb-5">
              <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                Professional Telecom Engineering Solutions
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                End-to-end infrastructure and testing for next-gen connectivity.
              </p>
            </div>

            {/* Stats strip */}
            <div className="bg-slate-900 px-4 py-3 flex mb-4">
              {[["5", "Services"], ["200+", "Projects"], ["15+", "Years"]].map(([n, l], i) => (
                <div key={l} className={`flex-1 text-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                  <p className="text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{n}</p>
                  <p className="text-[10px] text-slate-400">{l}</p>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div className="px-4 flex flex-col gap-6">
              {SERVICES.map(svc => (
                <section key={svc.id}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-xl">
                      <span className="material-symbols-outlined text-[24px] text-[#259df4]">{svc.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>{svc.title}</h3>
                  </div>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
                    <ServiceDetail id={svc.id} />
                  </div>
                </section>
              ))}
            </div>
          </main>

          
        </div>
      </div>
    </>
  );
}