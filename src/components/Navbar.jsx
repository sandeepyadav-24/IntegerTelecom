import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const SERVICES = [
  { name: "Chipset Testing", path: "/services/chipset-testing" },
  { name: "Drone Tower Audit", path: "/services/drone-tower-audit" },
  { name: "Data Center Installation", path: "/services/data-center-installation" },
  { name: "Fiber Engineering", path: "/services/fiber-engineering" },
  { name: "Wireless Services", path: "/services/wireless-services" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
             <img
                  src="https://integertel.com/images/logo@2x.png"
                   alt="Integer Telecom Logo"
                   className="h-10 w-auto"
              />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              to="/services"
              className={`relative text-sm font-medium transition-colors ${
                isServicesActive
                  ? "text-[#259df4]"
                  : "text-slate-600 hover:text-[#259df4]"
              }`}
            >
              <span className="pb-1 relative">
                Services
                {isServicesActive && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-[#259df4]" />
                )}
              </span>
            </Link>

            {/* Dropdown */}
            <div className="absolute z-50 left-0 top-full mt-3 w-64 bg-white shadow-lg rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {SERVICES.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "text-[#259df4] bg-blue-50"
                        : "text-slate-600 hover:bg-blue-50 hover:text-[#259df4]"
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#259df4]"
                  : "text-slate-600 hover:text-[#259df4]"
              }`
            }
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#259df4]"
                  : "text-slate-600 hover:text-[#259df4]"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">

          {/* Services Expandable */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full py-3 text-sm font-medium text-slate-600"
            >
              Services
              <span className="material-symbols-outlined text-sm">
                {servicesOpen ? "expand_less" : "expand_more"}
              </span>
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-2">
                {SERVICES.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className="block py-2 text-sm text-slate-500 hover:text-[#259df4]"
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <NavLink
            to="/about"
            className="block py-3 text-sm font-medium text-slate-600"
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className="block py-3 text-sm font-medium text-slate-600"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}