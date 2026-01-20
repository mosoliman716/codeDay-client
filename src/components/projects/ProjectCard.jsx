import { MoreHorizontal, ExternalLink } from "lucide-react";
import AddProject from "./AddProject";
import { useState } from "react";
import { api } from "../../configs/api.js";

function ProjectCard({ project }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openEditProject, setOpenEditProject] = useState(false);
  const [editedProject, setEditedProject] = useState(project);

  const editProject = async () => {
    try {
      const response = await api.put("/projects/edit", editedProject, {
        withCredentials: true,
      });
      console.log("Project edited successfully:", response.data);
    } catch (err) {
      console.error("Error editing project:", err);
    }
  };

  const deleteProject = async () => {
    try {
      const response = await api.delete("/projects/delete", {
        data: { _id: project._id },
        withCredentials: true,
      });
      console.log("Project deleted successfully:", response.data);
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  return (
    <>
      <div className="kanban-card animate-fade-in bg-gray-900 rounded-lg p-4 shadow-md">
        <div className="flex items-start justify-between mb-3 relative">
          <h4 className="font-medium text-white">{project.title}</h4>
          <button
            className="h-6 w-6 -mt-1 -mr-1 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div className="absolute bg-gray-800 border border-gray-700 rounded shadow-md right-4 mt-2 w-40 z-10">
              <div className="py-1">
                <div>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => {
                      setOpenEditProject(true);
                      setMenuOpen(false);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => {
                      deleteProject();
                      setMenuOpen(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="text-sm text-white mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs text-white bg-gray-700 px-2 py-1 rounded"
            >
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

      {openEditProject && (
        <AddProject
          setShowAddProject={setOpenEditProject}
          newProject={editedProject}
          setNewProject={setEditedProject}
          addProject={() => editProject()}
        />
      )}
    </>
  );
}

export default ProjectCard;
