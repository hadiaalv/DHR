"use client";

import {
  useRef, useEffect, useState, ReactNode, FC,
  MouseEvent as ReactMouseEvent,
} from "react";
import {
  motion,
  useMotionValue, useSpring, useTransform,
  useScroll, useInView,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { EASE_OUT_EXPO, fadeUp, wordReveal } from "../lib/animations";

/* ──────────────────────────────────────────────────────────────
   1.  MagneticButton
   Pulls the button toward the cursor when hovered
────────────────────────────────────────────────────────────── */
interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
}: MagneticButtonProps) {
  const ref  = useRef<HTMLDivElement>(null);
  const x    = useMotionValue(0);
  const y    = useMotionValue(0);
  const sx   = useSpring(x, { stiffness: 280, damping: 22 });
  const sy   = useSpring(y, { stiffness: 280, damping: 22 });

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const Tag = href ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={className}>{children}</a>
      ) : (
        <div className={`cursor-pointer ${className}`}>{children}</div>
      )}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   2.  RevealText  — word-by-word slide-up reveal
────────────────────────────────────────────────────────────── */
interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  highlightWords?: string[];
  highlightClass?: string;
}

export function RevealText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
  highlightWords = [],
  highlightClass = "text-amber-400",
}: RevealTextProps) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-10% 0px" });
  const words   = text.split(" ");

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className={`inline-block ${highlightWords.includes(word) ? highlightClass : ""}`}
            initial={{ y: "110%", opacity: 0, rotateX: -20 }}
            animate={inView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
            transition={{
              duration: 0.75,
              ease: EASE_OUT_EXPO,
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ──────────────────────────────────────────────────────────────
   3.  ParallaxSection  — scroll-based parallax wrapper
────────────────────────────────────────────────────────────── */
interface ParallaxProps {
  children: ReactNode;
  speed?: number;   // positive = slower (moves up less), negative = faster
  className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const ref              = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y                = useTransform(scrollYProgress, [0, 1], [`${-speed * 80}px`, `${speed * 80}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   4.  FloatingParticles  — ambient floating dots
────────────────────────────────────────────────────────────── */
interface ParticleProps {
  count?: number;
  color?: string;
}

export function FloatingParticles({ count = 20, color = "rgba(251,191,36,0.15)" }: ParticleProps) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id:       i,
        x:        Math.random() * 100,
        y:        Math.random() * 100,
        size:     Math.random() * 4 + 1,
        delay:    Math.random() * 4,
        duration: Math.random() * 6 + 5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top:  `${p.y}%`,
            width:  p.size,
            height: p.size,
            background: color,
          }}
          animate={{
            y:       [0, -30, 0],
            x:       [0, 10, -10, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay:    p.delay,
            repeat:   Infinity,
            ease:     "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   5.  Tilt3DCard  — mouse-tracked 3D card tilt
────────────────────────────────────────────────────────────── */
interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  maxAngle?: number;
  glareEnabled?: boolean;
}

export function Tilt3DCard({
  children,
  className = "",
  maxAngle = 15,
  glareEnabled = true,
}: Tilt3DProps) {
  const ref       = useRef<HTMLDivElement>(null);
  const rotateX   = useMotionValue(0);
  const rotateY   = useMotionValue(0);
  const glareOpacity = useMotionValue(0);

  const springX   = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY   = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const springG   = useSpring(glareOpacity, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px   = (e.clientX - rect.left)  / rect.width;
    const py   = (e.clientY - rect.top)   / rect.height;
    rotateY.set((px - 0.5) *  maxAngle * 2);
    rotateX.set((py - 0.5) * -maxAngle * 2);
    glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: springG,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
          }}
        />
      )}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   6.  AnimatedCounter  — smooth number count-up
────────────────────────────────────────────────────────────── */
interface CounterProps {
  target: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ target, duration = 2, className = "" }: CounterProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix  = target.replace(/[0-9.]/g, "");
    const steps   = 60;
    let   step    = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(eased * numeric * 10) / 10;
      setDisplay(current % 1 === 0 ? current.toFixed(0) + suffix : current.toFixed(1) + suffix);
      if (step >= steps) { clearInterval(interval); setDisplay(target); }
    }, (duration * 1000) / steps);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}

/* ──────────────────────────────────────────────────────────────
   7.  ScrollReveal  — generic scroll-triggered wrapper
────────────────────────────────────────────────────────────── */
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const variants = {
    up:    { hidden: { opacity: 0, y: 48 },   visible: { opacity: 1, y: 0   } },
    left:  { hidden: { opacity: 0, x: -60 },  visible: { opacity: 1, x: 0   } },
    right: { hidden: { opacity: 0, x: 60 },   visible: { opacity: 1, x: 0   } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.75, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   8.  CursorFollower  — custom global cursor
────────────────────────────────────────────────────────────── */
export function CursorFollower() {
  const cursorX   = useMotionValue(-100);
  const cursorY   = useMotionValue(-100);
  const trailX    = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const trailY    = useSpring(cursorY, { stiffness: 120, damping: 20 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference"
        style={{
          width:  8,
          height: 8,
          background: "white",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-white/40 mix-blend-difference"
        animate={{ width: hovered ? 60 : 36, height: hovered ? 60 : 36 }}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────
   9.  GlitchText  — RGB split glitch effect on hover
────────────────────────────────────────────────────────────── */
interface GlitchProps { text: string; className?: string }

export function GlitchText({ text, className = "" }: GlitchProps) {
  const [active, setActive] = useState(false);

  return (
    <span
      className={`relative inline-block cursor-default select-none ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <style>{`
        @keyframes glitch-r {
          0%,100% { transform: translate(0); clip-path: none; }
          20% { transform: translate(-3px, 1px); clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%); }
          40% { transform: translate(3px, -1px); clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%); }
          60% { transform: translate(-2px, 0); }
        }
        @keyframes glitch-b {
          0%,100% { transform: translate(0); clip-path: none; }
          20% { transform: translate(3px, -1px); clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%); }
          40% { transform: translate(-3px, 1px); clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); }
          60% { transform: translate(2px, 0); }
        }
      `}</style>
      {text}
      {active && (
        <>
          <span
            className="absolute inset-0 text-red-400"
            style={{ animation: "glitch-r 0.3s steps(2) infinite", opacity: 0.6 }}
          >{text}</span>
          <span
            className="absolute inset-0 text-blue-400"
            style={{ animation: "glitch-b 0.3s steps(2) 0.05s infinite", opacity: 0.6 }}
          >{text}</span>
        </>
      )}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────
   10.  HorizontalScrollBanner  — infinite marquee
────────────────────────────────────────────────────────────── */
interface MarqueeProps { items: string[]; speed?: number; className?: string }

export function MarqueeBanner({ items, speed = 30, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-inner { animation: marquee ${speed}s linear infinite; display: inline-block; }
        .marquee-inner:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-sm font-semibold uppercase tracking-widest opacity-60">
            {item}
            <span className="mx-6 text-amber-400">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}