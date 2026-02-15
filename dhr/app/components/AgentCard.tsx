export default function AgentCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="/images/agent.jpg"
        alt="Agent"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-bold">John Doe</h3>
      <p className="text-gray-500">Senior Property Consultant</p>
    </div>
  );
}
