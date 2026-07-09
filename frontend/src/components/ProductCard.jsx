import { IMAGES } from "../constants/images";

export default function ProductCard({ name, category, image, index }) {
  const productImages = [IMAGES.product1, IMAGES.product2, IMAGES.product3];
  const imageUrl = image || productImages[index] || IMAGES.placeholder;

  return (
    <div className="border border-[var(--color-border)] rounded-[8px] overflow-hidden bg-white/20 transition-transform duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="p-4">
        <div className="aspect-square overflow-hidden rounded-[6px] bg-[#d4cbbf]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Name */}
      <div className="px-4 pb-4 text-center">
        <h4 className="font-heading text-[15px] font-bold text-primary">
          {name}
        </h4>
        {category && (
          <p className="font-body text-[12px] text-primary mt-1">
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
