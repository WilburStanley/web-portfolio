import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const ProjectPage = () => {
  return(
    <>
    <div className="flex flex-col">
      <div className="flex items-center gap-4 text-start mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-xl sm:text-2xl font-bold text-white">
          All Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
    </>
  )
}