import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Header/Navbar";


const DashboardLayout = ({ logOut, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
 <section>
  <Navbar></Navbar>
     <div className="min-h-screen flex flex-col md:flex-row">

      <div className="md:hidden flex justify-between items-center bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

     
      <aside
        className={`
          fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white p-6 transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
        `}
      >
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/enrollments"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded"
                : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            My Enrolled Courses
          </NavLink>

          <NavLink
            to="/AddCoursePage"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded"
                : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            Add Course
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 px-3 py-2 rounded"
                : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            My Added Courses
          </NavLink>

          <button
            onClick={logOut}
            className="bg-red-500 hover:bg-red-600 mt-4 px-3 py-2 rounded text-left"
          >
            Logout
          </button>
        </nav>
      </aside>

     
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      
      <main className="flex-1 bg-gray-100 p-6 md:ml-64 overflow-y-auto transition-all duration-300">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 transition-all duration-300">
          <header className="mb-6 border-b pb-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard Overview
            </h1>
            <span className="text-sm text-gray-500 hidden md:block">
              Welcome back 👋
            </span>
          </header>

          <div className="min-h-[60vh]">{children}</div>
        </div>
      </main>
    </div>
 </section>
  );
};

export default DashboardLayout;
