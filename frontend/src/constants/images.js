// Placeholder image generator using SVG data URIs
// These will be replaced with actual images later
function createPlaceholder(width, height, text) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#d4cbbf"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Courier Prime, Courier New, monospace" font-size="16" fill="#4d362e" opacity="0.5">${text}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const IMAGES = {
  // Full-page background (will be replaced with actual bakery pattern)
  background: createPlaceholder(1920, 1080, "Background"),

  // Generic placeholder for all content images
  placeholder: createPlaceholder(800, 600, "Image Placeholder"),

  // Hero section - large bread/bakery photo
  heroImage: createPlaceholder(900, 700, "Hero Image"),

  // About section - storefront or bakery interior
  aboutImage: createPlaceholder(700, 800, "About Image"),

  // Product images
  product1: createPlaceholder(400, 400, "Product 1"),
  product2: createPlaceholder(400, 400, "Product 2"),
  product3: createPlaceholder(400, 400, "Product 3"),

  // Location section - storefront exterior
  locationImage: createPlaceholder(700, 800, "Location Image"),

  // Quality section image (About page)
  qualityImage: createPlaceholder(700, 800, "Quality Image"),

  // Gallery images
  gallery1: createPlaceholder(600, 400, "Gallery 1"),
  gallery2: createPlaceholder(600, 400, "Gallery 2"),
  gallery3: createPlaceholder(600, 400, "Gallery 3"),
};
