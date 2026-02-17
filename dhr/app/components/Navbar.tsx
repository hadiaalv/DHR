"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about-us", label: "About Us" },
  { href: "/why-dhr", label: "Why DHR" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/earn-with-dhr", label: "Earn With DHR" },
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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top bar */}
      <nav
        className={`sticky top-0 z-40 border-b border-gray-200/50 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F5F0]/95 border-gray-200 shadow-sm"
            : "bg-[#F5F5F0]/80"
        }`}
      >
        {/* Slightly wider container */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          
          {/* Left: Menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-900"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute inset-x-0 top-[4px] h-[1.5px] rounded-full bg-gray-800" />
              <span className="absolute inset-x-0 top-[9px] h-[1.5px] rounded-full bg-gray-800" />
              <span className="absolute inset-x-0 top-[14px] h-[1.5px] rounded-full bg-gray-800" />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center: Larger logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="relative h-20 w-64 md:h-24 md:w-80">
              <Image
                src="/images/logo.png"
                alt="Dream Heaven Realty"
                fill
                sizes="320px"
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Right CTA */}
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link
              href="/earn-with-dhr"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
            >
              <span>Earn With DHR</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F5F0] text-gray-900">
          
          {/* Menu header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            
            {/* Left-aligned bigger logo */}
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative h-28 w-96 md:h-32 md:w-[420px]">
                <Image
                  src="/images/logo.png"
                  alt="Dream Heaven Realty"
                  fill
                  sizes="420px"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-5 w-5 text-gray-800"
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

          {/* Menu links */}
          <nav className="px-8 py-10">
            <ul className="space-y-6 text-xl md:text-2xl">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-gray-200 pb-4 text-gray-700 hover:text-gray-900 transition-colors ${
                      isActive(item.href) ? "font-semibold text-gray-900" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="h-2 w-2 rounded-full bg-gray-900" />
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
