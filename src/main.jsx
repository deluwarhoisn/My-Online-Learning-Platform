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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/courses",
    element: <Courses />
  },
  {
    path: "/dashboard",
    element: <Dashboard />

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


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
