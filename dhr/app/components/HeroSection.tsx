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
    <section className="relative overflow-hidden bg-white text-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transform-gpu"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/85 to-gray-50/95" />
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-multiply bg-radial from-emerald-200/30 via-transparent to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[620px] max-w-5xl flex-col items-center justify-center px-6 text-center">
        
        {/* Badge */}
        <span className="text-sm font-medium uppercase tracking-widest text-amber-500">
          Welcome to DHR
        </span>

        {/* Main heading */}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-gray-800 md:text-6xl md:leading-[1.05]">
          Luxury, transparent, and fast-moving real estate services in Dubai.
        </h1>

        {/* CTA Cards */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition hover:shadow-md">
            <div className="text-xs text-gray-500">For</div>
            <div className="text-lg font-semibold text-gray-800">Buy</div>
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition hover:shadow-md">
            <div className="text-xs text-gray-500">For</div>
            <div className="text-lg font-semibold text-gray-800">Rent</div>
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition hover:shadow-md">
            <div className="text-xs text-gray-500">For</div>
            <div className="text-lg font-semibold text-gray-800">Agents</div>
          </button>
        </div>

        {/* Search Bar (unchanged) */}
        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between text-xs text-gray-600">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live inventory updated in real-time
            </span>
            <span className="hidden md:inline text-[11px] text-gray-500">
              Tip: Start with a community name (e.g. Dubai Marina)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_auto]">
            <input
              type="text"
              placeholder="Location or community"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm"
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
              className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm"
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
              className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Search
            </button>
          </div>

          {resultText && (
            <div className="mt-4 text-xs text-gray-600">
              {resultText}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
