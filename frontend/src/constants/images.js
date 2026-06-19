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
  background: createPlaceholder(1920, 1080, "Background Pattern"),

  // Generic placeholder
  placeholder: createPlaceholder(800, 600, "Image Placeholder"),

  // Hero section images
  heroImage: createPlaceholder(900, 700, "Hero Image"),
  heroImageAbout: createPlaceholder(900, 700, "About Hero Image"),

  // About / Story section
  aboutImage: createPlaceholder(700, 500, "About Image"),
  storyImage: createPlaceholder(700, 500, "Story Image"),

  // Product images
  product1: createPlaceholder(400, 400, "Product 1"),
  product2: createPlaceholder(400, 400, "Product 2"),
  product3: createPlaceholder(400, 400, "Product 3"),

  // Location section
  locationImage: createPlaceholder(700, 500, "Location Image"),

  // Quality section (About page)
  qualityImage: createPlaceholder(700, 600, "Quality Image"),

  // Menu page
  menuHero: createPlaceholder(900, 700, "Menu Hero Image"),
  menuProduct: createPlaceholder(400, 400, "Menu Product"),

  // Location page
  locationHero: createPlaceholder(900, 700, "Location Hero Image"),
  storeCard: createPlaceholder(400, 300, "Store Image"),

  // Testimonial
  testimonialImage: createPlaceholder(500, 400, "Testimonial Image"),
  testimonialAvatar: createPlaceholder(100, 100, "Avatar"),

  // Contact page
  contactHero: createPlaceholder(1200, 800, "Contact Hero Image"),
  map: createPlaceholder(1600, 600, "Google Maps Placeholder"),
};
