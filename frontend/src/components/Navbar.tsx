import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";

export default function NavbarComponent() {
  const navItems = [
    { name: "Beranda", link: "/" },
    { name: "Tentang Kami", link: "/tentang" },
    { name: "Layanan", link: "/layanan" },
    { name: "Proyek", link: "/proyek" },
    { name: "Alat Berat", link: "/alat-berat" },
    { name: "Galeri", link: "/galeri" },
    { name: "Kontak", link: "/kontak" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT.%20Budi%20Mulya%20Jaya,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="font-bold flex gap-2 cursor-pointer border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 transition-all rounded-full"
            >
              <Phone className="size-4" />
              WhatsApp
            </Button>
          </a>
          <Link to="/kontak?ref=quotation">
            <Button className="font-bold flex gap-2 group cursor-pointer bg-primary hover:bg-primary/95 text-primary-foreground transition-all rounded-full">
              Hubungi Kami
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm font-bold transition-colors rounded-lg",
                isActive(item.link)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT.%20Budi%20Mulya%20Jaya,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full font-bold flex gap-2 justify-center border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 transition-all rounded-full"
              >
                <Phone className="size-4" />
                WhatsApp
              </Button>
            </a>
            <Link
              to="/kontak?ref=quotation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full font-bold bg-primary hover:bg-primary/95 text-primary-foreground rounded-full">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
