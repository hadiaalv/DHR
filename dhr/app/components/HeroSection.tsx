"use client";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Dream Property
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Luxury Living Starts Here - Your Trusted Partner in Real Estate
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
            />
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
              <option>Land</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800">
              <option>Price Range</option>
              <option>$0 - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M - $2M</option>
              <option>$2M+</option>
            </select>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-yellow-400">500+</div>
            <div className="text-sm text-gray-300 mt-2">Properties Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">1000+</div>
            <div className="text-sm text-gray-300 mt-2">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">15+</div>
            <div className="text-sm text-gray-300 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}