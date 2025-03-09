import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageTitle } from "@/utils/title";

const About = () => {
  useEffect(() => {
    setPageTitle("About Us");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-6">
            Established in 2003, we're a small construction team serving London
            and surrounding areas. We focus on handywork, renovations, and
            repairs that are cost-effective and reliable.
          </p>

          <p className="text-gray-600 mb-6">
            Our team has completed numerous renovation projects across London.
            We're known for clear communication, sticking to budgets, and
            delivering quality work without the fuss.
          </p>

          <div className="my-8 text-center">
            <Link
              to="/contact"
              className="bg-theme hover:bg-theme-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Get Your Free Estimate Today
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">What We Value</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Quality Work</h3>
              <p className="text-gray-600">
                We use good materials and proper techniques to ensure lasting
                results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Cost Effectiveness</h3>
              <p className="text-gray-600">
                We provide competitive pricing and help you get the most value
                for your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Clear Communication
              </h3>
              <p className="text-gray-600">
                We keep you informed throughout the project with straightforward
                updates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, follow through on commitments, and meet
                deadlines.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Services</h2>

          <p className="text-gray-600 mb-6">We specialize in:</p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Home Renovations</li>
            <li>Kitchen and Bathroom Remodels</li>
            <li>General Handywork</li>
            <li>Repairs and Maintenance</li>
            <li>Painting and Decorating</li>
            <li>Flooring Installation</li>
          </ul>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-theme hover:text-theme-dark font-semibold underline transition-colors duration-300"
            >
              Contact us for a free estimate on your project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
