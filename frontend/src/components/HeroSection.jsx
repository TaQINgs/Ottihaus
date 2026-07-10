import Button from "./Button";
import { SECTION_BACKGROUNDS } from "../constants/images";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection({
  label,
  heading,
  subtitle,
  description,
  primaryBtn,
  secondaryBtn,
  image,
  images,
  imageAlt = "Otti Haus",
}) {

  const imageList = images ?? (image ? [image] : []);
  return (
    <section className="section pt-[140px] pb-[var(--spacing-section)] relative"
      style={{
        backgroundImage: `url(${SECTION_BACKGROUNDS.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
          {/* Left Content — 40% */}
          <div className="w-full md:w-[55%] order-2 md:order-1">
            {label && <p className="label">{label}</p>}

            <h1 className="font-heading font-bold text-primary mb-4 leading-[1.15]">
              {heading}
            </h1>

            {subtitle && (
              <p className="subtitle mb-5">"{subtitle}"</p>
            )}

            {description && (
              <p className="font-body text-[15px] text-primary leading-[1.8] mb-8 max-w-[420px]">
                {description}
              </p>
            )}

            {/* <div className="flex items-center gap-3">
              {primaryBtn && (
                <Button variant="primary">{primaryBtn}</Button>
              )}
              {secondaryBtn && (
                <Button variant="outline">{secondaryBtn}</Button>
              )}
            </div> */}

            <div className="flex items-center gap-3">
              {primaryBtn && (
                <Button
                  variant="primary"
                  to={primaryBtn.to}
                  href={primaryBtn.href}
                >
                  {primaryBtn.text}
                </Button>
              )}

              {secondaryBtn && (
                <Button
                  variant="outline"
                  to={secondaryBtn.to}
                  href={secondaryBtn.href}
                >
                  {secondaryBtn.text}
                </Button>
              )}
            </div>



          </div>

          {/* Right Image — 60% */}
          <div className="w-full md:w-[45%] order-1 md:order-2">
            {/* <div className="rounded-[8px] overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[320px] md:h-[480px] object-cover"
              />
            </div> */}
            <div className="rounded-[8px] overflow-hidden">

              {imageList.length > 1 ? (

                <Swiper
                  modules={[Autoplay]}
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
                  className="heroSwiper"
                >

                  {imageList.map((img, index) => (

                    <SwiperSlide key={index}>

                      <img
                        src={img}
                        alt={`${imageAlt} ${index + 1}`}
                        className="w-full h-[320px] md:h-[480px] object-cover"
                      />

                    </SwiperSlide>

                  ))}

                </Swiper>

              ) : (

                <img
                  src={imageList[0]}
                  alt={imageAlt}
                  className="w-full h-[320px] md:h-[480px] object-cover"
                />

              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
