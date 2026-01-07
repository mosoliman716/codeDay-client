import { useState } from "react";

function Problems() {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      platform: "LeetCode",
      difficulty: "Easy",
      status: "Solved",
      url: "#",
    },
    {
      id: 2,
      title: "Binary Search",
      platform: "LeetCode",
      difficulty: "Easy",
      status: "Solved",
      url: "#",
    },
    {
      id: 3,
      title: "Valid Parentheses",
      platform: "LeetCode",
      difficulty: "Easy",
      status: "Solved",
      url: "#",
    },
    {
      id: 4,
      title: "Longest Substring",
      platform: "LeetCode",
      difficulty: "Medium",
      status: "In Progress",
      url: "#",
    },
    {
      id: 5,
      title: "Merge Intervals",
      platform: "LeetCode",
      difficulty: "Medium",
      status: "In Progress",
      url: "#",
    },
    {
      id: 6,
      title: "Decode Ways",
      platform: "Codewars",
      difficulty: "Hard",
      status: "Unsolved",
      url: "#",
    },
    {
      id: 7,
      title: "String Calculator",
      platform: "Codewars",
      difficulty: "Medium",
      status: "Unsolved",
      url: "#",
    },
    {
      id: 8,
      title: "Reverse Linked List",
      platform: "LeetCode",
      difficulty: "Easy",
      status: "Solved",
      url: "#",
    },
  ];

  const [showAddProblem, setShowAddProblem] = useState(false);
  const [platform, setPlatform] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const filterProblems = (status) => {
    return problems.filter((p) => {
      const matchesStatus = p.status === status;
      const matchesPlatform = platform === "all" || p.platform === platform;
      const matchesDifficulty =
        difficulty === "all" || p.difficulty === difficulty;
      return matchesStatus && matchesPlatform && matchesDifficulty;
    });
  };
  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Problems</h1>
          <p className="text-muted-foreground mt-1 text-white">
            A display for your problem-solving activities.
          </p>
        </div>
      </div>
      {/* controls */}
      <div className="flex space-x-2">
        <button
          className="bg-[#06b6d4] hover:bg-cyan-700 text-white px-4 py-2 rounded-md mb-3"
          onClick={() => setShowAddProblem(true)}
        >
          Add Problem
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md mb-3">
          LeetCode integration
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mb-3">
          Codewars integration
        </button>
      </div>
      {/* Filters */}
      <div className="flex space-x-4">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 w-40"
        >
          <option value="all">All Platforms</option>
          <option value="LeetCode">LeetCode</option>
          <option value="Codewars">Codewars</option>
          <option value="Manual">Manual</option>
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 w-40"
        >
          <option value="all">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      {/* Problem Lists (Kanban) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Solved", "In Progress", "Unsolved"].map((status) => {
          const list = filterProblems(status);
          return (
            <div
              key={status}
              className="bg-gray-900 rounded-lg p-4 border border-gray-800"
            >
              <h2 className="text-lg font-semibold text-white flex items-center justify-between">
                <span>{status}</span>
                <span className="text-sm text-gray-400">{list.length}</span>
              </h2>
              <div className="mt-4 space-y-3">
                {list.length === 0 && (
                  <div className="text-sm text-gray-400">No problems</div>
                )}
                {list.map((p, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-md p-3"
                  >
                    <a href={p.url} className="text-white font-medium">
                      {p.title}
                    </a>
                    <div className="mt-1 text-sm text-gray-300">
                      {p.platform} • {p.difficulty}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-700 text-white">
                        {p.status}
                      </span>
                      <a
                        href={p.url}
                        className="text-xs text-gray-300 hover:underline"
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* Add Problem Popup */}
      {showAddProblem && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Add New Problem
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
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Difficulty:
                </label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                  required
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
                >
                  <option value="Solved">Solved</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Unsolved">Unsolved</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Problem URL : --optional
                </label>
                <input
                  type="url"
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
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
                  onClick={() => setShowAddProblem(false)}
                >
                    Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Problems;
