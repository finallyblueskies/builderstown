import { Link, useParams, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import projectsData from "../data/projects.json";
import NotFound from "./NotFound";
import { Button } from "@/components/ui/button";
import { setPageTitle } from "@/utils/title";

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

const projects = projectsData as { projects: Project[] };

export const ProjectDetail = () => {
  const { id } = useParams();
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);
  const project = projects.projects.find((p) => p.id === Number(id));
  const projectIndex = projects.projects.findIndex((p) => p.id === Number(id));
  const nextProject =
    projects.projects[(projectIndex + 1) % projects.projects.length];
  const resetTransformRef = useRef<() => void>();

  useEffect(() => {
    if (project) {
      setPageTitle(project.title);
    }
  }, [project]);

  useEffect(() => {
    // Reset zoom when changing images
    resetTransformRef.current?.();
  }, [currentAssetIndex]);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  const currentAsset = project.assets[currentAssetIndex];

  const nextAsset = () => {
    setCurrentAssetIndex((current) =>
      current === project.assets.length - 1 ? 0 : current + 1
    );
  };

  const prevAsset = () => {
    setCurrentAssetIndex((current) =>
      current === 0 ? project.assets.length - 1 : current - 1
    );
  };

  return (
    <>
      <div className="top-0 left-0 w-full sticky z-50 bg-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex items-center justify-between">
            <Button variant="link" asChild className="text-md">
              <Link to="/projects">
                <ChevronLeft />
                Back to Projects
              </Link>
            </Button>
            <Button variant="link" asChild className="text-md">
              <Link to={`/projects/${nextProject.id}`}>
                Next Project
                <ChevronRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-20 relative z-10">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

        <div className="space-y-8">
          {/* Main Image/Video Display */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <div className="inset-0 absolute md:hidden z-40" />
            {currentAsset.type === "img" ? (
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                centerOnInit={true}
                wheel={{
                  disabled: true,
                }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <div className="absolute top-4 right-4 z-50 flex gap-2">
                      <div
                        className={(() => {
                          const baseClasses =
                            "rounded-sm text-white p-2 uppercase font-bold";
                          const statusStyles = {
                            before: "bg-orange-400 border border-orange-500",
                            progress: "bg-blue-500 border border-blue-600",
                            after: "bg-green-600 border border-green-500",
                          };

                          return `${
                            statusStyles[currentAsset.status] ||
                            statusStyles.after
                          } ${baseClasses}`;
                        })()}
                      >
                        {currentAsset.status === "progress"
                          ? "in progress"
                          : currentAsset.status}
                      </div>
                      <button
                        onClick={() => zoomIn()}
                        className="bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                        aria-label="Zoom in"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <button
                        onClick={() => zoomOut()}
                        className="bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                        aria-label="Zoom out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                      <button
                        onClick={() => resetTransform()}
                        className="bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                        aria-label="Reset zoom"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                        </svg>
                      </button>
                    </div>
                    <TransformComponent
                      wrapperStyle={{
                        width: "100%",
                        height: "80vh",
                        objectFit: "contain",
                        borderRadius: "10px",
                        background: "#222",
                        cursor: "move",
                      }}
                      contentStyle={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    >
                      <img
                        src={currentAsset.path}
                        alt={`${project.title} ${currentAssetIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </TransformComponent>
                    {/* Store resetTransform function in ref for use in useEffect */}
                    {(() => {
                      resetTransformRef.current = resetTransform;
                      return null;
                    })()}
                  </>
                )}
              </TransformWrapper>
            ) : (
              <video
                src={currentAsset.path}
                controls
                className="w-full h-[80vh] object-contain"
              />
            )}

            {project.assets.length > 1 && (
              <>
                <button
                  onClick={prevAsset}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextAsset}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {project.assets.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {project.assets.map((asset, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAssetIndex(index)}
                  className={`flex-shrink-0 relative ${
                    currentAssetIndex === index
                      ? "ring-2 ring-theme"
                      : "hover:ring-2 hover:ring-gray-300"
                  } rounded-md overflow-hidden transition-all duration-200`}
                >
                  {asset.type === "img" ? (
                    <img
                      src={asset.path}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Completion Date</h3>
                <p className="text-gray-600">{project.completionDate}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Category</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
