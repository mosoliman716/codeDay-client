import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import ProblemCard from "../components/Problems/ProblemCard.jsx";
import AddProblem from "../components/Problems/AddProblem.jsx";
import { api } from "../configs/api.js";

const columns = [
  { id: "Solved", title: "Solved", color: "border-t-4 border-green" },
  {
    id: "In Progress",
    title: "In Progress",
    color: "border-t-4 border-yellow",
  },
  { id: "Unsolved", title: "Unsolved", color: "border-t-4 border-t-gray" },
];

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [showCodewarsForm, setShowCodewarsForm] = useState(false);
  const [codewarsUser, setCodewarsUser] = useState("");
  const [syncLoading, setSyncLoading] = useState(false);
  const [syncError, setSyncError] = useState("");
  const [syncSuccess, setSyncSuccess] = useState("");

  const [newProblem, setNewProblem] = useState({
    title: "",
    difficulty: "Easy",
    status: "Unsolved",
    problem_url: "",
    platform: "Manual",
  });
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

  const addProblem = async () => {
    setShowAddProblem(false);
    try {
      const response = await api.post("/problems/add", newProblem, {
        withCredentials: true,
      });
      setProblems([...problems, response.data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await api.get("/problems/get", {
          withCredentials: true,
        });
        setProblems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="space-y-8 mt-10 container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-white font-bold">Problems</h1>
          <p className="text-muted-foreground mt-1 text-white">
            A display for your problem-solving activities.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto mt-4 mb-5 md:mt-0">
          <button
            type="button"
            aria-label="Add new problem"
            className="w-full md:w-auto bg-[#06b6d4] text-white rounded-md px-4 py-2 inline-flex items-center justify-center hover:bg-[#0e7490] cursor-pointer transition"
            onClick={() => setShowAddProblem(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Problem
          </button>
          <div className="w-full md:w-auto">
            <button
              type="button"
              aria-label="Toggle Codewars sync form"
              onClick={() => {
                setShowCodewarsForm((s) => !s);
                setSyncError("");
                setSyncSuccess("");
              }}
              className="w-full md:w-auto bg-red-500 text-white rounded-md px-4 py-2 inline-flex items-center justify-center hover:bg-red-800 cursor-pointer transition"
            >
              Codewars Sync
            </button>
          </div>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            <div
              className={`p-4 rounded-lg shadow-xl ${column.color} bg-gray-800 kanban-column ring-1 ring-black/20`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{column.title}</h3>
                <span className="text-xs text-white/70">
                  {filterProblems(column.id).length}
                </span>
              </div>
              <div className="space-y-3">
                {filterProblems(column.id).length === 0 && (
                  <div className="text-sm text-gray-400">No problems</div>
                )}
                {filterProblems(column.id).map((p, index) => (
                  <ProblemCard
                    key={p.id || p._id || index}
                    p={p}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddProblem && (
        <AddProblem
          setShowAddProblem={setShowAddProblem}
          newProblem={newProblem}
          setNewProblem={setNewProblem}
          addProblem={addProblem}
        />
      )}

      
     {showCodewarsForm && (
          <div className="mt-3 w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-2 items-stretch">
              <input
                aria-label="Codewars username"
                value={codewarsUser}
                onChange={(e) => setCodewarsUser(e.target.value)}
                placeholder="Enter Codewars username"
                className="w-full md:w-64 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white outline-none"
              />
              <button
                type="button"
                onClick={async () => {
                  setSyncError("");
                  setSyncSuccess("");
                  if (!codewarsUser.trim()) {
                    setSyncError("Please enter a username.");
                    return;
                  }
                  setSyncLoading(true);
                  try {
                    const res = await api.post("/problems/sync-codewars", {
                      username: codewarsUser.trim(),
                    }, {
                      withCredentials: true,
                    });
                    // merge returned problems if any
                    if (res.data?.problems) {
                      setProblems((prev) => [...prev, ...res.data.problems]);
                      setSyncSuccess(
                        `Synced ${res.data.problems.length} problems.`,
                      );
                    } else {
                      setSyncSuccess("Sync complete.");
                    }
                    setCodewarsUser("");
                    setShowCodewarsForm(false);
                  } catch (err) {
                    setSyncError(err.response?.data?.message || "Sync failed.");
                    console.error(err);
                  } finally {
                    setSyncLoading(false);
                  }
                }}
                className="bg-emerald-600 text-white rounded-md px-4 py-2 hover:bg-emerald-500 transition"
                disabled={syncLoading}
              >
                {syncLoading ? "Syncing..." : "Sync"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCodewarsForm(false);
                  setCodewarsUser("");
                  setSyncError("");
                }}
                className="bg-gray-700 text-white rounded-md px-4 py-2 hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
            {syncError && (
              <p className="text-sm text-red-400 mt-2">{syncError}</p>
            )}
            {syncSuccess && (
              <p className="text-sm text-green-400 mt-2">{syncSuccess}</p>
            )}
          </div>
    )}
    </div>
  );
}
