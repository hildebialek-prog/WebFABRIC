export type ProductCategory = "Men's Fashion" | "Women's Fashion" | "Technology";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  hoverImage: string;
  imageGallery: string[];
  shortDescription: string;
  fullDescription: string;
  rating: number;
  isNew: boolean;
  price: number;
  onSale: boolean;
  salePrice?: number;
};

export const productCatalog: Product[] = [
  {
    id: "men-001",
    name: "Valenridge Cashmere Suit",
    category: "Men's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hd3e8e3993d8742f1a879e941d5241f05j.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Ha3256a28144642cb8399777bd505e442a.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hddb4b8f0e3f64fe7b83c42b251769bb0K.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H44beafb0c6a8490c98c9bcf2708b6ac9q.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hbe75709bfbca4d07bc7bb1f07c3451cdD.jpg?avif=close&webp=close",
    ],
    shortDescription:
      "Tailored cashmere suit crafted for boardrooms and black-tie affairs.",
    fullDescription:
      "Italian-milled fibers, silk-blend interior, and sculpted lapels deliver impeccable structure for decisive engagements.",
    rating: 4.9,
    isNew: true,
    price: 760,
    onSale: true,
    salePrice: 690,
  },
  {
    id: "men-002",
    name: "Helios Technical Trench",
    category: "Men's Fashion",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
    imageGallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1458253770872-1834dbd3d41b?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Stormproof trench with bonded seams and luminescent piping.",
    fullDescription:
      "Recycled Italian nylon, modular hood system, and invisible interior harness for transit-ready refinement.",
    rating: 4.6,
    isNew: false,
    price: 540,
    onSale: false,
  },
  {
    id: "women-001",
    name: "Lunara Silk Column Gown",
    category: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80",
    imageGallery: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Bias-cut silk gown with iridescent sheen and architectural drape.",
    fullDescription:
      "Hand-finished French seams, corseted interior, and liquid silk cascade that glows beneath gallery lighting.",
    rating: 4.8,
    isNew: true,
    price: 980,
    onSale: false,
  },
  {
    id: "women-002",
    name: "Astraea Sculptural Blazer",
    category: "Women's Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
    imageGallery: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Double-breasted blazer with asymmetric hems and satin underlay.",
    fullDescription:
      "Micro-sequinned lapels, detachable waist sash, and engineered shoulders inspired by gallery installations.",
    rating: 4.8,
    isNew: false,
    price: 640,
    onSale: true,
    salePrice: 590,
  },
  {
    id: "tech-001",
    name: "Axiom Nexus Neural Watch",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    imageGallery: [
      "https://images.unsplash.com/photo-1453473552140-30cddc8c95b9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Carbon-forged wearable with biometric twin-engine and mesh OS.",
    fullDescription:
      "Neural-layered sensors, encrypted concierge pairing, and sapphire hybrid glass engineered for orbital schedules.",
    rating: 4.7,
    isNew: false,
    price: 620,
    onSale: true,
    salePrice: 540,
  },
  {
    id: "tech-002",
    name: "Spectral Resonance Earset",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=900&q=80",
    imageGallery: [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Dual-driver earbuds with holographic stem indicators and ANC+.",
    fullDescription:
      "Adaptive acoustic mesh, bio-scan fit mapping, and graphene diaphragms tuned for curated listening suites.",
    rating: 4.5,
    isNew: true,
    price: 320,
    onSale: false,
  },
];


