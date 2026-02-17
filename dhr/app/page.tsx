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
      <section id="services" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Buy Property</h3>
              <p className="text-gray-600">Find your dream home from our extensive portfolio of premium properties</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sell Property</h3>
              <p className="text-gray-600">Get the best value for your property with our expert marketing strategies</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Rent Property</h3>
              <p className="text-gray-600">Flexible rental options for residential and commercial properties</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Property Management</h3>
              <p className="text-gray-600">Complete property management services for landlords and investors</p>
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