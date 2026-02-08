import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarBase =
    "h-screen bg-[#090616] text-white fixed top-0 left-0 border-r border-[#06b6d4] md:w-48 w-40";
  const sidebarTransform = open
    ? "translate-x-0"
    : "-translate-x-full md:translate-x-0";
  const sidebarClasses = `${sidebarBase} transform transition-transform duration-200 ease-in-out ${sidebarTransform} z-50`;

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setOpen((s) => !s)}
        className="md:hidden absolute top-4 right-4 z-60 p-2 rounded text-[#06b6d4] bg-blue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Backdrop for mobile when open */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
      {/* Sidebar */}
      <div className={sidebarClasses}>
        <div className="p-4 text-2xl font-bold text-[#06b6d4] text-center bg-gray-800 rounded-xl mt-5 w-fit m-auto">
          CodeDay
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.75z"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/problems"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
                Problems
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16v13H4zM16 3v4M8 3v4"
                  />
                </svg>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/tasks"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7 20h10a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 001 1z"
                  />
                </svg>
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zM12 14v7"
                  />
                </svg>
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                onClick={() => setOpen(false)}
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#06b6d4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
                Certificates
              </Link>
            </li>
          </ul>
        </nav>
        {/*footer */}
        <div className="p-4 border-t border-sidebar-border mt-10">
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#06b6d4] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5.33 0-8 2.667-8 4v2h16v-2c0-1.333-2.67-4-8-4z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">MBS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
