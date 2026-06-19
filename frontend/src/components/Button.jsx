export default function Button({ variant = "primary", children, className = "", ...props }) {
  const base = "btn";
  const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
