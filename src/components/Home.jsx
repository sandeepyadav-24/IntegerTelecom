import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Hero from "./Hero";


// ── Icons (inline SVG helpers) ───────
const Icon = ({ name, className = "" }) => {
  const icons = {
    antenna: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
    menu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    check: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    groups: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.74 1.17-.52 2.61-.9 4.24-.9zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
      </svg>
    ),
    map: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
      </svg>
    ),
    verified: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.47 1.89-3.2 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
      </svg>
    ),
    plus: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
    brain: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7.95 3 4.21 5.17 2.11 8.5L3.8 9.5C5.57 6.65 8.59 5 12 5c1.86 0 3.6.57 5.06 1.56l-1.06 1.06C14.9 6.57 13.5 6 12 6c-2.62 0-4.88 1.55-5.96 3.79L7.7 10.7C8.61 9.06 10.2 8 12 8c1.48 0 2.8.65 3.74 1.68L14.3 11.1C13.73 10.41 12.9 10 12 10c-.8 0-1.52.32-2.05.83l.01.01C9.36 11.44 9 12.18 9 13c0 .62.23 1.17.6 1.6L8.16 16C7.44 15.14 7 14.11 7 13c0-1.35.57-2.56 1.49-3.41L7.06 8.16C5.79 9.32 5 10.98 5 12.8c0 2.09.96 3.96 2.47 5.2H5v2h14v-2h-2.47C18.04 16.76 19 14.89 19 12.8c0-1.82-.79-3.48-2.06-4.64l-1.43 1.43C16.43 10.44 17 11.58 17 12.8c0 .77-.21 1.5-.58 2.12l-1.24-1.24c.26-.41.42-.88.42-1.38 0-.62-.23-1.18-.6-1.6l1.44-1.44C17.43 11.44 18 12.18 18 13c0 .82-.36 1.56-.94 2.07L18.6 16.6C19.54 15.68 20 14.39 20 13c0-1.35-.57-2.56-1.49-3.41C19.38 8.4 20 6.68 20 4.83V3h-1c-1.2 0-2.35.2-3.42.56C14.42 3.2 13.23 3 12 3z" />
      </svg>
    ),
    speed: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zM10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
      </svg>
    ),
    analytics: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    handshake: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 .999l-8.5 4.5v13l8.5 4.5 8.5-4.5v-13L11 .999zm6.5 15.18l-6.5 3.44-6.5-3.44V7.82l6.5-3.44 6.5 3.44v8.36z" />
      </svg>
    ),
    share: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
      </svg>
    ),
    mail: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  };
  return icons[name] || null;
};



const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3 text-slate-600 text-sm">
    <Icon name="check" className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
    {children}
  </li>
);

const StatCard = ({ value, label }) => (
  <div className="p-6 bg-white border border-slate-200 rounded-lg text-center min-w-[120px]">
    <div className="text-3xl font-black text-blue-500">{value}</div>
    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{label}</div>
  </div>
);

const FeatureCard = ({ iconName, title, description }) => (
  <div className="bg-white p-8 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors group">
    <Icon name={iconName} className="w-10 h-10 text-blue-500 mb-5 group-hover:scale-110 transition-transform" />
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServiceCard = ({ imageSrc, imageAlt, title, items }) => (
  <div className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="h-48 bg-slate-100 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
        aria-label={imageAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
    </div>
    <div className="p-7">
      <h4 className="text-lg font-bold mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
      </ul>
    </div>
  </div>
);

const WhyItem = ({ iconName, title, description }) => (
  <div className="flex flex-col gap-2">
    <Icon name={iconName} className="w-8 h-8 text-blue-500" />
    <h5 className="font-bold">{title}</h5>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const ClientPill = ({ label }) => (
  <div className="flex items-center justify-center p-4 border border-slate-100 rounded-lg hover:shadow-md hover:border-blue-200 transition-all">
    <span className="text-xs font-bold text-center text-slate-500 uppercase tracking-wide">{label}</span>
  </div>
);

// ── Data ──────────
const SERVICES = [
  {
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-C1pEcNINttyDXMT4WKWhhkJUjasZuFqp67hXcxrBAvbAY8i9aReztLccLQha1-56_gJcvMmBcpfvh7bEx84nx2fjEbIMIw6nJH1p_ha_0M2mR8eDPRK07mmz_QWrzfWXPfLkH8DWqRk0NDlBzaEmj-mAdq7yvTmcyKCcfZI6rTPso7mwGZ8LWenAZq0IgbPx6WeugSnekfMxvldmxR5rpe9yhvmdxxAUUs5xNdlmhapSUavSk2ld6ydBrRk4z1s4f9ZqGMP2zgOA",
    imageAlt: "Wireless antenna towers",
    title: "Wireless Engineering & Field Services",
    items: ["4G/5G Network Design & Optimization", "Site Surveys & RF Performance Testing", "Small Cell & DAS Implementation"],
  },
  {
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8oGrutpL9zl5vIPvEdOGLJt4Rb6vHxNfrb8wgDnMbWf2GhHRgL1CoUHy28FHJRwYacg2waT9CQ0g_W5JR7WLeev7n6Nz9r1JxNKZvLWQs5Ytw0r4-xqoC-c2uWZK4x2KbkEBCRGNRPEq572dN0rWgsEmkmZ7Qf-Cd6Nd_xotm_Qkunq58TuaLVYe9iRYQuwwVER9VxirSJF6JMoOVEVkg4dCuFlk-1dz3h9XE40duCSkyj4y1AsFZHT_rI8kNxJiBX7TtwZU9xMR3",
    imageAlt: "Fiber optic cables",
    title: "Fiber Engineering & Splicing",
    items: ["OSP/ISP Fiber Path Design", "Precision Fusion Splicing & Testing", "End-to-End Fiber Characterization"],
  },
  {
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqhh8lYO6Lb9GrXFTq5O4lQgOKW3FKV0gjPTPDlWv_OPz1lYJicKAKHXLOTWFu0sexbjRHwST3Y4BA8P-QxMVc8gzHLGmZHDFNBt85plo5xLL6ccp5Z1wADDCsueUsM1CJyucrna29Q4i_KujC7D-xcq7nAuUNEgzf1vgc5hPiAa41TUiy2QOdiC9kO1-Q0W8WTG7c4_T4u8NpKTUDskAm4keYocPoOFJTK0DnLmkqAl4a55H4-IK5U_GyGdG5jmZ8g1a_n2ZJBCVp",
    imageAlt: "Data center server racks",
    title: "Data Center Installation",
    items: ["Rack, Power & Cooling Infrastructure", "Server & Network Hardware Deployment", "Smart Hands Maintenance Services"],
  },
  {
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCtF6nvu1MTFXL2spDrv9WuU9nT3KHpgFyz0yF9GvzaUtNaSTHV2z-N6f9rmDg7_A9uteLBpqEMa9fKNR0IsCs88mQFJF5vMbwQDE_Q8OVdSorcUCH2-Oep1WJGoyfUsPokaq815rVYfQ-JR9Wht5RJiLowytsNXUmStOaTcfLerDsHWDkl0HOXXvY4vqawIbcb89r-OuXE9RbY-Pnr81B2UoJ4_blTlv-osv3mFI1ugLwN24Pt-WOAqEsmRDCCcAm-x3Lngk__G8r",
    imageAlt: "Tower technician inspection",
    title: "Tower Installation & Audit",
    items: ["Structural Inspections & Audits", "Antenna & Radio Upgrades", "Microwave Backhaul Engineering"],
  },
  {
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKzdZGhK4EAXJcf6ef7UraELzIye6Mc-TNzJ8Bk-bJ-CDReydgNjJK8uzXRcHZQYzlSGoqEFC0l43KGcFKERr08T1Ti8spimLvqsDB03wkky2XvItBg1x6vA7mS3oyg7uLLLHMFIZj9mpDHChhK2oR4w7VfQEE0thjuZpbKc9YnrtTNMvYCno7F3hD17YSk6TxzGaP2AsRZUai2GhtWgxAVuzcT2UtwCVLTNHJ33R97C7-4hNVdipWpErKpmgJfBQxJilDj-p8h6VG",
    imageAlt: "Microchip circuitry",
    title: "Chipset & Device Testing",
    items: ["Carrier Acceptance Testing (CAT)", "Field Interoperability Testing (FIT)", "Platform Certification & Validation"],
  },
];

const WHY_ITEMS = [
  { iconName: "brain", title: "Telecom-First Expertise", description: "Deep domain knowledge across all network layers." },
  { iconName: "speed", title: "Rapid Ramp-up", description: "Deploy specialized teams in days, not months." },
  { iconName: "analytics", title: "Automation Driven", description: "Data-backed insights for smarter deployments." },
  { iconName: "handshake", title: "Execution Focused", description: "We don't just design; we build on the ground." },
];

const CLIENTS = [
  "Tier-1 & Regional Operators",
  "OEMs & Hardware Vendors",
  "Neutral Host Operators",
  "Fiber Network Operators",
  "Enterprises & Venues",
  "Silicon Developers",
];



// ── Main Component ───────────────────────
export default function IntegerTelecom() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
     <Hero/>

    
      {/* ── Hero ── */}
      {/**
       * <header className="relative bg-white py-16 lg:py-24 overflow-hidden">
        {/* subtle dot pattern /}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#0ea5e9 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Now Scaling in 30+ States
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
              Engineering & Enabling the Networks That{" "}
              <span className="text-blue-500">Power Tomorrow</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Wireless, fiber, chipset, tower, and data center engineering — delivered with precision, speed, and trusted field teams across 30+ U.S. states.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Request a Proposal
              </button>
              <button className="border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCYMowa0x-FL9gJ8BCICHCZo3tK2-kxhTLm22dWuPgWe3G3k-_O-ruvYvEkvpTiATbJ6JL6K6HiePSuRGMXhPH6byTUFSHZ6xTvEBcdYQWBnjPBweDTqWKQuI3qj1RCLy-REwUNo_BH0y3Apgck1ZSOBVFpo3sje8qEwxuzYe2YjGwp_mnT9a-RLRHsFO8GbcqpsIZXvlCUR6ku9eEyY_3swm_u8h7nX241lSMLxEQC7W7MP5xSXEhB0kKkllgPJoxELXUI_z2nWQL")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Professional technician on telecommunications infrastructure"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Icon name="globe" className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">600+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Field Experts</div>
              </div>
            </div>
          </div>
        </div>
      </header>
       */}

      {/* ── Who We Are ── */}
      <section className="py-20 bg-slate-50" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
            <div className="max-w-2xl">
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3">Who We Are</p>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                Global Scale, Local Field Force
              </h3>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                With a 600+ person delivery team across 30+ U.S. states and operations in the US, Canada, and India, we bridge the gap between high-level engineering and ground-level execution.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <StatCard value="30+" label="US States" />
              <StatCard value="3" label="Global Hubs" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard iconName="groups" title="600+ Team Members" description="A dedicated workforce of engineers and field technicians ready for deployment at a moment's notice." />
            <FeatureCard iconName="map" title="Local Presence" description="Strategic teams embedded in key regional markets to ensure rapid response and local expertise." />
            <FeatureCard iconName="globe" title="Global Operations" description="24/7 delivery capabilities leveraging our interconnected hubs in the US, Canada, and India." />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3">Our Services</p>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900">Comprehensive Telecom Engineering</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
            {/* Custom solutions card */}
            <div className="bg-blue-500 p-8 rounded-xl flex flex-col justify-center items-center text-center text-white">
              <Icon name="plus" className="w-14 h-14 mb-4 opacity-90" />
              <h4 className="text-2xl font-black mb-3">Need a Custom Solution?</h4>
              <p className="mb-7 opacity-90 leading-relaxed">
                Our engineering team can design a bespoke framework for your specific network needs.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Contact Engineering
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Integer ── */}
      <section className="py-20 bg-slate-50" id="why-us">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3">Why Integer</p>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight">
                The Bridge Between Engineering and Field Execution
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {WHY_ITEMS.map((item, i) => (
                  <WhyItem key={i} {...item} />
                ))}
              </div>
            </div>
            {/* Stats panel */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-1">
              <div className="bg-slate-900 rounded-xl p-8 text-white">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Icon name="verified" className="w-5 h-5 text-blue-400" />
                  Our Global Footprint
                </h4>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm">United States</span>
                      <span className="text-blue-400 font-bold text-sm">30+ States</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full w-full" />
                    </div>
                  </div>
                  <div className="pb-6 border-b border-white/10">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm">Engineering Staff</span>
                      <span className="text-blue-400 font-bold text-sm">600+</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full w-[90%]" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300 text-sm">Global Locations</span>
                    <span className="text-blue-400 font-bold text-sm">US · CA · IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-black text-slate-900 mb-3">Who We Serve</h3>
            <p className="text-slate-500">Empowering the world's leading technology and connectivity providers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENTS.map((c, i) => <ClientPill key={i} label={c} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Ready to accelerate your network deployment?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 100+ clients who trust Integer Telecom Services for high-precision engineering and reliable field execution.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition-colors">
              Request a Proposal
            </button>
            <button className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
