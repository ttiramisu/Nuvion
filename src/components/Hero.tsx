import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current
          .querySelector(".hero-title")
          ?.classList.add("animate-fade-in");
      }
    }, 300);

    const timer2 = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current
          .querySelector(".hero-subtitle")
          ?.classList.add("animate-fade-in");
      }
    }, 600);

    const timer3 = setTimeout(() => {
      if (phoneRef.current) {
        phoneRef.current.classList.add("animate-fade-in");
      }
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    // Disable right-click on video
    const video = videoRef.current;
    if (video) {
      const preventContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };
      video.addEventListener("contextmenu", preventContextMenu);
      return () => {
        video.removeEventListener("contextmenu", preventContextMenu);
      };
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Video playback failed:", err);
          setVideoError(true);
        });
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div
      className="bg-white text-slate-900 antialiased overflow-x-hidden"
      id="-"
    >
      <style>{`
        .phone-frame {
          aspect-ratio: 9 / 19;
          width: min(320px, 90vw);
          border: 10px solid #22c55e;
          border-radius: 3rem;
          background: #000;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 80px -20px rgba(34, 197, 94, 0.4);
        }

        .food-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.85) 50%,
            rgba(255, 255, 255, 0.95) 100%
          );
          z-index: 1;
        }

        .food-bg-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          opacity: 0.3;
          z-index: 0;
        }

        .food-bg-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: transform 0.3s ease;
          background: #000;
        }

        .video-container:hover {
          transform: scale(1.02);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
        }

        .video-container video {
          pointer-events: none;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(34, 197, 94, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: #22c55e;
        }

        .play-button.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body::-webkit-scrollbar {
          display: none;
        }

        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 768px) {
          .food-bg-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
      >
        {/* Food Background */}
        <div className="food-bg-grid">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=400"
            alt=""
          />
        </div>
        <div className="food-bg-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 mt-12 max-w-6xl mx-auto">
          <h1 className="text-emerald-600 hero-title text-7xl md:text-9xl font-bold tracking-tight mb-6 opacity-0">
            Nuvion
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed opacity-0">
            Effortlessly navigate your way to nutritional finesse
          </p>

          {/* App Display Container */}
          <div ref={phoneRef} className="flex justify-center mb-16 opacity-0">
            <div className="grid grid-cols-1 grid-rows-1 place-items-center">
              <div className="phone-frame col-start-1 row-start-1 -translate-x-32 md:-translate-x-56 scale-90 -rotate-12 z-0 opacity-60 transition-transform duration-700">
                <img
                  src="/sharing.png"
                  className="w-full h-full object-cover"
                  alt="Nuvion interface left"
                />
              </div>
              <div className="phone-frame col-start-1 row-start-1 translate-x-32 md:translate-x-56 scale-90 rotate-12 z-0 opacity-60 transition-transform duration-700">
                <img
                  src="/nearby.png"
                  className="w-full h-full object-cover"
                  alt="Nuvion interface right"
                />
              </div>
              <div className="phone-frame col-start-1 row-start-1 z-10 shadow-2xl scale-100 relative">
                <img
                  src="/splash.png"
                  className="w-full h-full object-cover"
                  alt="Nuvion interface center"
                />
              </div>
            </div>
          </div>

          {/* Promo Video */}
          <div className="max-w-6xl w-full mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              See Nuvion in Action
            </h2>
            <div className="video-container mx-auto" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://this-is-project-elevate.netlify.app/video.mp4"
                poster="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1600"
                playsInline
                preload="metadata"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
                onError={() => setVideoError(true)}
              />

              {/* Transparent overlay to prevent direct video interaction */}
              <div className="video-overlay"></div>

              <div className={`play-button ${isVideoPlaying ? "hidden" : ""}`}>
                {videoError ? (
                  <span className="text-white text-sm px-4">
                    Video unavailable
                  </span>
                ) : (
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-emerald-600 mx-auto"
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
        </div>
      </section>
    </div>
  );
}
