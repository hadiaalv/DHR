"use client";

import { useState } from "react";

export default function PropertyCard() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-2xl">
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-linear-to-br from-emerald-300/40 via-white/40 to-sky-300/40" />
      </div>

      <div className="relative overflow-hidden">
        <img
          src="/images/property.jpg"
          alt="Property"
          className="h-64 w-full transform object-cover transition duration-500 group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-70" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
            For Sale
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
            Ready to move in
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsFavourite((prev) => !prev)}
          className="absolute top-4 right-4 rounded-full bg-white/95 p-2 shadow-lg shadow-black/20 transition hover:bg-white"
          aria-label={isFavourite ? "Remove from favourites" : "Save to favourites"}
        >
          <svg
            className={`h-5 w-5 transition-colors ${
              isFavourite ? "fill-red-500 text-red-500" : "text-gray-800"
            }`}
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-gray-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Verified listing • Exclusive</span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Luxury Waterfront Apartment
            </h3>
            <p className="mt-1 flex items-center text-sm text-gray-500">
              <svg
                className="mr-1.5 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Dubai Marina, Dubai
            </p>
          </div>

          <div className="text-right">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Starting from
            </div>
            <div className="text-xl font-bold text-gray-900">$850,000</div>
            <div className="text-xs text-emerald-600">
              6.2% projected ROI
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-3 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>3 Bedrooms</span>
          </div>
          <div className="flex items-center gap-1.5">
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
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <span>2 Bathrooms</span>
          </div>
          <div className="flex items-center gap-1.5">
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span>2,500 sqft</span>
          </div>
        </div>

        <button
          type="button"
          className="group/button mt-2 inline-flex w-full items-center justify-between rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gray-900"
        >
          <span>View details & schedule a private tour</span>
          <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition group-hover/button:translate-x-0.5">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}