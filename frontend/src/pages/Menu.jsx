import { IMAGES } from "../constants/images";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import TestimonialSection from "../components/TestimonialSection";

const MENU_PRODUCTS = [
  { id: 1, name: "Choco Brownie Cookies", category: "Cookies" },
  { id: 2, name: "Original Sourdough", category: "Sourdough" },
  { id: 3, name: "Cranberry Cheese Bread", category: "Bread" },
];

// Hidden reusable component structure for future expansion
const MENU_CATEGORIES = [
  { id: "sourdough", label: "Sourdough" },
  { id: "bread", label: "Bread" },
  { id: "pastry", label: "Pastry" },
  { id: "cookies", label: "Cookies" },
];

export default function Menu() {
  return (
    <>
      {/* ===== HERO MENU SECTION ===== */}
      <section className="section pt-[140px] pb-[var(--spacing-section)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
            {/* Left Content — 45% */}
            <div className="w-full md:w-[55%] order-2 md:order-1">
              <p className="label">Our Menu</p>

              <h1 className="font-heading font-bold text-primary mb-5 leading-[1.15]">
                Browse Our Sourdough &amp; Bread
              </h1>

              <p className="font-body text-[15px] text-primary leading-[1.8] mb-8 max-w-[420px]">
                Explore our artisan sourdough products, freshly baked bread,
                premium pastries, and a curated selection of bakery favorites —
                all crafted daily with natural fermentation and honest
                ingredients.
              </p>

              <Button variant="primary">order now</Button>
            </div>

            {/* Right Image — 55% */}
            <div className="w-full md:w-[45%] order-1 md:order-2">
              <div className="rounded-[8px] overflow-hidden">
                <img
                  src={IMAGES.menuHero}
                  alt="Otti Haus sourdough bread and pastry selection"
                  className="w-full h-[320px] md:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section className="section">
        <div className="container text-center">
          <p className="label">Our Everyday Bestsellers</p>
          <h2 className="font-heading font-bold text-primary mb-12 text-[30px] md:text-[38px]">
            Find Your Sourdough
          </h2>

          {/* Product Grid — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[780px] mx-auto mb-10">
            {MENU_PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                index={index}
              />
            ))}
          </div>

          <Button variant="primary">see all menu</Button>
        </div>
      </section>

      {/* ===== CUSTOMER TESTIMONIAL SECTION ===== */}
      <TestimonialSection />
    </>
  );
}
