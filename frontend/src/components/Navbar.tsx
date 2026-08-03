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
              className="text-[16px] font-normal flex gap-2 cursor-pointer border-border text-primary hover:bg-secondary hover:text-muted-foreground transition-all duration-[400ms] rounded-[5px] h-10 px-4"
            >
              <Phone className="size-[18px]" />
              WhatsApp
            </Button>
          </a>
          <Link to="/kontak?ref=quotation">
            <Button className="text-[16px] font-medium flex gap-2 group cursor-pointer bg-primary hover:opacity-90 text-primary-foreground transition-all duration-[400ms] rounded-[5px] h-10 px-4">
              Hubungi Kami
              <ArrowRight className="size-[18px] group-hover:translate-x-1 transition-transform" />
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
                "block px-4 py-3 text-[16px] font-normal transition-colors duration-[400ms] rounded-[5px]",
                isActive(item.link)
                  ? "text-muted-foreground bg-secondary/50 font-semibold"
                  : "text-primary hover:text-muted-foreground hover:bg-secondary",
              )}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT.%20Budi%20Mulya%20Jaya,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full text-[16px] font-normal flex gap-2 justify-center border-border text-primary hover:bg-secondary hover:text-muted-foreground transition-all duration-[400ms] rounded-[5px] h-11"
              >
                <Phone className="size-[18px]" />
                WhatsApp
              </Button>
            </a>
            <Link
              to="/kontak?ref=quotation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full text-[16px] font-medium bg-primary hover:opacity-90 text-primary-foreground rounded-[5px] h-11 transition-all duration-[400ms]">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
