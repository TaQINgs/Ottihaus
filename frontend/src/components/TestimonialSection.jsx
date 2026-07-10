import { useEffect, useState } from "react";
import { IMAGES } from "../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Roti sourdoughnya yang soft banget dan cheese nya itu balanced, aku paling suka sama yang classic plain. Tempatnya juga cozy banget, perfect for kerja sambil ngopi.",
    author: "Vanika A.",
    rating: 5,
    image: IMAGES.testi1,
  },
  {
    id: 2,
    quote:
      "Sourdough cranberry cheese-nya juara! Lembut di dalam, crust-nya pas, dan keju-nya melimpah. Anak-anak saya juga suka banget.",
    author: "Rian D.",
    rating: 5,
    image: IMAGES.testi2,
  },
  {
    id: 3,
    quote:
      "Tempat favorit buat beli roti sehat di Bandung. Tanpa pengawet tapi rotinya tetap lembut dan gampang dicerna. Highly recommended!",
    author: "Amelia P.",
    rating: 5,
    image: IMAGES.testi3,
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setFade(true);
      }, 250);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="section">
      <div className="container">

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* LEFT */}

          <div className="w-full md:w-[40%]">

            <p className="label">
              What Our Customers Say
            </p>

            <h2 className="font-heading font-bold text-primary mb-5 text-[26px] md:text-[32px] leading-tight">
              Why Sourdough Lovers Choose OTTI HAUS
            </h2>

            <p className="font-body text-[14px] text-primary leading-[1.8]">
              Soft sourdough, fresh daily, honest ingredients,
              more's what they're saying.
            </p>

          </div>

          {/* RIGHT */}

          <div className="w-full md:w-[60%]">

            {/* Border tetap */}
            <div className="border border-[var(--color-border)] rounded-[8px] bg-white/20 p-5">

              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop
                speed={700}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                className="testimonialSwiper"
              >

                {TESTIMONIALS.map((item) => (

                  <SwiperSlide key={item.id}>

                    <div className="flex flex-col sm:flex-row gap-6">

                      {/* IMAGE */}
                      <div className="sm:w-[45%]">

                        <div className="w-full h-[280px] overflow-hidden rounded-[6px]">

                          <img
                            src={item.image}
                            alt={item.author}
                            className="w-full h-full object-cover"
                          />

                        </div>

                      </div>

                      {/* CONTENT */}
                      <div className="sm:w-[55%] flex flex-col justify-center">

                        {/* Stars */}
                        <div className="flex gap-1 mb-3">
                          {[...Array(item.rating)].map((_, i) => (
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

                        {/* Quote */}
                        <p className="font-body text-[13px] text-primary leading-[1.7] mb-5 italic min-h-[85px] flex items-center">
                          "{item.quote}"
                        </p>

                        {/* Author */}
                        <p className="font-heading text-[14px] font-bold text-primary">
                          {item.author}
                        </p>

                      </div>

                    </div>

                  </SwiperSlide>

                ))}

              </Swiper>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}