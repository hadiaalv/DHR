"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1,200+", label: "Properties Sold" },
  { value: "AED 2B+", label: "Transaction Volume" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity First",
    desc: "Every transaction is built on honesty, transparency, and ethical practice — no exceptions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Speed & Precision",
    desc: "We move fast without cutting corners — delivering results that are both quick and accurate.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Client-Centric",
    desc: "Your goals shape everything we do. We listen deeply and act decisively on your behalf.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Market Intelligence",
    desc: "Deep knowledge of Dubai's micro-markets, pricing cycles, and emerging opportunities.",
  },
];

const team = [
  {
    name: "Mansoor Al Rashidi",
    role: "Founder & Managing Director",
    bio: "15+ years shaping Dubai's luxury property landscape with vision and precision.",
    img: "/images/agent.jpg",
  },
  {
    name: "Sarah Al Hashimi",
    role: "Head of Sales",
    bio: "Specialist in Downtown and DIFC premium residential transactions.",
    img: "/images/agent.jpg",
  },
  {
    name: "James Whitfield",
    role: "Senior Investment Advisor",
    bio: "Guiding international investors into Dubai's most lucrative opportunities.",
    img: "/images/agent.jpg",
  },
];

function CountUp({ target, duration = 1800 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
          const suffix = target.replace(/[0-9.]/g, "");
          const steps = 60;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numeric * 10) / 10;
            setDisplay(current % 1 === 0 ? current.toFixed(0) + suffix : current.toFixed(1) + suffix);
            if (step >= steps) {
              clearInterval(interval);
              setDisplay(target);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{display}</span>;
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        {/* Subtle diagonal accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
          }}
        />

        {/* Content — full width, generous padding */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24"
          style={{ minHeight: "100vh" }}>
          <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Dream Heaven Realty
          </span>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Than Brokers.{" "}
            <em className="not-italic text-amber-400">Partners</em>{" "}
            in Your Future.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Since 2009, Dream Heaven Realty has connected visionary buyers, investors, and agents
            with Dubai's finest properties — with speed, clarity, and unmatched market depth.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mt-10 text-gray-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">About Us</span>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
            <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-white/40 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-white"
                style={{
                  height: "40%",
                  animation: "scrollCue 1.6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollCue {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>

      {/* ─── WHO WE ARE ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with blob + floating badge */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  width: "500px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src="/images/h2.webp"
                  alt="DHR Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-5 text-center">
                <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  15+
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years in Dubai</div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-emerald-200 opacity-50 pointer-events-none" />
            </div>

            {/* Text content */}
            <div>
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
                Who We Are
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dubai Real Estate.{" "}
                <span className="text-emerald-600">Faster Deals.</span>{" "}
                Smarter Returns.
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Dream Heaven Realty (DHR) is a Dubai-based brokerage specializing in Downtown,
                Business Bay, DIFC, Marina, and Burj Khalifa view properties. We combine deep
                market intelligence, strong developer relations, and transparent processes to help
                buyers, investors, and agents move confidently and profitably.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Our team speaks your language — whether you're a first-time buyer, a seasoned investor
                diversifying across borders, or an agent seeking a reliable partner on the ground.
                We don't just list properties; we craft strategies that work.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/buy"
                  className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors shadow-md"
                >
                  Explore Properties
                </a>
                <a
                  href="/contact-us"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  className="text-4xl md:text-5xl font-bold text-amber-400"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <CountUp target={s.value} />
                </div>
                <div className="mt-2 text-sm text-gray-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              Our Journey
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built on Trust, Driven by Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2009",
                title: "Founded",
                desc: "DHR was established with a singular mission: bring transparency and speed to Dubai's fast-moving real estate market.",
              },
              {
                year: "2015",
                title: "Expansion",
                desc: "We expanded into off-plan investments and developer partnerships, giving clients exclusive early access to premium launches.",
              },
              {
                year: "2024",
                title: "Today",
                desc: "With over AED 2 billion in transactions and 1,200+ properties sold, DHR stands as one of Dubai's most trusted boutique brokerages.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="text-5xl font-bold text-gray-100 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY UAE / SERVICES DARK SECTION ────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">
              Why Dubai
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why the UAE is Becoming a{" "}
              <em className="not-italic text-amber-400">Global Wealth Magnet</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Family, Infrastructure & Long-Term Vision",
                desc: "The UAE supports family-owned businesses, prioritizes generational prosperity, and invests heavily in infrastructure — positioning itself for sustainable, multi-decade growth.",
              },
              {
                title: "Regulated & Digitally Advanced Market",
                desc: "Mature RERA regulations, digital registration systems, and strong investor protection make Dubai one of the world's safest markets for cross-border property ownership.",
              },
              {
                title: "Competitive Value in Global Terms",
                desc: "$1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft. in London or 172 sq.ft. in Monaco — making it the world's best luxury real estate value proposition.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <h3
                  className="text-white font-bold text-sm uppercase tracking-widest mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              What We Stand For
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET THE TEAM ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              The People Behind DHR
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Experienced advisors who know Dubai's market inside out — and are fully committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="w-8 h-px bg-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 text-sm font-semibold mt-1 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">
            Start Your Journey
          </span>
          <h2
            className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Find Your Next Address in Dubai?
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Share your preferences and receive a hand-picked shortlist of properties within 24 hours,
            curated by our senior advisors.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-block rounded-full bg-emerald-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition-colors"
            >
              Get a Personalized Shortlist
            </a>
            <a
              href="/agents"
              className="inline-block rounded-full border border-gray-600 px-10 py-4 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              Meet Our Agents
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}