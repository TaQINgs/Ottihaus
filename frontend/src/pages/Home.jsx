import { useState } from "react";
import { IMAGES } from "../constants/images";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";
import TestimonialSection from "../components/TestimonialSection";

const PRODUCTS = [
  { id: 1, name: "Choco Brownie Cookies", category: "Sourdough" },
  { id: 2, name: "Original Sourdough", category: "Sourdough" },
  { id: 3, name: "Cranberry Cheese Bread", category: "Sourdough" },
];

const STORES = [
  {
    id: 1,
    name: "OTTI HAUS CENTRAL",
    address: "Jl. KH Ahmad Dahlan",
    hours: "08:00 — 21:00",
    phone: "0855-1236-100",
    maps: "https://maps.app.goo.gl/c7uFsSEkL3CSZFKu9",
    image: IMAGES.cabCentral,
  },
  {
    id: 2,
    name: "OTTI HAUS DIPATIUKUR",
    address: "Jl. Dipati Ukur No. 70C",
    hours: "08:00 — 21:00",
    phone: "0855-1236-100",
    maps: "https://maps.app.goo.gl/8PqL9S1ufVrbKGSU8",
    image: IMAGES.cabDipatiukur,
  },
  {
    id: 3,
    name: "OTTI HAUS ANTAPANI",
    address: "Jl. Purwakarta No. 66",
    hours: "08:00 — 21:00",
    phone: "0855-1236-100",
    maps: "https://maps.app.goo.gl/3U8AbkvQ5hEfWLGd9",
    image: IMAGES.cabAntapani,
  },
  {
    id: 4,
    name: "OTTI HAUS CIMAHI",
    address: "Jl. Amir Machmud No. 152",
    hours: "08:00 — 21:00",
    phone: "0855-1236-100",
    maps: "https://maps.app.goo.gl/xWWUTeVDpyoBUTH48",
    image: IMAGES.cabCimahi,
  },
];

export default function Home() {
  const [storeIndex, setStoreIndex] = useState(0);
  const currentStore = STORES[storeIndex];

  const handlePrevStore = () => {
    setStoreIndex((prev) => (prev === 0 ? STORES.length - 1 : prev - 1));
  };

  const handleNextStore = () => {
    setStoreIndex((prev) => (prev === STORES.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        label="Sourdough bakery"
        heading="Sourdough & Beyond"
        subtitle="Baked Naturally for Every Day"
        description="We rebalance indulgence: soft sourdough ragi alami dan aneka roti premium dipanggang segar setiap hari. Baik untuk teman ngesparti fokus, pelengkap momen produktif di kafe, hingga camilan bersama teman, kami menyajikannya dengan sempurna."
        primaryBtn={{
          text: "Order Now",
          href: "https://wa.me/628123456789",
        }}
        secondaryBtn={{
          text: "See Our Menu",
          to: "/menu",
        }}
        image={IMAGES.heroImage}
        imageAlt="Otti Haus artisan sourdough bread display"
      />

      {/* ===== ABOUT SECTION ===== */}
      <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left — 55% Image */}
            <div className="w-full md:w-[55%]">
              <div className="relative">
                <img
                  src={IMAGES.aboutImage}
                  alt="Otti Haus bakery"
                  className="w-full h-[320px] md:h-[460px] object-cover rounded-[6px]"
                />

              </div>
            </div>

            {/* Right — 45% Content */}
            <div className="w-full md:w-[45%]">
              <p className="label">About otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-5 text-[30px] md:text-[38px] leading-tight">
                Wild Yeast. Soft Texture. Fresh Daily.
              </h2>
              <p className="font-body text-[15px] text-primary leading-[1.8] mb-8">
                Bandung's sourdough bakery yang menghadirkan premium
                bread dengan proses fermentasi alami dan dipanggang fresh
                setiap hari. Menyediakan berbagai varian sourdough,
                specialty pastry, serta cozy café space yang dapat dinikmati
                langsung di store maupun secara online.
              </p>

              {/* Statistics */}
              <div className="flex items-start gap-10 mb-8">
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none">
                    5000+
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider">
                    Total customer
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none">
                    4
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider">
                    outlets
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none">
                    95%
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider">
                    ratings
                  </p>
                </div>
              </div>

              <Button variant="outline" to="/about">learn more</Button>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== PRODUCT SECTION ===== */}
      <ScrollReveal delay={100}>
      <section id="products" className="section">
        <div className="container text-center">
          <p className="label">Otti's Finest</p>
          <h2 className="font-heading font-bold text-primary mb-12 text-[30px] md:text-[38px]">
            The Sourdough Everyone Loves
          </h2>

          {/* Product Grid — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[900px] mx-auto mb-10">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                index={index}
              />
            ))}
          </div>

          <Button variant="primary" to="/menu">see all menu</Button>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== TESTIMONIAL SECTION ===== */}
      {/* <TestimonialSection /> */}

      {/* ===== LOCATION SECTION ===== */}
      <ScrollReveal>
      <section id="location" className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left — Image with carousel arrows */}
            <div className="w-full md:w-[55%]">
              <div className="relative">
                <img
                  src={currentStore.image}
                  alt={currentStore.name}
                  className="w-full h-[320px] md:h-[460px] object-cover rounded-[6px]"
                />
                {/* Carousel Nav Arrows */}
                <button
                  onClick={handlePrevStore}
                  className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/20 bg-white/70 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Previous"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={handleNextStore}
                  className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/20 bg-white/70 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Next"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                {/* Location name overlay */}
                <div className="absolute bottom-0 left-0 right-0 text-center py-4 bg-white/60 backdrop-blur-sm">
                  <h3 className="font-heading text-[18px] font-bold text-primary">
                    {currentStore.name.toLowerCase()}
                  </h3>
                  <p className="font-body text-[13px] text-primary">
                    {currentStore.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Info */}
            <div className="w-full md:w-[45%]">
              <p className="label">location &amp; hours</p>
              <h3 className="font-heading font-bold text-primary mb-6 text-[22px] md:text-[26px]">
                {currentStore.name}
              </h3>

              {/* Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="var(--color-primary)"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-body text-[14px] text-primary">
                    {currentStore.address}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="font-body text-[14px] text-primary">
                    {currentStore.hours}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="var(--color-primary)"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="font-body text-[14px] text-primary">
                    {currentStore.phone}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="var(--color-primary)"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <a
                    href={currentStore.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[14px] text-primary underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
