import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ReviewItemProps {
  name: string;
  rating: number;
  testimonial: string;
  response?: string;
  source?: string;
  date?: string;
  location?: string;
}

export const ReviewItem = ({
  name,
  rating,
  testimonial,
  response,
  source,
  date,
  location,
}: ReviewItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100"
      >
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-theme fill-theme"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 line-clamp-3">{testimonial}</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span>{name}</span>
              <div className="flex space-x-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-theme fill-theme"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </DialogTitle>
            {(source || date || location) && (
              <div className="text-sm text-gray-500 mt-1">
                {source && <span>{source}</span>}
                {date && <span> • {date}</span>}
                {location && <span> • {location}</span>}
              </div>
            )}
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">{testimonial}</p>

            {response && (
              <div className="mt-4 bg-gray-50 p-4 rounded-md border-l-4 border-theme">
                <h4 className="font-medium text-gray-900 mb-2">
                  Our Response:
                </h4>
                <p className="text-gray-600 text-sm">{response}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
