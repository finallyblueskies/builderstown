import { ReviewItem } from "@/components/ReviewItem";
import { useEffect } from "react";
import { setPageTitle } from "@/utils/title";
import reviews from "../data/reviews.json";

const Testimonials = () => {
  useEffect(() => {
    setPageTitle("Client Testimonials");
  }, []);

  // Sort reviews by rating (highest first) and then by date (latest first)
  const sortedReviews = [...reviews.reviews].sort((a, b) => {
    // First sort by rating (descending)
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    // If ratings are equal, sort by date (descending)
    const dateA = new Date(a.date || "");
    const dateB = new Date(b.date || "");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Client Testimonials</h1>

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedReviews.map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
