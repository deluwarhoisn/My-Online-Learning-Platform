import { useState, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";
import { 
  FaTachometerAlt, 
  FaUser, 
  FaBook, 
  FaPlusCircle, 
  FaGraduationCap,
  FaUsers,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext); 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Determine user role (you can enhance this based on your backend)
  const userRole = user?.email?.includes('admin') ? 'admin' : 'user';

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/home');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const sidebarLinks = [
    // User menu items (minimum 2)
    {
      to: "/dashboard",
      icon: FaTachometerAlt,
      label: "Dashboard Home",
      end: true
    },
    {
      to: "/dashboard/profile",
      icon: FaUser,
      label: "Profile"
    },
    {
      to: "/dashboard/enrollments",
      icon: FaGraduationCap,
      label: "My Enrollments"
    },
    
    // Admin menu items (minimum 3 if admin role)
    ...(userRole === 'admin' ? [
      {
        to: "/dashboard/add-course",
        icon: FaPlusCircle,
        label: "Add Course"
      },
      {
        to: "/dashboard/my-courses",
        icon: FaBook,
        label: "Manage Courses"
      },
      {
        to: "/dashboard/manage-users",
        icon: FaUsers,
        label: "Manage Users"
      }
    ] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}>
          
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 rounded-md hover:bg-gray-100"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* User Info */}
            <div className="mt-4 flex items-center gap-3">
              <img
                src={user?.photoURL || '/src/assets/icon.jpg'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.displayName || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {userRole === 'admin' ? 'Administrator' : 'Student'}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`
                }
              >
                <link.icon className="text-lg" />
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
            >
              <FaSignOutAlt />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          
          {/* Mobile Header */}
          <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <FaBars />
              </button>
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
