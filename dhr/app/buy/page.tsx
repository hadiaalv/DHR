"use client";

import { useRef, useState, useEffect } from "react";

/* ─── CATEGORY CARD ─────────────────────────────────────────────── */
function CategoryCard({
  title,
  image,
  visible,
  delay,
}: {
  title: string;
  image: string;
  visible: boolean;
  delay: number;
}) {
  const EASE = "cubic-bezier(.22,1,.36,1)";
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ${EASE} ${delay}ms, transform 0.65s ${EASE} ${delay}ms`,
      }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden mx-3 mt-3 rounded-xl" style={{ aspectRatio: "4 / 3" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-4 py-4 text-center">
          <h3 className="text-base font-bold text-gray-900 leading-snug">{title}</h3>
        </div>
      </div>
    </div>
  );
}

/* ─── CAROUSEL ──────────────────────────────────────────────────── */
function CategoryCarousel({
  items,
  visible,
}: {
  items: { title: string; image: string }[];
  visible: boolean;
}) {
  const [pageIndex, setPageIndex] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(items.length / perPage);
  const visibleItems = items.slice(pageIndex * perPage, pageIndex * perPage + perPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, i) => (
          <CategoryCard
            key={`${pageIndex}-${i}`}
            title={item.title}
            image={item.image}
            visible={visible}
            delay={i * 100}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === pageIndex ? "bg-gray-800 w-6" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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

/* ── Hero heading animated word by word ── */
function AnimatedHeroText() {
  const words = ["Dubai's", "Finest", "Properties", "for", "Sale"];

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
          {word === "Finest" ? (
            <em className="not-italic text-amber-400">{word}</em>
          ) : (
            word
          )}
        </span>
      ))}
    </h1>
  );
}

/* ─── DATA ─────────────────────────────────────────────────────── */
const readyCategories = [
  { title: "Serviced Apartments",                        image: "/images/blog1.png" },
  { title: "Branded Residences (Address, Vida, Armani)", image: "/images/blog2.png" },
  { title: "Apartments",                                 image: "/images/h2.webp"   },
  { title: "Penthouses",                                 image: "/images/w1.webp"   },
  { title: "Villas",                                     image: "/images/w2.webp"   },
  { title: "Townhouses",                                 image: "/images/hero.jpg"  },
];

const offPlanCategories = [
  { title: "Townhouses & villas",        image: "/images/w2.webp"  },
  { title: "Waterfront Communities",     image: "/images/blog2.png"},
  { title: "Branded Residences",         image: "/images/blog1.png"},
  { title: "Apartments",                 image: "/images/h2.webp"  },
  { title: "Golf & Leisure Communities", image: "/images/hero.jpg" },
];

const whyInvestPoints = [
  {
    title: "Robust Growth & ROI:",
    body: "Property demand in Dubai continues to rise, fueled by international investors and long-term residents. Investors are drawn by strong rental yields and potential price appreciation over time. Many neighborhoods offer rental returns averaging 6-7% or higher, outperforming other global cities, which means you can earn solid income on investment properties while your asset value grows.",
  },
  {
    title: "World-Class Lifestyle:",
    body: "Dubai offers a blend of modern city living and family-friendly amenities. Residents enjoy world-class shopping, dining, beaches, and entertainment at their doorstep, making Dubai not just a sound investment location but also a great place to call home.",
  },
  {
    title: "Investor-Friendly Policies:",
    body: "The government supports real estate growth through initiatives like the Golden Visa for property investors, no property taxes, and transparent regulations. Foreign buyers can own freehold property in designated areas with full ownership rights.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function BuyPage() {
  const { ref: subtitleRef, visible: subtitleVisible } = useInView(0.1);
  const { ref: breadcrumbRef, visible: breadcrumbVisible } = useInView(0.1);
  const { ref: dreamHeadRef, visible: dreamHeadV } = useInView(0.12);
  const { ref: readyHeadRef, visible: readyHeadV } = useInView(0.12);
  const { ref: readyGridRef, visible: readyGridV } = useInView(0.12);
  const { ref: offPlanHeadRef, visible: offPlanHeadV } = useInView(0.12);
  const { ref: offPlanGridRef, visible: offPlanGridV } = useInView(0.12);
  const { ref: buyImgRef, visible: buyImgV } = useInView(0.12);
  const { ref: buyTextRef, visible: buyTextV } = useInView(0.12);
  const { ref: whyHeadRef, visible: whyHeadV } = useInView(0.12);
  const { ref: stepsHeadRef, visible: stepsHeadV } = useInView(0.12);
  const { ref: ctaRef, visible: ctaV } = useInView(0.12);

  // NEW refs for Why Invest section
  const { ref: whyInvestTextRef, visible: whyInvestTextV } = useInView(0.1);
  const { ref: whyInvestImgRef,  visible: whyInvestImgV  } = useInView(0.1);

  const whyBuyPoints: any[] = [];

  const steps = [
    { num: "01", title: "Share Your Goals",       desc: "Tell us your budget, preferred community, and investment objective — in just one call." },
    { num: "02", title: "Receive Your Shortlist", desc: "Within 24 hours, get a curated selection of properties that match your exact criteria." },
    { num: "03", title: "Private Viewings",       desc: "Tour properties at your pace with a dedicated DHR advisor present at every step." },
    { num: "04", title: "Close with Confidence",  desc: "From offer to title deed, we handle all legal, financial, and logistical details." },
  ];

  const { ref: step0Ref, visible: step0V } = useInView(0.1);
  const { ref: step1Ref, visible: step1V } = useInView(0.1);
  const { ref: step2Ref, visible: step2V } = useInView(0.1);
  const { ref: step3Ref, visible: step3V } = useInView(0.1);
  const stepRefs     = [step0Ref, step1Ref, step2Ref, step3Ref];
  const stepVisibles = [step0V,   step1V,   step2V,   step3V];

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

        /* step card */
        .step-card {
          position: relative;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2.5rem 1.75rem 2rem;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.4s ease,
                      border-color 0.35s ease;
        }
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #064e3b 0%, #065f46 55%, #047857 100%);
          transform: scaleY(0);
          transform-origin: bottom left;
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
          z-index: 0;
        }
        .step-card:hover::before { transform: scaleY(1); }
        .step-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 24px 50px rgba(4,120,87,0.2);
          border-color: #047857;
        }
        .step-card > * { position: relative; z-index: 1; }
        .step-card:hover .step-num   { color: rgba(255,255,255,0.15); }
        .step-card:hover .step-title { color: white; }
        .step-card:hover .step-desc  { color: rgba(255,255,255,0.8); }
        .step-card:hover .step-accent { background: rgba(255,255,255,0.35); width: 3.5rem; }
        .step-accent { transition: background 0.3s ease, width 0.3s ease; }

        /* btn shine */
        .btn-shine {
          position: relative; overflow: hidden;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease;
        }
        .btn-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s ease;
        }
        .btn-shine:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .btn-shine:hover::after { transform: translateX(100%); }
        .btn-shine:active { transform: scale(0.97); }

        /* img hover */
        .section-img {
          transition: transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease;
        }
        .section-img:hover { transform: scale(1.02) rotate(-0.4deg); box-shadow: 0 32px 64px rgba(0,0,0,0.18); }

        /* why invest bullet row */
        .why-row { transition: transform 0.25s ease; }
        .why-row:hover { transform: translateX(4px); }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/horizontal/Al Habtoor 5.mp4" type="video/mp4" />
        </video>

        {/* ❌ Removed all overlays */}

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24"
          style={{ minHeight: "100vh" }}
        >
          <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Dream Heaven Reality LLC
          </span>

          <AnimatedHeroText />

          {/* subtitle commented out as in original */}
          {/* <p ref={subtitleRef} ... /> */}

          <div
            ref={breadcrumbRef}
            style={{
              opacity: breadcrumbVisible ? 1 : 0,
              transform: breadcrumbVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.55s ease 0.9s, transform 0.55s ease 0.9s`,
            }}
            className="flex items-center gap-2 mt-10 text-white text-sm"
          >
            <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
            <span>›</span>
            <span className="text-amber-400">Buy</span>
          </div>
        </div>
      </section>

      {/* ─── FIND YOUR DREAM PROPERTY INTRO ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div
            ref={dreamHeadRef}
            style={slideStyle(dreamHeadV, "up")}
            className="text-center max-w-4xl mx-auto"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Your Dream Property in Dubai
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Discover premium ready and off-plan properties across Dubai's most sought-after communities.
              Whether you're looking for a high-ROI investment or a home in a prime location, DHR helps you
              purchase with confidence, transparency, and speed.
            </p>
          </div>
        </div>
      </section>

      {/* ─── READY PROPERTIES ────────────────────────────────────── */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={readyHeadRef} style={slideStyle(readyHeadV, "up")} className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready Properties
            </h2>
          </div>
          <div ref={readyGridRef}>
            <CategoryCarousel items={readyCategories} visible={readyGridV} />
          </div>
        </div>
      </section>

      {/* ─── OFF-PLAN PROPERTIES ─────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={offPlanHeadRef} style={slideStyle(offPlanHeadV, "up")} className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Off-Plan Properties
            </h2>
          </div>
          <div ref={offPlanGridRef}>
            <CategoryCarousel items={offPlanCategories} visible={offPlanGridV} />
          </div>
        </div>
      </section>

      {/* ─── WHY INVEST OR BUY IN DUBAI ──────────────────────────── */}
      {/* NEW — text left with amber bullets, rounded image right */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: heading + bullet points */}
            <div ref={whyInvestTextRef} style={slideStyle(whyInvestTextV, "left")}>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Invest or Buy in Dubai?
              </h2>

              <div className="space-y-7">
                {whyInvestPoints.map((item, i) => (
                  <div
                    key={i}
                    className="why-row flex gap-4"
                    style={{
                      opacity: whyInvestTextV ? 1 : 0,
                      transform: whyInvestTextV ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ${EASE} ${i * 120 + 200}ms, transform 0.6s ${EASE} ${i * 120 + 200}ms`,
                    }}
                  >
                    {/* Amber filled bullet with white dot — matching screenshot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">
                      <strong className="text-gray-900">{item.title}</strong>{" "}{item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/contact-us"
                  className="btn-shine inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: image with large rounded corner bottom-left cut — matching screenshot 2 */}
            <div
              ref={whyInvestImgRef}
              style={slideStyle(whyInvestImgV, "right", 120)}
              className="flex justify-center lg:justify-end"
            >
              <div
                className="section-img overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "2rem 2rem 2rem 0",
                  width: "520px",
                  maxWidth: "100%",
                  aspectRatio: "4 / 3.2",
                }}
              >
                <img
                  src="/images/h2.webp"
                  alt="Dubai Villa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BUY PROPERTY IN DUBAI ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div ref={buyImgRef} style={slideStyle(buyImgV, "left")} className="flex justify-center">
              <div
                className="section-img relative overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  width: "500px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src="/images/buy1.webp"
                  alt="Buy Property in Dubai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div ref={buyTextRef} style={slideStyle(buyTextV, "right", 100)}>
              <span className="amber-tag text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
                Why Dubai
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Buy Property in Dubai
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Buying property in <strong>Dubai</strong> opens the door to a thriving real estate market that
                benefits both investors and families. Dubai has become one of the world's most attractive
                property markets, <em>offering strong rental yields, high capital appreciation, and a lifestyle
                that blends luxury with modern convenience.</em>
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                The emirate's <strong>tax-free environment</strong>, excellent infrastructure, and pro-investment
                government initiatives (such as long-term residency visas and freehold ownership for foreigners)
                further cement its appeal.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Whether you're an <strong>investor</strong> seeking lucrative returns or an <strong>end-user</strong> searching
                for a dream home, Dubai's dynamic property market has something to offer everyone.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="btn-shine inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md"
                >
                  Learn More
                </a>
                <a
                  href="/contact-us"
                  className="btn-shine inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY BUY WITH DHR ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={whyHeadRef} style={slideStyle(whyHeadV, "up")} className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              Investment Advantages
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Buy Property in Dubai?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Dubai consistently ranks as one of the world's top destinations for real estate investment — and for good reason.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBuyPoints.map((w: any, i: number) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div ref={stepsHeadRef} style={slideStyle(stepsHeadV, "up")} className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">
              The Process
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How to Buy with DHR
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              A simple, proven process designed to give you complete confidence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                ref={stepRefs[i]}
                style={slideStyle(stepVisibles[i], "up", i * 110)}
                className="step-card"
              >
                <div className="step-num text-5xl font-bold text-gray-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.num}
                </div>
                <div className="step-accent w-8 h-px bg-emerald-500 mb-4" />
                <h3 className="step-title text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="step-desc text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK BAND: WHY UAE ───────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">Market Advantage</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dubai vs. The World
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">See why savvy investors are choosing Dubai over other global markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Best Value in Luxury Real Estate", desc: "$1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft. in London or just 172 sq.ft. in Monaco. Premium living for a fraction of the price." },
              { title: "World-Class Regulation",           desc: "RERA's strict escrow requirements, digital title deeds, and transparent developer guidelines make Dubai one of the safest markets for international buyers." },
              { title: "Global Connectivity & Lifestyle",  desc: "Dubai is a 4-hour flight from 2.5 billion people, ranks among the world's top 10 safest cities, and offers an unmatched lifestyle blending East and West." },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div ref={ctaRef} className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div style={slideStyle(ctaV, "up")}>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">Start Your Journey</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Find Your Next Address{" "}
              <em className="not-italic text-amber-400">in Dubai?</em>
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
            Share your preferences and receive a hand-picked shortlist of properties within 24 hours,
            curated by our senior advisors.
          </p>
          <div
            style={{
              opacity: ctaV ? 1 : 0,
              transform: ctaV ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.65s ${EASE} 300ms, transform 0.65s ${EASE} 300ms`,
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact-us" className="btn-shine inline-block rounded-full bg-emerald-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition-colors">
              Get a Personalized Shortlist
            </a>
            <a href="/agents" className="inline-block rounded-full border border-gray-600 px-10 py-4 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors">
              Meet Our Agents
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}