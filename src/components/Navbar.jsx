import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = ({ darkMode, toggleDarkMode, toggleSidebar, isSidebarOpen }) => {
  return (
    <nav
      className={`fixed top-0 z-50 h-16 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-700 border transition-all duration-300 ${
        isSidebarOpen ? "w-[calc(100%-16rem)] ml-64" : "w-full"
      }`}
    >
      <div className="flex justify-between items-center px-3 lg:px-5 py-3 lg:pl-3">
        <div className="flex items-center">
          <button
            className="inline-flex items-center hover:bg-gray-500 dark:hover:bg-gray-700 p-2 rounded-lg dark:focus:ring-gray-600 focus:ring-2 focus:ring-gray-200 text-gray-100 text-sm focus:outline-none dark:text-gray-800"
            onClick={toggleSidebar}
          >
            <HiOutlineMenuAlt2 className="text-2xl text-gray-900 dark:text-gray-100" />
          </button>
          <a href="#" className="flex ms-8 md:me-24">
            {isSidebarOpen ? null : (
              <span className="font-semibold text-xl sm:text-2xl dark:text-white whitespace-nowrap self-center">
                User Tracker
              </span>
            )}
          </a>
        </div>
        <button
          className="dark:bg-slate-50 p-2 rounded-full dark:text-slate-700"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
