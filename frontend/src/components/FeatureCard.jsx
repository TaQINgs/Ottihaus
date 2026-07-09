export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <>
      <div className="flex justify-center mb-5">
        {icon}
      </div>

      <h4 className="font-heading text-[18px] font-semibold text-primary mb-3">
        {title}
      </h4>

      <p className="font-body text-[14px] leading-7 text-primary">
        {description}
      </p>
    </>
  );
}