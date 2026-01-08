import { useState, useEffect } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setIsVisible(true);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-6">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; opacity: 0; }
        .delay-2 { animation-delay: 0.4s; opacity: 0; }
        .delay-3 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      <div className="max-w-4xl w-full text-center">
        {/* Animated 404 Number */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative inline-block">
            <h1 className="text-9xl md:text-[12rem] font-bold text-emerald-600 leading-none">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-emerald-200 blur-2xl opacity-50 leading-none">
              404
            </div>
          </div>
        </div>

        {/* Message */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-2' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Looks like this meal isn't on our menu. The page you're looking for seems to have gone on a nutrition break!
          </p>
          <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-semibold">
            Redirecting to homepage in {countdown} seconds...
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex justify-center ${isVisible ? 'animate-fade-in-up delay-3' : 'opacity-0'}`}>
          <button
            onClick={handleGoHome}
            className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-2 justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go to Homepage Now
            </div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-30">
          <div className="w-16 h-16 bg-emerald-200 rounded-full blur-xl"></div>
          <div className="w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="w-16 h-16 bg-emerald-200 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}