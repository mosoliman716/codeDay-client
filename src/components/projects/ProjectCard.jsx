import { MoreHorizontal, ExternalLink } from "lucide-react";
function ProjectCard({ project }) {
  return (
    <div className="kanban-card animate-fade-in bg-gray-900 rounded-lg p-4 shadow-md">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-white">{project.title}</h4>
        <button className="h-6 w-6 -mt-1 -mr-1 text-white">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-white mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="text-xs text-white bg-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {project.demoUrl && (
          <button className="h-7 w-7 text-white">
            <ExternalLink className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;