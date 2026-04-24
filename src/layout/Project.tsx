import { Folder, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Project = () => {
  return(
    <div className="fw-full text-white text-left bg-surface-900 p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Folder />
          <h2 className="font-bold text-base md:text-lg font-mono">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="group flex items-center justify-center gap-2 font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          <span className="text-xs md:text-base">View All</span>
          <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects
          .filter(project => project.featured)
          .map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
      </div>
    </div>
  )
}