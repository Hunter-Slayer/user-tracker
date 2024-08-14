import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"} font-mono flex`}>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col w-full">
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main
          className={`pt-20 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} p-4`}
        >
        
        </main>
      </div>
    </div>
  );
}

export default App;
