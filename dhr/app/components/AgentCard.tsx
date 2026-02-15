export default function AgentCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative inline-block mb-4">
        <img
          src="/images/agent.jpg"
          alt="Agent"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-500"
        />
        <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
      </div>
      
      <h3 className="font-bold text-xl text-gray-800 mb-1">John Doe</h3>
      <p className="text-yellow-500 font-semibold mb-3">Senior Property Consultant</p>
      <p className="text-gray-600 text-sm mb-4">15+ years of experience in luxury real estate</p>
      
      <div className="flex justify-center space-x-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">250+</div>
          <div className="text-xs text-gray-600">Properties Sold</div>
        </div>
        <div className="border-l border-gray-300"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">4.9</div>
          <div className="text-xs text-gray-600">Rating</div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm font-semibold">
          Contact
        </button>
        <button className="flex-1 border border-yellow-500 text-yellow-500 py-2 rounded-lg hover:bg-yellow-50 transition-colors text-sm font-semibold">
          View Profile
        </button>
      </div>
    </div>
  );
}