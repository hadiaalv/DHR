"use client";

import { useState, useRef, useEffect } from "react";

/* ── fires once when element enters viewport ── */
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

/* ── Hero heading animated word by word ── */
function AnimatedHeroText() {
  const words = ["Agents,", "Keep", "up", "to", "70%", "of", "Your", "Commission"];
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

export default function AgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", reraStatus: "", experienceLevel: "", message: "",
  });

  const toggleFaq = (index: number) => { setOpenFaq(openFaq === index ? null : index); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  /* In-view refs */
  const { ref: subtitleRef,   visible: subtitleV   } = useInView(0.1);
  const { ref: breadcrumbRef, visible: breadcrumbV } = useInView(0.1);
  const { ref: offerImgRef,   visible: offerImgV   } = useInView();
  const { ref: offerTextRef,  visible: offerTextV  } = useInView();
  const { ref: benHeadRef,    visible: benHeadV    } = useInView(0.15);
  const { ref: ben0Ref, visible: ben0V } = useInView(0.1);
  const { ref: ben1Ref, visible: ben1V } = useInView(0.1);
  const { ref: ben2Ref, visible: ben2V } = useInView(0.1);
  const { ref: ben3Ref, visible: ben3V } = useInView(0.1);
  const benRefs = [ben0Ref, ben1Ref, ben2Ref, ben3Ref];
  const benVisibles = [ben0V, ben1V, ben2V, ben3V];
  const { ref: splitRef,     visible: splitV     } = useInView(0.15);
  const { ref: howHeadRef,   visible: howHeadV   } = useInView(0.15);
  const { ref: step0Ref, visible: step0V } = useInView(0.1);
  const { ref: step1Ref, visible: step1V } = useInView(0.1);
  const { ref: step2Ref, visible: step2V } = useInView(0.1);
  const { ref: step3Ref, visible: step3V } = useInView(0.1);
  const stepRefs = [step0Ref, step1Ref, step2Ref, step3Ref];
  const stepVisibles = [step0V, step1V, step2V, step3V];
  const { ref: faqHeadRef,   visible: faqHeadV   } = useInView(0.15);
  const { ref: faqListRef,   visible: faqListV   } = useInView(0.1);
  const { ref: partnerImgRef,  visible: partnerImgV  } = useInView();
  const { ref: partnerFormRef, visible: partnerFormV } = useInView();

  const faqs = [
    { question: "How much commission does an agent earn with DHR?", answer: "Agents can keep up to 70% of their commission – the highest in the industry." },
    { question: "Can I receive my commission earlier?", answer: "Yes! In approved cases, you can receive advance payouts instead of waiting the standard 30–60 days." },
    { question: "Will my client data and information remain confidential?", answer: "Absolutely. DHR maintains strict confidentiality protocols and your client data is fully protected." },
    { question: "Do I have to work full-time with DHR?", answer: "No. DHR welcomes freelancers, independent agents, and those with their own networks." },
    { question: "What kind of support does DHR provide during a deal?", answer: "DHR handles admin, compliance, and client management, so you can focus on closing deals." },
    { question: "Will I get access to listings and developer inventory?", answer: "Yes. You'll have access to our full inventory, including exclusive developer listings." },
    { question: "How long does agent onboarding take?", answer: "Onboarding is fast! A simple form and automatic email confirmation get you started quickly." },
    { question: "Do I need a RERA card to work with DHR?", answer: "Yes, a valid RERA card is required to work as a real estate agent in Dubai." },
  ];

  const offers = [
    { title: "Up to 70% commission take-home for the agent", desc: "Highest in the industry." },
    { title: "Advance payout", desc: "In selected cases, commissions can be paid earlier than the usual 30–60 days." },
    { title: "Support for closing deals / documentation", desc: "DHR handles admin, compliance, and client management." },
    { title: "All agents are welcome", desc: "Freelancers, independent agents, or those with their own networks" },
    { title: "Fast onboarding", desc: "Simple form for agents to apply + automatic email confirmation." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 0.5; }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%)  skewX(-12deg); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30,58,138,0.4); }
          50%      { box-shadow: 0 0 0 10px rgba(30,58,138,0); }
        }

        /* ── Offer icons spin in ── */
        .offer-icon {
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1),
                      background 0.28s ease,
                      border-color 0.28s ease;
        }
        .offer-row:hover .offer-icon {
          transform: rotate(8deg) scale(1.1);
          background: #111827;
          border-color: #111827;
        }
        .offer-row:hover .offer-icon svg { stroke: white; }
        .offer-row { transition: transform 0.28s ease, background 0.25s ease; border-radius: 1rem; padding: 0.5rem; margin: -0.5rem; }
        .offer-row:hover { transform: translateX(6px); background: #f9fafb; }

        /* ── Benefit cards ── */
        .benefit-card {
          transition: transform 0.4s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease,
                      background 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        /* shimmer sweep on hover */
        .benefit-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: translateX(-100%) skewX(-12deg);
          pointer-events: none;
        }
        .benefit-card:hover::after {
          animation: shimmer 0.65s ease forwards;
        }
        /* top accent bar slides in */
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1e3a8a, #1e40af);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .benefit-card:hover::before { transform: scaleX(1); }
        .benefit-card:hover {
          transform: translateY(-14px) scale(1.04);
          box-shadow: 0 28px 56px rgba(30,58,138,0.15), 0 8px 20px rgba(0,0,0,0.08);
          border-color: rgba(30,58,138,0.2);
          background: #f5f7ff;
        }
        .benefit-card .icon-wrap {
          transition: transform 0.5s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.4s ease,
                      background 0.35s ease;
        }
        .benefit-card:hover .icon-wrap {
          transform: scale(1.22) rotate(15deg) translateY(-4px);
          box-shadow: 0 10px 24px rgba(59,130,246,0.22);
        }
        /* icon bg shift on card hover */
        .benefit-card:hover .icon-wrap.bg-blue-50   { background: #c7d2fe; }
        .benefit-card:hover .icon-wrap.bg-green-50  { background: #bbf7d0; }
        .benefit-card:hover .icon-wrap.bg-purple-50 { background: #e9d5ff; }
        .benefit-card:hover .icon-wrap.bg-slate-50  { background: #e2e8f0; }
        .benefit-card h3 {
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .benefit-card:hover h3 {
          color: #1e3a8a;
          transform: translateY(-2px);
        }

        /* ── Step cards — 3 round corners + 1 pointed (bottom-left) ── */
        .step-card {
          position: relative;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem 0.75rem 0.75rem 0;
          padding: 2.5rem 1.75rem 2rem;
          text-align: center;
          cursor: pointer;
          transition:
            transform   0.4s cubic-bezier(.22,1,.36,1),
            box-shadow  0.4s ease,
            border-color 0.35s ease,
            background   0.35s ease;
          overflow: hidden;
        }
        /* diagonal fill from bottom-left pointed corner */
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f1f5c 0%, #1e3a8a 55%, #1e40af 100%);
          border-radius: inherit;
          transform: scaleY(0);
          transform-origin: bottom left;
          transition: transform 0.45s cubic-bezier(.22,1,.36,1);
          z-index: 0;
        }
        .step-card:hover::before { transform: scaleY(1); }
        .step-card:hover {
          transform: translateY(-12px) scale(1.04);
          box-shadow: 0 24px 50px rgba(15,31,92,0.28), 0 6px 16px rgba(0,0,0,0.1);
          border-color: #1e3a8a;
        }
        /* make sure text is above the fill */
        .step-card > * { position: relative; z-index: 1; }

        /* step number badge */
        .step-badge {
          width: 5rem; height: 5rem;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          border: 3px solid #111827;
          display: flex; align-items: center; justify-content: center;
          transition:
            transform   0.4s cubic-bezier(.34,1.56,.64,1),
            background  0.35s ease,
            border-color 0.35s ease,
            box-shadow  0.35s ease;
        }
        .step-badge span {
          font-size: 1.75rem; font-weight: 800;
          color: #111827;
          transition: color 0.3s ease;
        }
        .step-card:hover .step-badge {
          transform: scale(1.15) rotate(-5deg);
          background: white;
          border-color: white;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.3);
          animation: badgePulse 1.2s ease infinite;
        }
        .step-card:hover .step-badge span { color: #1e3a8a; }
        .step-card .step-text {
          color: #111827;
          font-weight: 600;
          font-size: 1.05rem;
          line-height: 1.55;
          transition: color 0.3s ease;
        }
        .step-card:hover .step-text { color: white; }

        /* ── FAQ accordion — smooth height via max-height ── */
        .faq-item {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .faq-item:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .faq-chevron {
          transition: transform 0.45s cubic-bezier(.34,1.56,.64,1);
          flex-shrink: 0;
        }
        .faq-chevron.open { transform: rotate(90deg); }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition:
            max-height 0.5s cubic-bezier(.22,1,.36,1),
            opacity    0.4s ease,
            padding    0.4s ease;
          opacity: 0;
          padding: 0 1.5rem;
        }
        .faq-answer.open {
          max-height: 300px;
          opacity: 1;
          padding: 0 1.5rem 1.25rem;
        }

        /* ── Offer icons spin in ── */
        /* ── Image hover ── */
        .section-img {
          transition: transform 0.5s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.5s ease;
        }
        .section-img:hover { transform: scale(1.03) rotate(-0.5deg); box-shadow: 0 32px 64px rgba(0,0,0,0.2); }

        /* ── Buttons ── */
        .btn-primary {
          position: relative; overflow: hidden;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.28s ease,
                      background 0.22s ease;
        }
        .btn-primary::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-primary:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .btn-primary:hover::after { transform: translateX(100%); }
        .btn-primary:active { transform: scale(0.97); }

        .btn-yellow {
          position: relative; overflow: hidden;
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.28s ease,
                      background 0.22s ease;
        }
        .btn-yellow::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-yellow:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 24px rgba(234,179,8,0.35); }
        .btn-yellow:hover::after { transform: translateX(100%); }
        .btn-yellow:active { transform: scale(0.97); }

        /* ── Form inputs ── */
        .form-input {
          transition: border-color 0.25s ease,
                      box-shadow 0.25s ease,
                      transform 0.2s ease;
        }
        .form-input:focus { border-color: #111827; box-shadow: 0 0 0 3px rgba(17,24,39,0.08); transform: scale(1.005); }
        .form-input:hover { border-color: #9ca3af; }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')", opacity: 0, animation: "overlayFadeIn 1.2s ease 0.1s forwards" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center px-6">
          <AnimatedHeroText />
          <p
            ref={subtitleRef}
            style={{
              opacity: subtitleV ? 1 : 0,
              transform: subtitleV ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.65s ${EASE} 0.65s, transform 0.65s ${EASE} 0.65s`,
            }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            Work with DHR – Dubai's fastest-paying brokerage partner program. Stop losing your commission to low splits and delayed payments.
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
            <span className="text-white">For Agents</span>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div ref={offerImgRef} style={slideStyle(offerImgV, "left")} className="order-2 lg:order-1">
              <div className="section-img relative rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/agents-meeting.jpg" alt="DHR Agent Meeting" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div ref={offerTextRef} style={slideStyle(offerTextV, "right", 100)} className="order-1 lg:order-2">
              <p className="text-black font-semibold text-sm md:text-base mb-2 uppercase tracking-widest">Our Agent Program</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">What we offer to agents</h2>
              <div className="space-y-6">
                {offers.map((item, i) => (
                  <div
                    key={i}
                    className="offer-row flex gap-4"
                    style={{
                      opacity: offerTextV ? 1 : 0,
                      transform: offerTextV ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 0.55s ${EASE} ${i * 80 + 200}ms, transform 0.55s ${EASE} ${i * 80 + 200}ms`,
                    }}
                  >
                    <div className="offer-icon flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary mt-8 bg-black text-white px-8 py-3 rounded-md font-semibold cursor-pointer">
                Read more
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">

          <div ref={benHeadRef} style={slideStyle(benHeadV, "up")} className="text-center mb-12">
            <p className="text-black font-semibold text-sm md:text-base mb-2 uppercase tracking-widest">For Agents</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Benefits We Provide</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", title: "Faster payouts", bg: "bg-blue-50", color: "text-blue-800" },
              { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "Access to inventory", bg: "bg-green-50", color: "text-green-800" },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Support system", bg: "bg-purple-50", color: "text-purple-800" },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Professional backend", bg: "bg-slate-50", color: "text-slate-700" },
            ].map((item, i) => (
              <div
                key={i}
                ref={benRefs[i]}
                style={slideStyle(benVisibles[i], "up", i * 100)}
                className="benefit-card bg-white rounded-lg p-8 shadow-sm text-center cursor-pointer border border-gray-100"
              >
                <div className={`icon-wrap w-20 h-20 mx-auto mb-6 ${item.bg} rounded-full flex items-center justify-center`}>
                  <svg className={`w-10 h-10 ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>

          <div ref={splitRef} style={slideStyle(splitV, "up")} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Commission structure breakdown up to</h3>
            <p className="text-5xl md:text-6xl font-bold">
              <span className="text-blue-900">70%</span>
              <span className="text-gray-900"> to agent, </span>
              <span className="text-blue-900">30%</span>
              <span className="text-gray-900"> to company</span>
            </p>
          </div>

        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">

          <div ref={howHeadRef} style={slideStyle(howHeadV, "up")} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">HOW IT WORKS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              "You bring a buyer or seller lead",
              "DHR supports with property access, paperwork & registration",
              "Sale closes — commission is split",
              "You get Up to 70% payout (advance option available where approved)",
            ].map((text, i) => (
              <div
                key={i}
                ref={stepRefs[i]}
                style={slideStyle(stepVisibles[i], "up", i * 110)}
                className="step-card"
              >
                <div className="step-badge">
                  <span>{i + 1}</span>
                </div>
                <p className="step-text">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">

          <div ref={faqHeadRef} style={slideStyle(faqHeadV, "up")} className="text-center mb-12">
            <p className="text-black font-semibold text-sm md:text-base mb-2 uppercase tracking-widest">FAQs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Most Popular Questions</h2>
          </div>

          <div ref={faqListRef} style={slideStyle(faqListV, "up", 150)} className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item bg-white rounded-md shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`faq-chevron w-6 h-6 text-gray-900 ${openFaq === i ? "open" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Become a Partner ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            <div ref={partnerImgRef} style={slideStyle(partnerImgV, "left")}>
              <div className="section-img relative rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/partner-team.jpg" alt="Become a Partner" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div ref={partnerFormRef} style={slideStyle(partnerFormV, "right", 100)}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Become a Partner Agent</h2>
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
                  <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
                  <select name="reraStatus" value={formData.reraStatus} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900" required>
                    <option value="">RERA Status</option>
                    <option value="active">Active RERA Card</option>
                    <option value="pending">Pending</option>
                    <option value="none">No RERA Card</option>
                  </select>
                </div>

                <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900" required>
                  <option value="">Experience level</option>
                  <option value="beginner">0-1 years</option>
                  <option value="intermediate">1-3 years</option>
                  <option value="experienced">3-5 years</option>
                  <option value="expert">5+ years</option>
                </select>

                <textarea name="message" placeholder="Message / Notes" value={formData.message} onChange={handleChange} rows={5} className="form-input w-full bg-gray-50 border border-gray-200 rounded-md px-5 py-3.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"></textarea>

                <button type="submit" className="btn-primary w-full sm:w-auto bg-black text-white font-semibold px-10 py-3.5 rounded-md cursor-pointer">
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}