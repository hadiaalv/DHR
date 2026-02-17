import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ── About Us Section ── */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: animated blob image */}
            <div className="flex justify-center md:justify-start anim-slide-l">
              <div
                className="blob-wrap relative overflow-hidden"
                style={{
                  width: "480px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src="/images/h2.webp"
                  alt="Dream Heaven Realty"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="flex flex-col justify-center anim-slide-r delay-100">
              <span className="amber-tag text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3 cursor-default">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                <span className="heading-underline">Dubai Real Estate.</span>{" "}
                Faster Deals.{" "}
                <span className="heading-underline">Smarter Returns.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dream Heaven Reality (DHR) is a Dubai-based brokerage
                specializing in Downtown, Business Bay, DIFC, Marina, and Burj
                Khalifa view properties. We combine market intelligence, strong
                developer relations, and transparent processes to help buyers,
                investors, and agents move confidently and profitably.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/buy" className="about-btn-dark inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md">
                  View Properties
                </a>
                <a href="/earn-with-dhr" className="about-btn-outline inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold">
                  Join as Agent
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section
        id="services"
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="services-overlay absolute inset-0" style={{ background: "rgba(5, 10, 25, 0.72)" }} />

        <div className="relative z-10 container mx-auto px-6">
          <h2
            className="services-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white text-center mb-14 anim-fade-up cursor-default"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why the UAE is Becoming a Global Wealth Magnet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                title: "Family, Infrastructure,\nand Long-Term Vision",
                body: "The UAE supports family-owned businesses, prioritizes generational prosperity, and invests heavily in infrastructure, positioning itself for sustainable growth.",
                delay: "delay-100",
              },
              {
                title: "Regulated and Digitally\nAdvanced Market",
                body: "The UAE real estate market benefits from mature regulations, digital registration, and investor protection.",
                delay: "delay-300",
              },
              {
                title: "Competitive Value in\nGlobal Terms",
                body: "$1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft. in London or 172 sq.ft. in Monaco.",
                delay: "delay-500",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`glass-card anim-fade-up ${card.delay} rounded-2xl p-8 text-center flex flex-col`}
                style={{
                  background: "rgba(160, 170, 190, 0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <h3
                  className="text-white font-bold text-sm uppercase tracking-widest mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", whiteSpace: "pre-line" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="anim-slide-l">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="heading-underline">Why Choose Dream Heaven Realty?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                With over 15 years of experience in the real estate industry, we've built a reputation for excellence,
                integrity, and outstanding customer service.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Trusted by Thousands", desc: "Over 1000+ satisfied clients have found their dream properties with us" },
                  { title: "Expert Team",           desc: "Our experienced agents provide personalized service and expert guidance" },
                  { title: "Best Market Prices",    desc: "Competitive pricing and transparent transactions with no hidden fees" },
                ].map((item, i) => (
                  <div key={i} className={`feature-row flex items-start anim-fade-up delay-${(i + 1) * 100}`}>
                    <div className="feature-icon-wrap bg-gray-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative anim-slide-r delay-200">
              <div className="why-img-wrap rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero.jpg"
                  alt="Why Choose Us"
                  className="rounded-2xl w-full block grayscale"
                />
              </div>
              <div className="years-badge absolute -bottom-6 -left-6 rounded-xl border border-gray-200 bg-white/90 p-6 text-gray-900 shadow-xl backdrop-blur cursor-default">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="bg-linear-to-b from-white to-gray-50 text-gray-900 text-center py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl anim-fade-up">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to find your next address in{" "}
              <span className="heading-underline">Dubai?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 anim-fade-up delay-200">
              Share your preferences and receive a hand-picked shortlist of properties within 24 hours,
              curated by our senior advisors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row anim-fade-up delay-300">
              <button className="btn-primary rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
                Get a personalized shortlist
              </button>
              <button className="btn-outline rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900">
                Book a consultation call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}