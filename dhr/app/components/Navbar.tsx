"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          DREAM HEAVEN REALTY LLC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center text-sm font-medium">
          <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/why-dhr" className="text-gray-300 hover:text-white transition-colors">
            Why DHR
          </Link>
          <Link href="/buy" className="text-gray-300 hover:text-white transition-colors">
            Buy
          </Link>
          <Link href="/rent" className="text-gray-300 hover:text-white transition-colors">
            Rent
          </Link>
          <Link href="/agents" className="text-gray-300 hover:text-white transition-colors">
            Agents
          </Link>
          <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </Link>

          <Link
            href="/earn-with-dhr"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-md font-semibold"
          >
            Earn With DHR
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
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium">
            <Link href="/about-us" className="text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link href="/why-dhr" className="text-gray-300 hover:text-white">
              Why DHR
            </Link>
            <Link href="/buy" className="text-gray-300 hover:text-white">
              Buy
            </Link>
            <Link href="/rent" className="text-gray-300 hover:text-white">
              Rent
            </Link>
            <Link href="/agents" className="text-gray-300 hover:text-white">
              Agents
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white">
              Blogs
            </Link>
            <Link href="/contact-us" className="text-gray-300 hover:text-white">
              Contact Us
            </Link>

            <Link
              href="/earn-with-dhr"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-center font-semibold"
            >
              Earn With DHR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
