import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-secondary)] backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-[20px] font-bold text-primary tracking-[1px]"
        >
          otti haus
        </Link>

        {/* Navigation — Center */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-body text-[17px] text-primary transition-opacity duration-300 hover:opacity-100 ${location.pathname === link.href
                ? "opacity-100 font-medium"
                : "opacity-60"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          {/* Profile Icon — small brown circle */}
          <button
            className="w-[36px] h-[36px] rounded-full bg-primary flex items-center justify-center transition-transform duration-200 hover:scale-105"
            aria-label="Profile"
            id="header-profile-btn"
          >
            <svg
              width="16"
              height="16"
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

          {/* Cart Icon — small tan/secondary circle */}
          <button
            className="w-[36px] h-[36px] rounded-full bg-secondary flex items-center justify-center transition-transform duration-200 hover:scale-105"
            aria-label="Cart"
            id="header-cart-btn"
          >
            <svg
              width="16"
              height="16"
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
            className="md:hidden w-[36px] h-[36px] rounded-full bg-primary-light flex flex-col items-center justify-center gap-[5px] ml-1"
            aria-label="Menu"
            id="header-mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-[18px] h-[1.5px] bg-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[18px] h-[1.5px] bg-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[14px] h-[1.5px] bg-primary transition-transform duration-300 ${mobileOpen ? "w-[18px] -rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)] py-4">
          <nav className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-[14px] text-primary hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
