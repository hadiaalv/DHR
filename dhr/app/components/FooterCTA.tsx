export default function FooterCTA() {
  return (
    <section className="bg-black text-white text-center py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Buy or Sell Your Property?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Take the first step towards your real estate goals. Our expert team is here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg text-lg">
            Get Free Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-lg">
            Call Us Now
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <div className="font-bold">24/7 Support</div>
              <div className="text-sm text-gray-400">Always here for you</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-left">
              <div className="font-bold">Trusted Service</div>
              <div className="text-sm text-gray-400">15+ years experience</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <div className="font-bold">Best Prices</div>
              <div className="text-sm text-gray-400">Competitive rates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}