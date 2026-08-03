import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Company Header */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
