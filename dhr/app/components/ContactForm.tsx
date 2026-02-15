export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-3 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-3 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full border p-3 rounded"
        rows={5}
      />
      <button className="bg-yellow-500 text-white px-6 py-3 rounded">
        Send Message
      </button>
    </form>
  );
}
