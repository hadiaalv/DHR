"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-900 font-semibold mb-2">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
          required
        />
      </div>

      <div>
        <label className="block text-gray-900 font-semibold mb-2">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
          required
        />
      </div>

      <div>
        <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
        />
      </div>

      <div>
        <label className="block text-gray-900 font-semibold mb-2">Message</label>
        <textarea
          placeholder="Tell us about your requirements"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
          rows={5}
          required
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 text-lg"
      >
        Send Message
      </button>
    </form>
  );
}