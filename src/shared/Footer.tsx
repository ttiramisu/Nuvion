import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-emerald-50 to-white border-t border-slate-200 relative">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo + Brand + Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 rounded-lg flex items-center justify-center">
              <img src="/Nuvion.png" alt="Nuvion Logo" className="w-8 h-8" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Nuvion
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="group text-slate-400 hover:text-emerald-600 transition"
            >
              <Instagram className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="group text-slate-400 hover:text-emerald-600 transition"
            >
              <Facebook className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="group text-slate-400 hover:text-emerald-600 transition"
            >
              <Youtube className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Copyright with Logo */}
        <div className="text-center text-sm text-slate-400 mt-6 flex items-center justify-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span>Nuvion. All rights reserved.</span>
        </div>
      </div>

      {/* Right Side: Made with Vite */}
      <div className="text-sm text-slate-400 text-center pb-4">
        Made with <span className="text-red-500">❤️</span> using{" "}
        <span className="font-semibold">React + Vite</span>
      </div>
    </footer>
  );
}
