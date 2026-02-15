import HeroSection from "./components/HeroSection";
import PropertyCard from "./components/PropertyCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </section>
    </>
  );
}
