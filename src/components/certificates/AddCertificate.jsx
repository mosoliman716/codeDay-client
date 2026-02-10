function AddCertificate({
  setShowAddCertificate,
  newCertificate,
  setNewCertificate,
  addCertificate,
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-white mb-4">Certificate</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Title:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCertificate.title}
              onChange={(e) =>
                setNewCertificate({ ...newCertificate, title: e.target.value })
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
              value={newCertificate.category}
              onChange={(e) =>
                setNewCertificate({
                  ...newCertificate,
                  category: e.target.value,
                })
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
              Provider:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCertificate.provider}
              onChange={(e) =>
                setNewCertificate({
                  ...newCertificate,
                  provider: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Issue Date:
            </label>
            <input
              type="date"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              value={newCertificate.issueDate}
              onChange={(e) =>
                setNewCertificate({
                  ...newCertificate,
                  issueDate: e.target.value,
                })
              }
            />
          </div>
           <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              URL:
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              required
              value={newCertificate.url}
              onChange={(e) =>
                setNewCertificate({
                  ...newCertificate,
                  url: e.target.value,
                })
              }
            />
            </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
              onClick={() => setShowAddCertificate(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-[#06b6d4] hover:bg-[#06b6d4] text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowAddCertificate(false);
                addCertificate();
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
export default AddCertificate;
