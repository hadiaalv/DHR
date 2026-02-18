"use client";

import { useState, useRef, useEffect } from "react";

function useInView(threshold = 0.12) {
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

const EASE = "cubic-bezier(.22,1,.36,1)";

function slideStyle(visible: boolean, direction: "left" | "right" | "up", delay = 0): React.CSSProperties {
  const hidden =
    direction === "left"  ? "translateX(-48px) translateY(12px)" :
    direction === "right" ? "translateX(48px)  translateY(12px)" :
                            "translateY(36px)";
  return {
    opacity:   visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : hidden,
    transition: `opacity 0.7s ${EASE} ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
  };
}

function AnimatedHeroText() {
  const words = ["Dubai", "Properties", "for", "Rent"];
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight flex flex-wrap justify-center gap-x-3">
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            animation: `heroWordIn 0.6s ${EASE} ${i * 90 + 150}ms forwards`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

/* ── Carousel — arrows shift by 1 item, always shows 3 ── */
function Carousel({ items }: { items: { img: string; label: string }[] }) {
  const [startIndex, setStartIndex] = useState(0);
  const total = items.length;

  const prev = () => setStartIndex((i) => (i - 1 + total) % total);
  const next = () => setStartIndex((i) => (i + 1) % total);

  const visibleItems = [0, 1, 2].map((offset) => ({
    item: items[(startIndex + offset) % total],
    key: (startIndex + offset) % total,
  }));

  return (
    <div className="relative px-8">
      {/* Left arrow */}
      <button
        onClick={prev}
        className="carousel-arrow absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-md bg-white border border-gray-200 shadow-md flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="carousel-arrow absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-md bg-white border border-gray-200 shadow-md flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 3 visible cards */}
      <div className="grid grid-cols-3 gap-6">
        {visibleItems.map(({ item, key }) => (
          <div key={key} className="carousel-card rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-white">
            <div className="overflow-hidden rounded-md m-3">
              <img
                src={item.img}
                alt={item.label}
                className="carousel-img w-full h-56 object-cover"
              />
            </div>
            <p className="text-center font-semibold text-gray-900 pb-5 text-lg">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`carousel-dot h-2 rounded-sm transition-all duration-300 ${
              i === startIndex ? "bg-gray-800 w-5" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RentPage() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", location: "", budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  /* Refs */
  const { ref: subtitleRef,   visible: subtitleV   } = useInView(0.1);
  const { ref: breadcrumbRef, visible: breadcrumbV } = useInView(0.1);
  const { ref: findImgRef,    visible: findImgV    } = useInView();
  const { ref: findTextRef,   visible: findTextV   } = useInView();
  const { ref: typesHeadRef,  visible: typesHeadV  } = useInView(0.15);
  const { ref: typesCarRef,   visible: typesCarV   } = useInView(0.1);
  const { ref: whyImgRef,     visible: whyImgV     } = useInView();
  const { ref: whyTextRef,    visible: whyTextV    } = useInView();
  const { ref: dhrBgRef,      visible: dhrBgV      } = useInView(0.1);
  const { ref: commHeadRef,   visible: commHeadV   } = useInView(0.15);
  const { ref: commCarRef,    visible: commCarV    } = useInView(0.1);
  const { ref: formVideoRef,  visible: formVideoV  } = useInView();
  const { ref: formPanelRef,  visible: formPanelV  } = useInView();

  const propertyTypes = [
    { img: "/images/studio.png",            label: "Studio Apartments" },
    { img: "/images/bedroomapartments.png", label: "1–4 Bedroom Apartments" },
    { img: "/images/villas.png",            label: "Villas & Townhouses" },
    { img: "/images/duplexes.png",          label: "Duplexes & Lofts" },
    { img: "/images/penthouses.png",        label: "Penthouses" },
    { img: "/images/fullyfurnished.png",    label: "Fully Furnished" },
    { img: "/images/unfurnished.png",       label: "Unfurnished" },
  ];

  const communities = [
    { img: "/images/downtown.png",    label: "Downtown Dubai" },
    { img: "/images/dubaimarina.png", label: "Dubai Marina" },
    { img: "/images/businessbay.png", label: "Business Bay" },
    { img: "/images/difc.png",        label: "DIFC" },
    { img: "/images/palm.png",        label: "Palm Jumeirah" },
    { img: "/images/hillsestate.png", label: "Dubai Hills Estate" },
  ];

  const dhrFeatures = [
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Transparent rental process" },
    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Wide selection of ready-to-move-in units" },
    { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Verified listings — no duplicates or inflated prices" },
    { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", label: "Assistance with tenancy contracts & EJARI" },
    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Flexible options: furnished, unfurnished, and serviced" },
    { icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", label: "Smooth move-in coordination" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%)  skewX(-12deg); }
        }

        .section-img {
          transition: transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease;
        }
        .section-img:hover { transform: scale(1.03) rotate(-0.4deg); box-shadow: 0 32px 64px rgba(0,0,0,0.18); }

        .carousel-card {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
        }
        .carousel-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(0,0,0,0.12); }
        .carousel-img { transition: transform 0.5s cubic-bezier(.22,1,.36,1); }
        .carousel-card:hover .carousel-img { transform: scale(1.06); }

        .carousel-arrow {
          transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s cubic-bezier(.34,1.56,.64,1);
        }
        .carousel-arrow:hover {
          background: #111827;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          transform: translateY(-50%) scale(1.1);
        }
        .carousel-arrow:hover svg { stroke: white; }

        .dhr-card {
          position: relative; overflow: hidden;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease, border-color 0.3s ease;
        }
        .dhr-card::after {
          content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%) skewX(-12deg); pointer-events: none;
        }
        .dhr-card:hover::after { animation: shimmer 0.6s ease forwards; }
        .dhr-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.25); border-color: rgba(255,255,255,0.25); }
        .dhr-card .dhr-icon { transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); }
        .dhr-card:hover .dhr-icon { transform: scale(1.2) rotate(8deg); }

        .why-bullet { transition: transform 0.28s ease; }
        .why-bullet:hover { transform: translateX(5px); }

        .btn-dark {
          position: relative; overflow: hidden;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease;
        }
        .btn-dark::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transform: translateX(-100%); transition: transform 0.5s ease;
        }
        .btn-dark:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-dark:hover::after { transform: translateX(100%); }
        .btn-dark:active { transform: scale(0.97); }

        .btn-outline {
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
          border: 1.5px solid rgba(255,255,255,0.5);
        }
        .btn-outline:hover { background: white; color: #0f172a; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.2); }

        .form-input {
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .form-input:focus { border-color: #111827; box-shadow: 0 0 0 3px rgba(17,24,39,0.08); transform: scale(1.005); outline: none; }
        .form-input:hover { border-color: #9ca3af; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden h-screen">
        {/* Background image — fully visible with dark overlay on top */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rent.png')" }}
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <AnimatedHeroText />
          <p
            ref={subtitleRef}
            style={{
              opacity: subtitleV ? 1 : 0,
              transform: subtitleV ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.65s ${EASE} 0.65s, transform 0.65s ${EASE} 0.65s`,
            }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
          >
            Explore apartments, villas, and townhouses available for rent in Dubai's most desirable communities. DHR makes renting simple, fast, and stress-free.
          </p>
          <div
            ref={breadcrumbRef}
            style={{
              opacity: breadcrumbV ? 1 : 0,
              transform: breadcrumbV ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.55s ease 0.85s, transform 0.55s ease 0.85s`,
            }}
            className="flex items-center justify-center gap-2 mt-8 text-gray-300 text-sm"
          >
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <span>›</span>
            <span className="text-white">Rent</span>
          </div>
        </div>
      </section>

      {/* ── FIND YOUR IDEAL RENTAL HOME ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div ref={findImgRef} style={slideStyle(findImgV, "left")} className="order-2 lg:order-1">
              <div className="section-img relative rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/rental.png" alt="Rental Home in Dubai" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div ref={findTextRef} style={slideStyle(findTextV, "right", 100)} className="order-1 lg:order-2">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-3">Rental Properties</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">Find Your Ideal<br />Rental Home in Dubai</h2>
              <div className="w-12 h-0.5 bg-gray-900 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rent Property in Dubai</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Renting a home in <strong>Dubai</strong> is a popular choice for thousands of expats and locals who enjoy the city's unparalleled lifestyle without the long-term commitment of buying. Dubai's rental market is <strong>vibrant and diverse</strong>, offering everything from chic urban apartments to spacious family villas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Thanks to a cosmopolitan population and steady economic growth, there's strong demand for quality rentals — and that means plenty of options for tenants in every budget and lifestyle segment.
              </p>
              <button className="btn-dark bg-gray-900 text-white px-8 py-3.5 rounded-md font-semibold cursor-pointer">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── RENTAL PROPERTY TYPES ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div ref={typesHeadRef} style={slideStyle(typesHeadV, "up")} className="text-center mb-12">
            <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Rental Property Types</h2>
            <p className="text-gray-500 text-base">Types of Rental Properties Available — Short-term & Long-term Rentals</p>
          </div>
          <div ref={typesCarRef} style={slideStyle(typesCarV, "up", 100)}>
            <Carousel items={propertyTypes} />
          </div>
        </div>
      </section>

      {/* ── WHY RENT IN DUBAI ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div ref={whyTextRef} style={slideStyle(whyTextV, "left")} className="order-1">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-3">Living in Dubai</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">Why Rent<br />in Dubai?</h2>
              <div className="w-12 h-0.5 bg-gray-900 mb-8" />
              <div className="space-y-6">
                {[
                  {
                    title: "Flexibility",
                    body: "Renting allows you to enjoy life in Dubai on your own terms. Lease contracts are typically for 1 year, and with many new projects coming up, tenants can relocate as their needs change. With new long-term visas and tenant-friendly laws, renting in Dubai is straightforward and secure.",
                  },
                  {
                    title: "Wide Range of Choices",
                    body: "Dubai's rental offerings span all property types, meeting the varied needs of its residents. From studio and 1-bedroom apartments ideal for singles, to large penthouses, duplexes, villas and townhouses in gated communities — complete with private gardens and pools.",
                  },
                ].map((item, i) => (
                  <div key={i} className="why-bullet flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-sm bg-gray-900 mt-2.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}:</h4>
                      <p className="text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-dark mt-8 bg-gray-900 text-white px-8 py-3.5 rounded-md font-semibold cursor-pointer">
                Learn More
              </button>
            </div>

            <div ref={whyImgRef} style={slideStyle(whyImgV, "right", 100)} className="order-2">
              <div className="section-img relative rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/why.png" alt="Why Rent in Dubai" className="w-full h-auto object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY RENT WITH DHR ── */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/skyline.png')" }}
      >
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 container mx-auto px-6">
          <div ref={dhrBgRef} style={slideStyle(dhrBgV, "up")} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why Rent with DHR</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {dhrFeatures.map((feature, i) => (
              <div
                key={i}
                style={{
                  opacity: dhrBgV ? 1 : 0,
                  transform: dhrBgV ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ${EASE} ${i * 80 + 200}ms, transform 0.6s ${EASE} ${i * 80 + 200}ms`,
                }}
                className="dhr-card bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-6 flex flex-col items-center text-center gap-4 cursor-default"
              >
                <div className="dhr-icon w-14 h-14 rounded-md bg-white/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <p className="text-white font-semibold text-sm leading-snug">{feature.label}</p>
              </div>
            ))}
          </div>

          <div
            style={{ opacity: dhrBgV ? 1 : 0, transition: `opacity 0.6s ease 800ms` }}
            className="flex justify-center"
          >
            <button className="btn-outline text-white px-10 py-3.5 rounded-md font-semibold cursor-pointer">
              Contact Us for Rentals
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURED COMMUNITIES ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div ref={commHeadRef} style={slideStyle(commHeadV, "up")} className="text-center mb-12">
            <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-3">Locations</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Featured Communities</h2>
            <p className="text-gray-500 text-base">Explore Dubai's most prestigious and growth-focused locations.</p>
          </div>
          <div ref={commCarRef} style={slideStyle(commCarV, "up", 100)}>
            <Carousel items={communities} />
          </div>
        </div>
      </section>

      {/* ── LET'S HELP YOU FIND THE PERFECT PROPERTY ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">

            {/* Video side */}
            <div ref={formVideoRef} style={slideStyle(formVideoV, "left")} className="relative rounded-xl overflow-hidden shadow-2xl min-h-[560px]">
              <video
                src="/videos/vertical/vid2.mp4"
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl font-bold leading-snug">Find your dream home in Dubai's finest communities.</p>
              </div>
            </div>

            {/* Form side */}
            <div ref={formPanelRef} style={slideStyle(formPanelV, "right", 100)}>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-widest mb-3">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">Let's Help You Find<br />the Perfect Property</h2>
              <p className="text-gray-500 mb-8">Share your requirements, and we'll assist you with your search.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400" required />
                <input type="email" name="email" placeholder="E-mail Address" value={formData.email} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400" required />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400" required />
                <input type="text" name="location" placeholder="Desired Location" value={formData.location} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400" />
                <input type="text" name="budget" placeholder="Budget (AED)" value={formData.budget} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400" />
                <textarea name="message" placeholder="Let us know what else you require." value={formData.message} onChange={handleChange} rows={4} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-400 resize-none" />
                <button type="submit" className="btn-dark bg-gray-900 text-white font-semibold px-10 py-3.5 rounded-md cursor-pointer">
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}