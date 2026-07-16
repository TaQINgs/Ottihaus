import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from "../constants/images";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ];

  const pageIcons = {
    "/": IMAGES.headhome,
    "/about": IMAGES.headabout,
    "/menu": IMAGES.headmenu,
    "/location": IMAGES.headlocation,
    "/contact": IMAGES.headcontact,
  };

  const currentIcon = pageIcons[location.pathname] ?? IMAGES.headhome;

  const handleNavClick = () => {
    // Force instant scroll to top on nav link click to prevent visual scrolls
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-secondary)] backdrop-blur-sm">
      <div className="container flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-[30px] font-bold text-primary tracking-[1px]"
          onClick={handleNavClick}
        >
          otti haus
        </Link>

        {/* Navigation — Center */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-body text-[17px] text-primary transition-opacity duration-300 hover:opacity-100 nav-link-animated ${location.pathname === link.href
                ? "opacity-100 font-medium nav-link-animated--active"
                : "opacity-60"
                }`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          {/* Profile Icon — small brown circle */}
          <button
            className="transition-transform duration-200 hover:scale-105"
            aria-label="Page Icon"
          >
            <img
              src={currentIcon}
              alt="Current Page"
              className="w-[130px] h-[130px] object-contain"
            />
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
                onClick={() => {
                  setMobileOpen(false);
                  handleNavClick();
                }}
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
