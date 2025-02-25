
import { ProjectItem } from "@/components/ProjectItem";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Our Projects</h1>
        <p className="text-gray-600">
          Explore our portfolio of completed projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
