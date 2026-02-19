"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const navItems = [
  { href: "/about-us",      label: "About Us",     num: "01" },
  { href: "/why-dhr",       label: "Why DHR",       num: "02" },
  { href: "/buy",           label: "Buy",           num: "03" },
  { href: "/rent",          label: "Rent",          num: "04" },
  { href: "/agents",        label: "Agents",        num: "05" },
  { href: "/blogs",         label: "Blogs",         num: "06" },
  { href: "/contact-us",    label: "Contact Us",    num: "07" },
  { href: "/earn-with-dhr", label: "Earn With DHR", num: "08" },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_EXIT = [0.55, 0, 0.45, 1] as const;

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(245,245,240,0.7)", "rgba(245,245,240,0.97)"]);
  const navShadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(0,0,0,0)", "0 4px 32px rgba(0,0,0,0.08)"]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const overlayVariants = {
    hidden:  { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.55, ease: EASE },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: EASE_EXIT },
    },
  };

  const linkVariants = {
    hidden:  { x: -32, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: EASE, delay: i * 0.06 + 0.1 },
    }),
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.nav
        style={{ backgroundColor: navBg, boxShadow: navShadow }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="sticky top-0 z-40 border-b border-gray-200/40 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

          {/* Hamburger */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="cursor-pointer inline-flex items-center gap-2.5 text-sm font-medium text-gray-700"
          >
            <span className="relative flex h-5 w-5 flex-shrink-0 flex-col justify-between py-0.5">
              {[0,1,2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-px w-full rounded-full bg-gray-800"
                  animate={menuOpen ? (i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 8 } : { rotate: -45, y: -8 }) : { rotate: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </span>
            <span className="hidden sm:inline tracking-wide">Menu</span>
          </motion.button>

          {/* Logo */}
          <Link href="/" className="cursor-pointer absolute left-1/2 -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-16 w-48 sm:h-20 sm:w-64 md:h-24 md:w-80"
            >
              <Image
                src="/images/logo.png"
                alt="Dream Heaven Realty"
                fill
                sizes="(max-width:640px) 192px, (max-width:768px) 256px, 320px"
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* CTA */}
          <Link href="/earn-with-dhr">
            <motion.span
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-600/20"
            >
              <span className="hidden xs:inline">Earn With</span>
              <span>DHR</span>
            </motion.span>
          </Link>
        </div>
      </motion.nav>

      {/* ── Full-screen Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col bg-[#F5F5F0] text-gray-900"
          >
            {/* Decorative circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.06 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-emerald-500"
            />

            {/* Header */}
            <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 px-4 sm:px-8 py-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative h-16 w-44 sm:h-24 sm:w-72"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Dream Heaven Realty"
                    fill
                    sizes="176px"
                    className="object-contain object-left"
                    unoptimized
                  />
                </motion.div>
              </Link>

              <motion.button
                type="button"
                onClick={() => setMenuOpen(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25 }}
                aria-label="Close menu"
                className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
              >
                <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 sm:px-10 py-6">
              <ul className="space-y-0">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="border-b border-gray-200"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="group flex items-center justify-between py-5 text-xl sm:text-2xl md:text-3xl"
                    >
                      {/* Number + Label */}
                      <span className="flex items-center gap-4">
                        <motion.span
                          animate={{ x: hoveredIdx === i ? 4 : 0 }}
                          className="text-xs text-gray-300 font-mono tabular-nums"
                        >
                          {item.num}
                        </motion.span>
                        <motion.span
                          animate={{
                            x: hoveredIdx === i ? 8 : 0,
                            color: hoveredIdx === i ? "#111827" : isActive(item.href) ? "#111827" : "#6b7280",
                          }}
                          className="font-semibold"
                          transition={{ duration: 0.2 }}
                        >
                          {item.label}
                        </motion.span>
                      </span>

                      {/* Arrow + active dot */}
                      <span className="flex items-center gap-3">
                        {isActive(item.href) && (
                          <motion.span
                            layoutId="active-dot"
                            className="h-2 w-2 rounded-full bg-emerald-500"
                          />
                        )}
                        <motion.span
                          animate={{
                            x: hoveredIdx === i ? 0 : -8,
                            opacity: hoveredIdx === i ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-400 text-lg"
                        >→</motion.span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex-shrink-0 border-t border-gray-200 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <p className="text-xs text-gray-400">© {new Date().getFullYear()} Dream Heaven Realty. All rights reserved.</p>
              <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#059669", color: "#fff" }}
                  className="cursor-pointer text-xs font-semibold text-emerald-600 border border-emerald-600 rounded-full px-4 py-1.5 transition-colors inline-block"
                >
                  Get in touch →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}