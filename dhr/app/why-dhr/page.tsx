"use client";

import { useRef, useState, useEffect } from "react";

/* ── fires once when element enters viewport ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const EASE = "cubic-bezier(.22,1,.36,1)";

function slideStyle(
  visible: boolean,
  direction: "left" | "right" | "up",
  delay = 0
): React.CSSProperties {
  const hidden =
    direction === "left"
      ? "translateX(-52px) translateY(12px)"
      : direction === "right"
      ? "translateX(52px) translateY(12px)"
      : "translateY(36px)";
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : hidden,
    transition: `opacity 0.72s ${EASE} ${delay}ms, transform 0.72s ${EASE} ${delay}ms`,
  };
}

/* ── CountUp component ── */
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
            setDisplay(
              current % 1 === 0
                ? current.toFixed(0) + suffix
                : current.toFixed(1) + suffix
            );
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

/* ── Animated Hero heading ── */
function AnimatedHeroText() {
  const words = ["Why", "Dream", "Heaven", "Realty?"];
  return (
    <h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-6xl text-center"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: i < words.length - 1 ? "0.3em" : 0,
            opacity: 0,
            animation: `heroWordIn 0.65s cubic-bezier(.22,1,.36,1) ${i * 130 + 200}ms forwards`,
          }}
        >
          {word === "Heaven" ? (
            <em className="not-italic text-amber-400">{word}</em>
          ) : (
            word
          )}
        </span>
      ))}
    </h1>
  );
}

/* ── Data ── */
const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1,200+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "AED 2B+", label: "Transaction Volume" },
];

const differentiators = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Speed Without Compromise",
    body: "We move fast — from first inquiry to signed contract — without cutting corners on due diligence. Our streamlined process means you never miss a window in Dubai's fast-moving market.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Radical Transparency",
    body: "No hidden fees, no inflated valuations, no pressure tactics. Every number we present is backed by market data. You make decisions with full clarity, not wishful thinking.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Deep Market Intelligence",
    body: "15+ years of micro-market knowledge across Downtown, Business Bay, DIFC, and Marina. We know where the value is before it becomes obvious — and we share that edge with you.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Client-First Always",
    body: "Your goals shape everything we do. We listen deeply, advise honestly, and act decisively on your behalf. Our success is measured only by yours — not by the number of transactions we close.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start by understanding your goals, timeline, budget, and preferences in a focused 30-minute consultation.",
  },
  {
    step: "02",
    title: "Curated Shortlist",
    desc: "Within 24 hours, you receive a hand-picked selection of properties that match your exact criteria — no spam listings.",
  },
  {
    step: "03",
    title: "Private Viewings",
    desc: "We arrange exclusive tours at your convenience, with our advisor present to answer every question on-site.",
  },
  {
    step: "04",
    title: "Deal & Handover",
    desc: "From offer to title deed, we handle every detail — legal, financial, and logistical — so you can focus on what matters.",
  },
];

const testimonials = [
  {
    name: "Alexander V.",
    location: "London → Dubai Marina",
    quote:
      "DHR made my first UAE investment entirely stress-free. They found me a Marina apartment with 6.4% ROI in under a week. Absolutely unmatched.",
    rating: 5,
  },
  {
    name: "Priya M.",
    location: "Singapore → Downtown Dubai",
    quote:
      "I had approached three other brokerages before DHR. The difference in transparency and knowledge was night and day. I closed on a Burj Khalifa view unit confidently.",
    rating: 5,
  },
  {
    name: "Omar R.",
    location: "Saudi Arabia → Business Bay",
    quote:
      "The team speaks your language — literally and figuratively. No pressure, just results. I've now done three transactions through DHR.",
    rating: 5,
  },
];

const whyPoints = [
  {
    title: "Boutique Focus",
    desc: "We're selective. By staying boutique, every client gets a senior advisor — not a junior trainee.",
  },
  {
    title: "Developer Access",
    desc: "Direct relationships with top developers mean you get pre-launch pricing and off-market inventory.",
  },
  {
    title: "Global Network",
    desc: "Our referral network spans 40+ countries, connecting you with buyers, investors, and co-brokers worldwide.",
  },
];

export default function WhyDHRPage() {
  /* InView refs */
  const { ref: subtitleRef, visible: subtitleVisible } = useInView(0.1);
  const { ref: breadcrumbRef, visible: breadcrumbVisible } = useInView(0.1);
  const { ref: introImgRef, visible: introImgV } = useInView();
  const { ref: introTextRef, visible: introTextV } = useInView();
  const { ref: diffHeadRef, visible: diffHeadV } = useInView(0.15);
  const { ref: diff0Ref, visible: diff0V } = useInView(0.1);
  const { ref: diff1Ref, visible: diff1V } = useInView(0.1);
  const { ref: diff2Ref, visible: diff2V } = useInView(0.1);
  const { ref: diff3Ref, visible: diff3V } = useInView(0.1);
  const { ref: processHeadRef, visible: processHeadV } = useInView(0.15);
  const { ref: proc0Ref, visible: proc0V } = useInView(0.1);
  const { ref: proc1Ref, visible: proc1V } = useInView(0.1);
  const { ref: proc2Ref, visible: proc2V } = useInView(0.1);
  const { ref: proc3Ref, visible: proc3V } = useInView(0.1);
  const { ref: statsRef, visible: statsV } = useInView(0.2);
  const { ref: testimonialsHeadRef, visible: testimonialsHeadV } = useInView(0.15);
  const { ref: test0Ref, visible: test0V } = useInView(0.1);
  const { ref: test1Ref, visible: test1V } = useInView(0.1);
  const { ref: test2Ref, visible: test2V } = useInView(0.1);
  const { ref: whyPointsRef, visible: whyPointsV } = useInView(0.1);
  const { ref: ctaRef, visible: ctaV } = useInView(0.15);

  const diffRefs = [diff0Ref, diff1Ref, diff2Ref, diff3Ref];
  const diffVisibles = [diff0V, diff1V, diff2V, diff3V];
  const procRefs = [proc0Ref, proc1Ref, proc2Ref, proc3Ref];
  const procVisibles = [proc0V, proc1V, proc2V, proc3V];
  const testRefs = [test0Ref, test1Ref, test2Ref];
  const testVisibles = [test0V, test1V, test2V];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollCue {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105 transform-gpu"
        >
          <source src="/videos/horizontal/Al Habtoor 3.mp4" type="video/mp4" />
        </video>

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

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24"
          style={{ minHeight: "100vh" }}
        >
          <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Dream Heaven Realty
          </span>

          <AnimatedHeroText />

          <p
            ref={subtitleRef}
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 0.65s ${EASE} 0.7s, transform 0.65s ${EASE} 0.7s`,
            }}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            We don't just list properties — we build partnerships. Discover what makes DHR the most trusted boutique brokerage in Dubai.
          </p>

          {/* Breadcrumb */}
          <div
            ref={breadcrumbRef}
            style={{
              opacity: breadcrumbVisible ? 1 : 0,
              transform: breadcrumbVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.55s ease 0.9s, transform 0.55s ease 0.9s`,
            }}
            className="flex items-center gap-2 mt-10 text-gray-400 text-sm"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">Why DHR</span>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
            <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-white/40 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-white"
                style={{ height: "40%", animation: "scrollCue 1.6s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO / WHO WE ARE ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image blob */}
            <div ref={introImgRef} style={slideStyle(introImgV, "left")} className="relative flex justify-center lg:justify-start">
              <div
                className="blob-wrap relative overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  width: "500px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src="/images/w1.webp"
                  alt="DHR Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              {/* <div className="years-badge absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-5 text-center">
                <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>15+</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years in Dubai</div>
              </div> */}
              {/* Decorative circle */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-emerald-200 opacity-50 pointer-events-none" />
            </div>

            {/* Text */}
            <div ref={introTextRef} style={slideStyle(introTextV, "right", 100)}>
              <span className="amber-tag text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
                The DHR Difference
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dubai Is {" "}
                <span className="text-emerald-600">Built for Everyone.</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
Dubai is one of the world’s most attractive real estate markets – a city engineered for growth, safety, global connectivity, and strong investor protection. It consistently ranks among the safest major cities globally, supported by exceptional healthcare, education, and infrastructure.

The city has established itself as a global business hub where a large number of Fortune 500 companies choose to set up their regional headquarters. This international corporate presence fuels economic expansion, rental demand, and long-term employment opportunities — all of which strengthen the property market.

From a value perspective, Dubai’s luxury real estate offers far better affordability compared to cities like London, New York, Singapore, or Monaco. For the same investment amount, buyers can secure significantly more space in premium locations, making Dubai one of the most compelling luxury property markets in the world.

It’s no surprise that Dubai and the UAE have become the top destinations for global wealth migration. Investors, entrepreneurs, and high-net-worth individuals are choosing the city for its tax-free income, exceptional lifestyle, world-class infrastructure, and straightforward residency options linked to property ownership.              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Our team combines deep local knowledge with a genuinely international perspective — serving buyers from 40+ countries who trust us to guide their most significant financial decisions. No pressure. No noise. Just results.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="about-btn-dark inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md"
                >
                  Learn More
                </a>
                {/* <a
                  href="/buy"
                  className="about-btn-outline inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold"
                >
                  Explore Properties
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS (4 CARDS) ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={diffHeadRef} style={slideStyle(diffHeadV, "up")} className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              What Sets Us Apart
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built Different. By Design.
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              These aren't just values on a wall — they're the operating principles every advisor at DHR is held to, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={i}
                ref={diffRefs[i]}
                style={slideStyle(diffVisibles[i], "up", i * 100)}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 transition-colors">
                  {d.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div ref={statsRef} className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  opacity: statsV ? 1 : 0,
                  transform: statsV ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.65s ${EASE} ${i * 100}ms, transform 0.65s ${EASE} ${i * 100}ms`,
                }}
              >
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

      {/* ─── OUR PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={processHeadRef} style={slideStyle(processHeadV, "up")} className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              How We Work
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Hello to Keys in Hand
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              A simple, proven process — designed to remove friction and give you complete confidence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                ref={procRefs[i]}
                style={slideStyle(procVisibles[i], "up", i * 100)}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group"
              >
                {/* Step number */}
                <div
                  className="text-5xl font-bold text-gray-100 group-hover:text-emerald-100 mb-4 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.step}
                </div>
                {/* Accent line */}
                <div className="w-8 h-px bg-emerald-500 mb-4 group-hover:w-14 transition-all duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BOUTIQUE DARK SECTION ───────────────────────────── */}
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
              The Boutique Advantage
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Small by Choice.{" "}
              <em className="not-italic text-amber-400">Exceptional by Result.</em>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
              We deliberately limit our client roster so every relationship gets the attention it deserves.
            </p>
          </div>

          <div ref={whyPointsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPoints.map((w, i) => (
              <div
                key={i}
                style={{
                  opacity: whyPointsV ? 1 : 0,
                  transform: whyPointsV ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.65s ${EASE} ${i * 120}ms, transform 0.65s ${EASE} ${i * 120}ms`,
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                className="rounded-2xl p-8"
              >
                <h3
                  className="text-white font-bold text-sm uppercase tracking-widest mb-5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {w.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={testimonialsHeadRef} style={slideStyle(testimonialsHeadV, "up")} className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              Client Stories
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={testRefs[i]}
                style={slideStyle(testVisibles[i], "up", i * 120)}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, s) => (
                    <span key={s} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                {/* Quote mark */}
                <div className="text-5xl text-emerald-100 font-bold leading-none mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                {/* Author */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="w-6 h-px bg-emerald-500 mb-3" />
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div ref={ctaRef} className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div style={slideStyle(ctaV, "up")}>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">
              Ready to Start?
            </span>
            <h2
              className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience the DHR Difference{" "}
              <em className="not-italic text-amber-400">for Yourself.</em>
            </h2>
          </div>
          <p
            style={{
              opacity: ctaV ? 1 : 0,
              transform: ctaV ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.65s ${EASE} 180ms, transform 0.65s ${EASE} 180ms`,
            }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Share your goals and receive a hand-picked shortlist of properties within 24 hours, curated by our senior advisors — with zero obligation.
          </p>
          <div
            style={{
              opacity: ctaV ? 1 : 0,
              transform: ctaV ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.65s ${EASE} 300ms, transform 0.65s ${EASE} 300ms`,
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact-us"
              className="btn-primary inline-block rounded-full bg-emerald-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition-colors"
            >
              Get a Personalized Shortlist
            </a>
            <a
              href="/about-us"
              className="inline-block rounded-full border border-gray-600 px-10 py-4 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}