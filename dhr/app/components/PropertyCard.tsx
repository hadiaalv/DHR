export default function PropertyCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="/images/property.jpg"
        alt="Property"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">Luxury Apartment</h3>
        <p className="text-gray-500">Dubai Marina</p>
        <p className="text-yellow-500 font-semibold mt-2">$850,000</p>
      </div>
    </div>
  );
}
