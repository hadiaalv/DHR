import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-yellow-500">
          DREAM HEAVEN REALTY LLC
        </div>

        <div className="flex space-x-6 items-center text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/contact"
            className="bg-yellow-500 text-white px-4 py-2 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
