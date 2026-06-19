import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="section pt-[140px] pb-[var(--spacing-section)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6">
            {/* Left — 40% */}
            <div className="w-full md:w-[40%] order-2 md:order-1">
              <p className="label">sourdough bakery</p>
              <h1 className="font-heading font-bold text-primary mb-4">
                Sourdough &amp; Beyond
              </h1>
              <p className="subtitle mb-5">
                "Baked Naturally for Every Day"
              </p>
              <p className="font-body text-[15px] text-primary/75 leading-relaxed mb-8 max-w-[400px]">
                We rebalance indulgence: soft sourdough ragi alami dan
                aneka roti premium dipanggang segar setiap hari. Baik
                untuk teman ngesparti fokus, pelengkap momen
                produktif di kafe, hingga camilan bersama teman,
                kami menyajikannya dengan sempurna. Karakter rasa yang
                autentik.
              </p>
              <div className="flex items-center gap-3">
                <button className="btn btn-primary">order now</button>
                <button className="btn btn-outline">see our menu</button>
              </div>
            </div>

            {/* Right — 60% */}
            <div className="w-full md:w-[60%] order-1 md:order-2">
              <div className="rounded-[8px] overflow-hidden">
                <img
                  src={IMAGES.heroImage}
                  alt="Otti Haus artisan sourdough bread"
                  className="w-full h-[350px] md:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left — 55% Image */}
            <div className="w-full md:w-[55%]">
              <div className="relative">
                <img
                  src={IMAGES.aboutImage}
                  alt="Otti Haus storefront"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-[4px]"
                />
                {/* Carousel Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="w-2 h-2 rounded-full bg-primary/30"></span>
                  <span className="w-2 h-2 rounded-full bg-primary/30"></span>
                </div>
              </div>
            </div>

            {/* Right — 45% Content */}
            <div className="w-full md:w-[45%]">
              <p className="label">About otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-5 text-[32px] md:text-[40px] leading-tight">
                Wild Yeast. Soft Texture. Fresh Daily.
              </h2>
              <p className="font-body text-[15px] text-primary/75 leading-relaxed mb-8">
                Bandung's sourdough bakery yang menghadirkan premium
                bread dengan proses fermentasi alami dan dipanggang fresh
                setiap hari. Menyediakan berbagai varian sourdough,
                specialty pastry, serta cozy café space yang dapat dinikmati
                langsung di store maupun secara online.
              </p>

              {/* Statistics */}
              <div className="flex items-start gap-8 mb-8">
                <div>
                  <p className="font-heading text-[36px] font-bold text-primary leading-none">
                    5000+
                  </p>
                  <p className="font-body text-[12px] text-primary/60 mt-1 uppercase tracking-wide">
                    Total customer
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[36px] font-bold text-primary leading-none">
                    4
                  </p>
                  <p className="font-body text-[12px] text-primary/60 mt-1 uppercase tracking-wide">
                    outlets
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[36px] font-bold text-primary leading-none">
                    95%
                  </p>
                  <p className="font-body text-[12px] text-primary/60 mt-1 uppercase tracking-wide">
                    ratings
                  </p>
                </div>
              </div>

              <button className="btn btn-outline">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT HIGHLIGHT ===== */}
      <section id="products" className="section">
        <div className="container text-center">
          <p className="label">Otti's Finest</p>
          <h2 className="font-heading font-bold text-primary mb-12 text-[32px] md:text-[40px]">
            The Sourdough Everyone Loves
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[800px] mx-auto mb-10">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <button className="btn btn-primary">see all menu</button>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section id="location" className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left — Image */}
            <div className="w-full md:w-[55%]">
              <div className="relative">
                <img
                  src={IMAGES.locationImage}
                  alt="Otti Haus Central outlet"
                  className="w-full h-[350px] md:h-[500px] object-cover rounded-[4px]"
                />
                {/* Carousel Nav */}
                <button
                  className="absolute top-1/2 left-3 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/30 bg-white/60 flex items-center justify-center"
                  aria-label="Previous"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/30 bg-white/60 flex items-center justify-center"
                  aria-label="Next"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right — Info */}
            <div className="w-full md:w-[45%]">
              <p className="label">location &amp; hours</p>
              <h3 className="font-heading font-bold text-primary mb-6 text-[24px] md:text-[28px]">
                OTTI HAUS CENTRAL
              </h3>

              {/* Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="var(--color-primary)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-body text-[15px] text-primary/80">
                    Jl. KH Ahmad Dahlan
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="font-body text-[15px] text-primary/80">
                    08:00 - 21:00
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="var(--color-primary)">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="font-body text-[15px] text-primary/80">
                    0855-1236-100
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="var(--color-primary)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[15px] text-primary/80 underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
