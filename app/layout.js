
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Linkly — Friendly and Brandable",
  description: "A simple URL shortener to create clean, short, and shareable links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen w-full flex flex-col overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
