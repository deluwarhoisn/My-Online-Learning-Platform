// DashboardLayout.jsx
import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Navbar from "../Header/Navbar";
import MyCourses from "../Courses/MyEnrolledCourses";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
  <section>
    <Navbar></Navbar>
      <div className="min-h-screen flex">
       
      {/* Sidebar */}
      <aside className="w-64  bg-gray-900  text-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/dashboard/enrolled"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            My Enrolled Courses
          </NavLink>

          <NavLink
            to="/dashboard/add-course"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            Add Course
          </NavLink>

          <NavLink
            to="/dashboard/my-courses"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"
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

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
  {/* Content wrapper */}
  <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 transition-all duration-300">
    {/* Optional title bar */}
    <header className="mb-6 border-b pb-3 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard Overview
      </h1>
      <span className="text-sm text-gray-500 hidden md:block">
        Welcome back 👋
      </span>
    </header>

    {/* Nested route content */}
    <div className="min-h-[60vh]">
      <Outlet />
       {/* এখানে nested route এর content দেখাবে */}
    </div>
  </div>
</main>

    </div>
  </section>
  );
};

export default DashboardLayout;
