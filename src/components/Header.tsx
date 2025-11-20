import { Link, useLocation } from "react-router-dom";
import { Menu, Diamond, Rocket, Shirt, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  index: number;
}

const NavItem = ({ to, children, index }: NavItemProps) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive =
    location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative px-6 py-2.5 rounded-2xl",
        "text-sm font-semibold transition-all duration-500",
        "overflow-hidden",
        isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
      )}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Liquid morphing background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10",
          "transition-all duration-700 ease-out",
          isActive || isHovered
            ? "opacity-100 scale-100 animate-liquid"
            : "opacity-0 scale-95"
        )}
        style={{
          borderRadius: isHovered ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%",
        }}
      />

      {/* Glowing orb effect */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          isActive || isHovered
            ? "opacity-100 scale-150 blur-xl"
            : "opacity-0 scale-100"
        )}
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.05), transparent)",
        }}
      />

      {/* Animated border */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl border-2",
          "transition-all duration-500",
          isActive
            ? "border-primary/50 shadow-lg shadow-primary/20"
            : "border-transparent group-hover:border-primary/30"
        )}
      />

      {/* Text with shimmer effect */}
      <span
        className={cn(
          "relative z-10 block",
          "bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text",
          "transition-all duration-300",
          isActive || isHovered
            ? "text-transparent bg-[length:200%_auto] animate-text-shimmer"
            : ""
        )}
      >
        {children}
      </span>

      {/* Particle dots */}
      {isHovered && (
        <>
          <div className="absolute top-2 left-4 w-1 h-1 bg-primary rounded-full animate-float" />
          <div
            className="absolute top-3 right-6 w-1 h-1 bg-accent rounded-full animate-float"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute bottom-2 left-6 w-1 h-1 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0.6s" }}
          />
        </>
      )}
    </Link>
  );
};

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const header = document.querySelector("header");
      if (header) {
        const rect = header.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { to: "/shop/fashion", label: "Fashion" },
    { to: "/shop/technology", label: "Technology" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/compliance", label: "Verify" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-[64px] z-40 transition-all duration-500",
        "border-b",
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-primary/30 shadow-2xl shadow-primary/10"
          : "bg-background/40 backdrop-blur-xl border-border/30"
      )}
    >
      {/* Animated mesh gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${
            mousePosition.y
          }px, hsl(var(--primary) / 0.3) 0%, transparent 50%),
            radial-gradient(circle at ${mousePosition.x * 0.8}px ${
            mousePosition.y * 0.8
          }px, hsl(var(--accent) / 0.2) 0%, transparent 50%)
          `,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Shimmer wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 8s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Left decorative element - Fashion */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-glow-pulse" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                <Shirt className="w-5 h-5 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Centered Logo with 3D effect */}
          <Link
            to="/"
            className={cn(
              "group relative flex items-center gap-3",
              "transition-all duration-500",
              isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            {/* 3D glow layers */}
            <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="absolute inset-0 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Logo container with morphing */}
            <div className="relative px-6 py-3 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105 animate-morph">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-2.5">
                {/* Fashion Icon - Diamond */}
                <div className="relative group/icon">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                  <Diamond className="relative w-6 h-6 text-primary animate-pulse-glow group-hover/icon:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                  ZFC
                </span>
                {/* Technology Icon - Rocket */}
                <div className="relative group/icon">
                  <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                  <Rocket className="relative w-5 h-5 text-accent animate-float group-hover/icon:translate-y-[-4px] transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <NavItem key={item.to} to={item.to} index={index}>
                {item.label}
              </NavItem>
            ))}
          </nav>

          {/* Right decorative element - Technology */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg animate-glow-pulse" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-accent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden relative group",
                  "hover:bg-primary/10 hover:text-primary",
                  "transition-all duration-300",
                  "w-12 h-12 rounded-xl"
                )}
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                <Menu className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px] bg-background/95 backdrop-blur-2xl border-l border-primary/20"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3 text-left">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md" />
                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                      <Diamond className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Navigation
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-8">
                {navItems.map((item, index) => {
                  const isActive =
                    location.pathname === item.to ||
                    location.pathname.startsWith(item.to + "/");
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "group relative px-5 py-4 rounded-xl",
                        "text-base font-semibold transition-all duration-300",
                        "overflow-hidden",
                        isActive
                          ? "bg-primary/10 text-primary border-2 border-primary/30"
                          : "text-foreground/80 hover:text-foreground hover:bg-primary/5",
                        isMounted ? "opacity-100" : "opacity-0"
                      )}
                      style={{
                        animationDelay: `${index * 60}ms`,
                        animation: isMounted
                          ? "slide-in-right 0.4s ease-out forwards"
                          : "none",
                      }}
                    >
                      {/* Liquid background */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10",
                          "transition-all duration-500",
                          isActive
                            ? "opacity-100 animate-liquid"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                      />

                      <span className="relative z-10 flex items-center justify-between">
                        {item.label}
                        <span
                          className={cn(
                            "opacity-0 group-hover:opacity-100 transition-all duration-300",
                            "text-primary transform translate-x-[-10px] group-hover:translate-x-0"
                          )}
                        >
                          →
                        </span>
                      </span>

                      {/* Glow effect */}
                      <div
                        className={cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        )}
                        style={{
                          background:
                            "radial-gradient(circle, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.05), transparent)",
                        }}
                      />
                    </Link>
                  );
                })}
                <div className="border-t border-border/50 pt-6 mt-4 space-y-2">
                  <p className="px-5 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Policies
                  </p>
                  {[
                    { to: "/policies/terms", label: "Terms & Conditions" },
                    { to: "/policies/shipping", label: "Shipping" },
                    { to: "/policies/returns", label: "Returns & Refunds" },
                    { to: "/policies/privacy", label: "Privacy Policy" },
                  ].map((policy, index) => (
                    <Link
                      key={policy.to}
                      to={policy.to}
                      className={cn(
                        "block px-5 py-2.5 text-sm text-muted-foreground",
                        "hover:text-foreground hover:bg-muted/30 rounded-lg",
                        "transition-all duration-200",
                        "hover:translate-x-2",
                        isMounted ? "opacity-100" : "opacity-0"
                      )}
                      style={{
                        animationDelay: `${(navItems.length + index) * 60}ms`,
                        animation: isMounted
                          ? "slide-in-right 0.4s ease-out forwards"
                          : "none",
                      }}
                    >
                      {policy.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
