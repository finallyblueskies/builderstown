
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
}

export const ReviewItem = ({ name, rating, testimonial }: ReviewItemProps) => {
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
        <DialogContent className="sm:max-w-[425px]">
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
          </DialogHeader>
          <p className="text-gray-600">{testimonial}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};
