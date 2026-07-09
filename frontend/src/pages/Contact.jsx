import { useState } from "react";
import { IMAGES } from "../constants/images";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  // Structure prepared for future contact form; not displayed by default
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="section pt-[140px] pb-[120px]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
            {/* Left Content — 45% */}
            <div className="w-full md:w-[50%] order-2 md:order-1">
              <h1 className="font-heading font-bold text-primary mb-6 text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1]">
                visit our space
              </h1>

              <p className="font-body text-[15px] text-primary leading-[1.8] max-w-[420px]">
                Cek lokasi terdekat kami, info operasional, dan kontak di sini.
                Siap melayani kamu untuk dine-in santai, takeaway, maupun
                pemesanan via delivery.
              </p>
            </div>

            {/* Right Content — 55% */}
            <div className="w-full md:w-[45%] order-1 md:order-2">
              <div className="relative">
                {/* Outlet Image */}
                <div className="rounded-[8px] overflow-hidden border border-[var(--color-border)]">
                  <img
                    src={IMAGES.contactHero}
                    alt="Otti Haus outlet storefront"
                    className="w-full h-[320px] md:h-[420px] object-cover"
                  />
                </div>

                {/* Left/Right Overlaid Arrow Buttons (Visual only, as requested) */}
                <button
                  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-primary/20 bg-primary text-white flex items-center justify-center hover:bg-[#3a2822] transition-colors shadow-md z-10"
                  aria-label="Previous outlet"
                  type="button"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full border border-primary/20 bg-primary text-white flex items-center justify-center hover:bg-[#3a2822] transition-colors shadow-md z-10"
                  aria-label="Next outlet"
                  type="button"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Outlet details below image */}
              <div className="text-center mt-5">
                <h4 className="font-heading text-[16px] font-bold text-primary tracking-wide">
                  otti haus central
                </h4>
                <p className="font-body text-[13px] text-primary mt-1">
                  Jln. KH Ahmad Dahlan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFORMATION SECTION ===== */}
      <section className="section pb-[100px]">
        <div className="container">
          <div className="border border-[var(--color-border)] rounded-[8px] bg-white/20 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">

              {/* Column 1 — Contact */}
              <div className="text-center pb-6 md:pb-0 md:px-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.68.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <h4 className="font-heading text-[14px] font-bold text-primary mb-3 uppercase tracking-wider">
                  Contact
                </h4>
                <p className="font-body text-[13px] text-primary">
                  (+62)855-1236-100
                </p>
              </div>

              {/* Column 2 — Email */}
              <div className="text-center py-6 md:py-0 md:px-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h4 className="font-heading text-[14px] font-bold text-primary mb-3 uppercase tracking-wider">
                  Email
                </h4>
                <div className="flex flex-col gap-1">
                  <a href="mailto:admin@sincerahomemade.com" className="font-body text-[13px] text-primary hover:underline">
                    admin@sincerahomemade.com
                  </a>
                  <a href="mailto:info@sincerahomemade.com" className="font-body text-[13px] text-primary hover:underline">
                    info@sincerahomemade.com
                  </a>
                  <a href="mailto:marketing@sincerahomemade.com" className="font-body text-[13px] text-primary hover:underline">
                    marketing@sincerahomemade.com
                  </a>
                </div>
              </div>

              {/* Column 3 — Outlet Center */}
              <div className="text-center pt-6 md:pt-0 md:px-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h4 className="font-heading text-[14px] font-bold text-primary mb-3 uppercase tracking-wider">
                  Outlet Center
                </h4>
                <p className="font-body text-[13px] text-primary leading-relaxed max-w-[280px]">
                  Jl. Banteng No.104, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      {/* ===== MAP SECTION ===== */}
      <section className="section pb-[100px]">
        <div className="container text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="font-heading font-bold text-primary text-[20px] md:text-[24px]">
              Find Us On Google Maps
            </h2>

            <a
              href="https://maps.google.com/?q=otti+haus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline py-2 px-6 text-[12px]"
            >
              Open Maps
            </a>
          </div>

          <div className="w-full border border-[var(--color-border)] overflow-hidden aspect-[16/6] md:aspect-[16/5]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.634020657582!2d107.62354359999999!3d-6.934270700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e96fcb749b5f%3A0x3a8597f563f17596!2sotti%20haus%20-%20sourdough%2C%20roti%2C%20dan%20kue!5e0!3m2!1sid!2sid!4v1781842052787!5m2!1sid!2sid"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Otti Haus Location"
            />
          </div>
        </div>
      </section>

      {/* ===== FUTURE REUSABLE CONTACT FORM (HIDDEN BY DEFAULT) ===== */}
      {showForm && (
        <section className="section pb-[100px]">
          <div className="container text-center">
            <h2 className="font-heading font-bold text-primary mb-8 text-[24px]">
              Send Us A Message
            </h2>
            <ContactForm />
          </div>
        </section>
      )}
    </>
  );
}
