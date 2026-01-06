import { Instagram, Youtube, Music2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-8">

        {/* Brand */}
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Nuvion
        </span>

        {/* Socials */}
        <div className="flex gap-8">
          <a
            href="#"
            aria-label="Instagram"
            className="group text-slate-400 hover:text-emerald-600 transition"
          >
            <Instagram className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#"
            aria-label="TikTok"
            className="group text-slate-400 hover:text-emerald-600 transition"
          >
            {/* TikTok doesn't exist in lucide, Music2 is the closest minimal icon */}
            <Music2 className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="group text-slate-400 hover:text-emerald-600 transition"
          >
            <Youtube className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Legal / copyright */}
        <div className="text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Nuvion. All rights reserved.
        </div>

      </div>
    </footer>
  )
}