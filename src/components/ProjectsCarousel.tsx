import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ProjectItem } from "./ProjectItem";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

// Define the types to match the ProjectItem component
interface Asset {
  path: string;
  type: "img" | "video";
  status: "before" | "after" | "progress";
}

interface Project {
  id: number;
  title: string;
  description: string;
  assets: Asset[];
  location: string;
  completionDate: string;
  category: string;
}

// Type assertion to ensure the projects data matches our expected type
const projects = projectsData as { projects: Project[] };

export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive items per view based on screen size
  const getItemsPerView = () => {
    if (windowWidth >= 1024) return 3; // lg
    if (windowWidth >= 768) return 2; // md
    return 1; // sm
  };

  const itemsPerView = getItemsPerView();

  const nextSlide = () => {
    setCurrentIndex((current) => {
      const maxIndex = projects.projects.length - itemsPerView;
      return current >= maxIndex ? 0 : current + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((current) => {
      const maxIndex = projects.projects.length - itemsPerView;
      return current === 0 ? maxIndex : current - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="overflow-hidden relative rounded-lg" ref={carouselRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {projects.projects.map((project) => (
              <div
                key={project.id}
                className="w-full lg:w-1/3 md:w-1/2 flex-shrink-0 p-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <ProjectItem
                    {...project}
                    mainAsset={{ path: project.assets[0]?.path || "" }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center">
        <Link
          to="/projects"
          className="inline-block bg-white border border-theme text-theme hover:bg-theme hover:text-white px-8 py-3 rounded-lg transition-colors duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};
