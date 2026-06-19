import Button from "./Button";

export default function HeroSection({
  label,
  heading,
  subtitle,
  description,
  primaryBtn,
  secondaryBtn,
  image,
  imageAlt = "Otti Haus",
}) {
  return (
    <section className="section pt-[140px] pb-[var(--spacing-section)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
          {/* Left Content — 40% */}
          <div className="w-full md:w-[40%] order-2 md:order-1">
            {label && <p className="label">{label}</p>}

            <h1 className="font-heading font-bold text-primary mb-4 leading-[1.15]">
              {heading}
            </h1>

            {subtitle && (
              <p className="subtitle mb-5">"{subtitle}"</p>
            )}

            {description && (
              <p className="font-body text-[15px] text-primary/70 leading-[1.8] mb-8 max-w-[420px]">
                {description}
              </p>
            )}

            <div className="flex items-center gap-3">
              {primaryBtn && (
                <Button variant="primary">{primaryBtn}</Button>
              )}
              {secondaryBtn && (
                <Button variant="outline">{secondaryBtn}</Button>
              )}
            </div>
          </div>

          {/* Right Image — 60% */}
          <div className="w-full md:w-[60%] order-1 md:order-2">
            <div className="rounded-[8px] overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[320px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
