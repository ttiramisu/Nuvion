import { Apple, Play } from 'lucide-react'

export default function CTA() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center text-center px-6 py-20"
    id="downloads">
      
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-emerald-600">
        Get the App
      </h2>

      <p className="text-xl text-slate-500 mb-10 max-w-lg">
        Effortlessly navigate your path to nutritional finesse.
        Available on iOS and Android.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        
        {/* App Store */}
        <button className="group border-2 border-slate-300 text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 hover:bg-slate-50 cursor-pointer">
          <Apple className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
          App Store
        </button>

        {/* Google Play */}
        <button className="group border-2 border-slate-300 text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 hover:bg-slate-50 cursor-pointer">
          <Play className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
          Google Play
        </button>

      </div>
    </section>
  )
}
