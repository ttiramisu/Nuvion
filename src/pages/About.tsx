import { useEffect, useRef } from "react";

export default function About() {
  const teamRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Jiachuan",
      role: "Whispers to Food",
      color: "bg-emerald-50 text-emerald-700",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Xin Yu",
      role: "Brain of Nuvion",
      color: "bg-sky-50 text-sky-700",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Cheng Ao",
      role: "Builds app with Codex",
      color: "bg-violet-50 text-violet-700",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Xiao Yu",
      role: "Touches people",
      color: "bg-orange-50 text-orange-700",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Bang Yan",
      role: "Tells stories in Chinese",
      color: "bg-rose-50 text-rose-700",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "You!",
      role: "Join our Team",
      color: "bg-neutral-100 text-neutral-700",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="bg-white text-slate-900 antialiased" id="about">
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }

        .fade-in-section.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.95) 0%,
            rgba(249,250,251,0.95) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition:
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.08);
        }

        body::-webkit-scrollbar {
          display: none;
        }

        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-emerald-600">
            About Nuvion
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            A new vision of nutrition that fits seamlessly into real lives
          </p>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-section text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse group of experts united by a shared vision of
              accessible, personalized nutrition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="fade-in-section team-card p-6 rounded-2xl"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`inline-block ${member.color} px-4 py-2 rounded-full text-sm font-semibold mb-3`}
                  >
                    {member.name}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section ref={storyRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Story
            </h2>

            <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
              {/* Hero Image */}
              <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200"
                  alt="Healthy food spread"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl">
                <p className="mb-4">
                  Modern life moves fast. Too fast for rigid meal plans, calorie
                  spreadsheets, or one-size-fits-all nutrition advice.
                </p>
                <p>
                  For young professionals juggling long workdays, social
                  commitments, and constant decision fatigue, eating well often
                  becomes an afterthought. Not because they don't care, but
                  because the system makes it hard to care consistently.
                </p>
              </div>

              <div className="pl-8 border-l-4 border-emerald-600">
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                  Nuvion was created to change that.
                </h3>
                <p className="mb-4">
                  Pronounced <span className="font-semibold">New-V-On</span>,
                  Nuvion represents a <strong>new vision</strong> of nutrition -
                  it is a personalized nutrition companion. By integrating
                  lifestyle habits, regional food culture, and biometric
                  signals, Nuvion transforms everyday meals into clear,
                  evidence-based insights - right when decisions matter most. No
                  noise. No guilt. Just clarity.
                </p>
              </div>

              <div className="bg-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  But guidance alone isn't enough.
                </h3>
                <p className="mb-4">
                  That's why Nuvion extends beyond the individual, allowing us
                  to thrive in shared spaces. BeReal-style Instagram sharing,
                  community-driven accountability, and a{" "}
                  <strong>dynamic digital avatar</strong> that evolves alongside
                  habits create an emotional connection that makes abstract
                  goals tangible. Users get to participate in a culture of
                  honesty, support, and collective growth. Progress becomes
                  visible. Consistency becomes social.
                </p>
                <p>
                  In the short term, Nuvion's proprietary food-recognition
                  technology - trained on regional cuisines - delivers accuracy
                  competitors can't match. In the long term, it's the community
                  that becomes our moat: a living network of people making
                  better decisions together, every day.
                </p>
              </div>

              {/* Community Image */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600"
                    alt="People sharing meals together"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
                    alt="Mobile app mockup"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="text-center py-8">
                <p className="text-2xl font-semibold text-slate-800 mb-4">
                  Nuvion isn't about eating perfectly.
                </p>
                <p className="text-xl text-slate-600 mb-2">
                  It's about navigating nutrition with confidence, even on your
                  busiest days.
                </p>
                <p className="text-2xl font-bold text-emerald-600 mt-6">
                  Effortlessly navigate your path to nutritional finesse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UVP Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unique Value Proposition
            </h2>
          </div>

          <div className="fade-in-section grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
                alt="Regional cuisine diversity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-10 rounded-3xl shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Nuvion accounts for{" "}
                <strong>regional dietary differences</strong>, with advice
                synthesised from physical condition, lifestyle, unique goals and
                more for a personalized experience. Digital avatars reflect
                progress in real-time, fostering emotional attachment while
                Instagram-integrated sharing features cultivate health-oriented
                digital communities, boosting engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aim & Value Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          </div>

          {/* Mission Image */}
          <div className="fade-in-section mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=1200"
              alt="Fitness and nutrition lifestyle"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="fade-in-section grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalised Guidance</h3>
              <p className="text-slate-600">
                Nuvion provides personalised, evidence-based dietary guidance
                and health goals by integrating user-provided lifestyle
                information and biochemical markers
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Progress</h3>
              <p className="text-slate-600">
                Nuvion tracks real-time progress, supported by a dynamic avatar
                that evolves alongside healthy habits
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-slate-600">
                BeReal-style Instagram integration fosters accountability and
                community support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Credibility Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Reach</h2>
          </div>

          <div className="fade-in-section bg-gradient-to-br from-slate-50 to-emerald-50 p-10 rounded-3xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                  Target Audience
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Health-conscious young adults aged <strong>20-35</strong>
                </p>
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                  Distribution Channels
                </h3>
                <ul className="space-y-3">
                  {[
                    "Instagram",
                    "TikTok",
                    "Gym Collaborations",
                    "Fitness Influencers",
                  ].map((channel, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">
                        {channel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
                  alt="Young adults exercising and staying healthy"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
