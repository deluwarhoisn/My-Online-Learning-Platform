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

import Swal from 'sweetalert2'
import MyCourses from './components/Courses/MyCourses.jsx';

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
    loader:()=>fetch('http://localhost:3000/Online')
  },
  {
    path: "/courses",
    element: <PrivateRoute><MyCourses /></PrivateRoute>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>

  },
  {
    path: "/login",
    element: <Login />

  },
  {
    path: "/*",
    element: <ErrorPage />

  },
  {
    path: "/register",
    element: <Register />

  },
  {
    path: "/details",
    element: <PrivateRoute><Details /></PrivateRoute>

  },
  {
    path: "/AddCoursePage",
    element: <PrivateRoute><AddCourse /></PrivateRoute>

  },
  {
    path: "/enrollments",
    element: <PrivateRoute><MyEnrolledCourses /></PrivateRoute>
    
    

  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
