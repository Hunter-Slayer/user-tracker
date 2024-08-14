import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
// Add other page imports here

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
    <Router>
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
            className={`pt-20 transition-all duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } p-4`}
          >
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/User" element={<User />}>

              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
