import { Link } from "react-router-dom";
import {
  ArrowRight,
  Diamond,
  Rocket,
  Shirt,
  Cpu,
  TrendingUp,
  Award,
  Users,
  Star,
  Sparkles,
  Zap,
  ChevronRight,
  ShieldHalf,
  FileSignature,
  Landmark,
  CalendarRange,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import heroFashion from "@/assets/hero-fashion.jpg";
import heroTech from "@/assets/hero-tech.jpg";
import { useEffect, useState, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { productCatalog, type Product } from "@/data/products";

type CategoryAccent = {
  gradient: string;
  badge: string;
  chip: string;
};

const categoryAccents: Record<string, CategoryAccent> = {
  "Men's Fashion": {
    gradient:
      "bg-gradient-to-br from-blue-500/50 via-indigo-400/30 to-cyan-400/10",
    badge: "bg-blue-500/20 text-blue-50 border-blue-300/40",
    chip: "border-blue-400/30 bg-blue-500/5",
  },
  "Women's Fashion": {
    gradient:
      "bg-gradient-to-br from-pink-500/40 via-rose-400/20 to-amber-300/10",
    badge: "bg-pink-500/15 text-pink-50 border-rose-200/40",
    chip: "border-pink-400/30 bg-pink-500/5",
  },
  Technology: {
    gradient:
      "bg-gradient-to-br from-cyan-500/40 via-purple-500/20 to-lime-300/10",
    badge: "bg-cyan-500/20 text-cyan-50 border-purple-200/40",
    chip: "border-cyan-400/30 bg-cyan-500/5",
  },
  default: {
    gradient: "bg-gradient-to-br from-primary/40 via-accent/30 to-transparent",
    badge: "bg-primary/15 text-primary-foreground border-primary/30",
    chip: "border-primary/30 bg-primary/5",
  },
};

const deriveHighlights = (product: Product) => {
  const baseHighlights = [
    product.shortDescription,
    product.category.includes("Fashion")
      ? "Artisan fabrication"
      : "Precision-grade hardware",
    product.isNew ? "Limited capsule" : "Core archive",
    product.onSale ? "Signature pricing window" : "Concierge support",
  ];

  return baseHighlights;
};

const primaryCategoryOrder: string[] = [
  "Men's Fashion",
  "Women's Fashion",
  "Technology",
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxSource, setParallaxSource] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(() => {
          setParallaxSource(scrollRef.current);
          frameRef.current = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const newArrivals = useMemo(() => {
    const groupedByCategory = productCatalog.reduce<Record<string, Product[]>>(
      (acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      },
      {}
    );

    const picks: Product[] = [];

    primaryCategoryOrder.forEach((category) => {
      const pool = groupedByCategory[category];
      if (!pool || pool.length === 0) {
        return;
      }
      const preferred = pool.find((item) => item.isNew) ?? pool[0];
      if (preferred) {
        picks.push(preferred);
      }
    });

    if (picks.length < 4) {
      const remainingProducts = productCatalog.filter(
        (product) =>
          !picks.some((picked) => picked.id === product.id) && product.isNew
      );
      picks.push(...remainingProducts.slice(0, 4 - picks.length));
    }

    if (picks.length < 4) {
      const fallbackProducts = productCatalog.filter(
        (product) => !picks.some((picked) => picked.id === product.id)
      );
      picks.push(...fallbackProducts.slice(0, 4 - picks.length));
    }

    return picks.slice(0, 4).map((product, index) => {
      const accent =
        categoryAccents[product.category] ?? categoryAccents.default;

      return {
        id: product.id,
        name: product.name,
        image: product.image,
        hoverImage: product.hoverImage,
        category: product.category,
        badge: product.isNew
          ? ("New" as const)
          : product.onSale
          ? ("Sale" as const)
          : undefined,
        accent,
        highlights: deriveHighlights(product),
        meta: product.shortDescription,
        sequence: `Spectrum ${String(index + 1).padStart(2, "0")}`,
      };
    });
  }, []);

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Award, value: "100+", label: "Awards Won" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  const categories = [
    {
      name: "Men's Fashion",
      link: "/shop/fashion?category=men",
      image:
        "https://images.unsplash.com/photo-1548376111-8b07febd313b?q=80&w=687",
      icon: Shirt,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "Women's Fashion",
      link: "/shop/fashion?category=women",
      image:
        "https://plus.unsplash.com/premium_photo-1727943106998-2c17b68df61c?q=80&w=687",
      icon: Diamond,
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      name: "Technology",
      link: "/shop/technology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      icon: Rocket,
      color: "from-cyan-500/20 to-purple-500/20",
    },
  ];

  const parallaxOffset = parallaxSource * 0.5;

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20"
          style={{
            transform: `translateY(${parallaxOffset * 0.3}px)`,
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Split Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Fashion Hero */}
            <Link
              to="/shop/fashion"
              className={cn(
                "group relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-square",
                "bg-cover bg-center",
                "transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-20 scale-95"
              )}
              style={{
                backgroundImage: `url(${heroFashion})`,
                transform: `translateY(${parallaxOffset * 0.2}px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Border Glow */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-all duration-500" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-white">
                <Badge className="mb-4 w-fit bg-white/20 backdrop-blur-md text-white border-white/30 group-hover:bg-primary/30 transition-colors">
                  <Diamond className="w-3 h-3 mr-1 animate-pulse" />
                  Fashion
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
                  <span className="block bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
                    Future-Ready
                  </span>
                  <span className="block">Fashion</span>
                </h1>
                <p className="text-lg mb-6 text-white/90 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Contemporary styles that blend elegance with innovation
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-primary/90 hover:bg-primary text-primary-foreground group-hover:scale-105 transition-transform duration-300"
                >
                  Explore Fashion
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>

            {/* Technology Hero */}
            <Link
              to="/shop/technology"
              className={cn(
                "group relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-square",
                "bg-cover bg-center",
                "transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-20 scale-95"
              )}
              style={{
                backgroundImage: `url(${heroTech})`,
                transitionDelay: "200ms",
                transform: `translateY(${parallaxOffset * 0.2}px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated Border Glow */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-3xl transition-all duration-500" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-white">
                <Badge className="mb-4 w-fit bg-white/20 backdrop-blur-md text-white border-white/30 group-hover:bg-accent/30 transition-colors">
                  <Rocket className="w-3 h-3 mr-1 animate-pulse" />
                  Technology
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
                  <span className="block bg-gradient-to-r from-white to-accent/80 bg-clip-text text-transparent">
                    Precision
                  </span>
                  <span className="block">Tech</span>
                </h1>
                <p className="text-lg mb-6 text-white/90 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Cutting-edge devices engineered for excellence
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-accent/90 hover:bg-accent text-accent-foreground group-hover:scale-105 transition-transform duration-300"
                >
                  Explore Technology
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Immersive Stats Capsule */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background energy field */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-muted/40" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 left-1/3 w-[480px] h-[480px] bg-primary/20 blur-[180px]" />
        <div className="absolute -bottom-40 right-1/4 w-[420px] h-[420px] bg-accent/20 blur-[160px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Impact Metrics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                A Decade of Trust & Performance
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time indicators that reflect our commitment across fashion &
              technology verticals
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Halo ring */}
            <div className="absolute inset-0 mx-10 h-[420px] rounded-[40px] border border-primary/20 blur-sm animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-[40px] opacity-40" />

            <div className="relative rounded-[40px] border border-primary/30 bg-background/70 backdrop-blur-3xl p-8 lg:p-12 shadow-[0_20px_120px_rgba(15,23,42,0.35)]">
              {/* Rotating energy ring */}
              <div className="absolute -inset-10">
                <div className="absolute inset-0 rounded-[48px] border border-primary/10 animate-[spin_24s_linear_infinite]" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-5 gap-6 items-center">
                {/* Core capsule */}
                <div className="lg:col-span-2">
                  <div className="relative h-full rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background/60 to-background/80 p-8 flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    <div className="relative z-10">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
                        <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center animate-spin">
                          <div className="w-8 h-8 rounded-full bg-primary/60 blur-sm" />
                        </div>
                      </div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/80 mb-3">
                        Founded
                      </p>
                      <p className="text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
                        2024 — Forward
                      </p>
                      <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                        Born in 2024 and scaling fast—merging couture fabrics
                        with precision tech for a new era of premium retail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Orbital stats */}
                <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className={cn(
                          "group relative rounded-2xl border border-border/40 bg-background/80 backdrop-blur-xl p-6 overflow-hidden",
                          "transition-all duration-700 ease-out",
                          "hover:border-primary/50 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl hover:shadow-primary/10",
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        )}
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col gap-3">
                          <div className="inline-flex items-center gap-3">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="relative w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-background/60">
                                <Icon className="w-5 h-5 text-primary animate-pulse" />
                              </div>
                            </div>
                            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                              {stat.label}
                            </span>
                          </div>
                          <div>
                            <p className="text-3xl font-black bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                              {stat.value}
                            </p>
                            <div className="mt-2 h-px w-12 bg-gradient-to-r from-primary to-transparent group-hover:w-20 transition-all" />
                          </div>
                        </div>

                        {/* Motion trail */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid with Advanced Animations */}
      <section className="py-20 lg:py-32 container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Explore Collections
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
              Shop by Category
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections across fashion and technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Link
                key={i}
                to={category.link}
                className={cn(
                  "group relative aspect-[3/4] overflow-hidden rounded-2xl",
                  "transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                )}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Image with Parallax */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-500" />
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    `bg-gradient-to-t ${category.color} to-transparent`
                  )}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  {/* Icon */}
                  <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {category.name}
                  </h3>

                  {/* Arrow Indicator */}
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-sm font-semibold mr-2">Explore</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Holographic Compliance Glow */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.25),transparent_45%),radial-gradient(circle_at_80%_0%,hsl(var(--accent)/0.25),transparent_40%)]" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 blur-[120px] animate-float" />
          <div
            className="absolute -bottom-24 left-0 w-80 h-80 bg-gradient-to-br from-accent/30 to-primary/30 blur-[140px] animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 rounded-[36px] border border-primary/30 blur-sm" />
            <div className="absolute inset-4 rounded-[32px] border border-accent/20 blur-lg" />
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-60" />

            <div className="relative rounded-[36px] bg-background/80 backdrop-blur-2xl border border-white/10 p-8 lg:p-14 overflow-hidden shadow-[0_40px_120px_rgba(15,23,42,0.45)]">
              <div className="absolute inset-0 opacity-60">
                <div className="absolute inset-x-0 top-10 h-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
                <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-[pulse_8s_ease-in-out_infinite]" />
              </div>

              <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
                <div className="flex-1 flex flex-col items-center text-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/30 flex items-center justify-center">
                      <div
                        className="absolute inset-2 rounded-full border border-white/20 animate-spin"
                        style={{ animationDuration: "12s" }}
                      />
                      <ShieldHalf className="w-10 h-10 text-primary animate-pulse-glow" />
                    </div>
                  </div>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                    Verified
                  </p>
                  <p className="text-3xl font-black bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Compliance Capsule
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center text-xs">
                    {[
                      {
                        label: "BR Cert No. 77224617-000-10-24-2",
                        icon: FileSignature,
                      },
                      { label: "Wan Chai HQ", icon: Landmark },
                      {
                        label: "Valid 24 Oct 2024",
                        icon: CalendarRange,
                      },
                    ].map(({ label, icon: ChipIcon }) => (
                      <span
                        key={label}
                        className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold backdrop-blur-sm animate-pulse inline-flex items-center gap-2"
                      >
                        <ChipIcon className="w-4 h-4" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Hong Kong Registered
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                      Trusted & Verified
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ZHEJIANG FABRIC COMPANY LIMITED is officially registered
                    under Hong Kong business regulations with cross-border
                    compliance monitoring and encrypted documentation for every
                    audit cycle.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 text-left">
                    {[
                      {
                        title: "Registration",
                        detail: "BR Cert No. 77224617-000-10-24-2",
                        icon: FileSignature,
                      },
                      {
                        title: "Headquarters",
                        detail: "8/F., China Hong Kong Tower, Wan Chai",
                        icon: Landmark,
                      },
                      {
                        title: "Validity Window",
                        detail: "24 Oct 2024",
                        icon: CalendarRange,
                      },
                      {
                        title: "Verification Portal",
                        detail: "Compliance dashboard with live documents",
                        icon: QrCode,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-primary/30 transition-colors flex items-start gap-3"
                        >
                          <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                              {item.title}
                            </p>
                            <p className="text-sm font-semibold text-foreground mt-2">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="group w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <Link to="/compliance">
                      Verify Company Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals – Immersive Capsules */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/60 to-background" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_5%_0%,hsl(var(--primary)/0.25),transparent_45%),radial-gradient(circle_at_95%_20%,hsl(var(--accent)/0.2),transparent_50%)]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Spectrum Drop
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                  New Arrivals Constellation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Exploratory capsules across tailoring & tech—each release glows
                with its own soundtrack, material alchemy, and kinetic lighting.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {["Limited Drop", "Craft Lab", "Hypercare"].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {newArrivals.length > 0 && (
            <div className="grid gap-8 lg:grid-cols-5">
              <Link
                to={`/product/${newArrivals[0].id}`}
                className={cn(
                  "group relative overflow-hidden rounded-[32px] border border-white/10 bg-background/70 backdrop-blur-xl lg:col-span-2",
                  "hover:border-primary/40 hover:shadow-[0_25px_80px_rgba(15,23,42,0.5)] transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundImage: `url(${
                      newArrivals[0].hoverImage ?? newArrivals[0].image
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
                <div
                  className={cn(
                    "absolute inset-0 mix-blend-screen opacity-60",
                    newArrivals[0].accent.gradient
                  )}
                />

                <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-6 h-full">
                  <div className="flex items-center justify-between">
                    <Badge
                      className={cn(
                        "backdrop-blur px-3 py-1 border",
                        newArrivals[0].accent.badge
                      )}
                    >
                      {newArrivals[0].category}
                    </Badge>
                    {newArrivals[0].badge && (
                      <span className="text-[11px] uppercase tracking-[0.4em] text-white/80">
                        {newArrivals[0].badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-white/70">
                      {newArrivals[0].sequence}
                    </p>
                    <h3 className="text-4xl font-black text-white mt-2 leading-tight">
                      {newArrivals[0].name}
                    </h3>
                  </div>
                  <div className="mt-auto space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-white/80 text-sm">
                      {newArrivals[0].highlights.map((meta) => (
                        <div
                          key={meta}
                          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur hover:border-white/40 transition-colors"
                        >
                          {meta}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                        More
                      </p>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/15 transition">
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>

              <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                {newArrivals.slice(1).map((product, index) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border border-white/5 bg-background/80 backdrop-blur-xl",
                      "hover:border-primary/30 transition-all duration-500 ease-out",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    )}
                    style={{ animationDelay: `${(index + 1) * 120}ms` }}
                  >
                    <div
                      className="absolute inset-0 opacity-70"
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    <div className="relative z-10 p-6 flex flex-col gap-4 h-full">
                      <div className="flex items-center justify-between">
                        <Badge
                          className={cn(
                            "backdrop-blur px-3 py-1 border",
                            product.accent.badge
                          )}
                        >
                          {product.category}
                        </Badge>
                        <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                          Drop {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm text-white/60 mt-1 line-clamp-2">
                          {product.meta}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                          View capsule
                        </div>
                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/15 transition">
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Drop timeline
            </p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              <div className="flex gap-4 overflow-x-auto pr-8 pb-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                {newArrivals.map((product, index) => (
                  <div
                    key={product.id}
                    className={cn(
                      "min-w-[240px] rounded-3xl border border-white/15 px-5 py-4 shadow-lg shadow-black/40 transition-all hover:-translate-y-1 hover:border-primary/50",
                      "bg-gradient-to-br from-[#0f172a]/95 via-[#111827]/90 to-[#1e1b4b]/85 flex flex-col gap-2"
                    )}
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/80">
                      <span>Drop {index + 1}</span>
                      <span className="text-primary/70">
                        {product.sequence}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-white/80 line-clamp-2">
                        {product.meta}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-white/80">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>{product.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
