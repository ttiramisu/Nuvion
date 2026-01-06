import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <style>{`
        .nav-backdrop {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 nav-backdrop shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/#-" className="flex items-center gap-2 group">
              <img
                src="/Nuvion.png"
                alt="Nuvion Logo"
                className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-bold text-slate-900">Nuvion</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/#features"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                to="/about#about"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/#pricing"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Pricing
              </Link>
              <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
                <Link to="#downloads">Download App</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col gap-4">
                <Link
                  to="/#features"
                  className="text-slate-700 hover:text-emerald-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="text-slate-700 hover:text-emerald-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/#pricing"
                  className="text-slate-700 hover:text-emerald-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors w-full mt-2">
                  <Link
                    to="/#downloads"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download App
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
