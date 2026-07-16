// export default function Button({ variant = "primary", children, className = "", ...props }) {
//   const base = "btn";
//   const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";

//   return (
//     <button className={`${base} ${variantClass} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }

import { Link } from "react-router-dom";

export default function Button({
  variant = "primary",
  children,
  className = "",
  to,
  href,
  ...props
}) {
  const base = "btn";
  const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";
  const classes = `${base} ${variantClass} ${className}`;

  if (to) {
    const handleBtnClick = (e) => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      if (props.onClick) props.onClick(e);
    };

    return (
      <Link to={to} className={classes} onClick={handleBtnClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}