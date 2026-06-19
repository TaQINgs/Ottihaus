import { IMAGES } from "../constants/images";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

export default function About() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection
        label="About otti haus"
        heading="Where Quality Bread Meets Warm Spaces."
        description="Bandung's sourdough bakery yang menghadirkan premium bread dengan proses fermentasi alami dan dipanggang fresh setiap hari. Menyediakan berbagai varian sourdough, specialty pastry, serta cozy café space yang dapat dinikmati langsung di store maupun secara online."
        primaryBtn="order now"
        secondaryBtn="see our menu"
        image={IMAGES.heroImageAbout}
        imageAlt="Artisan bread from Otti Haus"
      />

      {/* ===== STORY SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left — 55% Image */}
            <div className="w-full md:w-[55%]">
              <div className="relative">
                <img
                  src={IMAGES.storyImage}
                  alt="Inside Otti Haus bakery"
                  className="w-full h-[320px] md:h-[460px] object-cover rounded-[6px]"
                />
                {/* Carousel Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="w-2 h-2 rounded-full bg-primary/25" />
                  <span className="w-2 h-2 rounded-full bg-primary/25" />
                </div>
              </div>
            </div>

            {/* Right — 45% Content */}
            <div className="w-full md:w-[45%]">
              <p className="label">About otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-5 text-[30px] md:text-[38px] leading-tight">
                Soft Sourdough, Honest Ingredients.
              </h2>
              <p className="font-body text-[15px] text-primary/70 leading-[1.8] mb-8">
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
                  <p className="font-body text-[11px] text-primary/55 mt-1 uppercase tracking-wider">
                    Total customer
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none">
                    4
                  </p>
                  <p className="font-body text-[11px] text-primary/55 mt-1 uppercase tracking-wider">
                    outlets
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none">
                    95%
                  </p>
                  <p className="font-body text-[11px] text-primary/55 mt-1 uppercase tracking-wider">
                    ratings
                  </p>
                </div>
              </div>

              <Button variant="outline">learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUALITY SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
            {/* Left — Content */}
            <div className="w-full md:w-[50%]">
              <p className="label">quality otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-10 text-[30px] md:text-[38px] leading-tight">
                Premium Inside, Fluffy Outside.
              </h2>

              {/* Feature Blocks — 2 col grid + 1 full */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                {/* Premium Ingredients */}
                <div>
                  <div className="mb-3">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                    >
                      <path d="M24 4c-4 0-8 4-8 10s4 10 8 10 8-4 8-10S28 4 24 4z" />
                      <path d="M16 34c0 5 3.5 10 8 10s8-5 8-10" />
                      <path d="M20 14c-2 2-2 6 0 8M28 14c2 2 2 6 0 8" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Premium Ingredients
                  </h4>
                  <p className="font-body text-[13px] text-primary/60 leading-relaxed">
                    Crafted with carefully selected,
                    high-quality ingredients.
                  </p>
                </div>

                {/* Fresh Daily */}
                <div>
                  <div className="mb-3">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                    >
                      <circle cx="24" cy="24" r="18" />
                      <path d="M24 12v12l8 4" />
                      <path d="M18 6l-2-3M30 6l2-3" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Fresh Daily
                  </h4>
                  <p className="font-body text-[13px] text-primary/60 leading-relaxed">
                    Made fresh every day for just-right
                    fluffiness and taste.
                  </p>
                </div>

                {/* Halal Certified — Full width */}
                <div className="sm:col-span-2 max-w-[260px]">
                  <div className="mb-3">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                    >
                      <rect x="6" y="8" width="36" height="28" rx="4" />
                      <text
                        x="24"
                        y="28"
                        textAnchor="middle"
                        fill="var(--color-primary)"
                        fontSize="12"
                        fontFamily="Courier Prime"
                        fontWeight="700"
                        stroke="none"
                      >
                        HALAL
                      </text>
                    </svg>
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Halal Certified
                  </h4>
                  <p className="font-body text-[13px] text-primary/60 leading-relaxed">
                    Seluruh bahan baku dan proses
                    produksi di Otti Haus sudah terjamin
                    halal demi kenyamanan penuh
                    pelanggan.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="w-full md:w-[50%]">
              <img
                src={IMAGES.qualityImage}
                alt="Otti Haus quality ingredients"
                className="w-full h-[380px] md:h-[520px] object-cover rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section bg-secondary/15">
        <div className="container text-center">
          <p className="label">why otti haus</p>
          <h2 className="font-heading font-bold text-primary mb-14 text-[30px] md:text-[38px]">
            Breads that fit your taste and day.
          </h2>

          {/* 3 Columns with Vertical Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[900px] mx-auto">
            {/* Feature 1 */}
            <div className="px-6 py-4 md:border-r border-[var(--color-border)]">
              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                  >
                    <path d="M8 36c0 0 4-8 16-8s16 8 16 8" />
                    <path d="M12 28c0-6 5-12 12-12s12 6 12 12" />
                    <path d="M18 16c-1-3 0-8 6-10M30 16c1-3 0-8-6-10" />
                    <path d="M20 20c0-2 1.5-4 4-4s4 2 4 4" />
                  </svg>
                }
                title="Fresh Everyday"
                description="Roti soft sourdough dan pastries kami dipanggang segar every single morning siap menemani momen drive-in santai atau tinggal quick pick-up pas kamu lagi buru-buru."
              />
            </div>

            {/* Feature 2 */}
            <div className="px-6 py-4 md:border-r border-[var(--color-border)]">
              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                  >
                    <path d="M14 38V20l10-12 10 12v18" />
                    <path d="M20 38V28h8v10" />
                    <path d="M10 20l14-14 14 14" />
                    <path d="M18 8l-2-3M30 8l2-3M24 5V2" />
                  </svg>
                }
                title="Natural Fermentation"
                description="Difermentasi alami menggunakan wild yeast, rendah gluten, dan zero preservatives. Rasanya autentik, super ringan, dan yang pasti selalu ramah di lambung."
              />
            </div>

            {/* Feature 3 */}
            <div className="px-6 py-4">
              <FeatureCard
                icon={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                  >
                    <circle cx="24" cy="20" r="10" />
                    <path d="M24 10v-4M24 30v4M14 20h-4M34 20h4" />
                    <path d="M12 36c0 0 5-6 12-6s12 6 12 6v4H12v-4z" />
                  </svg>
                }
                title="Comfortable Bakery Space"
                description="Berlokasi strategis di tengah kota Bandung area kafènya didesain dengan konsep hangat dan minimalis, cocok banget buat fokus nugas atau sekedar hangout."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
