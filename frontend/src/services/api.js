const API_BASE_URL = "http://localhost:5000/api";

// Fallback product data when backend is unavailable
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: "Choco Bronie Cookies",
    description: "Rich chocolate brownie cookies with a soft center",
    price: 45000,
    image_url: null,
  },
  {
    id: 2,
    name: "Choco Bronie Cookies",
    description: "Classic artisan sourdough with wild yeast",
    price: 38000,
    image_url: null,
  },
  {
    id: 3,
    name: "Choco Bronie Cookies",
    description: "Buttery croissant made with premium ingredients",
    price: 32000,
    image_url: null,
  },
];

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error("API unavailable");
    return await response.json();
  } catch (error) {
    console.warn("Backend unavailable, using fallback data:", error.message);
    return FALLBACK_PRODUCTS;
  }
}
