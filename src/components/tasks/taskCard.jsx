import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AddTask from "./addTask";
import { api } from "../../configs/api.js";

function TaskCard({ task, toggleTask, getStatusIcon, getPriorityColor }) {
  const [openMenu, setMenuOpen] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const editTask = async () => {
    try {
      const response = await api.put("/tasks/edit", editedTask, {
        withCredentials: true,
      });
      console.log("Task edited successfully:", response.data);
      setEditedTask(response.data);
    } catch (err) {
      console.error("Error editing task:", err);
    }
  };

  const deleteTask = async () => {
    try {
      const response = await api.delete("/tasks/delete", {
        data: { _id: task._id },
        withCredentials: true,
      });
      console.log("Task deleted successfully:", response.data);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <>
      <div
        key={task.id}
        className="kanban-card animate-fade-in bg-gray-900 border border-gray-900 rounded-md p-4"
      >
        <div className="flex items-start gap-3">
          <button
            onClick={() => toggleTask(task.id)}
            className="mt-1 p-1 text-white"
            aria-label={
              task.status === "Done" ? "Mark as not done" : "Mark as done"
            }
          >
            {getStatusIcon(task.status)}
          </button>
          <div className="flex-1 min-w-0 relative">
            <div className="flex items-start justify-between">
              <h4
                className={`font-medium text-white ${task.status === "Done" ? "line-through text-muted-foreground" : ""}`}
              >
                {task.title}
              </h4>
              <button
                className="h-6 w-6 -mt-1 -mr-1 text-white"
                onClick={() => setMenuOpen(!openMenu)}
              >
                <MoreHorizontal className="w-4 h-4 text-white" />
              </button>
              {openMenu && (
                <div className="absolute bg-gray-800 border border-gray-700 rounded shadow-md right-4 mt-2 w-40 z-10">
                  <div className="py-1">
                    <div>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenEditTask(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={() => {
                          setMenuOpen(false);
                          deleteTask();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={
                  getPriorityColor(task.priority) +
                  " text-xs px-2 py-1 rounded-full text-white bg-[#06b6d4]/70"
                }
              >
                {task.priority}
              </span>
              {task.dueDate && (
                <span className="text-xs text-white">{task.dueDate}</span>
              )}
            </div>
            {task.projectName && (
              <p className="text-xs text-white mt-2">{task.projectName}</p>
            )}
          </div>
        </div>
      </div>

      {openEditTask && (
        <AddTask
          setShowAddTask={setOpenEditTask}
          newTask={editedTask}
          setNewTask={setEditedTask}
          addTask={editTask}
        />
      )}
    </>
  );
}
export default TaskCard;
