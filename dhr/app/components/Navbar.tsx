"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about-us", label: "About Us" },
  { href: "/why-dhr", label: "Why DHR" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav
      className={`sticky top-0 z-50 border-b border-transparent backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-gray-800 shadow-xl"
          : "bg-linear-to-b from-black/95 via-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative text-2xl font-extrabold tracking-wide text-white group"
        >
          <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            DREAM HEAVEN REALTY LLC
          </span>
          <span className="absolute -inset-x-1 -bottom-1 h-[2px] bg-linear-to-r from-white/60 via-gray-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-1 py-1 text-gray-300 hover:text-white transition-colors ${
                isActive(link.href) ? "text-white" : ""
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transform bg-linear-to-r from-white via-gray-300 to-transparent transition-transform duration-300 ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}

          <Link
            href="/earn-with-dhr"
            className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-gray-100"
          >
            <span>Earn With DHR</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
              NEW
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none rounded-full p-2 hover:bg-white/10 transition"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-gray-800 backdrop-blur-xl">
          <div className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                  isActive(link.href)
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                {isActive(link.href) && (
                  <span className="h-2 w-2 rounded-full bg-black" />
                )}
              </Link>
            ))}

            <Link
              href="/earn-with-dhr"
              className="mt-2 rounded-full bg-white px-6 py-2 text-center text-sm font-semibold text-black shadow-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earn With DHR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
