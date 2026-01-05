import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import Navbar from './components/Header/Navbar.jsx';
import Courses from './components/pages/Courses.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Home from './components/pages/Home.jsx';
import Login from './components/Auth/Login.jsx';
import ErrorPage from './components/Shared/ErrorPage.jsx';
import Register from './components/Auth/Register.jsx';
import AuthProvider from './components/Contexts/AuthProvider.jsx';
import PrivateRoute from './components/Layouts/PrivateRoute.jsx';
import Details from './components/Details/Details.jsx';
import AddCourse from './components/Courses/AddCourse.jsx';
import MyEnrolledCourses from './components/Courses/MyEnrolledCourses.jsx';
import MyCourses from './components/Courses/MyCourses.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import AllCourses from './components/Courses/AllCourses.jsx';
import DashboardHome from './components/Dashboard/DashboardHome.jsx';
import Profile from './components/Dashboard/Profile.jsx';

import Swal from 'sweetalert2'

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position:'top-end',
  showCancelButton: false,
  timer: 3000,
  timerProgressBar:true,
  didOpen: (toast)=>{
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />,
    loader:()=>fetch('https://online-learning-platfrom-server.vercel.app/Online')
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/courses",
    element: <AllCourses />,
    loader:()=>fetch('https://online-learning-platfrom-server.vercel.app/Online')
  },
  {
    path: "/my-courses",
    element: <PrivateRoute><MyCourses /></PrivateRoute>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "enrollments",
        element: <MyEnrolledCourses />
      },
      {
        path: "add-course",
        element: <AddCourse />
      },
      {
        path: "my-courses",
        element: <MyCourses />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/details/:id?",
    element: <PrivateRoute><Details /></PrivateRoute>
  },
  {
    path: "/enrollments",
    element: <PrivateRoute><MyEnrolledCourses /></PrivateRoute>
  },
  {
    path: "/*",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
