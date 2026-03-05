import { useEffect, useRef, useState } from "react";
// ── Particle Network Canvas ──────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const PARTICLE_COUNT = 90;
    const MAX_DIST = 140;
    const particles = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : (Math.random() < 0.5 ? -10 : H + 10);
        this.r = Math.random() * 1.8 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.5 + 0.15;
        // colour: icy-blue to sky-blue
        const hue = Math.random() * 30 + 195; // 195–225
        this.color = `hsla(${hue}, 85%, 62%, `;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ")";
        ctx.fill();
      }
    }

    function init() {
      resize();
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(loop);
    }

    init();
    loop();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}


// ── Pulsing signal rings ─────────────────────────────────────────────────────
function SignalRings({ cx, cy, color = "#38bdf8" }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      {[1, 2, 3].map(i => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={60 + i * 40}
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="4 8"
          opacity="0.18"
          style={{
            animation: `spin-slow ${10 + i * 4}s linear infinite`,
            transformOrigin: `${cx}px ${cy}px`,
            animationDirection: i % 2 === 0 ? "reverse" : "normal",
          }}
        />
      ))}
    </svg>
  );
}

// ── Stat chip ────────────────────────────────────────────────────────────────
function StatChip({ icon, value, label, delay = "0s" }) {
  return (
    <div
      className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-blue-100"
      style={{ animation: `floatUp 0.7s ease both`, animationDelay: delay }}
    >
      <div className="bg-gradient-to-br from-blue-400 to-sky-500 p-2.5 rounded-xl text-white text-lg">
        {icon}
      </div>
      <div>
        <div className="text-xl font-black text-slate-900 leading-none">{value}</div>
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{label}</div>
      </div>
    </div>
  );
}

// ── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  return (
    <>
      {/* Global keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes floatUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes ping-slow {
          0%,100% { transform:scale(1);   opacity:.7; }
          50%      { transform:scale(1.4); opacity:.3; }
        }
        @keyframes data-stream {
          0%   { stroke-dashoffset: 200; opacity:0; }
          10%  { opacity:.6; }
          90%  { opacity:.6; }
          100% { stroke-dashoffset: 0;   opacity:0; }
        }
        @keyframes glow-pulse {
          0%,100% { opacity:.55; transform:scale(1);    }
          50%      { opacity:.85; transform:scale(1.08); }
        }
        .hero-font { font-family: 'Syne', sans-serif; }
        .body-font  { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <header
        className="relative overflow-hidden body-font"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f8faff 65%, #eff6ff 100%)",
        }}
      >
        {/* ── Ambient glow blobs ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "-10%", right: "-5%",
            width: 520, height: 520, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)",
            animation: "glow-pulse 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "-15%", left: "-8%",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%)",
            animation: "glow-pulse 8s ease-in-out infinite reverse",
          }} />
          <div style={{
            position: "absolute", top: "35%", left: "40%",
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(186,230,255,0.25) 0%, transparent 70%)",
            animation: "glow-pulse 10s ease-in-out infinite",
          }} />
        </div>

        {/* ── Particle network ── */}
        <ParticleCanvas />

        {/* ── Thin horizontal scan line ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
          <div style={{
            position: "absolute", left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
            animation: "floatUp 0s linear infinite",
            top: "30%",
            opacity: 0.5,
          }} />
        </div>

        {/* ── Hex grid overlay (faint) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z' fill='none' stroke='%2338bdf8' stroke-width='0.4' stroke-opacity='0.12'/%3E%3Cpath d='M28 66 L56 82 L56 116 L28 132 L0 116 L0 82 Z' fill='none' stroke='%2338bdf8' stroke-width='0.4' stroke-opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundSize: "56px 100px",
          }}
        />

        {/* ── Content ── */}
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-32" style={{ zIndex: 10 }}>

          {/* Left column */}
          <div
            className="flex flex-col gap-8"
            style={{ animation: mounted ? "floatUp .8s ease both" : "none" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-widest w-fit shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              Now Scaling in 30+ States
            </div>

            {/* Headline */}
            <h1
              className="hero-font text-5xl lg:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-slate-900"
              style={{ animationDelay: ".1s", animation: mounted ? "floatUp .8s ease both" : "none" }}
            >
              Engineering &amp; Enabling<br />
              the Networks That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Power Tomorrow
              </span>
            </h1>

            {/* Sub */}
            <p
              className="text-lg text-slate-500 leading-relaxed max-w-lg"
              style={{ animationDelay: ".2s", animation: mounted ? "floatUp .8s ease both" : "none" }}
            >
              Wireless, fiber, chipset, tower, and data center engineering — delivered with precision, speed, and trusted field teams across 30+ U.S. states.
            </p>

            {/* Inline stats row */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animationDelay: ".3s", animation: mounted ? "floatUp .8s ease both" : "none" }}
            >
              {[
                { v: "30+", l: "States" },
                { v: "600+", l: "Field Experts" },
                { v: "99.8%", l: "Uptime SLA" },
              ].map(({ v, l }) => (
                <div key={l} className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
                  <span className="text-base font-black text-blue-500">{v}</span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{l}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 pt-1"
              style={{ animationDelay: ".4s", animation: mounted ? "floatUp .8s ease both" : "none" }}
            >
              <button
                className="relative overflow-hidden px-9 py-4 rounded-2xl font-bold text-base text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.35)",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(14,165,233,0.55)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(14,165,233,0.35)"; e.currentTarget.style.transform = ""; }}
              >
                <span className="relative z-10">Request a Proposal</span>
              </button>
              <button
                className="px-9 py-4 rounded-2xl font-bold text-base text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 transition-all hover:border-blue-300 hover:text-blue-600 hover:bg-white"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Right column – image card */}
          <div
            className="relative flex justify-center"
            style={{ animationDelay: ".3s", animation: mounted ? "floatUp .9s ease both" : "none" }}
          >
            {/* Decorative ring behind card */}
            <div style={{
              position: "absolute", inset: -24,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Card */}
            <div
              className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-blue-100"
              style={{
                boxShadow: "0 32px 80px rgba(14,165,233,0.18), 0 4px 24px rgba(0,0,0,0.08)",
                background: "white",
              }}
            >
              {/* Top bar (mock browser chrome) */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
                {["#f87171","#fbbf24","#4ade80"].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
                <div className="mx-auto text-[10px] text-slate-400 font-mono bg-white border border-slate-200 px-3 py-0.5 rounded-full tracking-wide">
                  telecom-ops.dashboard.live
                </div>
              </div>

              {/* Image */}
              <div
                className="aspect-video w-full relative"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCYMowa0x-FL9gJ8BCICHCZo3tK2-kxhTLm22dWuPgWe3G3k-_O-ruvYvEkvpTiATbJ6JL6K6HiePSuRGMXhPH6byTUFSHZ6xTvEBcdYQWBnjPBweDTqWKQuI3qj1RCLy-REwUNo_BH0y3Apgck1ZSOBVFpo3sje8qEwxuzYe2YjGwp_mnT9a-RLRHsFO8GbcqpsIZXvlCUR6ku9eEyY_3swm_u8h7nX241lSMLxEQC7W7MP5xSXEhB0kKkllgPJoxELXUI_z2nWQL")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, transparent 50%, rgba(14,165,233,0.15) 100%)",
                }} />

                {/* Signal rings on image */}
                <SignalRings cx="85%" cy="25%" color="#38bdf8" />

                {/* Live indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Live Deploy
                </div>
              </div>

              {/* Bottom ticker */}
              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-sky-50 border-t border-blue-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" style={{ animation: "ping-slow 2s infinite" }} />
                <span className="text-xs text-slate-500 font-mono tracking-wide overflow-hidden whitespace-nowrap">
                  NODE_TX · Fiber backbone active · 12 sites synced · 0 degraded ✓
                </span>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -left-6 top-1/3 hidden lg:block">
              <StatChip icon="📡" value="600+" label="Field Experts" delay=".5s" />
            </div>
            <div className="absolute -right-6 bottom-12 hidden lg:block">
              <StatChip icon="⚡" value="99.8%" label="Uptime SLA" delay=".65s" />
            </div>
          </div>
        </div>

        {/* ── Bottom wave divider ── */}
        <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", height: 60 }}>
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </header>
    </>
  );
}