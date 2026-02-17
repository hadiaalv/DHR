"use client";

import { useRef, useState, useEffect } from "react";

interface BlogPost {
  id: number;
  image: string;
  video: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog1.png",
    video: "/videos/horizontal/Al Habtoor 3.mp4",
    title: "Urban Energy Meets Sky-High Serenity",
    excerpt:
      "Skyvue Altier is the defining point of Sobha Hartland II — the final tower in a master community where city vibrancy and elevated living converge.",
    date: "March 12, 2025",
    category: "Development",
    href: "/blog/urban-energy-meets-sky-high",
  },
  {
    id: 2,
    image: "/images/blog2.png",
    video: "/videos/horizontal/Al Habtoor 5.mp4",
    title: "Discovering Dubai Marina: A World-Class Waterfront",
    excerpt:
      "Dubai Marina stands as one of the most sought-after addresses in the UAE, attracting investors and residents from around the globe.",
    date: "February 28, 2025",
    category: "Lifestyle",
    href: "/blog/discovering-dubai-marina",
  },
];

/* ── fires when element enters viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function BlogCard({ post, direction, delay }: { post: BlogPost; direction: "left" | "right"; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const { ref, visible } = useInView();

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const slideFrom = direction === "left" ? "translateX(-56px)" : "translateX(56px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) translateY(0)" : `${slideFrom} translateY(24px)`,
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col
                 hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.015]
                 transition-[box-shadow,transform] duration-300"
    >
      {/* Video — 16:9 */}
      <div
        className="relative w-full overflow-hidden bg-black group"
        style={{ aspectRatio: "16 / 9" }}
      >
        <video
          ref={videoRef}
          src={post.video}
          poster={post.image}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full z-10 pointer-events-none
                         transition-transform duration-300 group-hover:scale-105">
          {post.category}
        </span>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 bg-black/40 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm hover:bg-black/60 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7 7 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81l1.33 1.33a.996.996 0 1 0 1.41-1.41L5.05 3.63a.996.996 0 0 0-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76V4zM16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-400 mb-2">{post.date}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <a
          href={post.href}
          className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 uppercase tracking-wide
                     hover:text-gray-500 hover:gap-2 transition-all duration-200"
        >
          Read More <span>»</span>
        </a>
      </div>
    </div>
  );
}

/* ── Hero heading words slide in one by one ── */
function AnimatedHeroText() {
  const words = ["News", "&", "Articles"];
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 flex flex-wrap justify-center gap-x-4">
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(28px)",
            animation: `heroWordIn 0.65s cubic-bezier(.22,1,.36,1) ${i * 120 + 200}ms forwards`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

export default function BlogPage() {
  const { ref: subtitleRef, visible: subtitleVisible } = useInView(0.1);
  const { ref: breadcrumbRef, visible: breadcrumbVisible } = useInView(0.1);

  return (
    <div className="min-h-screen bg-white">

      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0,
            animation: "overlayFadeIn 1.2s ease 0.1s forwards",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center px-6">
          <AnimatedHeroText />

          <p
            ref={subtitleRef}
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.65s cubic-bezier(.22,1,.36,1) 0.55s, transform 0.65s cubic-bezier(.22,1,.36,1) 0.55s",
            }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl"
          >
            The latest insights, market updates, and stories from the world of real estate.
          </p>

          <div
            ref={breadcrumbRef}
            style={{
              opacity: breadcrumbVisible ? 1 : 0,
              transform: breadcrumbVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.55s ease 0.75s, transform 0.55s ease 0.75s",
            }}
            className="flex items-center justify-center gap-2 mt-6 text-gray-300 text-sm"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">News &amp; Articles</span>
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.id}
                post={post}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}