"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-120 flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Get in touch with our team. We're here to help you find your perfect property.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div>
              <p className="text-black font-semibold text-sm md:text-base mb-2">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  />
                </div>

                {/* Email and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all resize-none"
                  required
                ></textarea>

                {/* reCAPTCHA */}
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg p-4">
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

                {/* Send Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="bg-black text-white rounded-lg px-12 py-3 font-semibold hover:bg-gray-800 transition-colors text-lg"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-black font-semibold text-sm md:text-base mb-2">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Info</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Emails and Phone Card */}
                <div className="border border-gray-300 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Emails</h3>
                  <div className="space-y-4 mb-8">
                    <a href="mailto:info@dreamheavenrealty.com" className="flex items-center gap-3 hover:text-black transition-colors">
                      <span className="text-black text-2xl">✉</span>
                      <span className="text-gray-900 font-medium">info@dreamheavenrealty.com</span>
                    </a>
                    <a href="mailto:mansoor@dreamheavenrealty.com" className="flex items-center gap-3 hover:text-black transition-colors">
                      <span className="text-black text-2xl">✉</span>
                      <span className="text-gray-900 font-medium">mansoor@dreamheavenrealty.com</span>
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone / WhatsApp:</h3>
                  <a href="tel:+971561694881" className="flex items-center gap-3 hover:text-black transition-colors">
                    <span className="text-black text-2xl">📱</span>
                    <span className="text-gray-900 font-medium">+971 56 169 4881</span>
                  </a>
                </div>

                {/* Business Hours Card */}
                <div className="border border-gray-300 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours:</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-black text-3xl">🕐</span>
                    <p className="text-gray-900 text-lg font-medium">We are available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 relative rounded-lg overflow-hidden h-96 border border-gray-300 shadow-lg">
            {/* Location Info Card — made smaller with reduced padding, font sizes, and width */}
            <div className="absolute top-3 left-3 z-10 bg-white rounded-lg shadow-lg p-3 w-56 max-w-xs">
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
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}