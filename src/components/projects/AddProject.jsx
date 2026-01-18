      function AddProject({ setShowAddProject, newProject, setNewProject }) {
        return(
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Add New Project
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Description:
                </label>
                <input
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  required
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Status:
                </label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  required
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                >
                  <option value="Solved">Solved</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Unsolved">Unsolved</option>
                </select>
              </div>
              <div className="mb-4">
                 <label className="block text-sm font-medium text-white mb-1">
                  Technologies:
                </label>
                <input
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  required
                  value={newProject.technologies}
                  placeholder="Comma separated values"
                  onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
                  onClick={() => setShowAddProject(false)}
                >
                Close
                </button>
                 <button
                  type="button"
                  className="bg-[#06b6d4] hover:bg-[#06b6d4] text-white px-4 py-2 rounded-md"
                  onClick={() => setShowAddProject(false)}
                >
                    Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    export default AddProject;