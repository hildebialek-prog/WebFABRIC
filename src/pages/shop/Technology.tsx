import { useMemo, useState } from "react";
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
import { productCatalog } from "@/data/products";

const Technology = () => {
  const [sortBy, setSortBy] = useState("newest");

  const products = useMemo(
    () =>
      productCatalog
        .filter((product) => product.category === "Technology")
        .map((product) => ({
          id: product.id,
          name: product.name,
          price:
            product.onSale && product.salePrice
              ? product.salePrice
              : product.price,
          image: product.image,
          hoverImage: product.hoverImage,
          category: product.category,
          badge: product.isNew
            ? ("New" as const)
            : product.onSale
            ? ("Sale" as const)
            : undefined,
        })),
    []
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-kinetic-reveal">
            Technology
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cutting-edge devices engineered for excellence. Discover our
            selection of laptops, smartphones, smart home devices, and
            accessories.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          <div className="flex items-center gap-2">
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

export default Technology;
