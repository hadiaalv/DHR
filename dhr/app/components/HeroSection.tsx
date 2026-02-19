"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  MagneticButton,
  FloatingParticles,
  ScrollReveal,
  MarqueeBanner,
} from "./MotionComponents";

const EASE = [0.16, 1, 0.3, 1];

/* ── Hero typing animation ── */
const headlines = [
  "Luxury Real Estate Services in Dubai.",
  "Faster Deals. Smarter Returns.",
  "Your Vision. Our Expertise.",
];

function TypingHeadline() {
  const [idx,     setIdx]    = useState(0);
  const [text,    setText]   = useState("");
  const [deleting,setDelete] = useState(false);
  const target = headlines[idx];

  useEffect(() => {
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting && text.length < target.length) {
        setText(target.slice(0, text.length + 1));
      } else if (!deleting && text.length === target.length) {
        setTimeout(() => setDelete(true), 2000);
      } else if (deleting && text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setDelete(false);
        setIdx((i) => (i + 1) % headlines.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, target]);

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-[0.9em] bg-amber-400 ml-1 align-middle"
      />
    </span>
  );
}

/* ── 3D mouse-parallax hero background ── */
function ParallaxHeroBg() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const rotX = useTransform(sy, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotY = useTransform(sx, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set((e.clientX / window.innerWidth  - 0.5));
    y.set((e.clientY / window.innerHeight - 0.5));
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-[-5%] bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/videos/horizontal/Al Habtoor Tower - Al Habtoor City_2.mp4')",
          rotateX: rotX,
          rotateY: rotY,
          transformPerspective: "800px",
        }}
      >
        {/* Use video instead */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/horizontal/Al Habtoor Tower - Al Habtoor City_2.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const [location,   setLocation]   = useState("");
  const [type,       setType]       = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [resultText, setResultText] = useState<string | null>(null);
  const [focused,    setFocused]    = useState(false);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY       = useTransform(scrollY, [0, 600], [0, 120]);

  const disabled = useMemo(
    () => !location.trim() && !type && !priceRange,
    [location, type, priceRange]
  );

  const handleSearch = () => {
    const matches = Math.floor(Math.random() * 24) + 6;
    setResultText(`We've found ${matches} premium properties matching your search.`);
  };

  const marqueeItems = [
    "Downtown Dubai", "Dubai Marina", "DIFC", "Business Bay",
    "Palm Jumeirah", "Dubai Hills", "JBR", "Burj Khalifa View",
  ];

  return (
    <section className="relative overflow-hidden text-white" style={{ minHeight: "100vh" }}>
      {/* ── Parallax BG ── */}
      <ParallaxHeroBg />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* ── Ambient particles ── */}
      <FloatingParticles count={25} color="rgba(251,191,36,0.12)" />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-sm"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-amber-400"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          Welcome to Dream Heaven Realty
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.05]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <TypingHeadline />
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mt-5 max-w-2xl text-gray-300 text-lg leading-relaxed"
        >
          Connecting visionary buyers, investors, and agents with Dubai's finest properties
          — with speed, clarity, and unmatched market depth.
        </motion.p>

        {/* CTA Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {["Buy", "Rent", "Agents"].map((label, i) => (
            <MagneticButton key={label}>
              <motion.a
                href={`/${label.toLowerCase()}`}
                whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-0.5 rounded-xl border border-white/20 bg-white/10 px-7 py-4 backdrop-blur-sm transition-colors"
              >
                <span className="text-[10px] text-white/60 uppercase tracking-wider">For</span>
                <span className="text-lg font-semibold text-white">{label}</span>
              </motion.a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          className="mt-10 w-full max-w-3xl"
        >
          <motion.div
            animate={focused ? { boxShadow: "0 0 0 2px rgba(251,191,36,0.4), 0 24px 64px rgba(0,0,0,0.2)" } : { boxShadow: "0 18px 60px rgba(15,23,42,0.12)" }}
            className="overflow-hidden rounded-2xl border border-white/20 bg-white/85 p-4 backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between text-xs text-gray-600">
              <span className="inline-flex items-center gap-1.5">
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Live inventory updated in real-time
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_auto]">
              <motion.input
                type="text"
                placeholder="Location or community"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                whileFocus={{ scale: 1.01 }}
                className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm text-gray-800 outline-none focus:border-amber-400"
              >
                <option value="">Property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
                <option value="land">Land</option>
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm text-gray-800 outline-none focus:border-amber-400"
              >
                <option value="">Price range</option>
                <option value="0-500k">$0 – $500k</option>
                <option value="500k-1m">$500k – $1M</option>
                <option value="1m-2m">$1M – $2M</option>
                <option value="2m+">$2M+</option>
              </select>
              <MagneticButton>
                <motion.button
                  type="button"
                  onClick={handleSearch}
                  whileHover={{ scale: 1.04, backgroundColor: "#047857" }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                  Search
                </motion.button>
              </MagneticButton>
            </div>

            <AnimatePresence>
              {resultText && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-xs text-emerald-700 font-medium"
                >
                  ✓ {resultText}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/20">
          <motion.div
            className="absolute top-0 w-full bg-amber-400"
            animate={{ y: ["0%", "300%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: "35%" }}
          />
        </div>
      </motion.div>

      {/* ── Marquee Banner ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 py-3 backdrop-blur-sm">
        <MarqueeBanner items={marqueeItems} speed={25} />
      </div>
    </section>
  );
}