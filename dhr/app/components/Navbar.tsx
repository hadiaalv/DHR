"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/off-plan", label: "Off Plan" },
  { href: "/resale", label: "Resale" },
  { href: "/rent", label: "Rental" },
  { href: "/services", label: "Services" },
  { href: "/communities", label: "Communities" },
  { href: "/developers", label: "Developers" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/book-meeting", label: "Book a Meeting" },
  { href: "/find-property", label: "Find a Property" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <nav
        className={`sticky top-0 z-40 border-b border-transparent backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-black/80 border-white/10"
            : "bg-black/40"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          {/* Left: Menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute inset-x-0 top-[4px] h-[1.5px] rounded-full bg-white" />
              <span className="absolute inset-x-0 top-[9px] h-[1.5px] rounded-full bg-white" />
              <span className="absolute inset-x-0 top-[14px] h-[1.5px] rounded-full bg-white" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-32 md:h-10 md:w-40">
              <Image
                src="/images/logo.jpeg"
                alt="Dream Heaven Realty"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link
              href="/careers"
              className="hidden sm:inline-flex items-center rounded-full border border-white/70 px-4 py-1.5 font-medium text-white hover:bg-white/10"
            >
              Careers
            </Link>
            <Link
              href="/find-property"
              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 font-medium text-black shadow-md hover:bg-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
              <span className="hidden sm:inline">Find a Property</span>
              <span className="sm:hidden">Find</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#022733] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 md:px-6">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src="/images/logo.jpeg"
                  alt="Dream Heaven Realty"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-6 py-8 md:px-10">
            <ul className="space-y-4 text-lg md:text-xl">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-white/5 pb-3 text-white/90 hover:text-white ${
                      isActive(item.href) ? "font-semibold" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
