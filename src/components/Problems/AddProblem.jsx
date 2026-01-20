function AddProblem({
  setShowAddProblem,
  newProblem,
  setNewProblem,
  addProblem,
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-white mb-4">Problem</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Title:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newProblem.title}
              onChange={(e) =>
                setNewProblem({ ...newProblem, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Difficulty:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newProblem.difficulty}
              onChange={(e) =>
                setNewProblem({ ...newProblem, difficulty: e.target.value })
              }
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Status:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newProblem.status}
              onChange={(e) =>
                setNewProblem({ ...newProblem, status: e.target.value })
              }
            >
              <option value="Solved">Solved</option>
              <option value="In Progress">In Progress</option>
              <option value="Unsolved">Unsolved</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Platform:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              value={newProblem.platform}
              onChange={(e) =>
                setNewProblem({ ...newProblem, platform: e.target.value })
              }
            >
              <option value="Manual">Manual</option>
              <option value="LeetCode">LeetCode</option>
              <option value="Codewars">Codewars</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Problem URL: --optional
            </label>
            <input
              type="url"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              value={newProblem.problem_url}
              onChange={(e) =>
                setNewProblem({ ...newProblem, problem_url: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              onClick={() => setShowAddProblem(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-[#06b6d4] hover:bg-[#06b6d4] text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowAddProblem(false);
                addProblem();
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
export default AddProblem;
