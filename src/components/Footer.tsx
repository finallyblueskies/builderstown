import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Builders Town
            </h3>
            <p className="text-sm">
              High quality, cost effective handywork since 2003. We specialize
              in commercial and residential build and construction projects
              across London.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="hover:text-theme transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-theme transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-theme transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-theme transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Information
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Biddenham House, Plough way, London SE16 2LX</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>07920 521287 / 07552 520565</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@builderstown.co.uk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Builders Town. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
