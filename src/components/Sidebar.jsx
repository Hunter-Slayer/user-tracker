import { FaTachometerAlt, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { name: "Dashboard", icon: FaTachometerAlt, to: "/Dashboard" },
  { name: "User", icon: FaUserCog, to: "/User" },
  {
    name: "Logout",
    icon: FaSignOutAlt,
    to: "/logout",
    className:
      "text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-600",
  },
];

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen px-4 py-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 border-r transition-transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="px-[22px] py-[22px] text-center">
        <span className="font-semibold text-2xl text-gray-900 dark:text-gray-100">User Tracker</span>
        <hr className="bg-gray-400 dark:bg-gray-800" />
      </div>
      <div className="flex flex-col px-3 pb-4 h-full">
        <ul className="space-y-2 font-semibold">
          {links.map((link, index) => (
            <li
              key={index}
              className={
                link.className && index === links.length - 1 ? "mt-auto" : ""
              }
            >
              <Link
                to={link.to}
                className={`flex items-center p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors ${
                  link.className || ""
                }`}
              >
                <link.icon className="text-xl me-4" />
                <span className="font-medium">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
