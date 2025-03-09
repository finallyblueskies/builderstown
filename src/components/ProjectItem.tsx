import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

interface Asset {
  path: string;
  type: "img" | "video";
  status: "before" | "after" | "progress";
}

interface ProjectItemProps {
  id: number;
  title: string;
  description: string;
  assets: Asset[];
  location: string;
  completionDate: string;
  category: string;
  mainAsset: {
    path: string;
  };
}

export const ProjectItem = ({
  id,
  title,
  assets,
  mainAsset,
}: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const resetTransformRef = useRef<() => void>();

  useEffect(() => {
    if (thumbnailsRef.current && assets.length > 1) {
      const container = thumbnailsRef.current;
      const thumbnail = container.children[currentAssetIndex] as HTMLElement;
      const scrollLeft =
        thumbnail.offsetLeft -
        container.clientWidth / 2 +
        thumbnail.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    // Reset zoom when changing images
    resetTransformRef.current?.();
  }, [currentAssetIndex, assets.length]);

  // If no assets are available, return null or a placeholder
  if (!assets || assets.length === 0) {
    return (
      <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // If no mainAsset is available, return a placeholder
  if (!mainAsset) {
    return (
      <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <Link
      to={`/projects/${id}`}
      className="group relative overflow-hidden rounded-lg block"
    >
      <img
        src={mainAsset.path}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-1 md:p-0 md:absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold text-center px-4">
          {title}
        </h3>
      </div>
    </Link>
  );
};
