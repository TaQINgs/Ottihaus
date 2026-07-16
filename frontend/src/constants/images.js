// ============================================
// OTTI HAUS — Centralized Image Configuration
// ============================================
// Replace placeholder URLs with actual images.
// All components import images from this file.

function createPlaceholder(width, height, text) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#d4cbbf"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Courier Prime, Courier New, monospace" font-size="16" fill="#4d362e" opacity="0.4">${text}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// ── Section Background Images ──────────────────────
// Each major section supports its own background image.
// Replace these URLs with actual images later.
export const SECTION_BACKGROUNDS = {
  hero: "https://via.placeholder.com/1920x1080",
  about: "https://via.placeholder.com/1920x1080",
  products: "https://via.placeholder.com/1920x1080",
  location: "https://via.placeholder.com/1920x1080",
  story: "https://via.placeholder.com/1920x1080",
  quality: "https://via.placeholder.com/1920x1080",
};

// ── Content Images ─────────────────────────────────
// Use IMAGES.placeholder (or specific keys) for ALL
// image containers. Replace with real photos later.
export const IMAGES = {
  // Global background pattern (subtle bread illustrations)
  background: "/image/bg.webp",

  // Generic placeholder
  placeholder: createPlaceholder(800, 600, "Image Placeholder"),

  // Hero section images
  heroImage: "/image/1-p1.webp",
  heroImageAbout: "/image/1-p2.webp",

  // About / Story section
  aboutImage: "/image/2-p1.webp",
  storyImage: "/image/2-p2.webp",

  // Product images
  product1: "/image/produk1.webp",
  product2: "/image/produk2.webp",
  product3: "/image/produk3.webp",
  product4: "/image/produk4.webp",
  product5: "/image/produk5.webp",

  // Location section
  locationImage: "/image/1-p1.webp",

  // Quality section (About page)
  qualityImage: "/image/3-p2.webp",

  // Menu page
  menuHero: "/image/1-p3.webp",
  menuProduct: createPlaceholder(400, 400, "Menu Product"),

  // Location page
  locationHero: "/image/contact.webp",
  storeCard: "/image/loc1.webp",

  // Testimonial
  testi1: "/image/testi.webp",
  testi2: "/image/testi2.webp",
  testi3: "/image/testi3.webp",
  testimonialAvatar: createPlaceholder(100, 100, "Avatar"),

  // Contact page
  contactHero: "/image/loc1.webp",
  map: createPlaceholder(1600, 600, "Google Maps Placeholder"),

  bakeIcon: "/assets/icon bake atw fermen.webp",
  halalIcon: "/assets/logo icon halal.webp",
  freshIcon: "/assets/icon fresh bake.webp",
  locationIcon: "/assets/icon location 1.webp",

  headhome: "/assets/headberanda.webp",
  headabout: "/assets/headabout.webp",
  headmenu: "/assets/headmenu.webp",
  headlocation: "/assets/headlokasi.webp",
  headcontact: "/assets/headlokasi.webp",

  cabAntapani: "/assets/Antapani cabang.webp",
  cabCimahi: "/assets/Cimahi cabang.webp",
  cabCentral: "/assets/Central cabang.webp",
  cabDipatiukur: "/assets/Dipatiukur cabang.webp",
};
