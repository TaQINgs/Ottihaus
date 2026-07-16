import { IMAGES } from "../constants/images";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import TestimonialSection from "../components/TestimonialSection";
import HeroSection from "../components/HeroSection";
import ScrollReveal from "../components/ScrollReveal";

const MENU_PRODUCTS = [
  { id: 1, name: "Choco Brownie Cookies", category: "Sourdough" },
  { id: 2, name: "Original Sourdough", category: "Sourdough" },
  { id: 3, name: "Cranberry Cheese Bread", category: "Sourdough" },
  { id: 4, name: "Mochi Matcha", category: "Sourdough" },
  { id: 5, name: "Cheese Cranberry Bread", category: "Sourdough" },
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
      <HeroSection
        label="Our Menu"
        heading="Browse Our Sourdough & Bread"
        description="Explore our artisan sourdough products, freshly baked bread, premium pastries, and a curated selection of bakery favorites — all crafted daily with natural fermentation and honest ingredients."
        primaryBtn={{
          text: "Order Now",
          href: "https://wa.me/628123456789",
        }}
        image={IMAGES.menuHero}
        imageAlt="Otti Haus sourdough bread and pastry selection"
      />

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <ScrollReveal>
      <section className="section">
        <div className="container text-center">
          <p className="label">Our Everyday Bestsellers</p>
          <h2 className="font-heading font-bold text-primary mb-12 text-[30px] md:text-[38px]">
            Find Your Sourdough
          </h2>

          {/* Product Grid — 3 columns */}
          <div className="flex flex-wrap justify-center gap-10 max-w-[900px] mx-auto">
            {MENU_PRODUCTS.map((product, index) => (
              <div key={product.id} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-[280px]">
                <ProductCard
                  name={product.name}
                  category={product.category}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== CUSTOMER TESTIMONIAL SECTION ===== */}
      <TestimonialSection />
    </>
  );
}
