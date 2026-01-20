import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import AddProblem from "./AddProblem.jsx";
import { api } from "../../configs/api.js";

function ProblemCard({ p, index }) {
  const [openMenu, setMenuOpen] = useState(false);
  const [openEditProblem, setOpenEditProblem] = useState(false);
  const [editedProblem, setEditedProblem] = useState(p);
  const href = p.problem_url || p.url || "#";

  const editProblem = async () => {
    try {
      const response = await api.put("/problems/edit", p, {
        withCredentials: true,
      });
      console.log("Edited problem:", response.data);
    } catch (err) {
      console.error("Error editing problem:", err);
    }
  };
  const deleteProblem = async () => {
    try {
      const response = await api.delete("/problems/delete", {
        data: { _id: p._id },
        withCredentials: true,
      });
      console.log("Problem deleted successfully:", response.data);
    } catch (err) {
      console.error("Error deleting problem:", err);
    }
  };

  return (
    <>
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 rounded-md p-3"
      >
        <a
          href={href}
          className="text-white font-medium flex justify-between relative"
        >
          <span className="truncate">{p.title}</span>
          <button
            className="h-6 w-6 -mt-1 -mr-1 text-white"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!openMenu);
            }}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          {openMenu && (
            <div className="absolute bg-gray-800 border border-gray-700 rounded shadow-md right-4 mt-2 w-40 z-10">
              <div className="py-1">
                <div>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => {
                      setMenuOpen(false);
                      setOpenEditProblem(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    onClick={() => {setMenuOpen(false); deleteProblem();}}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </a>
        <div className="mt-1 text-sm text-gray-300">
          {p.platform} • {p.difficulty}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-blue-700 text-white">
            {p.status}
          </span>
          <a href={href} className="text-xs text-gray-300 hover:underline">
            View
          </a>
        </div>
      </div>
      {openEditProblem && (
        <AddProblem
          setShowAddProblem={setOpenEditProblem}
          newProblem={editedProblem}
          setNewProblem={setEditedProblem}
          addProblem={editProblem}
        />
      )}
    </>
  );
}

export default ProblemCard;
