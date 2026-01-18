import { Plus } from "lucide-react";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import AddProject from "../components/projects/AddProject.jsx";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    technologies: ["React", "Tailwind", "Framer Motion"],
    status: "Idea",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "Full-stack e-commerce platform with payment integration",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    status: "Completed",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Productivity app with drag-and-drop functionality",
    technologies: ["React", "TypeScript", "Supabase"],
    status: "In Progress",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "API Development",
    description: "RESTful API for mobile applications",
    technologies: ["Node.js", "Express", "MongoDB"],
    status: "In Progress",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Project 1",
    description: "New project idea to explore",
    technologies: ["TBD"],
    status: "Idea",
  },
  {
    id: 6,
    title: "Project 2",
    description: "Another project concept",
    technologies: ["TBD"],
    status: "Idea",
  },
];

const columns = [
  { id: "Idea", title: "Idea", color: "border-t-4 border-t-gray" },
  {
    id: "In Progress",
    title: "In Progress",
    color: "border-t-4 border-yellow",
  },
  { id: "Completed", title: "Completed", color: "border-t-4 border-green" },
];

export default function Projects() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: [],
    status: "Idea",
    githubUrl: "",
    demoUrl: "",
  });
  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-white font-bold">Projects</h1>
          <p className="text-muted-foreground mt-1 text-white">
            Manage your project portfolio
          </p>
        </div>
        <button
          className="bg-[#06b6d4] text-white rounded-md px-4 py-2 flex items-center hover:bg-[#0e7490] cursor-pointer"
          onClick={() => setShowAddProject(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            <div
              className={`p-4 rounded-lg shadow-lg ${column.color} bg-gray-800 kanban-column`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{column.title}</h3>
                <span className="text-xs text-white/70">
                  {
                    projects.filter((p) =>
                      column.id === "In Progress"
                        ? ["In Progress", "Planning"].includes(p.status)
                        : p.status === column.id,
                    ).length
                  }
                </span>
              </div>
              <div className="space-y-3">
                {projects
                  .filter((p) =>
                    column.id === "In Progress"
                      ? ["In Progress", "Planning"].includes(p.status)
                      : p.status === column.id,
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* add project */}
      {showAddProject && (
        <AddProject
          setShowAddProject={setShowAddProject}
          newProject={newProject}
          setNewProject={setNewProject}
        />
      )}
    </div>
  );
}
