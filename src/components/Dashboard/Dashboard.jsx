import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";

const DashboardLayout = () => {
  const { user, logOut, role } = useContext(AuthContext); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeClass = "bg-blue-600 px-3 py-2 rounded";
  const normalClass = "hover:bg-gray-700 px-3 py-2 rounded";

  return (
    <section>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`fixed md:relative top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white p-6 transform
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 transition-transform duration-300`}
        >
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <nav className="flex flex-col space-y-3">
            {/* USER MENU */}
            <NavLink to="/dashboard" end className={({isActive}) => isActive ? activeClass : normalClass}>
              Dashboard Home
            </NavLink>
            <NavLink to="/dashboard/enrollments" className={({isActive}) => isActive ? activeClass : normalClass}>
              My Enrolled Courses
            </NavLink>

            {/* ADMIN MENU */}
            {role === "admin" && (
              <>
                <NavLink to="/dashboard/add-course" className={({isActive}) => isActive ? activeClass : normalClass}>
                  Add Course
                </NavLink>
                <NavLink to="/dashboard/my-courses" className={({isActive}) => isActive ? activeClass : normalClass}>
                  My Added Courses
                </NavLink>
                <NavLink to="/dashboard/manage-users" className={({isActive}) => isActive ? activeClass : normalClass}>
                  Manage Users
                </NavLink>
              </>
            )}

            <button onClick={logOut} className="bg-red-500 hover:bg-red-600 mt-6 px-3 py-2 rounded text-left">
              Logout
            </button>
          </nav>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 md:ml-64">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <header className="mb-6 border-b pb-3 flex justify-between">
              <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
              <span className="text-sm text-gray-500">{user?.email}</span>
            </header>

            {/* ✅ Nested routes render here */}
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
