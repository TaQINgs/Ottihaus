export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center px-5 py-4">
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-[56px] h-[56px] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h4 className="font-heading text-[15px] font-bold text-primary mb-3">
        {title}
      </h4>

      {/* Description */}
      <p className="font-body text-[13px] text-primary/65 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
