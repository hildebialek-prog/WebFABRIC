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
      "https://s.alicdn.com/@sc04/kf/Hbb841a2f38f3451085c95a6d742ace52l.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H59879d90093247919cbcc1f1ce83ce131.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hee6a36bca19e475280f41162c5f16c929.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hb1ab56e03ed841d59de0468e2b6e3eb8K.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H210df524aae645838cec461bf8bb074eZ.jpg?avif=close&webp=close",
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
    name: "Rivon Everyday Stretch Tee",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H8173e95126cc4aef87a273e1c93cd382m.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hbd00f5cd07934c65baf0099ef35cea92V.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H1ba750df97f14d48a87edcca89dd47653.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc7383f6f579948c2ada2517cb8af937fp.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H49c22a2c31f54f0dbc463fb30f07662bO.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc2cb77f333ff467394f4b38b1b0233c8v.jpg?avif=close&webp=close"
    ],
    shortDescription: "Soft cotton-stretch tee built for everyday comfort.",
    fullDescription:
      "The Rivon Tee blends breathable cotton with gentle stretch for a clean, modern fit. Ideal for daily wear, casual outings, or layering.",
    rating: 4.7,
    isNew: true,
    price: 24,
    onSale: false,
    salePrice: null
  },
  {
    id: "men-003",
    name: "UrbanForge Denim Jacket",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/Hde9030c710f5420ba270499bc4834a2bl.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H2e3cc6a5d5224e7c9f824851674effe7z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H2e57cf9154dd4e47ad752c13db12dee7L.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf9e43e5a6a31437ba67df4ef98471c59A.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha421f365de244cf3a089aeaec64da4f9w.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3b591e0384da41c8941285d611b41e52Q.jpg?avif=close&webp=close"
    ],
    shortDescription: "Classic-wash denim jacket with reinforced seams.",
    fullDescription:
      "UrbanForge delivers a timeless denim look with durable stitching, soft-wash feel, and versatile styling for year-round outfits.",
    rating: 4.8,
    isNew: true,
    price: 49,
    onSale: true,
    salePrice: 42
  },
  {
    id: "men-004",
    name: "Strix Lightweight Joggers",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H7ccc6b75f206445b9466d4c935781c38f.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H315dc9cc14d0461bba0fc32191e618a6Y.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H8390e1a540c34815a8bec93d794c83b0B.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc1c1c133ab81435482faf6831daefd46L.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H957a51c40fc44998b32544d354aed9fdr.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H8a3d49f8c22b425791686e1b137dacaag.jpg?avif=close&webp=close"
    ],
    shortDescription: "Breathable joggers made for daily movement.",
    fullDescription:
      "Strix Joggers use soft, flexible fabric with a tapered fit, elastic waistband, and practical pockets—perfect for casual and athletic wear.",
    rating: 4.6,
    isNew: true,
    price: 32,
    onSale: false,
    salePrice: null
  },
  {
    id: "men-005",
    name: "NordCraft Minimal Hoodie",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/Hbc029f2402bc4ccf834e1eba140cd15aU.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Ha9a0709b60eb4f3aa87691d12890b6c59.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H0d4064f2b7a34e4e8330d7b179ac5916o.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H593ebe27b39545f7a64cbef6dea03fb8V.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4da5a03e5af64a5491eff611a8f0b3ef8.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H17b4b6f55baa4ab6855b2225be27cd15t.jpg?avif=close&webp=close"
    ],
    shortDescription: "Soft fleece hoodie with clean, modern styling.",
    fullDescription:
      "NordCraft Hoodie features a warm fleece interior, minimalist design, and durable ribbed cuffs for everyday comfort.",
    rating: 4.7,
    isNew: true,
    price: 39,
    onSale: true,
    salePrice: 33
  },
  {
    id: "men-006",
    name: "TerraEdge Cargo Shorts",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H8ce21b38fee54924af541ab38285b8f78.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H812123e9166048f5b33eb0d0fbfce1b7T.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hdbb142f5716948ec8c6203c8d5a97e32m.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H907c045fc47740f8881cf12d163d8c5d6.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H30224a7e20644c06b3e70de292515665E.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Heb3218b7c0d1470cbbf7f9c67455b705f.jpg?avif=close&webp=close"
    ],
    shortDescription: "Utility cargo shorts with multi-pocket design.",
    fullDescription:
      "TerraEdge Cargo Shorts offer lightweight durability with reinforced seams and adjustable waist comfort.",
    rating: 4.5,
    isNew: true,
    price: 27,
    onSale: false,
    salePrice: null
  },
  {
    id: "men-007",
    name: "Auralin Everyday Sweatshirt",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H3042d6e97abb4fd59e0638af29f45ddeO.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Ha5ead4ac6d764e4a8ca7ede1567e3678W.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hfa9b1313f3cf487d8025ea64b0868eefE.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hab8ddbc55c2a4655afddea3b5bfe989ar.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H44566d3530ce4e18a4fbb5939ade3f799.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0bec78a97ed74288b21604b9d7c4c446p.jpg?avif=close&webp=close"
    ],
    shortDescription: "Soft-knit sweatshirt for casual daily wear.",
    fullDescription:
      "Auralin Sweatshirt blends cotton and polyester for a cozy, durable fit suitable for lounging or errands.",
    rating: 4.7,
    isNew: true,
    price: 35,
    onSale: true,
    salePrice: 29
  },
  {
    id: "men-008",
    name: "MetroLine Chino Pants",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H0b1b19aa7a1d4dcba43cd6a6382e3435c.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H91ccb213a40f4c0c95420d1802e9f6a6e.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hec558d16b84342c3b1fda0df4a3fe697L.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hcd3e38d188844767a648088d0baaad97V.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H454256ef586c4d8f89ba6dd731d2a623s.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd3e9f094929c40528ee7dfaac5cdfe37N.jpg?avif=close&webp=close"
    ],
    shortDescription: "Classic-fit chinos with a clean silhouette.",
    fullDescription:
      "MetroLine Chinos feature smooth cotton twill, a tapered fit, and reinforced seams—ideal for office or casual wear.",
    rating: 4.6,
    isNew: true,
    price: 34,
    onSale: false,
    salePrice: null
  },
  {
    id: "men-009",
    name: "Vernox Short-Sleeve Polo",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H2a2b5982125a423cb038348c6e42b220W.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H2ad289c7841f4b15aad8576be43bdb583.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H864595178f6c413089b31959d7295567p.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd02803371ebd45068f2dce171d8208c6A.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H673a985e91134856961d4446ef3ec4dcj.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H82e8f37f50d04dcebbedefdb66443dc4G.jpg?avif=close&webp=close"
    ],
    shortDescription: "Lightweight knit polo for everyday style.",
    fullDescription:
      "The Vernox Polo offers a breathable knit texture, structured collar, and relaxed fit suitable for warm-weather outfits.",
    rating: 4.5,
    isNew: true,
    price: 29,
    onSale: true,
    salePrice: 25
  },
  {
    id: "men-010",
    name: "Cliffway Knit Beanie",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/Hc36f993d532a4b208711bd9c561a5de2l.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H6a4361f887114994a6fa70cfbe6c65191.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7957a362f6b841ef9623f31ace4204f76.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H119505bf57814667af20cba614a3f5970.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1c5ce29ffbde4ff7a2c7462ba5b691b99.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5777bfa5beab433da705053e9b65441a5.jpg?avif=close&webp=close"
    ],
    shortDescription: "Cozy rib-knit beanie for cool weather.",
    fullDescription:
      "Cliffway Beanie features soft acrylic knit, stretch-fit comfort, and durable stitching perfect for winter days.",
    rating: 4.8,
    isNew: true,
    price: 12,
    onSale: false,
    salePrice: null
  },
  {
    id: "men-011",
    name: "Drayton Classic Button Shirt",
    category: "Men's Fashion",
    image: "https://s.alicdn.com/@sc04/kf/H4bd4be846a3b49ac9939a8e644453cb1c.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hb072fecc2e4e45d2af8d5ef9db5844abF.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H0df8463d99d84675a9a665a8512f3ebdM.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H290cd4b3821e4e7090b95078813cda55Z.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1561875e61b24b5f9668ae1f413888dfh.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H10ba2aa043b0478b9fce45dca33f5fd6i.jpg?avif=close&webp=close"
    ],
    shortDescription: "Everyday cotton button-down with balanced structure.",
    fullDescription:
      "Drayton Shirt offers breathable cotton fabric, clean tailoring, and a versatile silhouette suitable for work or casual occasions.",
    rating: 4.7,
    isNew: true,
    price: 29,
    onSale: true,
    salePrice: 23
  },
  
  
  {
    id: "women-001",
    name: "Lunara Silk Column Gown",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hc787d0f5d9d04265945af8f1454041698.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H2a090c76f267496c8ae28326d705b0a4Z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hb00cbba745834cd4a01b6e585d80e3edy.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H14baaad513834ed0b7f097f8b6e3c5350.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hacfb50b4084e49669d5b95c1adc7d0222.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf32bdebe15324b03b5a835ca5e4e0eab0.jpg?avif=close&webp=close"
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
    name: "Maribel Soft Knit Dress",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H527c1eca80a1418ab14e51fe202f8991i.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Hb51f18eeb842407caab6f90746f1a60b7.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hb1dd820ebf184802b8d2b9c7bebbf51bF.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Haaf84e2af8834df9b9b9dc635387b600i.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6a942a85b640476789d6e50613cd1184y.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4ca2173307f04c37ba3a5e5e4f85bb483.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Soft knit dress with a relaxed, everyday silhouette.",
    fullDescription:
      "Crafted from breathable knit fabric, this dress offers gentle stretch and natural drape, making it ideal for daily wear, errands, or weekend outings.",
    rating: 4.7,
    isNew: true,
    price: 45,
    onSale: false
},
{
    id: "women-003",
    name: "Eloise Linen Blend Blouse",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hbc9345debda74558a7fcb82370d5362d3.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H1e715a9ccbd643b38c75c6b99cf597abR.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H2b75e5ebbca3434396bd5f528024b8af2.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H001cec17c99942f0ac11746ef0c4fd2bL.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2ebef5bb1a48431db6b2ed06ca56a707j.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5aa146dc21c64cb999d81f2222de2b0eM.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Lightweight linen-blend blouse with soft texture.",
    fullDescription:
      "The Eloise Blouse features a breathable linen blend, relaxed sleeves, and a clean neckline—perfect for warm days and casual outfits.",
    rating: 4.6,
    isNew: true,
    price: 32,
    onSale: true,
    salePrice: 26
},
{
    id: "women-004",
    name: "Callista Everyday Midi Skirt",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H2a66fef6dcac4d72b061dc858d0368d8Y.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Ha21fe6baf76b48188461071506567b38g.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7f5acc2e14bb4ac882a2455e18df8942S.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H869e464fdd2d4a31816680670d7f96ffD.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha48c6f22ae7643139c59b4157894aafep.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He718b10db1634c4d98b435d1679d973cN.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Flowy midi skirt with elastic waistband.",
    fullDescription:
      "Callista offers a soft woven feel with a lightweight drape, making it a comfortable choice for everyday styling.",
    rating: 4.7,
    isNew: true,
    price: 36,
    onSale: false
},
{
    id: "women-005",
    name: "Aerin Relaxed Fit Shirt",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hefaa5c1665574525bcab6e70a320011dN.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H6e18ecf4383346ed881f3f3bf014ab24i.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H31ba86dbb9c14e3095e9263d8e0a7f97l.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha75fe8208a3644debdb3023c5dff21c5o.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H798199b597564c319c472baa391474f96.png?avif=close&webp=close"
    ],
    shortDescription:
      "Lightweight shirt perfect for everyday layering.",
    fullDescription:
      "Designed with soft woven fabric and a relaxed cut, the Aerin Shirt pairs effortlessly with jeans, skirts, or shorts.",
    rating: 4.5,
    isNew: true,
    price: 29,
    onSale: true,
    salePrice: 22
},
{
    id: "women-006",
    name: "Naya Cozy Lounge Set",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hb70ac4dfc5a349afb22212417c9661f2Q.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H405b46e68c28458881097d649e66300bY.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H582698d0018b426e813d6bb099a7314fh.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha057608b7cf84629b776134b16a58fcfY.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H7ab32d4854c9466a8df243b08473f535U.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H077e82cf71ea41be9a33eacb874f2b3fz.png?avif=close&webp=close"
    ],
    shortDescription:
      "Two-piece lounge set with soft stretch fabric.",
    fullDescription:
      "Naya provides a comfortable fit with lightweight knit material—perfect for relaxing at home or casual cool-weather outings.",
    rating: 4.8,
    isNew: true,
    price: 44,
    onSale: false
},
{
    id: "women-007",
    name: "Seraphine Daily Tank Top",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H3ff2234de30e478f9407bab8d0c6c0d30.jpeg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/He6eb920852b146baa890d61de10405aeP.jpeg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H34b0d4ce237a4d6a82014724600058e0V.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H970cd5d5e69d497c9697cb2309e9a39bQ.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hbfc2167c45bb42a7b53409274234e5dai.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H608f05aec8b3425bb09a6dbf262fa5ccc.jpeg?avif=close&webp=close"
    ],
    shortDescription:
      "Lightweight tank top ideal for layering.",
    fullDescription:
      "Seraphine features a stretch-knit build with a flattering fit, making it a versatile basic for warm-weather styling.",
    rating: 4.6,
    isNew: true,
    price: 18,
    onSale: true,
    salePrice: 14
},
{
    id: "women-008",
    name: "Liora Simple Wrap Dress",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H8b58e5ca23ef4a33949d25791e656525f.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Ha909d7e88ecf483793c5a738eeb48924S.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/He55e406e09a74099bdd4296e4d22257fY.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0578ae6ef89b4c269158cf376cda609dm.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H67c69dbd9ace4510b8cfc8ca32db206bh.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6fbe1002b43847a1a32eb6a2ce5e87ffn.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Relaxed wrap dress perfect for sunny days.",
    fullDescription:
      "Liora offers an adjustable waist tie and a soft woven finish, creating a flattering silhouette for everyday outings.",
    rating: 4.7,
    isNew: true,
    price: 38,
    onSale: false
},
{
    id: "women-009",
    name: "Arden High-Rise Shorts",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H3fac8259c2cd45be8da90752c08995c1d.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Hd98cd55c0ec148ff9ffc2fed563c63a9r.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hd354a7380279471c870b80128f0cc339d.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd988a7377fe14756bef95f4164693fd3k.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3cc894a3f3eb46d9ab132633b1fca5682.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Haf2e69ebf06c40abbfbdd22a4769b2e1Z.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "High-rise shorts designed for everyday comfort.",
    fullDescription:
      "Arden Shorts feature a blended woven texture, clean finish, and comfortable rise—ideal for warm-weather outings.",
    rating: 4.6,
    isNew: true,
    price: 27,
    onSale: true,
    salePrice: 21
},
{
    id: "women-010",
    name: "Melina Light Knit Cardigan",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/Hf5dace225c6548608b27f69224e8905bY.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Hc0f8a5f93138440a9ef615ccb3174ed7k.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hd476dc410d0049a7a47fc2d5dca7cd7fv.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc33f285a774f46e2ace97c0a4510ae18G.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc671592ff31e4c62aad06613043bdf1a2.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc9631bc39caf485091802c50aac0a393g.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Lightweight open-front cardigan for daily layering.",
    fullDescription:
      "Melina features a breathable knit with gentle drape, pairing easily with tops, dresses, or casual basics.",
    rating: 4.8,
    isNew: true,
    price: 35,
    onSale: false
},
{
    id: "women-011",
    name: "Vela Everyday Tee Dress",
    category: "Women's Fashion",
    image:
      "https://s.alicdn.com/@sc04/kf/H5363dc35f22d47ebbb4dad8096dcddbaP.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H22b491a1e3404b04a00dcb6a038222b1Z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H204ea82579fe451cbc332aea539f83ccO.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H836c78cfa23346a39ca4131c65790cafa.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2b8032a4626a41a48145312362de1af0p.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc97710057a6b4642972fc2308b5e5145d.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Relaxed-fit tee dress for casual, everyday comfort.",
    fullDescription:
      "Vela offers a smooth drape and easy movement, making it a go-to choice for warm days and simple styling.",
    rating: 4.7,
    isNew: true,
    price: 31,
    onSale: true,
    salePrice: 26
},

  
  {
    id: "tech-001",
    name: "Axiom Pocket Control Hub",
    category: "Technology",
    image:
      "https://s.alicdn.com/@sc04/kf/H56fb597d53eb40dc9ef0a6bb9517584cg.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H74dd4e9aa63a43de9daa382e2d0b83d08.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Ha339935f31124a2aa4ef2f7e89103dad3.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2ac1a76419f647879509bfaff54e2e1da.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf2559f05bd03432ebc497867d5de92d2q.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1ccb51e016354c728576a1a2978f3ff2r.png?avif=close&webp=close"
    ],
    shortDescription:
      "Compact smart hub for portable device control and quick automation.",
    fullDescription:
      "The Axiom Pocket Control Hub pairs with smart lights, sensors, and small robotics to trigger routines, manage automation, and monitor device status on the go. Designed to be lightweight with a durable build for everyday carry.",
    rating: 4.7,
    isNew: false,
    price: 58,
    onSale: true,
    salePrice: 49
  },
  
  
  {
    id: "tech-002",
    name: "NovaPocket Mini Projector",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H937be7de528841f5a99b1068dffd4eede.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hfe715b198d3142749b34b06efc2209181.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Heb00b5c92f8047838ac307e938ee71adH.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc4397bdc708f43cfac379cdeab62e5f8y.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc305d913399d46c0a8b8e189b38d4708E.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H586b9e86200b4d10855f6dcde6b5e2b8c.jpg?avif=close&webp=close"
    ],
    shortDescription: "Palm-sized projector for portable screen viewing.",
    fullDescription:
      "NovaPocket delivers crisp projection up to 120 inches with LED light tech and wireless casting—ideal for travel, study rooms, and quick presentations.",
    rating: 4.6,
    isNew: true,
    price: 129,
    onSale: false
  },
  {
    id: "tech-003",
    name: "ViriBot Micro Rover",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H6d8548bef0724a9aa683fed373fdb236e.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H61da16e2cde6462a9c5ee8399fdb13a46.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H45b142af966b452d847a63d80fe66aa9m.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0635612f38e441a59583fbb028ef327c1.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf34daf04eadc4d5abc008128ea52b0355.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc4e63a4ce1024f68b1ac49b65324fda3L.jpg?avif=close&webp=close"
    ],
    shortDescription: "Compact smart rover with obstacle tracking.",
    fullDescription:
      "ViriBot uses infrared mapping and micro-motor movement for smooth indoor navigation. Great for STEM learning and robotics beginners.",
    rating: 4.7,
    isNew: true,
    price: 58,
    onSale: true,
    salePrice: 49
  },
  {
    id: "tech-004",
    name: "PulseLink Portable Speaker",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H8259e8c03e834186a9c28fc5c6895d6dG.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H6c975118621c4351bc512c8a960b2d17Q.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hfc685b1bb05c41c585bb933f192f36beP.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5ff8845ff9d141a3ad2c767ed21bad682.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H57a61e03128e4bea8cc8e0a35f7eb10fn.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H788a39032ee44f14a43c84bfa6016eedg.png?avif=close&webp=close"
    ],
    shortDescription: "Compact wireless speaker with deep bass output.",
    fullDescription:
      "PulseLink packs balanced audio, 10-hour battery life, and splash resistance into a lightweight body for everyday listening.",
    rating: 4.6,
    isNew: false,
    price: 39,
    onSale: false
  },
  {
    id: "tech-005",
    name: "MiniScout Smart Drone",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/Hf605acb2f92240d49666cf1e5edf7419d.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H22fb4970977a47c9b7533522fb3012f9i.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H9066e6e127834d79bc2c0ac824e92adcH.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H804b2363b8164f6f986faff4883c0f1ar.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2509deb2dc274436b652b7215f674c36Z.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H75992c582f5a4f099ecab8cce9be5170I.png?avif=close&webp=close"
    ],
    shortDescription: "Pocket drone with auto-stabilization flight mode.",
    fullDescription:
      "MiniScout includes altitude hold, gesture control, and propeller guards, making it ideal for beginners and casual aerial shots.",
    rating: 4.5,
    isNew: true,
    price: 75,
    onSale: true,
    salePrice: 64
  },
  {
    id: "tech-006",
    name: "FlexSync Power Bank 20000mAh",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H41467f1ec9414e82b6552f69bc54b7fds.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H5c7d0ee8a9964a658bc8e361fa9857057.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hcd5bebc70f82423093da152e355ba3c3B.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H9e5bfb1dd42c4ce79133fa00235a88d8P.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H05876057daa24bbc8d01f18995599929v.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hb2d40b3410f04b85ad1b0d6b2d033e8ca.png?avif=close&webp=close"
    ],
    shortDescription: "High-capacity power bank with dual USB outputs.",
    fullDescription:
      "FlexSync ensures stable fast-charging for phones, tablets, and handheld devices, ideal for travel and long outdoor days.",
    rating: 4.8,
    isNew: true,
    price: 33,
    onSale: false
  },
  {
    id: "tech-007",
    name: "OrbitMini Smart Home Hub",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H121f1eaec7594eadb793a9632a147d68k.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H81da57ccd85e428484d7d30a642902dfA.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hc2a9f08c848e447d8a31625680a25936J.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He0444c36ec654e249f453dac5ef15184x.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He7603de684b64545bf716ff6e4ecb9b8c.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Haa8a0d1ef86640cd81c27dcbf8c7242b9.png?avif=close&webp=close"
    ],
    shortDescription: "Mini smart hub for lights, sensors, and routines.",
    fullDescription:
      "OrbitMini connects your home devices into one system, supporting automation schedules, voice pairing, and app-based control.",
    rating: 4.7,
    isNew: false,
    price: 44,
    onSale: true,
    salePrice: 37
  },
  {
    id: "tech-008",
    name: "NanoGrip Auto Cleaner Bot",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H34d60a4ecb074e3da11ace5481cbe40c5.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H74fac8ce41404873b1ba2d3f358a7350I.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Ha84c05cd83d2413d972fb75860ca1ed4e.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H97b4bf20fd7a45a79468c3c815dd69d7X.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf43de5bf79ee4d429725a2e242e0e5bfZ.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H69b0ab3dbadd49b0a22840bcb54d30fe0.jpg?avif=close&webp=close"
    ],
    shortDescription: "Compact robotic cleaner for desktops and corners.",
    fullDescription:
      "NanoGrip uses soft-bristle rollers and dust sensors to clean tight workspaces, making it perfect for keyboards, desks, and shelves.",
    rating: 4.5,
    isNew: true,
    price: 25,
    onSale: false
  },
  {
    id: "tech-009",
    name: "SkyBand VR Lite Headset",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/He4eaa554757a441eb913410c405a14d9a.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H7fcb575da6b74ab5b154b341b4588c5b2.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hca93c128617b4eafaff48471212a60b0O.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc539d3b367014fb4997c990a5e9884c4I.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H94eb9b0b581a47d4a5e861c0d4d80c99b.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6f262387e4d548b2b2c208fee5657e337.png?avif=close&webp=close"
    ],
    shortDescription: "Lightweight VR viewer for immersive mobile content.",
    fullDescription:
      "SkyBand VR Lite offers adjustable lenses, breathable padding, and wide compatibility with most smartphones.",
    rating: 4.4,
    isNew: false,
    price: 29,
    onSale: true,
    salePrice: 22
  },
  {
    id: "tech-010",
    name: "PulseMate Health Tracker Band",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H21cfe68e635e4a189b70592b095d363bL.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H112a24c5ed4a4d87bf5469ad132bce0ey.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hbbade0b5968d4ae58f95b3dcdf280736B.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H29cb657a89be405da2d5e902516b2ca8f.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H21dbea1a3c0849f0bc53d488bdef601cH.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0551e754356842cf97b1ab2f989422fdD.jpg?avif=close&webp=close"
    ],
    shortDescription: "Basic health-tracking band with notifications.",
    fullDescription:
      "PulseMate monitors steps, heart rate, sleep, and reminders while offering a long-lasting battery for daily activity tracking.",
    rating: 4.5,
    isNew: true,
    price: 35,
    onSale: false
  },
  {
    id: "tech-011",
    name: "RoboLink Gesture Mini Arm",
    category: "Technology",
    image: "https://s.alicdn.com/@sc04/kf/H46ad0439c2a440a3a517c6d939bc6109w.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H1e3b38e529c74a0c91cc54a4f821e062I.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H54c9dd62f3af4dc3a198431088e2b5c7H.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H593e77d10b374012b8d2f6f87c81b25et.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H893682707cb441efaf8e2bde78cbc964J.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4d4e049b814b4667a47214adf20bb027a.jpg?avif=close&webp=close"
    ],
    shortDescription: "Mini robotic arm controlled through gestures.",
    fullDescription:
      "RoboLink uses micro-servos and a gesture sensor module for intuitive motion control—perfect for hobby robotics and demos.",
    rating: 4.6,
    isNew: true,
    price: 59,
    onSale: true,
    salePrice: 49
  }
  
];


