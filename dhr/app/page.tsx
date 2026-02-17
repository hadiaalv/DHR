import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Us Section */}
      <section
        id="about"
        className="bg-white py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image with blob/rounded border */}
            <div className="flex justify-center md:justify-start">
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  width: "480px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src="/images/h2.webp"
                  alt="Dream Heaven Realty"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right: About Us text */}
            <div className="flex flex-col justify-center">
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Dubai Real Estate. Faster Deals. Smarter Returns.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dream Heaven Reality (DHR) is a Dubai-based brokerage
                specializing in Downtown, Business Bay, DIFC, Marina, and Burj
                Khalifa view properties. We combine market intelligence, strong
                developer relations, and transparent processes to help buyers,
                investors, and agents move confidently and profitably.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/buy"
                  className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors shadow-md"
                >
                  View Properties
                </a>
                <a
                  href="/earn-with-dhr"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join as Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
 <section
        id="services"
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(5, 10, 25, 0.72)" }}
        />

        <div className="relative z-10 container mx-auto px-6">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white text-center mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why the UAE is Becoming a Global Wealth Magnet
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Card 1 */}
            <div
              className="rounded-2xl p-8 text-center flex flex-col"
              style={{
                background: "rgba(160, 170, 190, 0.18)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <h3
                className="text-white font-bold text-sm uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Family, Infrastructure,
                <br />
                and Long-Term Vision
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                The UAE supports family-owned businesses, prioritizes
                generational prosperity, and invests heavily in infrastructure,
                positioning itself for sustainable growth.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-8 text-center flex flex-col"
              style={{
                background: "rgba(160, 170, 190, 0.18)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <h3
                className="text-white font-bold text-sm uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Regulated and Digitally
                <br />
                Advanced Market
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                The UAE real estate market benefits from mature regulations,
                digital registration, and investor protection.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-2xl p-8 text-center flex flex-col"
              style={{
                background: "rgba(160, 170, 190, 0.18)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <h3
                className="text-white font-bold text-sm uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Competitive Value in
                <br />
                Global Terms
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Dubai offers some of the most accessible luxury real estate
                worldwide.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed mt-4">
                $1 million secures 980 sq.ft. in Dubai, compared to 355 sq.ft.
                in London or 172 sq.ft. in Monaco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Dream Heaven Realty?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                With over 15 years of experience in the real estate industry, we've built a reputation for excellence,
                integrity, and outstanding customer service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trusted by Thousands</h3>
                    <p className="text-gray-600">Over 1000+ satisfied clients have found their dream properties with us</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our experienced agents provide personalized service and expert guidance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Best Market Prices</h3>
                    <p className="text-gray-600">Competitive pricing and transparent transactions with no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hero.jpg"
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl grayscale"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-gray-200 bg-white/90 p-6 text-gray-900 shadow-xl backdrop-blur">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-b from-white to-gray-50 text-gray-900 text-center py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to find your next address in Dubai?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Share your preferences and receive a hand‑picked shortlist of properties within 24 hours,
              curated by our senior advisors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                Get a personalized shortlist
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50">
                Book a consultation call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}