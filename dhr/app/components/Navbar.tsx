"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about-us",      label: "About Us" },
  { href: "/why-dhr",       label: "Why DHR" },
  { href: "/buy",           label: "Buy" },
  { href: "/rent",          label: "Rent" },
  { href: "/agents",        label: "Agents" },
  { href: "/blogs",         label: "Blogs" },
  { href: "/contact-us",    label: "Contact Us" },
  { href: "/earn-with-dhr", label: "Earn With DHR" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [closing, setClosing]     = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* animated close: play out animation then unmount */
  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => { setMenuOpen(false); setClosing(false); }, 380);
  };

  const openMenu = () => { setMenuOpen(true); setClosing(false); };

  return (
    <>
      <style>{`
        /* ── Navbar slide-down on mount ── */
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-bar { animation: navSlideDown 0.55s cubic-bezier(.22,1,.36,1) both; }

        /* ── Hamburger lines ── */
        .ham-line {
          display: block;
          position: absolute;
          left: 0; right: 0;
          height: 1.5px;
          border-radius: 9999px;
          background: #1f2937;
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease;
        }

        /* ── Overlay open/close ── */
        @keyframes overlayIn {
          from { opacity: 0; transform: translateX(-100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes overlayOut {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-100%); }
        }
        .menu-overlay {
          animation: overlayIn 0.38s cubic-bezier(.22,1,.36,1) forwards;
        }
        .menu-overlay.closing {
          animation: overlayOut 0.34s cubic-bezier(.55,0,.45,1) forwards;
        }

        /* ── Nav links stagger in ── */
        @keyframes linkSlideIn {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-link-item {
          opacity: 0;
          animation: linkSlideIn 0.45s cubic-bezier(.22,1,.36,1) forwards;
        }

        /* ── Nav link hover arrow ── */
        .nav-link-arrow {
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease;
          opacity: 0;
          transform: translateX(-6px);
        }
        .nav-link-row:hover .nav-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .nav-link-row {
          transition: color 0.2s ease, padding-left 0.25s cubic-bezier(.22,1,.36,1);
        }
        .nav-link-row:hover {
          padding-left: 8px;
          color: #111827;
        }

        /* ── CTA button shine ── */
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.26s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.26s ease,
                      background 0.2s ease;
        }
        .cta-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.45s ease;
        }
        .cta-btn:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 6px 20px rgba(5,150,105,0.3); }
        .cta-btn:hover::after { transform: translateX(100%); }
        .cta-btn:active { transform: scale(0.97); }

        /* ── Menu trigger hover ── */
        .menu-trigger {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .menu-trigger:hover { transform: scale(1.06); color: #111827; }
        .menu-trigger:active { transform: scale(0.95); }

        /* ── Close button ── */
        .close-btn {
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1),
                      background 0.2s ease;
        }
        .close-btn:hover { transform: rotate(90deg) scale(1.1); background: #f3f4f6; }

        /* ── Active dot pulse ── */
        @keyframes dotPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.5); opacity: 0.6; }
        }
        .active-dot { animation: dotPulse 2s ease-in-out infinite; }

        /* ── Logo hover ── */
        .logo-img {
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), filter 0.3s ease;
        }
        .logo-img:hover { transform: scale(1.04); filter: brightness(1.05); }
      `}</style>

      {/* ── Top navbar ── */}
      <nav
        className={`nav-bar sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F5F0]/95 border-gray-200 shadow-sm"
            : "bg-[#F5F5F0]/80 border-gray-200/40"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

          {/* Left: hamburger */}
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            className="menu-trigger cursor-pointer inline-flex items-center gap-2.5 text-sm font-medium text-gray-700"
          >
            <span className="relative flex h-5 w-5 flex-shrink-0 items-center">
              <span className="ham-line" style={{ top: 4 }} />
              <span className="ham-line" style={{ top: 10 }} />
              <span className="ham-line" style={{ top: 16 }} />
            </span>
            <span className="hidden sm:inline tracking-wide">Menu</span>
          </button>

          {/* Center: logo */}
          <Link href="/" className="cursor-pointer absolute left-1/2 -translate-x-1/2">
            <div className="logo-img relative h-16 w-48 sm:h-20 sm:w-64 md:h-24 md:w-80">
              <Image
                src="/images/logo.png"
                alt="Dream Heaven Realty"
                fill
                sizes="(max-width:640px) 192px, (max-width:768px) 256px, 320px"
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Right: CTA */}
          <Link
            href="/earn-with-dhr"
            className="cta-btn cursor-pointer inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-600/20"
          >
            <span className="hidden xs:inline">Earn With</span>
            <span>DHR</span>
          </Link>

        </div>
      </nav>

      {/* ── Full-screen overlay menu ── */}
      {menuOpen && (
        <div className={`menu-overlay fixed inset-0 z-50 flex flex-col bg-[#F5F5F0] text-gray-900 ${closing ? "closing" : ""}`}>

          {/* Header */}
          <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-5">
            <Link href="/" onClick={closeMenu} className="cursor-pointer flex-1 min-w-0">
              <div className="logo-img relative h-16 w-44 sm:h-24 sm:w-72 md:h-28 md:w-80">
                <Image
                  src="/images/logo.png"
                  alt="Dream Heaven Realty"
                  fill
                  sizes="(max-width:640px) 176px, (max-width:768px) 288px, 320px"
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="close-btn cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
            >
              <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links — scrollable on small screens */}
          <nav className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-10">
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className="nav-link-item"
                  style={{ animationDelay: `${i * 55 + 60}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`nav-link-row cursor-pointer flex items-center justify-between border-b border-gray-200 py-4 text-lg sm:text-xl md:text-2xl ${
                      isActive(item.href) ? "font-semibold text-gray-900" : "text-gray-500"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {/* index number */}
                      <span className="text-xs text-gray-300 font-mono w-5 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </span>

                    <span className="flex items-center gap-2">
                      {isActive(item.href) && (
                        <span className="active-dot h-2 w-2 rounded-full bg-emerald-500" />
                      )}
                      <span className="nav-link-arrow text-gray-400">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer strip */}
          <div
            className="flex-shrink-0 border-t border-gray-200 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ opacity: 0, animation: `linkSlideIn 0.4s cubic-bezier(.22,1,.36,1) ${navItems.length * 55 + 120}ms forwards` }}
          >
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Dream Heaven Realty. All rights reserved.</p>
            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="cta-btn cursor-pointer text-xs font-semibold text-emerald-600 border border-emerald-600 rounded-full px-4 py-1.5 hover:bg-emerald-600 hover:text-white transition-colors"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      )}
    </>
  );
}