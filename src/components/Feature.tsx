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
  accentText: string;
  accentBg: string;
  dotColor: string;
  step: string;
}

const features: FeatureData[] = [
  {
    title: "Scanner",
    desc: "Instant meal scanner supported by proprietary IC-Vision and an extensive database for micronutrient reports and actionable advice.",
    bullets: [
      "Addresses uncertainty and indecisiveness in food choices.",
      "Extensive database that covers a wide range of regional cuisines and concrete, actionable recommendations for improvements on diet",
      "Able to recognise lesser-known cuisines that are often overlooked by existing databases.",
    ],
    img: "/scanner.png",
    color: "#10b981",
    accentText: "text-emerald-600",
    accentBg: "bg-emerald-100",
    dotColor: "fill-emerald-500",
    step: "Scan",
  },
  {
    title: "Community",
    desc: "Explore a community of health where we step towards a healthier lifestyle together",
    bullets: [
      "Connects individuals with communities of similar backgrounds and experiences.",
      "A space with centralized information on healthy diet where you can communicate, discuss, and learn from shared experiences",
      "Browse weekly community posts for more healthy diet tips",
    ],
    img: "/community.png",
    color: "#3b82f6",
    accentText: "text-blue-600",
    accentBg: "bg-blue-100",
    dotColor: "fill-blue-500",
    step: "Community",
  },
  {
    title: "Sharing",
    desc: "Stay connected with friends by sharing daily meals and progress updates via Instagram-integrated sharing",
    bullets: [
      "Builds motivation and accountability to sustain a healthy lifestyle.",
      "Allow your close ones to share this journey with you for mutual supervision",
      "View yourself and others through interactive avatars",
    ],
    img: "/sharing.png",
    color: "#8b5cf6",
    accentText: "text-purple-600",
    accentBg: "bg-purple-100",
    dotColor: "fill-purple-500",
    step: "Share",
  },
  {
    title: "Nearby",
    desc: " Spend your hard-earned offers and benefits at our partnered enterprises",
    bullets: [
      "Puts healthier diet choices at your fingertips",
      "Eat at healthier restaurants nearby that we selected just for you",
      "All information on healthier choices at your fingertips",
    ],
    img: "/nearby.png",
    color: "#f472b6",
    accentText: "text-pink-600",
    accentBg: "bg-pink-100",
    dotColor: "fill-pink-500",
    step: "Nearby",
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
        .connector-line {Network
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
                    {f.step}
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
