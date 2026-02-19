"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  ScrollReveal,
  RevealText,
  Tilt3DCard,
  MagneticButton,
  AnimatedCounter,
  FloatingParticles,
} from "../components/MotionComponents";

const stats = [
  { value: "15+",     label: "Years of Excellence" },
  { value: "1,200+",  label: "Properties Sold" },
  { value: "AED 2B+", label: "Transaction Volume" },
  { value: "98%",     label: "Client Satisfaction" },
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
  { name: "Mansoor Al Rashidi", role: "Founder & Managing Director", bio: "15+ years shaping Dubai's luxury property landscape with vision and precision.", img: "/images/agent.jpg" },
  { name: "Sarah Al Hashimi",   role: "Head of Sales",                bio: "Specialist in Downtown and DIFC premium residential transactions.",             img: "/images/agent.jpg" },
  { name: "James Whitfield",    role: "Senior Investment Advisor",     bio: "Guiding international investors into Dubai's most lucrative opportunities.",    img: "/images/agent.jpg" },
];

const EASE = [0.16, 1, 0.3, 1];

export default function AboutUsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ─── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            scale: heroScale,
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Diagonal lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <FloatingParticles count={20} color="rgba(251,191,36,0.15)" />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24"
          style={{ opacity: heroOpacity, minHeight: "100vh" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Dream Heaven Realty
          </motion.span>

          <RevealText
            text="More Than Brokers. Partners in Your Future."
            as="h1"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-6xl"
            highlightWords={["Partners"]}
            highlightClass="text-amber-400"
            delay={0.15}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Since 2009, Dream Heaven Realty has connected visionary buyers, investors, and agents
            with Dubai's finest properties — with speed, clarity, and unmatched market depth.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2 mt-10 text-gray-400 text-sm"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">About Us</span>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
            <div className="relative w-px h-12 overflow-hidden bg-white/25">
              <motion.div
                className="absolute top-0 left-0 w-full bg-amber-400"
                animate={{ y: ["0%", "300%"] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ height: "40%" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── WHO WE ARE ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left" className="relative flex justify-center lg:justify-start">
              <Tilt3DCard maxAngle={10}>
                <div
                  className="relative overflow-hidden shadow-2xl"
                  style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", width: "500px", maxWidth: "100%", aspectRatio: "1/1" }}
                >
                  <img src="/images/h2.webp" alt="DHR Team" className="w-full h-full object-cover" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.1), transparent)" }}
                  />
                </div>
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-5 text-center"
                >
                  <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <AnimatedCounter target="15+" />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Years in Dubai</div>
                </motion.div>
                {/* Spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-dashed border-emerald-200 opacity-50 pointer-events-none"
                />
              </Tilt3DCard>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={0.1}>
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">Who We Are</span>
              <RevealText
                text="Dubai Real Estate. Faster Deals. Smarter Returns."
                as="h2"
                className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                highlightWords={["Faster", "Smarter"]}
                highlightClass="text-emerald-600"
                delay={0.1}
              />
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-gray-600 text-lg leading-relaxed"
              >
                Dream Heaven Realty (DHR) is a Dubai-based brokerage specializing in Downtown,
                Business Bay, DIFC, Marina, and Burj Khalifa view properties.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-gray-600 text-lg leading-relaxed"
              >
                Our team speaks your language — whether you're a first-time buyer, a seasoned investor,
                or an agent seeking a reliable partner on the ground.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <MagneticButton href="/buy">
                  <motion.span
                    whileHover={{ scale: 1.04, y: -3, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md"
                  >
                    Explore Properties
                  </motion.span>
                </MagneticButton>
                <MagneticButton href="/contact-us">
                  <motion.span
                    whileHover={{ scale: 1.04, backgroundColor: "#111827", color: "#fff" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Get in Touch
                  </motion.span>
                </MagneticButton>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ── */}
      <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
        <FloatingParticles count={18} color="rgba(251,191,36,0.07)" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.06 }}>
                  <div className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <AnimatedCounter target={s.value} />
                  </div>
                  <div className="mt-2 text-sm text-gray-400 uppercase tracking-widest">{s.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">Our Journey</span>
            <RevealText
              text="Built on Trust, Driven by Results"
              as="h2"
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              delay={0.05}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2009", title: "Founded",   desc: "DHR was established with a singular mission: bring transparency and speed to Dubai's fast-moving real estate market." },
              { year: "2015", title: "Expansion", desc: "We expanded into off-plan investments and developer partnerships, giving clients exclusive early access to premium launches." },
              { year: "2024", title: "Today",     desc: "With over AED 2 billion in transactions and 1,200+ properties sold, DHR stands as one of Dubai's most trusted boutique brokerages." },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                <Tilt3DCard maxAngle={8}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.1)", borderColor: "#d1fae5" }}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-colors h-full"
                  >
                    <div className="text-5xl font-bold text-gray-100 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY UAE ── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal direction="up" className="text-center mb-14">
            <RevealText
              text="Why the UAE is Becoming a Global Wealth Magnet"
              as="h2"
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
              highlightWords={["Global", "Wealth", "Magnet"]}
              highlightClass="text-amber-400"
              delay={0.05}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Family, Infrastructure & Long-Term Vision",   desc: "The UAE supports family-owned businesses, prioritizes generational prosperity, and invests heavily in infrastructure." },
              { title: "Regulated & Digitally Advanced Market",       desc: "Mature RERA regulations, digital registration systems, and strong investor protection make Dubai one of the world's safest markets." },
              { title: "Competitive Value in Global Terms",           desc: "$1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft. in London or 172 sq.ft. in Monaco." },
            ].map((card, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                <Tilt3DCard maxAngle={10} glareEnabled>
                  <motion.div
                    whileHover={{ borderColor: "rgba(255,255,255,0.25)", y: -4 }}
                    className="rounded-2xl p-8 h-full"
                    style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
                  </motion.div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">What We Stand For</span>
            <RevealText
              text="Our Core Values"
              as="h2"
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              delay={0.05}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -12, boxShadow: "0 24px 48px rgba(0,0,0,0.1)", borderColor: "#a7f3d0" }}
                  className="group p-8 rounded-2xl border border-gray-100 bg-white cursor-default transition-colors"
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6"
                    whileHover={{ rotate: 12, scale: 1.15, backgroundColor: "#059669" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {v.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ── */}
      <section className="py-24 md:py-32 bg-[#F5F5F0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.25em]">The People Behind DHR</span>
            <RevealText
              text="Meet Our Leadership"
              as="h2"
              className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
              delay={0.05}
            />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Experienced advisors who know Dubai's market inside out.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 28px 56px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-default"
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(30%)" }}
                      whileHover={{ scale: 1.08, filter: "grayscale(0%)" }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <motion.div
                      className="w-8 h-px bg-emerald-500 mb-4"
                      whileHover={{ width: 48 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-emerald-600 text-sm font-semibold mt-1 mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="py-24 bg-gray-950 text-white text-center relative overflow-hidden">
        <FloatingParticles count={16} color="rgba(16,185,129,0.08)" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <ScrollReveal direction="up">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">Start Your Journey</span>
            <RevealText
              text="Ready to Find Your Next Address in Dubai?"
              as="h2"
              className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white"
              highlightWords={["Dubai?"]}
              highlightClass="text-amber-400"
              delay={0.05}
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Share your preferences and receive a hand-picked shortlist of properties within 24 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton href="/contact-us">
                <motion.span
                  whileHover={{ scale: 1.06, y: -3, boxShadow: "0 12px 28px rgba(5,150,105,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block rounded-full bg-emerald-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40"
                >
                  Get a Personalized Shortlist
                </motion.span>
              </MagneticButton>
              <MagneticButton href="/agents">
                <motion.span
                  whileHover={{ borderColor: "#9ca3af", color: "#fff" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-block rounded-full border border-gray-600 px-10 py-4 text-sm font-semibold text-gray-300 transition-colors"
                >
                  Meet Our Agents
                </motion.span>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}