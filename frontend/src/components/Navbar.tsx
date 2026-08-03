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
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT.%20Budi%20Mulya%20Jaya,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-[11px] uppercase tracking-wider font-bold flex gap-2 cursor-pointer border-card-foreground text-card-foreground hover:bg-card-foreground hover:text-background transition-all duration-[400ms] rounded-none h-9 px-4"
            >
              <Phone className="size-[12px]" />
              WhatsApp
            </Button>
          </a>
          <Link to="/kontak?ref=quotation">
            <Button className="text-[11px] uppercase tracking-wider font-bold flex gap-2 group cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-[400ms] rounded-none h-9 px-4">
              Request Quote
              <ArrowRight className="size-[12px] group-hover:translate-x-1 transition-transform" />
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
                "block px-4 py-3 text-[14px] font-bold uppercase tracking-wider transition-colors duration-[400ms] border-b border-border last:border-0",
                isActive(item.link)
                  ? "text-primary"
                  : "text-card-foreground hover:text-primary",
              )}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-6 pb-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT.%20Budi%20Mulya%20Jaya,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full text-[13px] uppercase tracking-wider font-bold flex gap-2 justify-center border-card-foreground text-card-foreground hover:bg-card-foreground hover:text-background transition-all duration-[400ms] rounded-none h-12"
              >
                <Phone className="size-[16px]" />
                WhatsApp
              </Button>
            </a>
            <Link
              to="/kontak?ref=quotation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full text-[13px] uppercase tracking-wider font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 transition-all duration-[400ms]">
                Request Quote
              </Button>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
