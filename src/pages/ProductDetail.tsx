import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Package,
  Truck,
  CheckCircle2,
  ZoomIn,
  Heart,
  Share2,
  ChevronRight,
  X,
  ChevronLeft,
} from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { productCatalog } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSaved, setIsSaved] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const product = productCatalog.find((p) => p.id === id);

  // Load saved state from localStorage
  useEffect(() => {
    if (product) {
      const savedProducts = JSON.parse(
        localStorage.getItem("savedProducts") || "[]"
      ) as string[];
      setIsSaved(savedProducts.includes(product.id));
    }
  }, [product]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (imageRef.current) {
      imageRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/shop/fashion">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const currentImage =
    selectedImageIndex === 0
      ? product.image
      : product.imageGallery[selectedImageIndex - 1] || product.image;

  // All images for zoom gallery (main image + gallery)
  const allImages = [product.image, ...product.imageGallery];
  const currentZoomedImage = allImages[zoomedImageIndex] || product.image;

  const relatedProducts = productCatalog
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Handle zoom modal navigation
  const handleZoomOpen = () => {
    setZoomedImageIndex(selectedImageIndex);
    setIsZoomed(true);
  };

  const handleZoomClose = () => {
    setIsZoomed(false);
  };

  const handlePreviousImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomedImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomedImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation for zoom modal
  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleZoomClose();
      } else if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, allImages.length]);

  // Handle Save to Wishlist
  const handleSave = () => {
    if (!product) return;

    const savedProducts = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    ) as string[];

    if (isSaved) {
      // Remove from saved
      const updated = savedProducts.filter((id) => id !== product.id);
      localStorage.setItem("savedProducts", JSON.stringify(updated));
      setIsSaved(false);
      toast.success("Removed from saved items", {
        description: `${product.name} has been removed from your saved items.`,
      });
    } else {
      // Add to saved
      const updated = [...savedProducts, product.id];
      localStorage.setItem("savedProducts", JSON.stringify(updated));
      setIsSaved(true);
      toast.success("Saved to wishlist", {
        description: `${product.name} has been saved to your wishlist.`,
      });
    }
  };

  // Handle Share
  const handleShare = async () => {
    if (!product) return;

    const shareData = {
      title: product.name,
      text: product.shortDescription,
      url: window.location.href,
    };

    try {
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
        toast.success("Shared successfully", {
          description: "Product link has been shared.",
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard", {
          description: "Product link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== "AbortError") {
        // Fallback: Copy to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          toast.success("Link copied to clipboard", {
            description: "Product link has been copied to your clipboard.",
          });
        } catch (clipboardError) {
          toast.error("Failed to share", {
            description: "Please try again or copy the link manually.",
          });
        }
      }
    }
  };

  // Handle Contact for Purchase
  const handleContact = () => {
    if (!product) return;

    // Navigate to contact page with product info in state
    navigate("/contact", {
      state: {
        productId: product.id,
        productName: product.name,
        productCategory: product.category,
      },
    });
  };

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background Layers */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.2),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.2),transparent_50%)]" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 blur-[180px] animate-float" />
          <div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/20 blur-[200px] animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8 relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className={cn(
              "mb-6 group transition-all duration-500",
              isMounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
        </div>

        {/* Main Product Section */}
        <div className="container mx-auto px-4 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Gallery Section */}
            <div
              ref={imageRef}
              className={cn(
                "relative space-y-4 transition-all duration-700",
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {/* Main Image with Zoom */}
              <div
                className={cn(
                  "relative aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-xl shadow-2xl group cursor-zoom-in",
                  "transition-all duration-500 hover:border-primary/40 hover:shadow-[0_40px_120px_rgba(15,23,42,0.5)]"
                )}
                onClick={handleZoomOpen}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${currentImage})`,
                    transform: isZoomed
                      ? `scale(2) translate(${(50 - mousePosition.x) * 0.1}%, ${
                          (50 - mousePosition.y) * 0.1
                        }%)`
                      : "scale(1)",
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-primary/90 text-primary-foreground border-primary animate-pulse">
                      New
                    </Badge>
                  )}
                  {product.onSale && (
                    <Badge variant="destructive" className="animate-pulse">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[product.image, ...product.imageGallery]
                  .slice(0, 4)
                  .map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={cn(
                        "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 group",
                        selectedImageIndex === index
                          ? "border-primary scale-105 shadow-lg shadow-primary/30"
                          : "border-transparent hover:border-primary/50"
                      )}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-primary/0 transition-all duration-300",
                          selectedImageIndex === index && "bg-primary/20"
                        )}
                      />
                    </button>
                  ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div
              className={cn(
                "space-y-8 transition-all duration-700 delay-150",
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {/* Category & Rating */}
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {product.category}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4 transition-colors",
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      )}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                    {product.name}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Full Description */}
              <div className="rounded-2xl border border-primary/20 bg-background/60 backdrop-blur-xl p-6 space-y-4">
                <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Details
                </h3>
                <p className="text-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Verified Quality" },
                  { icon: Package, label: "Secure Packaging" },
                  { icon: Truck, label: "Fast Delivery" },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className={cn(
                        "rounded-xl border border-primary/20 bg-background/60 backdrop-blur-xl p-4 text-center transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
                        isMounted
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-semibold">{feature.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleContact}
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all group"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact for Purchase
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSave}
                  className={cn(
                    "border-primary/40 hover:bg-primary/10 transition-all group",
                    isSaved && "bg-primary/10 border-primary/60"
                  )}
                >
                  <Heart
                    className={cn(
                      "w-5 h-5 mr-2 transition-all",
                      isSaved && "fill-primary text-primary"
                    )}
                  />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShare}
                  className="border-primary/40 hover:bg-primary/10 transition-all group"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background/60 to-background/80 backdrop-blur-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Authenticity Guaranteed
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Verified through our compliance pipeline
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Concierge Logistics</p>
                    <p className="text-xs text-muted-foreground">
                      Tracked dispatch & white-glove delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="relative py-24 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Related Capsules
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-black">
                    <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                      Explore Similar Items
                    </span>
                  </h2>
                </div>
                <Button variant="outline" asChild>
                  <Link
                    to={`/shop/${
                      product.category === "Technology"
                        ? "technology"
                        : "fashion"
                    }`}
                  >
                    View All
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                {relatedProducts.map((relatedProduct, index) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className={cn(
                      "group relative flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
                      isMounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image Container with Fixed Dimensions */}
                    <div
                      className="relative w-full overflow-hidden bg-muted/20"
                      style={{
                        height: "320px",
                        minHeight: "320px",
                        maxHeight: "320px",
                      }}
                    >
                      {/* Main Image */}
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        loading="lazy"
                      />

                      {/* Hover Image */}
                      {relatedProduct.hoverImage && (
                        <img
                          src={relatedProduct.hoverImage}
                          alt={`${relatedProduct.name} alternate view`}
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          loading="lazy"
                        />
                      )}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Badge */}
                      {relatedProduct.isNew && (
                        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground z-10">
                          New
                        </Badge>
                      )}

                      {/* Shine Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 pointer-events-none" />
                    </div>

                    {/* Content Section with Fixed Structure */}
                    <div className="flex flex-col flex-1 p-4 min-h-[120px]">
                      <p className="text-xs text-muted-foreground mb-1 line-clamp-1">
                        {relatedProduct.category}
                      </p>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-auto">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {relatedProduct.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Enhanced Zoom Modal with Gallery Navigation */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={handleZoomClose}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-10"
            onClick={handleZoomClose}
            aria-label="Close zoom"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          {allImages.length > 1 && (
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-10 group"
              onClick={handlePreviousImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>
          )}

          {/* Next Button */}
          {allImages.length > 1 && (
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-10 group"
              onClick={handleNextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* Main Image Container */}
          <div
            className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              {/* Image with Fade Transition */}
              <img
                key={zoomedImageIndex}
                src={currentZoomedImage}
                alt={`${product.name} - View ${zoomedImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg animate-in fade-in duration-500"
                style={{
                  boxShadow: "0 25px 100px rgba(0, 0, 0, 0.5)",
                }}
              />

              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
                  {zoomedImageIndex + 1} / {allImages.length}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Navigation Bar */}
          {allImages.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {allImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setZoomedImageIndex(index)}
                  className={cn(
                    "relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110",
                    zoomedImageIndex === index
                      ? "border-primary scale-110 shadow-lg shadow-primary/50"
                      : "border-white/20 hover:border-white/40"
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {zoomedImageIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Keyboard Hint */}
          {allImages.length > 1 && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 text-xs z-10 pointer-events-none">
              Use ← → arrow keys to navigate • ESC to close
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
