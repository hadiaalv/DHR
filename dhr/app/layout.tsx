import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dream Heaven Realty LLC",
  description: "Premium Real Estate Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
