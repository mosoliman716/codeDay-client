import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";
import AddTask from "../components/tasks/addTask.jsx";
import TaskCard from "../components/tasks/taskCard.jsx";
import { api } from "../configs/api.js";


const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-destructive/20 text-destructive border-destructive/30";
    case "Medium":
      return "bg-warning/20 text-warning border-warning/30";
    case "Low":
      return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Done":
      return <CheckCircle2 className="w-5 h-5 text-success" />;
    case "In Progress":
      return <Clock className="w-5 h-5 text-info" />;
    case "To Do":
      return <Circle className="w-5 h-5 text-muted-foreground" />;
  }
};

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const newStatus = task.status === "Done" ? "To Do" : "Done";
          return { ...task, status: newStatus };
        }
        return task;
      }),
    );
  };

  const addTask = async () => {
    try {
      setShowAddTask(false);
      const response = await api.post("/tasks/add", newTask, {
        withCredentials: true,
      });
      console.log("Added task:", response.data);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const columns = [
    { id: "To Do", title: "To Do", color: "border-t-warning" },
    { id: "In Progress", title: "In Progress", color: "border-t-info" },
    { id: "Done", title: "Done", color: "border-t-success" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/tasks/get", {
          withCredentials: true,
        });
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Tasks</h1>
          <p className="text-white mt-1">Organize your daily tasks</p>
        </div>
        <button
          className="bg-[#06b6d4] text-white hover:bg-[#06b6d4]/90 px-4 py-2 rounded-md flex items-center"
          onClick={() => setShowAddTask(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4 bg-gray-800 rounded-lg p-4">
            <div className={`kanban-column border-t-2 ${column.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white mt-3">
                  {column.title}
                </h3>
                <span className="sr-only text-white">
                  Tasks in {column.title}
                  {tasks.filter((t) => t.status === column.id).length}
                </span>
              </div>
              <div className="space-y-3">
                {tasks
                  .filter((t) => t.status === column.id)
                  .map((task) => (
                    <TaskCard
                      task={task}
                      toggleTask={toggleTask}
                      getStatusIcon={getStatusIcon}
                      getPriorityColor={getPriorityColor}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      {showAddTask && (
        <AddTask
          setShowAddTask={setShowAddTask}
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
    </div>
  );
}
