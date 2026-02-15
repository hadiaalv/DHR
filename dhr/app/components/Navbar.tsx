"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          DREAM HEAVEN REALTY LLC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center text-sm font-medium">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
          <Link href="/agents" className="text-gray-300 hover:text-white transition-colors">Agents</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>

          <Link
            href="/contact"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-md font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
            <Link href="/agents" className="text-gray-300 hover:text-white transition-colors">Agents</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-center font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}