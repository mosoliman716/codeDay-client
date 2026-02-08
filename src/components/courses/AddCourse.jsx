function AddCourse({ setShowAddCourse, newCourse, setNewCourse, addCourse }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-white mb-4">Course</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Title:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCourse.title}
              onChange={(e) =>
                setNewCourse({ ...newCourse, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Category:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCourse.category}
              onChange={(e) =>
                setNewCourse({ ...newCourse, category: e.target.value })
              }
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Data Science">Data Science</option>
              <option value="Cloud">Cloud</option>
              <option value="DevOps">DevOps</option>
              <option value="Mobile">Mobile</option>
              <option value="Game Development">Game Development</option>
              <option value="AI/ML">AI/ML</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Status:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCourse.status}
              onChange={(e) =>
                setNewCourse({ ...newCourse, status: e.target.value })
              }
            >
              <option value="not-started">not-started</option>
              <option value="In Progress">In Progress</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Platform:
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              value={newCourse.platform}
              onChange={(e) =>
                setNewCourse({ ...newCourse, platform: e.target.value })
              }
            >
              <option value="AWS">AWS</option>
              <option value="Udemy">Udemy</option>
              <option value="Coursera">Coursera</option>
              <option value="edX">edX</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              onClick={() => setShowAddCourse(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-[#06b6d4] hover:bg-[#06b6d4] text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowAddCourse(false);
                addCourse();
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
export default AddCourse;
