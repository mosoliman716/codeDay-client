function AddTask({ setShowAddTask, newTask, setNewTask, addTask }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-white mb-4">Task</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Title:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Priority:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Status:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newTask.status}
              onChange={(e) =>
                setNewTask({ ...newTask, status: e.target.value })
              }
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              dueDate:
            </label>
            <input
              type="date"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              onClick={() => setShowAddTask(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-[#06b6d4] hover:bg-[#06b6d4] text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowAddTask(false);
                addTask();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
