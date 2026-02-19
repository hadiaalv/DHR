// ─── DHR Animation Library ─────────────────────────────────────
// Shared Framer Motion variants, hooks, and animation utilities

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_SPRING = { type: "spring", stiffness: 300, damping: 30 };
export const EASE_SPRING_SOFT = { type: "spring", stiffness: 180, damping: 24 };

// ── Fade + Slide variants ──────────────────────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
  }),
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
  }),
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
  }),
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay },
  }),
};

// ── Stagger container ──────────────────────────────────────────
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// ── Text reveal per word ───────────────────────────────────────
export const wordReveal = {
  hidden:  { opacity: 0, y: "100%", rotateX: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay },
  }),
};

// ── Card hover ─────────────────────────────────────────────────
export const cardHover = {
  rest:  { y: 0, scale: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: "0 24px 56px rgba(0,0,0,0.15)",
    transition: EASE_SPRING,
  },
};

// ── Number counter helper ─────────────────────────────────────
export function parseStatValue(str: string) {
  const numeric = parseFloat(str.replace(/[^0-9.]/g, ""));
  const prefix  = str.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix  = str.match(/[^0-9.]+$/)?.[0] ?? "";
  return { numeric, prefix, suffix };
}