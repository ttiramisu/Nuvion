import { useEffect, useRef } from 'react'

export default function Download() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-slate-900 px-6 py-32 opacity-0"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — TEXT */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Built for real life.
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            Nuvion is a portable, intuitive tool that delivers
            <span className="text-emerald-600 font-medium"> clear, evidence-based meal guidance </span>
            — empowering smarter food decisions exactly when you need them.
          </p>

          <p className="text-xl text-slate-600 leading-relaxed">
            Whether you’re eating out, cooking at home, or choosing on the go,
            Nuvion adapts instantly to your lifestyle.
          </p>
        </div>

        {/* RIGHT — PRICING CARD */}
        <div className="relative rounded-3xl border border-emerald-200 bg-emerald-50 p-10 shadow-[0_40px_80px_-30px_rgba(34,197,94,0.35)]">
          
          <div className="absolute -top-5 right-8 rounded-full bg-emerald-600 px-5 py-1 text-white text-sm font-medium">
            101% Rebate
          </div>

          <h3 className="text-3xl font-bold mb-4">
            $14.99 / month
          </h3>

          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Subscribe monthly and earn your money back.
            Users who consistently participate and meet goals receive
            <span className="font-medium text-emerald-700"> full refunds — plus more.</span>
          </p>

          <ul className="space-y-4 mb-8">
            {[
              'Goal-based progress tracking',
              'Milestone rewards & vouchers',
              'Wellness brand partnerships',
              'Sustainable ad-free experience'
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="w-full rounded-full bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 hover:scale-[1.02] active:scale-100">
            Download Nuvion
          </button>
        </div>
      </div>
    </section>
  )
}
