import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Layers,
  Sparkles,
  Star,
  ShieldCheck,
  PackageCheck,
  Headphones,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { productCatalog, type ProductCategory } from "@/data/products";

const filterOptions: Array<"All" | ProductCategory> = [
  "All",
  "Men's Fashion",
  "Women's Fashion",
  "Technology",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>(
    "All"
  );
  const [spotlightId, setSpotlightId] = useState(productCatalog[0].id);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return productCatalog;
    }
    return productCatalog.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const spotlightProduct =
    productCatalog.find((product) => product.id === spotlightId) ??
    productCatalog[0];

  const handleFilterChange = (category: "All" | ProductCategory) => {
    if (category === activeCategory) {
      return;
    }
    setActiveCategory(category);
    const firstMatch =
      category === "All"
        ? productCatalog[0]
        : productCatalog.find((product) => product.category === category);
    if (firstMatch) {
      setSpotlightId(firstMatch.id);
    }
  };

  const handleSpotlightChange = (productId: string) => {
    if (productId === spotlightId) {
      return;
    }
    setSpotlightId(productId);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/20" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.25),transparent_40%),radial-gradient(circle_at_80%_0%,hsl(var(--accent)/0.25),transparent_45%)]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-[160px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 blur-[180px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="mr-2 h-4 w-4" />
                Capsule Archive
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                  Products. Curated in Triad.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Explore capsules across Men&apos;s Fashion, Women&apos;s
                Fashion, and Technology. Every product is certified through our
                compliance pipeline, mood-boarded with kinetic lighting, and
                supported by concierge logistics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/contact">
                    Book a buying session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link to="#catalog">View catalog</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-background/70 backdrop-blur-3xl p-8 shadow-[0_25px_90px_rgba(15,23,42,0.45)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 opacity-70" />
              <div className="relative z-10 space-y-6">
                {filterOptions.slice(1).map((category) => (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {category}
                      </p>
                      <p className="text-xl font-semibold text-foreground">
                        {
                          productCatalog.filter(
                            (product) => product.category === category
                          ).length
                        }{" "}
                        capsules
                      </p>
                    </div>
                    <BadgeCheck className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[pulse_6s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Filter
            </p>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Curate by Discipline
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((option) => {
              const isActive = activeCategory === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleFilterChange(option)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleFilterChange(option);
                    }
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-background border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {option}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border border-white/40 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-[0_30px_100px_rgba(14,21,47,0.4)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Spotlight
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Signature Capsule
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={spotlightProduct.image}
                alt={spotlightProduct.name}
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <Badge className="bg-white/20 border-white/30 backdrop-blur">
                  {spotlightProduct.category}
                </Badge>
                <h3 className="text-2xl font-bold mt-3">
                  {spotlightProduct.name}
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  {spotlightProduct.shortDescription}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rating</span>
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  {spotlightProduct.rating.toFixed(1)}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Discipline</p>
                <p className="inline-flex items-center gap-2 text-base font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                  {spotlightProduct.category}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {spotlightProduct.fullDescription}
              </p>
              <div className="flex gap-3">
                {spotlightProduct.imageGallery.map((frame) => (
                  <button
                    key={frame}
                    type="button"
                    className="relative flex-1 overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => handleSpotlightChange(spotlightProduct.id)}
                  >
                    <img
                      src={frame}
                      alt={`${spotlightProduct.name} detail`}
                      className="h-20 w-full object-cover"
                    />
                    <span className="absolute inset-0 border border-white/20 rounded-xl" />
                  </button>
                ))}
              </div>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Link to={`/product/${spotlightProduct.id}`}>
                  View capsule dossier
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  product.id === spotlightId
                    ? "border-primary/40 shadow-lg shadow-primary/20"
                    : "hover:border-primary/30"
                )}
                tabIndex={0}
                aria-label={`View ${product.name}`}
                onMouseEnter={() => handleSpotlightChange(product.id)}
                onFocus={() => handleSpotlightChange(product.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur">
                        New
                      </Badge>
                    )}
                    {product.onSale && (
                      <Badge variant="destructive" className="backdrop-blur">
                        Sale
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {product.category}
                    </Badge>
                    <div className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      {product.rating.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
                      <span>View capsule</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance Lab",
                description:
                  "Every capsule carries verifiable documentation via our holographic compliance beam.",
              },
              {
                icon: PackageCheck,
                title: "Concierge Logistics",
                description:
                  "Tracked dispatch, climate-controlled warehousing, and white-glove delivery worldwide.",
              },
              {
                icon: Headphones,
                title: "24/7 Atelier Desk",
                description:
                  "Direct line to stylists and engineers for fittings, firmware, and aftercare.",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 flex gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      {service.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
