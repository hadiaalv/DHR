"use client";

import { useState, useRef, useEffect } from "react";

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

/* ── Hero heading words slide in one by one ── */
function AnimatedHeroText() {
  const words = ["Contact", "Us"];
  return (
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 flex flex-wrap justify-center gap-x-4">
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            animation: `heroWordIn 0.65s cubic-bezier(.22,1,.36,1) ${i * 130 + 200}ms forwards`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", subject: "", message: "",
  });
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  /* in-view refs */
  const { ref: subtitleRef,    visible: subtitleVisible    } = useInView(0.1);
  const { ref: breadcrumbRef,  visible: breadcrumbVisible  } = useInView(0.1);
  const { ref: formRef,        visible: formVisible        } = useInView(0.1);
  const { ref: infoRef,        visible: infoVisible        } = useInView(0.1);
  const { ref: emailCardRef,   visible: emailCardVisible   } = useInView(0.1);
  const { ref: hoursCardRef,   visible: hoursCardVisible   } = useInView(0.1);
  const { ref: mapRef,         visible: mapVisible         } = useInView(0.1);

  const inputClass =
    "w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 " +
    "focus:outline-none focus:ring-2 focus:ring-gray-700 " +
    "transition-all duration-200 hover:border-gray-400 hover:shadow-sm focus:scale-[1.01]";

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 0.5; }
        }

        /* input label float */
        .input-row input:focus,
        .input-row input:not(:placeholder-shown) {
          border-color: #374151;
        }

        /* send button shine */
        .btn-send {
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.28s ease,
                      background 0.22s ease;
        }
        .btn-send::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-send:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
        .btn-send:hover::after { transform: translateX(100%); }
        .btn-send:active { transform: scale(0.97); }

        /* contact cards */
        .contact-card {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.35s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1);
        }

        /* contact links */
        .contact-link {
          transition: transform 0.22s ease, color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .contact-link:hover { transform: translateX(5px); }

        /* map reveal */
        .map-wrap {
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.22,1,.36,1);
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

        <div className="relative z-10 flex h-120 flex-col items-center justify-center text-center px-6">
          <AnimatedHeroText />

          <p
            ref={subtitleRef}
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.65s cubic-bezier(.22,1,.36,1) 0.5s, transform 0.65s cubic-bezier(.22,1,.36,1) 0.5s",
            }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl"
          >
            Get in touch with our team. We're here to help you find your perfect property.
          </p>

          <div
            ref={breadcrumbRef}
            style={{
              opacity: breadcrumbVisible ? 1 : 0,
              transform: breadcrumbVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.55s ease 0.72s, transform 0.55s ease 0.72s",
            }}
            className="flex items-center justify-center gap-2 mt-6 text-gray-300"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Left: Form ── */}
            <div
              ref={formRef}
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateX(0)" : "translateX(-48px)",
                transition: "opacity 0.7s cubic-bezier(.22,1,.36,1) 0.1s, transform 0.7s cubic-bezier(.22,1,.36,1) 0.1s",
              }}
            >
              <p className="text-black font-semibold text-sm md:text-base mb-2">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="input-row grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text"  name="name"  placeholder="Your Name"  value={formData.name}  onChange={handleChange} className={inputClass} required />
                  <input type="tel"   name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div className="input-row grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" name="email"   placeholder="Email"   value={formData.email}   onChange={handleChange} className={inputClass} required />
                  <input type="text"  name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className={inputClass} />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />

                {/* Captcha */}
                <div
                  className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg p-4
                             transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                >
                  <input
                    type="checkbox"
                    id="captcha"
                    checked={isCaptchaChecked}
                    onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                    className="w-5 h-5 text-black border-gray-300 rounded focus:ring-2 focus:ring-gray-700 cursor-pointer"
                    required
                  />
                  <label htmlFor="captcha" className="text-gray-700 font-medium cursor-pointer select-none">
                    I'm not a robot
                  </label>
                  <div className="ml-auto">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button type="submit" className="btn-send bg-black text-white rounded-lg px-12 py-3 font-semibold text-lg">
                    Send Now
                  </button>
                </div>
              </form>
            </div>

            {/* ── Right: Info ── */}
            <div
              ref={infoRef}
              style={{
                opacity: infoVisible ? 1 : 0,
                transform: infoVisible ? "translateX(0)" : "translateX(48px)",
                transition: "opacity 0.7s cubic-bezier(.22,1,.36,1) 0.2s, transform 0.7s cubic-bezier(.22,1,.36,1) 0.2s",
              }}
              className="space-y-8"
            >
              <div>
                <p className="text-black font-semibold text-sm md:text-base mb-2">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Info</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Emails + Phone card */}
                <div
                  ref={emailCardRef}
                  style={{
                    opacity: emailCardVisible ? 1 : 0,
                    transform: emailCardVisible ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 0.65s cubic-bezier(.22,1,.36,1) 0.3s, transform 0.65s cubic-bezier(.22,1,.36,1) 0.3s",
                  }}
                  className="contact-card border border-gray-300 rounded-lg p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Emails</h3>
                  <div className="space-y-4 mb-8">
                    <a href="mailto:info@dreamheavenrealty.com" className="contact-link text-gray-900 font-medium hover:text-black">
                      <span className="text-black text-2xl">✉</span>
                      info@dreamheavenrealty.com
                    </a>
                    <a href="mailto:mansoor@dreamheavenrealty.com" className="contact-link text-gray-900 font-medium hover:text-black">
                      <span className="text-black text-2xl">✉</span>
                      mansoor@dreamheavenrealty.com
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone / WhatsApp:</h3>
                  <a href="tel:+971561694881" className="contact-link text-gray-900 font-medium hover:text-black">
                    <span className="text-black text-2xl">📱</span>
                    +971 56 169 4881
                  </a>
                </div>

                {/* Hours card */}
                <div
                  ref={hoursCardRef}
                  style={{
                    opacity: hoursCardVisible ? 1 : 0,
                    transform: hoursCardVisible ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 0.65s cubic-bezier(.22,1,.36,1) 0.45s, transform 0.65s cubic-bezier(.22,1,.36,1) 0.45s",
                  }}
                  className="contact-card border border-gray-300 rounded-lg p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours:</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-black text-3xl">🕐</span>
                    <p className="text-gray-900 text-lg font-medium">We are available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Map ── */}
          <div
            ref={mapRef}
            style={{
              opacity: mapVisible ? 1 : 0,
              transform: mapVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s cubic-bezier(.22,1,.36,1) 0.1s, transform 0.8s cubic-bezier(.22,1,.36,1) 0.1s",
            }}
            className="mt-16 relative rounded-lg overflow-hidden h-96 border border-gray-300 shadow-lg
                       hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="absolute top-3 left-3 z-10 bg-white rounded-lg shadow-lg p-3 w-56
                            transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-base font-bold text-gray-900 mb-1">Burj Khalifa</h3>
              <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - UAE
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Burj+Khalifa,Dubai,UAE&destination_place_id=ChIJC8MO6O9DXz4RKXFDgfhIDKA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mb-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span className="text-xs font-semibold">Directions</span>
                <span className="text-gray-400 text-xs">›</span>
              </a>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-gray-900">4.7</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600">169,842 reviews</p>
            </div>

            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.176573064328!2d55.27427631111111!3d25.197210288888886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f8c0000001%3A0x0!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1702000000000"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}