import { IMAGES } from "../constants/images";

export default function ProductCard({ product, index }) {
  // Use product-specific image or fallback
  const productImages = [IMAGES.product1, IMAGES.product2, IMAGES.product3];
  const imageUrl = product.image_url || productImages[index] || IMAGES.placeholder;

  return (
    <div className="border border-[rgba(77,54,46,0.2)] rounded-[8px] overflow-hidden bg-white/30 transition-transform duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="p-4">
        <div className="aspect-square overflow-hidden rounded-[4px] bg-[#d4cbbf]">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 pb-5 text-center">
        <h4 className="font-heading text-[16px] font-bold text-primary mb-1">
          {product.name}
        </h4>
      </div>
    </div>
  );
}
