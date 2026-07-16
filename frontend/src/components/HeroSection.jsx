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
    <section className="hero-editorial">
      {/* Background pattern */}
      <div
        className="hero-editorial__pattern"
        style={{
          backgroundImage: `url(${SECTION_BACKGROUNDS.hero})`,
        }}
      />

      {/* Image — blends into background from right */}
      <div className="hero-editorial__image-wrapper">
        <div className="hero-editorial__image-inner">
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
                    className="hero-editorial__img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={imageList[0]}
              alt={imageAlt}
              className="hero-editorial__img"
            />
          )}
        </div>
      </div>

      {/* Content — left side, vertically centered */}
      <div className="hero-editorial__content">
        <div className="hero-editorial__content-inner">
          {label && <p className="label hero-editorial__label">{label}</p>}

          <h1 className="hero-editorial__heading">{heading}</h1>

          {subtitle && (
            <p className="subtitle hero-editorial__subtitle">"{subtitle}"</p>
          )}

          {description && (
            <p className="hero-editorial__description">{description}</p>
          )}

          <div className="hero-editorial__buttons">
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
      </div>
    </section>
  );
}
