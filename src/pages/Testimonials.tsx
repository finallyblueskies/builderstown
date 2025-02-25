
import { ReviewItem } from "@/components/ReviewItem";
import reviews from "../data/reviews.json";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Client Testimonials</h1>
        <p className="text-gray-600">
          Read what our clients have to say about their experience working with us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.reviews.map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
