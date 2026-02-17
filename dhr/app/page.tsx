"use client";

import { useRef, useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";

/* ── fires once when element enters viewport ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
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
    direction === "left"  ? "translateX(-52px) translateY(12px)" :
    direction === "right" ? "translateX(52px)  translateY(12px)" :
                            "translateY(36px)";
  return {
    opacity:   visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : hidden,
    transition: `opacity 0.72s ${EASE} ${delay}ms, transform 0.72s ${EASE} ${delay}ms`,
  };
}

export default function Home() {
  const { ref: aboutImgRef,  visible: aboutImgV  } = useInView();
  const { ref: aboutTextRef, visible: aboutTextV } = useInView();
  const { ref: svcHeadRef,   visible: svcHeadV   } = useInView(0.2);
  const { ref: card0Ref, visible: card0V } = useInView(0.15);
  const { ref: card1Ref, visible: card1V } = useInView(0.15);
  const { ref: card2Ref, visible: card2V } = useInView(0.15);
  const { ref: whyTextRef, visible: whyTextV } = useInView();
  const { ref: row0Ref, visible: row0V } = useInView(0.1);
  const { ref: row1Ref, visible: row1V } = useInView(0.1);
  const { ref: row2Ref, visible: row2V } = useInView(0.1);
  const { ref: whyImgRef, visible: whyImgV } = useInView();
  const { ref: ctaRef,    visible: ctaV    } = useInView(0.15);

  const cardRefs     = [card0Ref, card1Ref, card2Ref];
  const cardVisibles = [card0V,   card1V,   card2V];
  const rowRefs      = [row0Ref,  row1Ref,  row2Ref];
  const rowVisibles  = [row0V,    row1V,    row2V];

  const services = [
    {
      title: "Family, Infrastructure,\nand Long-Term Vision",
      body: "The UAE supports family-owned businesses, prioritizes generational prosperity, and invests heavily in infrastructure, positioning itself for sustainable growth.",
    },
    {
      title: "Regulated and Digitally\nAdvanced Market",
      body: "The UAE real estate market benefits from mature regulations, digital registration, and investor protection.",
    },
    {
      title: "Competitive Value in\nGlobal Terms",
      body: "$1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft. in London or 172 sq.ft. in Monaco.",
    },
  ];

  const features = [
    { title: "Trusted by Thousands", desc: "Over 1000+ satisfied clients have found their dream properties with us" },
    { title: "Expert Team",          desc: "Our experienced agents provide personalized service and expert guidance" },
    { title: "Best Market Prices",   desc: "Competitive pricing and transparent transactions with no hidden fees" },
  ];

  return (
    <>
      <HeroSection />

      {/* ── About Us ── */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div ref={aboutImgRef} style={slideStyle(aboutImgV, "left")} className="flex justify-center md:justify-start">
              <div
                className="blob-wrap relative overflow-hidden"
                style={{ width: "480px", maxWidth: "100%", aspectRatio: "1 / 1", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              >
                <img src="/images/h2.webp" alt="Dream Heaven Realty" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            <div ref={aboutTextRef} style={slideStyle(aboutTextV, "right", 100)} className="flex flex-col justify-center">
              <span className="amber-tag text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3 cursor-default">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                <span className="heading-underline">Dubai Real Estate.</span>{" "}Faster Deals.{" "}
                <span className="heading-underline">Smarter Returns.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dream Heaven Reality (DHR) is a Dubai-based brokerage specializing in Downtown, Business Bay, DIFC,
                Marina, and Burj Khalifa view properties. We combine market intelligence, strong developer relations,
                and transparent processes to help buyers, investors, and agents move confidently and profitably.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/buy" className="about-btn-dark inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md">View Properties</a>
                <a href="/earn-with-dhr" className="about-btn-outline inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold">Join as Agent</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="services-overlay absolute inset-0" style={{ background: "rgba(5, 10, 25, 0.72)" }} />

        <div className="relative z-10 container mx-auto px-6">

          <div ref={svcHeadRef} style={slideStyle(svcHeadV, "up")}>
            <h2 className="services-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white text-center mb-14 cursor-default" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why the UAE is Becoming a Global Wealth Magnet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {services.map((card, i) => (
              <div
                key={i}
                ref={cardRefs[i]}
                style={{
                  ...slideStyle(cardVisibles[i], "up", i * 120),
                  background: "rgba(160, 170, 190, 0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
                className="glass-card rounded-2xl p-8 text-center flex flex-col"
              >
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif", whiteSpace: "pre-line" }}>
                  {card.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div ref={whyTextRef} style={slideStyle(whyTextV, "left")}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="heading-underline">Why Choose Dream Heaven Realty?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                With over 15 years of experience in the real estate industry, we've built a reputation for excellence,
                integrity, and outstanding customer service.
              </p>
              <div className="space-y-6">
                {features.map((item, i) => (
                  <div key={i} ref={rowRefs[i]} style={slideStyle(rowVisibles[i], "up", i * 100)} className="feature-row flex items-start">
                    <div className="feature-icon-wrap bg-gray-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={whyImgRef} style={slideStyle(whyImgV, "right", 150)} className="relative">
              <div className="why-img-wrap rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hero.jpg" alt="Why Choose Us" className="rounded-2xl w-full block grayscale" />
              </div>
              <div className="years-badge absolute -bottom-6 -left-6 rounded-xl border border-gray-200 bg-white/90 p-6 text-gray-900 shadow-xl backdrop-blur cursor-default">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-linear-to-b from-white to-gray-50 text-gray-900 text-center py-16">
        <div className="container mx-auto px-6">
          <div ref={ctaRef} style={slideStyle(ctaV, "up")} className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to find your next address in{" "}
              <span className="heading-underline">Dubai?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600" style={{ opacity: ctaV ? 1 : 0, transform: ctaV ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.65s ${EASE} 180ms, transform 0.65s ${EASE} 180ms` }}>
              Share your preferences and receive a hand-picked shortlist of properties within 24 hours,
              curated by our senior advisors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ opacity: ctaV ? 1 : 0, transform: ctaV ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.65s ${EASE} 300ms, transform 0.65s ${EASE} 300ms` }}>
              <button className="btn-primary rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
                Get a personalized shortlist
              </button>
              <button className="btn-outline rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900">
                Book a consultation call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}