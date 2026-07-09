import { useState } from "react";
import { IMAGES } from "../constants/images";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Roti sourdoughnya yang soft banget dan cheese nya itu balanced, aku paling suka sama yang classic plain. Tempatnya juga cozy banget, perfect for kerja sambil ngopi",
    author: "Vanika A.",
    rating: 5,
    image: IMAGES.testimonialImage,
  },
  {
    id: 2,
    quote: "Sourdough cranberry cheese-nya juara! Lembut di dalam, crust-nya pas, dan keju-nya melimpah. Anak-anak saya juga suka banget.",
    author: "Rian D.",
    rating: 5,
    image: IMAGES.aboutImage,
  },
  {
    id: 3,
    quote: "Tempat favorit buat beli roti sehat di Bandung. Tanpa pengawet tapi rotinya tetap lembut dan gampang dicerna. Highly recommended!",
    author: "Amelia P.",
    rating: 5,
    image: IMAGES.storyImage,
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Left — Content */}
          <div className="w-full md:w-[40%]">
            <p className="label">What Our Customers Say</p>
            <h2 className="font-heading font-bold text-primary mb-5 text-[26px] md:text-[32px] leading-tight">
              Why Sourdough Lovers Choose OTTI HAUS
            </h2>
            <p className="font-body text-[14px] text-primary leading-[1.8]">
              Soft sourdough, fresh daily, honest ingredients,
              more's what they're saying
            </p>
          </div>

          {/* Right — Testimonial Card */}
          <div className="w-full md:w-[60%]">
            <div className="border border-[var(--color-border)] rounded-[8px] overflow-hidden bg-white/20">
              <div className="flex flex-col sm:flex-row">
                {/* Testimonial Image */}
                <div className="sm:w-[45%] h-[240px] sm:h-full overflow-hidden">
                  <img
                    src={current.image}
                    alt="Customer testimonial"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="sm:w-[55%] p-6 flex flex-col justify-center min-h-[280px]">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(current.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#ceb69e"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-body text-[13px] text-primary leading-[1.7] mb-5 italic min-h-[85px] flex items-center">
                    "{current.quote}"
                  </p>

                  <p className="font-heading text-[14px] font-bold text-primary">
                    {current.author}
                  </p>

                  {/* Carousel Dots */}
                  <div className="flex gap-2 mt-4">
                    {TESTIMONIALS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-primary w-4" : "bg-primary/25"
                          }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
