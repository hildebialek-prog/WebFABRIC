import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  badge?: "New" | "Sale";
  className?: string;
  hidePrice?: boolean;
  hideCartButton?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  hoverImage,
  category,
  badge,
  className,
  hidePrice = false,
  hideCartButton = false,
}: ProductCardProps) => {
  return (
    <Link
      to={`/product/${id}`}
      className={cn(
        "group block bg-card rounded-lg overflow-hidden border border-border card-lift focus-neon",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {badge && (
          <Badge
            variant={badge === "Sale" ? "destructive" : "default"}
            className="absolute top-2 left-2"
          >
            {badge}
          </Badge>
        )}
        {!hideCartButton && (
          <Button
            size="icon"
            className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        {!hidePrice && <p className="text-lg font-bold">${price.toFixed(2)}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
