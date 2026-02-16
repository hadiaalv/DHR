"use client";

import { useMemo, useState } from "react";

export default function HeroSection() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [resultText, setResultText] = useState<string | null>(null);

  const disabled = useMemo(
    () => !location.trim() && !type && !priceRange,
    [location, type, priceRange]
  );

  const handleSearch = () => {
    if (disabled) {
      setResultText("Refine your search to discover curated properties.");
      return;
    }

    const matches = Math.floor(Math.random() * 24) + 6;
    setResultText(
      `We’ve found ${matches} premium properties that match your preferences.`
    );
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background image with subtle parallax feel */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transform-gpu"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Gradient & vignette overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-gray-900/80 to-gray-900/95" />
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply bg-radial from-white/5 via-transparent to-gray-900" />

      {/* Glow behind content */}
      <div className="pointer-events-none absolute -inset-x-32 top-32 h-64 bg-linear-to-r from-white/10 via-white/20 to-transparent blur-3xl opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[620px] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-200 backdrop-blur">
          Curated Luxury • Dubai & Beyond
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
          <span className="block bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Find your dream
          </span>
          <span className="mt-1 block bg-linear-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
            property with confidence.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-gray-300 md:text-lg">
          Experience a white‑glove real estate journey—from first viewing to final handover—with{" "}
          <span className="font-semibold text-white">Dream Heaven Realty LLC</span>.
        </p>

        {/* Search Bar */}
        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between text-xs text-gray-300">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live inventory updated in real‑time
            </span>
            <span className="hidden md:inline text-[11px] text-gray-400">
              Tip: Start with a community name (e.g. Dubai Marina)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_auto]">
            <div className="relative">
              <input
                type="text"
                placeholder="Location or community"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-gray-900/20 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/25"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/25"
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
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/25"
            >
              <option value="">Price range</option>
              <option value="0-500k">$0 - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m-2m">$1M - $2M</option>
              <option value="2m+">$2M+</option>
            </select>

            <button
              type="button"
              onClick={handleSearch}
              disabled={false}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-white/30 transition hover:-translate-y-0.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-gray-500"
            >
              <svg
                className="mr-2 h-4 w-4"
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
              Search
            </button>
          </div>

          {resultText && (
            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-200">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/90 text-[10px] font-bold text-white">
                  AI
                </span>
                <span className="text-[11px] md:text-xs">{resultText}</span>
              </div>
              <button
                type="button"
                onClick={() => setResultText(null)}
                className="hidden text-[11px] text-gray-400 hover:text-gray-200 md:inline"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-6 text-left text-xs md:text-sm">
          <div className="rounded-xl bg-white/5 px-4 py-3 backdrop-blur">
            <div className="text-2xl font-bold text-white md:text-3xl">500+</div>
            <div className="mt-1 text-gray-300">properties sold across prime communities</div>
          </div>
          <div className="rounded-xl bg-white/5 px-4 py-3 backdrop-blur">
            <div className="text-2xl font-bold text-white md:text-3xl">1,000+</div>
            <div className="mt-1 text-gray-300">clients guided through seamless transactions</div>
          </div>
          <div className="rounded-xl bg-white/5 px-4 py-3 backdrop-blur">
            <div className="text-2xl font-bold text-white md:text-3xl">15+</div>
            <div className="mt-1 text-gray-300">years shaping Dubai&apos;s real‑estate story</div>
          </div>
        </div>
      </div>
    </section>
  );
}