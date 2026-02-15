export default function HeroSection() {
  return (
    <section className="bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="text-center bg-black/50 p-10 rounded">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Property
        </h1>
        <p className="text-lg">Luxury Living Starts Here</p>
      </div>
    </section>
  );
}
