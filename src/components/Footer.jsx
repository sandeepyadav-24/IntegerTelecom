import React from "react";




export default function Footer() {
  const FOOTER_SERVICES = [
    "Network Infrastructure",
    "Fiber Deployment",
    "5G Solutions",
    "Telecom Consulting",
    "Chipset Engineering",
  ];

  const FOOTER_CONTACT = [
    { icon: "call", text: "+91 98765 43210" },
    { icon: "mail", text: "info@integertelecom.com" },
    { icon: "location_on", text: "New Delhi, India" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Brand col */}
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-[#259df4] text-3xl">
              router
            </span>
            <span
              className="text-xl font-bold tracking-tight uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Integer Telecom
            </span>
          </div>

          <p className="max-w-xs text-sm leading-relaxed">
            Delivering the infrastructure of the future. From fiber to chipsets,
            we are the engineering partner of choice for the world's leading
            telecom operators.
          </p>

          <div className="flex gap-3">
            {["public", "mail", "share"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="footer-social w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400"
              >
                <span className="material-symbols-outlined text-sm">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h5
            className="text-white font-bold mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Services
          </h5>
          <ul className="space-y-3 text-sm">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-[#259df4] transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5
            className="text-white font-bold mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Contact
          </h5>
          <ul className="space-y-3 text-sm">
            {FOOTER_CONTACT.map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#259df4] text-base">
                  {icon}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-3">
        <p>© 2026 Integer Telecom Services. All rights reserved.</p>

        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (l) => (
              <a
                key={l}
                href="#"
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            )
          )}
        </div>
      </div>
  

    </footer>
  );
}