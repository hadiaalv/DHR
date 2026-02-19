"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";
import {
  ScrollReveal,
  RevealText,
  Tilt3DCard,
  MagneticButton,
  AnimatedCounter,
  FloatingParticles,
  ParallaxSection,
} from "./components/MotionComponents";

const EASE = [0.16, 1, 0.3, 1];

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
  { title: "Trusted by Thousands", desc: "Over 1000+ satisfied clients have found their dream properties with us." },
  { title: "Expert Team",          desc: "Our experienced agents provide personalized service and expert guidance." },
  { title: "Best Market Prices",   desc: "Competitive pricing and transparent transactions with no hidden fees." },
];

const stats = [
  { value: "15+",    label: "Years of Excellence" },
  { value: "1200+",  label: "Properties Sold" },
  { value: "AED 2B+",label: "Transaction Volume" },
  { value: "98%",    label: "Client Satisfaction" },
];

export default function Home() {
  const svcRef = useRef(null);
  const { scrollYProgress: svcProgress } = useScroll({ target: svcRef, offset: ["start end", "end start"] });
  const svcY = useTransform(svcProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <HeroSection />

      {/* ── About Us ── */}
      <section id="about" className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image blob with 3D tilt */}
            <ScrollReveal direction="left" className="flex justify-center md:justify-start">
              <Tilt3DCard maxAngle={10} className="relative">
                <div
                  className="relative overflow-hidden shadow-2xl"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                    width: "480px",
                    maxWidth: "100%",
                    aspectRatio: "1 / 1",
                  }}
                >
                  <img
                    src="/images/h2.webp"
                    alt="Dream Heaven Realty"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 60%)" }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                  className="absolute -bottom-4 -right-2 md:bottom-6 md:right-0 bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-4 text-center"
                >
                  <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <AnimatedCounter target="15+" />
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">Years in Dubai</div>
                </motion.div>
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-dashed border-emerald-200 opacity-50 pointer-events-none"
                />
              </Tilt3DCard>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={0.1}>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
              <RevealText
                text="Dubai Real Estate. Faster Deals. Smarter Returns."
                as="h2"
                className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                highlightWords={["Faster", "Smarter"]}
                highlightClass="text-emerald-600"
                delay={0.1}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
                className="mt-5 text-gray-600 text-lg leading-relaxed"
              >
                Dream Heaven Reality (DHR) is a Dubai-based brokerage specializing in Downtown, Business Bay,
                DIFC, Marina, and Burj Khalifa view properties. We combine market intelligence, strong developer
                relations, and transparent processes to help buyers, investors, and agents move confidently and
                profitably.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <MagneticButton href="/buy">
                  <motion.span
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md"
                  >
                    View Properties
                  </motion.span>
                </MagneticButton>
                <MagneticButton href="/earn-with-dhr">
                  <motion.span
                    whileHover={{ scale: 1.04, backgroundColor: "#111827", color: "#fff", borderColor: "#111827" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Join as Agent
                  </motion.span>
                </MagneticButton>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 bg-gray-950 text-white overflow-hidden relative">
        <FloatingParticles count={15} color="rgba(251,191,36,0.08)" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div
                    className="text-4xl md:text-5xl font-bold text-amber-400"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <AnimatedCounter target={s.value} />
                  </div>
                  <div className="mt-2 text-xs text-gray-400 uppercase tracking-widest">{s.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services / Why UAE ── */}
      <section
        ref={svcRef}
        id="services"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Parallax bg */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            y: svcY,
          }}
        />
        <div className="absolute inset-0 bg-black/72" />

        <div className="relative z-10 container mx-auto px-6">
          <ScrollReveal direction="up" className="mb-14 text-center">
            <RevealText
              text="Why the UAE is Becoming a Global Wealth Magnet"
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              highlightWords={["Global", "Wealth", "Magnet"]}
              highlightClass="text-amber-400"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {services.map((card, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                <Tilt3DCard maxAngle={8}>
                  <motion.div
                    whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
                    className="rounded-2xl p-8 text-center flex flex-col h-full"
                    style={{
                      background: "rgba(160,170,190,0.18)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <h3
                      className="text-white font-bold text-sm uppercase tracking-widest mb-6 whitespace-pre-line"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{card.body}</p>
                  </motion.div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text side */}
            <ScrollReveal direction="left">
              <RevealText
                text="Why Choose Dream Heaven Realty?"
                as="h2"
                className="text-4xl font-bold text-gray-900 mb-6"
                highlightWords={["Dream", "Heaven"]}
                highlightClass="text-emerald-600"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-8 text-lg"
              >
                With over 15 years of experience in the real estate industry, we've built a reputation for
                excellence, integrity, and outstanding customer service.
              </motion.p>
              <div className="space-y-6">
                {features.map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl cursor-default"
                      whileHover={{
                        x: 6,
                        backgroundColor: "#f9fafb",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        className="flex-shrink-0 rounded-lg bg-gray-100 p-3"
                        whileHover={{ backgroundColor: "#1f2937", rotate: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Image side */}
            <ScrollReveal direction="right" delay={0.15} className="relative">
              <Tilt3DCard maxAngle={10}>
                <motion.div
                  className="overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/images/hero.jpg"
                    alt="Why Choose Us"
                    className="w-full block"
                    style={{ filter: "grayscale(20%)" }}
                  />
                </motion.div>
              </Tilt3DCard>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.5 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="absolute -bottom-6 -left-6 rounded-xl border border-gray-200 bg-white/90 p-6 text-gray-900 shadow-xl backdrop-blur cursor-default"
              >
                <div className="text-4xl font-bold">
                  <AnimatedCounter target="15+" />
                </div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Properties Preview ── */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-10">
            <RevealText
              text="Featured Properties"
              as="h2"
              className="text-4xl font-bold text-gray-900"
            />
            <p className="mt-3 text-gray-500">Hand-picked gems from our current portfolio</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[0, 1, 2].map((i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                <PropertyCard />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 text-center py-20 overflow-hidden">
        <FloatingParticles count={12} color="rgba(5,150,105,0.08)" />
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="mx-auto max-w-3xl">
            <RevealText
              text="Ready to find your next address in Dubai?"
              as="h2"
              className="text-4xl font-bold md:text-5xl"
              highlightWords={["Dubai?"]}
              highlightClass="text-emerald-600"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 text-lg text-gray-600"
            >
              Share your preferences and receive a hand-picked shortlist of properties within 24 hours,
              curated by our senior advisors.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <MagneticButton href="/contact-us">
                <motion.span
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 28px rgba(5,150,105,0.35)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-block rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20"
                >
                  Get a personalized shortlist
                </motion.span>
              </MagneticButton>
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3, backgroundColor: "#1f2937", color: "#fff", borderColor: "#1f2937" }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-colors"
                >
                  Book a consultation call
                </motion.button>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}