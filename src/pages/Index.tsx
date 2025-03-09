import { ReviewItem } from "@/components/ReviewItem";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPageTitle } from "@/utils/title";
import reviews from "../data/reviews.json";

const Index = () => {
  useEffect(() => {
    setPageTitle("Home");
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 py-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(3px)",
          }}
        />
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-4">
          <h1 className="text-5xl font-bold">
            Trusted London Handymen Since 2003
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-loose">
            Serving London two decades of quality in home repairs and
            renovations, breathing new life into homes and spaces.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-theme hover:bg-theme-dark text-white px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a trusted team of handymen in London, specializing in both
            commercial and residential projects. Our team of skilled workers
            brings decades of experience and a commitment to the customer with
            every project we undertake. But dont' take our word for it!
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-gray-600">
            Real reviews from{" "}
            <a
              className="text-theme underline"
              href="https://www.mybuilder.com/profile/builderstown"
            >
              MyBuilder
            </a>{" "}
            and{" "}
            <a
              className="text-theme underline"
              href="https://maps.app.goo.gl/zK61TBhLu8343rbA9"
            >
              Google Maps
            </a>
            .
          </p>
        </div>
        <div className="space-y-8">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {reviews.reviews.slice(0, 3).map((review) => (
                <ReviewItem key={review.id} {...review} />
              ))}
              {reviews.reviews.slice(3, 9).map((review) => (
                <div key={review.id} className="hidden md:block">
                  <ReviewItem {...review} />
                </div>
              ))}
            </div>
            <div className="z-20 absolute -bottom-2 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-gray-50 to-transparent lg:h-[200px]" />
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-block bg-white border border-theme text-theme hover:bg-theme hover:text-white px-8 py-3 rounded-lg transition-colors duration-200"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Recent Projects</h2>
          <p className="text-gray-600">
            Take a look at some of our recent work
          </p>
        </div>
        <ProjectsCarousel />
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-gray-300">
            Contact us today to discuss your construction needs
          </p>
          <div className="space-y-4">
            <Link
              to="/contact"
              className="inline-block bg-theme hover:bg-theme-dark text-white px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get Your Free Estimate Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
