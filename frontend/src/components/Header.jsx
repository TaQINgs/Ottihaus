import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/#products" },
    { label: "Location", href: "/#location" },
    { label: "Contact", href: "/#footer" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="font-heading text-[22px] font-bold text-primary tracking-wide">
          otti haus
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-body text-[14px] text-primary transition-opacity duration-300 hover:opacity-100 ${
                location.pathname === link.href ? "opacity-100" : "opacity-60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Profile Icon */}
          <button
            className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center transition-transform duration-200 hover:scale-105"
            aria-label="Profile"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Cart Icon */}
          <button
            className="w-[40px] h-[40px] rounded-full bg-secondary flex items-center justify-center transition-transform duration-200 hover:scale-105"
            aria-label="Cart"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4d362e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-[40px] h-[40px] rounded-full bg-primary-light flex flex-col items-center justify-center gap-1"
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] bg-primary"></span>
            <span className="block w-5 h-[1.5px] bg-primary"></span>
            <span className="block w-4 h-[1.5px] bg-primary"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
