import {
  BadgeCheck,
  FileCheck,
  Navigation2,
  Building,
  Clock,
  Verified,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number;
  className?: string;
}

const TrustBadge = ({
  icon,
  label,
  value,
  delay = 0,
  className = "",
}: TrustBadgeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        group relative flex items-center gap-2.5 px-4 py-2 rounded-xl
        bg-gradient-to-br from-background/95 via-background/90 to-background/95
        backdrop-blur-md border border-primary/20 shadow-sm
        transition-all duration-300 ease-out
        hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20
        hover:scale-105 hover:-translate-y-1
        hover:from-background hover:via-background/95 hover:to-background
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/30 transition-colors" />
        <div className="relative text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[10px] text-muted-foreground/80 uppercase tracking-wider leading-none font-medium">
          {label}
        </span>
        <span className="text-xs font-bold text-foreground leading-tight">
          {value}
        </span>
      </div>
    </div>
  );
};

const TRUST_BAR_HEIGHT = 64;

const TrustBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div aria-hidden style={{ height: TRUST_BAR_HEIGHT }} />
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-primary/10 shadow-lg overflow-hidden px-4",
          "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isMounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        )}
        style={{ height: TRUST_BAR_HEIGHT }}
      >
        {/* Base gradient background with animated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/12" />

        {/* Animated mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
            animation: "shimmer 8s ease-in-out infinite alternate",
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Animated shimmer effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 4s linear infinite",
            }}
          />
        </div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-xl" />

        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className="flex items-center justify-center gap-3 flex-wrap w-full">
            {/* Main Company Badge with Enhanced Animation */}
            <div
              className={`
              group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl
              bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15
              border border-primary/30 backdrop-blur-sm
              transition-all duration-500 ease-out
              hover:from-primary/25 hover:via-primary/20 hover:to-primary/25
              hover:border-primary/50 hover:shadow-xl hover:shadow-primary/30
              hover:scale-105
              ${
                isMounted
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-10px] scale-95"
              }
              `}
            >
              {/* Glowing effect behind icon */}
              <div className="absolute left-2 w-6 h-6 bg-primary/30 rounded-full blur-md group-hover:bg-primary/50 transition-colors" />
              <BadgeCheck className="relative w-4 h-4 text-primary shrink-0 animate-pulse-glow" />
              <span className="text-xs md:text-sm font-bold tracking-wide text-foreground">
                ZHEJIANG FABRIC COMPANY LIMITED
              </span>
            </div>

            {/* Elegant Divider */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Trust Badges with New Icons */}
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              <TrustBadge
                icon={<FileCheck className="w-4 h-4" />}
                label="Certification"
                value="BR Cert No. 77224617-000-10-24-2"
                delay={100}
                className="hidden sm:flex"
              />

              <TrustBadge
                icon={<Navigation2 className="w-4 h-4" />}
                label="Location"
                value="Wan Chai, Hong Kong"
                delay={200}
                className="hidden md:flex"
              />

              <TrustBadge
                icon={<Building className="w-4 h-4" />}
                label="Address"
                value="8/F., China Hong Kong Tower"
                delay={300}
                className="hidden lg:flex"
              />

              <TrustBadge
                icon={<Clock className="w-4 h-4" />}
                label="Valid Until"
                value="24 Oct 2024"
                delay={400}
                className="hidden xl:flex"
              />
            </div>

            {/* Mobile Compact View with New Icon */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm border border-primary/20 sm:hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm" />
                <Verified className="relative w-3.5 h-3.5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-[10px] font-semibold text-foreground">
                Verified Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustBar;
