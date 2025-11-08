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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>
  },
 
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/courses",
    element: <Courses/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
    
  },
  {
    path: "/login",
    element: <Login/>
    
  },
 
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />,
 
  <Outlet></Outlet>
  </StrictMode>,
)
