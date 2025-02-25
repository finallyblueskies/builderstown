
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  location: string;
  completionDate: string;
  category: string;
}

export const ProjectItem = ({
  title,
  description,
  image,
  location,
  completionDate,
  category,
}: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // For demo purposes, we'll generate multiple images from the same Unsplash ID
  const images = [
    `https://source.unsplash.com/${image}`,
    `https://source.unsplash.com/${image}/1`,
    `https://source.unsplash.com/${image}/2`,
    `https://source.unsplash.com/${image}/3`,
    `https://source.unsplash.com/${image}/4`,
  ];

  const nextImage = () => {
    setCurrentImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const thumbnail = container.children[currentImageIndex] as HTMLElement;
      const scrollLeft = thumbnail.offsetLeft - container.clientWidth / 2 + thumbnail.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentImageIndex]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold text-center px-4">
            {title}
          </h3>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`${title} ${currentImageIndex + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div
              ref={thumbnailsRef}
              className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative ${
                    currentImageIndex === index
                      ? "ring-2 ring-theme"
                      : "hover:ring-2 hover:ring-gray-300"
                  } rounded-md overflow-hidden transition-all duration-200`}
                >
                  <img
                    src={img}
                    alt={`${title} thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-gray-600">{description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Location:</span> {location}
              </div>
              <div>
                <span className="font-semibold">Completed:</span> {completionDate}
              </div>
              <div>
                <span className="font-semibold">Category:</span> {category}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
