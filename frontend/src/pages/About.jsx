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
        primaryBtn={{
          text: "Order Now",
          href: "https://wa.me/628123456789",
        }}
        secondaryBtn={{
          text: "See Our Menu",
          to: "/menu",
        }}
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

              </div>
            </div>

            {/* Right — 45% Content */}
            <div className="w-full md:w-[45%]">
              <p className="label">About otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-5 text-[30px] md:text-[38px] leading-tight">
                Soft Sourdough, Honest Ingredients.
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
                  <p className="font-heading text-[32px] font-bold text-primary leading-none text-center">
                    5000+
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider text-center">
                    Total customer
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none text-center">
                    4
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider text-center">
                    outlets
                  </p>
                </div>
                <div>
                  <p className="font-heading text-[32px] font-bold text-primary leading-none text-center">
                    95%
                  </p>
                  <p className="font-body text-[11px] text-primary mt-1 uppercase tracking-wider text-center">
                    ratings
                  </p>
                </div>
              </div>
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
              <p className="label">Quality otti haus</p>
              <h2 className="font-heading font-bold text-primary mb-10 text-[30px] md:text-[38px] leading-tight">
                Premium Inside, Fluffy Outside.
              </h2>
              {/* Feature Blocks — 2 col grid + 1 full */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                {/* Premium Ingredients */}
                <div>
                  <div className="mb-3">
                    <img
                      src={IMAGES.bakeIcon}
                      alt="Premium Ingredients"
                      className="w-[75px] h-[75px] object-contain"
                    />
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Premium Ingredients
                  </h4>
                  <p className="font-body text-[13px] text-primary leading-relaxed">
                    Crafted with carefully selected,
                    high-quality ingredients.
                  </p>
                </div>

                {/* Fresh Daily */}
                <div>
                  <div className="mb-3">
                    <img
                      src={IMAGES.freshIcon}
                      alt="Premium Ingredients"
                      className="w-[75px] h-[75px] object-contain"
                    />
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Fresh Daily
                  </h4>
                  <p className="font-body text-[13px] text-primary leading-relaxed">
                    Made fresh every day for just-right
                    fluffiness and taste.
                  </p>
                </div>

                {/* Halal Certified — Full width */}
                <div className="sm:col-span-2 max-w-[260px]">
                  <div className="mb-3">
                    <img
                      src={IMAGES.halalIcon}
                      alt="Premium Ingredients"
                      className="w-[75px] h-[75px] object-contain"
                    />
                  </div>
                  <h4 className="font-heading text-[15px] font-bold text-primary mb-2">
                    Halal Certified
                  </h4>
                  <p className="font-body text-[13px] text-primary leading-relaxed">
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
      <section className="section">
        <div className="container text-center">
          <p className="label">why otti haus</p>
          <h2 className="font-heading font-bold text-primary mb-14 text-[30px] md:text-[38px]">
            Breads that fit your taste and day.
          </h2>

          {/* 3 Columns with Vertical Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-4 py-8 border-b md:border-b-0 md:border-r-[5px] border-[#A88B6A]">
              <FeatureCard
                icon={
                  <img
                    src={IMAGES.freshIcon}
                    alt="Fresh Everyday"
                    className="w-[120px] h-[120px] object-contain"
                  />
                }
                title="Fresh Everyday"
                description="Roti soft sourdough dan pastries kami dipanggang segar every single morning siap menemani momen drive-in santai atau tinggal quick pick-up pas kamu lagi buru-buru."
              />
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-4 py-8 border-b md:border-b-0 md:border-r-[5px] border-[#A88B6A]">
              <FeatureCard
                icon={
                  <img
                    src={IMAGES.bakeIcon}
                    alt="Natural Fermentation"
                    className="w-[120px] h-[120px] object-contain"
                  />
                }
                title="Natural Fermentation"
                description="Difermentasi alami menggunakan wild yeast, rendah gluten, dan zero preservatives."
              />
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-4 py-8">
              <FeatureCard
                icon={
                  <img
                    src={IMAGES.locationIcon}
                    alt="Comfortable Bakery Space"
                    className="w-[120px] h-[120px] object-contain"
                  />
                }
                title="Comfortable Bakery Space"
                description="Berlokasi strategis di tengah kota Bandung dengan konsep hangat dan minimalis."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
