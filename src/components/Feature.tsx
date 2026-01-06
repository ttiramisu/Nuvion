import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureData {
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  color: string;
  // Specific Tailwind strings to ensure JIT compiler picks them up
  accentText: string;
  accentBg: string;
  dotColor: string;
}

const features: FeatureData[] = [
  {
    title: "Food Recognition",
    desc: "Nuvion uses sophisticated AI-powered food recognition to identify meals from images in real time, eliminating the hassle of manual logging.",
    bullets: [
      "Scan any dish in seconds",
      "Accurate nutritional breakdown",
      "Regional cuisine database",
    ],
    img: "/scanner.png",
    color: "#10b981",
    accentText: "text-emerald-600",
    accentBg: "bg-emerald-100",
    dotColor: "fill-emerald-500",
  },
  {
    title: "Daily Meal Records",
    desc: "Automatically organize all recognized meals into a daily intake log to monitor eating habits and nutritional consistency over time.",
    bullets: [
      "Track meals automatically",
      "Analyze nutritional trends",
      "Identify improvement areas",
    ],
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    color: "#3b82f6",
    accentText: "text-blue-600",
    accentBg: "bg-blue-100",
    dotColor: "fill-blue-500",
  },
  {
    title: "Avatar & Health Dashboard",
    desc: "A customized digital avatar that changes in tandem with your dietary habits, providing visual feedback on your progress.",
    bullets: [
      "Digital avatar evolution",
      "Visual goal tracking",
      "Health status dashboard",
    ],
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
    color: "#8b5cf6",
    accentText: "text-purple-600",
    accentBg: "bg-purple-100",
    dotColor: "fill-purple-500",
  },
  {
    title: "Health Dashboard",
    desc: "Monitor your nutritional balance, goal progress, and areas for improvement with a clear, user-friendly health status dashboard.",
    bullets: [
      "Track nutritional balance",
      "Monitor goal progress",
      "Identify areas for improvement",
    ],
    img: "https://images.unsplash.com/photo-1588776814546-9938a8c82a10?auto=format&fit=crop&q=80&w=800",
    color: "#f97316", // orange
    accentText: "text-orange-600", // orange text accent
    accentBg: "bg-orange-100", // light orange background
    dotColor: "fill-orange-500", // orange dot
  },
  {
    title: "Sharing & Community",
    desc: "Share real meal updates and progress milestones through Nuvion's community page and Instagram, promoting accountability and community support.",
    bullets: [
      "Post updates and milestones",
      "Build accountability",
      "Engage with supportive community",
    ],
    img: "/sharing.png",
    color: "#f472b6",
    accentText: "text-pink-600",
    accentBg: "bg-pink-100",
    dotColor: "fill-pink-500",
  },
];

const Feature: React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    containerRefs.current.forEach((el) => {
      if (!el) return;

      const text = el.querySelector(".feature-content");
      const image = el.querySelector(".feature-image");

      gsap.fromTo(
        text,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden" id="features">
      <style>{`
        .phone-frame {
          aspect-ratio: 9 / 19;
          width: min(280px, 70vw);
          border: 12px solid #1e293b;
          border-radius: 2.5rem;
          background: #000;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .connector-line {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2s ease-out forwards;
        }
        @keyframes draw { to { stroke-dashoffset: 0; } }
      `}</style>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Nuvion
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">
          Nutritional finesse in your pocket.
        </p>
        <div className="mt-8 animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {features.map((f, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={i}
            ref={(el) => {
              containerRefs.current[i] = el as HTMLDivElement;
            }}
            className={`min-h-screen flex items-center py-20 px-6 ${
              !isEven ? "bg-slate-50" : "bg-white"
            }`}
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Container - Order 1 on Mobile (Top) */}
              <div
                className={`feature-image flex justify-center relative order-1 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="phone-frame overflow-hidden z-10">
                  <img
                    src={f.img}
                    className="w-full h-full object-cover"
                    alt={f.title}
                  />
                </div>

                {/* Nice Connector Line with Dot */}
                <svg
                  className="hidden md:block absolute top-1/2 w-64 h-32 pointer-events-none z-0"
                  style={{
                    [isEven ? "right" : "left"]: "55%",
                    transform: `translateY(-50%) ${
                      !isEven ? "scaleX(-1)" : ""
                    }`,
                  }}
                  viewBox="0 0 200 100"
                >
                  <path
                    d="M200 50 C 150 50, 50 10, 10 30"
                    fill="none"
                    stroke={f.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="connector-line opacity-30"
                  />
                  <circle cx="10" cy="30" r="5" className={f.dotColor} />
                  <circle
                    cx="10"
                    cy="30"
                    r="8"
                    className={f.dotColor}
                    fillOpacity="0.3"
                  />
                </svg>
              </div>

              {/* Text Content - Order 2 on Mobile (Bottom) */}
              <div
                className={`feature-content order-2 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="space-y-6">
                  <div
                    className={`inline-flex items-center gap-2 ${f.accentBg} ${f.accentText} px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase`}
                  >
                    Feature {i + 1}
                  </div>

                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {f.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>

                  <ul className="space-y-4">
                    {f.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-4 group">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl ${f.accentBg} flex items-center justify-center transition-transform group-hover:scale-110`}
                        >
                          <svg
                            className={`w-5 h-5 ${f.accentText}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-slate-700">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Feature;
