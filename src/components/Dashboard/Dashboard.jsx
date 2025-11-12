
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
       
     
      <aside className="w-64  bg-gray-900  text-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/enrollments"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            My Enrolled Courses
          </NavLink>

          <NavLink
            to="/AddCoursePage"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 px-3 py-2 rounded" : "hover:bg-gray-700 px-3 py-2 rounded"
            }
          >
            Add Course
          </NavLink>

          <NavLink
            to="/courses"
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

     
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
 
  <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 transition-all duration-300">
   
    <header className="mb-6 border-b pb-3 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard Overview
      </h1>
      <span className="text-sm text-gray-500 hidden md:block">
        Welcome back 👋
      </span>
    </header>

  
    <div className="min-h-[60vh]">
    
    </div>
  </div>
</main>

    </div>
  </section>
  );
};

export default DashboardLayout;
