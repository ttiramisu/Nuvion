export default function Partners() {
  const partners = [
    'Nestlé Health Science',
    'Unilever Wellbeing Collective',
    'Herbalife Nutrition',
    'Swisse',
    'Athletic Greens (AG1)',
    'Goli Nutrition',
    'MaryRuth Organics',
    'Huel',
    'Lululemon',
    'Nike Wellness',
    'Peloton',
    'Equinox',
    'Gymshark',
    'Apple Health & Fitness',
  ]

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Our Partners
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Working alongside leaders in nutrition, wellness, and fitness.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full space-y-10">

        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1 — left */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-[marquee-left_45s_linear_infinite] hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div key={`l-${i}`} className="px-12">
                <span className="text-slate-400 text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-[marquee-right_45s_linear_infinite] hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div key={`r-${i}`} className="px-12">
                <span className="text-slate-300 text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
