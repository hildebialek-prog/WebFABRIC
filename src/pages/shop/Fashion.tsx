import { useEffect, useMemo, useState } from "react";
import { Filter } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";
import { productCatalog } from "@/data/products";

const deriveCategory = (rawValue: string | null): "all" | "men" | "women" => {
  if (rawValue === "men") {
    return "men";
  }
  if (rawValue === "women") {
    return "women";
  }
  return "all";
};

const Fashion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "men" | "women">(
    deriveCategory(searchParams.get("category"))
  );

  useEffect(() => {
    setActiveCategory(deriveCategory(searchParams.get("category")));
  }, [searchParams]);

  const handleCategoryChange = (value: "all" | "men" | "women") => {
    setActiveCategory(value);
    const nextParams = new URLSearchParams(searchParams);
    if (value === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const products = useMemo(() => {
    const base = productCatalog.filter(
      (product) =>
        product.category === "Men's Fashion" ||
        product.category === "Women's Fashion"
    );

    const filteredByCategory = base.filter((product) => {
      if (activeCategory === "all") {
        return true;
      }
      if (activeCategory === "men") {
        return product.category === "Men's Fashion";
      }
      return product.category === "Women's Fashion";
    });

    return filteredByCategory.map((product) => ({
      id: product.id,
      name: product.name,
      price:
        product.onSale && product.salePrice ? product.salePrice : product.price,
      image: product.image,
      hoverImage: product.hoverImage,
      category: product.category,
      badge: product.isNew
        ? ("New" as const)
        : product.onSale
        ? ("Sale" as const)
        : undefined,
    }));
  }, [activeCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-kinetic-reveal">
            Fashion
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Contemporary styles that blend elegance with innovation. Explore our
            curated collection of clothing, accessories, and footwear.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen((prev) => !prev)}
              aria-pressed={isFilterOpen}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            {isFilterOpen && (
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "All", value: "all" as const },
                  { label: "Men", value: "men" as const },
                  { label: "Women", value: "women" as const },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeCategory === filter.value
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => handleCategoryChange(filter.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleCategoryChange(filter.value);
                      }
                    }}
                    aria-pressed={activeCategory === filter.value}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              hidePrice
              hideCartButton
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fashion;
