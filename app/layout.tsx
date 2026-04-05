import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Aways Trader | Professional Cleaning Services",
  description: "Expert window cleaning, solar panel washing, and building maintenance.",
};

// Define the type for the props
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        {/* Changed pt-20 to match your navbar height */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}