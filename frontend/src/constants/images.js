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
  background: "/image/bg.png",

  // Generic placeholder
  placeholder: createPlaceholder(800, 600, "Image Placeholder"),

  // Hero section images
  heroImage: "/image/1-p1.jpeg",
  heroImageAbout: "/image/1-p2.png",

  // About / Story section
  aboutImage: "/image/2-p1.png",
  storyImage: "/image/2-p2.png",

  // Product images
  product1: "/image/produk1.png",
  product2: "/image/produk2.png",
  product3: "/image/produk3.png",

  // Location section
  locationImage: "/image/1-p1.png",

  // Quality section (About page)
  qualityImage: "/image/3-p2.png",

  // Menu page
  menuHero: "/image/1-p3.png",
  menuProduct: createPlaceholder(400, 400, "Menu Product"),

  // Location page
  locationHero: "/image/loc2.png",
  storeCard: "/image/loc1.png",

  // Testimonial
  testimonialImage: "/image/testi.jpeg",
  testimonialAvatar: createPlaceholder(100, 100, "Avatar"),

  // Contact page
  contactHero: "/image/loc1.png",
  map: createPlaceholder(1600, 600, "Google Maps Placeholder"),
};
