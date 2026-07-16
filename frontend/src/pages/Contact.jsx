import { IMAGES } from "../constants/images";
import Button from "../components/Button";
import TestimonialSection from "../components/TestimonialSection";
import ScrollReveal from "../components/ScrollReveal";

const STORES = [
  {
    id: 1,
    name: "OTTI HAUS CENTRAL",
    image: IMAGES.cabCentral,
    address: "Jl. KH Ahmad Dahlan",
    hours: "08:00 — 21:00",
    phone: "0855-123-6100",
    maps: "https://maps.app.goo.gl/c7uFsSEkL3CSZFKu9",
  },
  {
    id: 2,
    name: "OTTI HAUS DIPATIUKUR",
    image: IMAGES.cabDipatiukur,
    address: "Jl. Dipati Ukur No. 70C",
    hours: "08:00 — 21:00",
    phone: "0855-123-6100",
    maps: "https://maps.app.goo.gl/8PqL9S1ufVrbKGSU8",
  },
  {
    id: 3,
    name: "OTTI HAUS ANTAPANI",
    image: IMAGES.cabAntapani,
    address: "Jl. Purwakarta No. 66",
    hours: "08:00 — 21:00",
    phone: "0855-123-6100",
    maps: "https://maps.app.goo.gl/3U8AbkvQ5hEfWLGd9",
  },
  {
    id: 4,
    name: "OTTI HAUS CIMAHI",
    image: IMAGES.cabCimahi,
    address: "Jl. Amir Machmud No. 152",
    hours: "08:00 — 21:00",
    phone: "0855-123-6100",
    maps: "https://maps.app.goo.gl/xWWUTeVDpyoBUTH48",
  },
];

export default function Location() {
  return (
    <>
      {/* ===== CONTACT HERO SECTION ===== */}
      <section className="contact-hero">
        {/* Full-width background image */}
        <div className="contact-hero__image-wrapper">
          <img
            src={IMAGES.locationHero}
            alt="Otti Haus bakery storefront"
            className="contact-hero__img"
          />
        </div>

        {/* Dark overlay */}
        <div className="contact-hero__overlay" />

        {/* Bottom fade into cream */}
        <div className="contact-hero__bottom-fade" />

        {/* Content — right side */}
        <div className="contact-hero__content">
          <div className="contact-hero__content-inner">
            <p className="label contact-hero__label">Contact Us</p>

            <h1 className="contact-hero__heading">
              Get In Touch With OTTI HAUS
            </h1>

            <p className="contact-hero__description">
              Ada pertanyaan tentang menu, pesanan custom, reservasi tempat, atau
              kerjasama? Hubungi tim OTTI HAUS — kami siap membantu dengan cepat
              dan ramah.
            </p>

            <div>
              <Button
                variant="primary"
                href="https://wa.me/628123456789"
              >
                Chat With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORE LOCATIONS SECTION ===== */}
      <ScrollReveal>
      <section className="section">
        <div className="container text-center">
          <p className="label">store &amp; hours</p>
          <h2 className="font-heading font-bold text-primary mb-12 text-[30px] md:text-[38px]">
            Explore Our Stores
          </h2>

          {/* Store Cards — 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STORES.map((store) => (
              <div
                key={store.id}
                className="border border-[var(--color-border)] overflow-hidden bg-white/20 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Store Image */}
                <div className="p-3 pb-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-[6px] bg-[#d4cbbf]">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Store Info */}
                <div className="p-4 pt-3">
                  <h4 className="font-heading text-[13px] font-bold text-primary mb-3 tracking-wide">
                    {store.name}
                  </h4>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-2">
                    <svg
                      className="w-[14px] h-[14px] mt-0.5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="var(--color-primary)"
                      opacity="0.6"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="font-body text-[12px] text-primary leading-relaxed">
                      {store.address}
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2 mb-2">
                    <svg
                      className="w-[14px] h-[14px] mt-0.5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      opacity="0.6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="font-body text-[12px] text-primary">
                      {store.hours}
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2 mb-3">
                    <svg
                      className="w-[14px] h-[14px] mt-0.5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="var(--color-primary)"
                      opacity="0.6"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="font-body text-[12px] text-primary">
                      {store.phone}
                    </span>
                  </div>

                  {/* View on Maps */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-[14px] h-[14px] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      opacity="0.6"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <a
                      href={store.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[11px] text-primary underline hover:text-primary transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <TestimonialSection />
    </>
  );
}
