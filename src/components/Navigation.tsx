import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-theme font-semibold text-xl bg-theme text-white leading-none flex items-center gap-4 pl-4 pr-5 pt-2"
            >
              <span>
                <img
                  src="/logo.svg"
                  alt="Builder's Town London Team LTD"
                  className="mb-0 h-16 w-auto mix-blend-color-burn"
                  width={117}
                  height={96}
                />
              </span>
              <span className="flex flex-col">
                Builder's Town
                <span className="text-sm opacity-70">London Team LTD</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? "text-theme"
                    : "text-gray-600 hover:text-theme"
                } transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-theme"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? "text-theme"
                    : "text-gray-600 hover:text-theme"
                } block px-3 py-2 text-base`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
