import React, { createContext, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavbarContext = createContext({ isScrolled: false });

export function Navbar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Determine if scrolled beyond 50px
    setIsScrolled(latest > 50);
    // Navbar is always visible (tidak hilang saat scroll down)
    setVisible(true);
  });

  return (
    <NavbarContext.Provider value={{ isScrolled }}>
      <div className="h-20 w-full relative z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "fixed left-0 right-0 z-50 transition-all duration-[400ms] ease-out",
            isScrolled
              ? "top-4 mx-auto w-[96%] max-w-7xl rounded-[5px] border border-border bg-background"
              : "top-0 w-full border-b border-border bg-background",
            className,
          )}
        >
          {children}
        </motion.div>
      </div>
    </NavbarContext.Provider>
  );
}

export function NavBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isScrolled } = useContext(NavbarContext);
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between transition-all duration-[400ms] ease-out",
        isScrolled ? "py-[16px] px-6" : "py-4 px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NavbarLogo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3 text-left", className)}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary rounded text-primary-foreground font-black text-xl tracking-tighter">
        BMJ
      </div>
      <div className="flex flex-col">
        <span className="font-bold tracking-tight text-[16px] sm:text-[20px] leading-tight text-muted-foreground">
          Budi Mulya Jaya
        </span>
        <span className="text-[12px] tracking-wider text-primary">
          Road Construction
        </span>
      </div>
    </Link>
  );
}

export function NavItems({
  items,
  className,
}: {
  items: { name: string; link: string }[];
  className?: string;
}) {
  const { isScrolled } = useContext(NavbarContext);
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        "flex items-center transition-all duration-[400ms] ease-out",
        isScrolled ? "gap-2" : "gap-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={item.name}
          to={item.link}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          className={cn(
            "relative text-[16px] font-normal transition-colors duration-[400ms] ease-out",
            isScrolled ? "px-3 py-2 rounded-[5px]" : "px-4 py-2 rounded-[5px]",
            isActive(item.link)
              ? "text-muted-foreground font-semibold"
              : "text-primary hover:text-muted-foreground",
          )}
        >
          {hoveredIdx === idx && (
            <motion.span
              layoutId="hoverBackground"
              className="absolute inset-0 bg-secondary -z-10 rounded-[5px]"
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}

          {isActive(item.link) && hoveredIdx !== idx && (
            <span
              className={cn(
                "absolute inset-0 bg-secondary/50 -z-10 rounded-[5px]",
              )}
            />
          )}

          {item.name}
        </Link>
      ))}
    </div>
  );
}

export function MobileNav({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isScrolled } = useContext(NavbarContext);
  return (
    <div
      className={cn(
        "md:hidden flex flex-col transition-all duration-[400ms] ease-out",
        isScrolled ? "py-2 px-4" : "py-4 px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MobileNavHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
}

export function MobileNavToggle({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center p-2 rounded-[5px] text-muted-foreground hover:bg-secondary focus:outline-none transition-colors duration-[400ms] ease-out",
        className,
      )}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
    </button>
  );
}

export function MobileNavMenu({
  isOpen,
  children,
  className,
}: {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const { isScrolled } = useContext(NavbarContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "overflow-hidden border-t border-border/60 mt-3 pt-3 flex flex-col gap-1 pb-4",
            isScrolled ? "px-2" : "px-1",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
