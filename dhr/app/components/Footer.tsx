export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">
              Dream Heaven Realty
            </h3>
            <p className="text-gray-400">
              Your trusted partner in real estate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#properties">Properties</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@dreamheaven.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400">Social media links</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dream Heaven Realty LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}