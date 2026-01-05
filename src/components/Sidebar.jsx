import React, { useState } from "react";

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
        className="md:hidden fixed top-4 left-4 z-60 p-2 rounded text-[#06b6d4] bg-transparent"
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <div className={sidebarClasses}>
        <div className="p-4 text-2xl font-bold text-[#06b6d4]">CodeDay</div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Problems
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Certification
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 text-lg rounded hover:bg-[#06b6d4] hover:text-white transition-colors items-center"
                onClick={() => setOpen(false)}
              >
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
