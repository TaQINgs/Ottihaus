export default function Footer() {
  return (
    <footer id="footer">
      {/* Main Footer */}
      <div className="bg-secondary py-16">
        <div className="container">
          {/* Logo */}
          <h2 className="font-heading text-[32px] font-bold text-primary mb-10">
            otti haus
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-[200px]">
            {/* Outlet Center */}
            <div>
              <div className="flex items-start gap-2 mb-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="var(--color-primary)"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-body text-[14px] font-semibold text-primary">
                  Outlet Center
                </span>
              </div>
              <p className="font-body text-[13px] text-primary leading-relaxed pl-6">
                Jl. Banteng, No.104, Turangga, Kec.
                Lengkong, Kota Bandung, Jawa Barat
                40264
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start gap-2 mb-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="var(--color-primary)"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="font-body text-[14px] font-semibold text-primary">
                  Email
                </span>
              </div>
              <a
                href="mailto:admin@sincerahomemade.com"
                className="font-body text-[13px] text-primary underline pl-6 block"
              >
                admin@sincerahomemade.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-2 mb-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="var(--color-primary)"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="font-body text-[14px] font-semibold text-primary">
                  Phone
                </span>
              </div>
              <p className="font-body text-[13px] text-primary pl-6">
                (+62)855-1236-100
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-4">
        <div className="container">
          <p className="font-body text-[12px] text-white/60 text-center tracking-wide">
            © Copyrights by otti haus — PT. SINAR CERAH REKAN
          </p>
        </div>
      </div>
    </footer>
  );
}
