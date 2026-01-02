import React, { useContext } from 'react';
import logo from '../../assets/online.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import usericon from '../../assets/icon.jpg';
import toast from "react-hot-toast";
import ThemeToggle from '../Shared/ThemeToggle';
import { FaHome, FaBook, FaTachometerAlt, FaPlusCircle, FaUserGraduate } from "react-icons/fa";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch((error) => console.log(error));
  }

  

 const link = <>
  <li>
    <Link to="/home" className="flex items-center gap-2">
      <FaHome /> Home
    </Link>
  </li>

  <li>
    <Link to="/courses" className="flex items-center gap-2">
      <FaBook /> My Courses
    </Link>
  </li>

  <li>
    <Link to="/dashboard" className="flex items-center gap-2">
      <FaTachometerAlt /> Dashboard
    </Link>
  </li>

  <li>
    <Link to="/AddCoursePage" className="flex items-center gap-2">
      <FaPlusCircle /> Add Course
    </Link>
  </li>

  <li>
    <Link to="/enrollments" className="flex items-center gap-2">
      <FaUserGraduate /> My Enrolled
    </Link>
  </li>
</>;


  return (
    <section className="w-full bg-base-100 shadow-sm">
     
      

      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="lg:hidden dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={logo} alt="Logo"/>
            <Link to="/" className="text-lg font-semibold">Online Learning</Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          
          <img className="w-10 h-10 rounded-full border" src={user ? user.photoURL : usericon} alt="User"/>
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary btn-sm rounded-2xl">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm rounded-2xl">
              Login
            </Link>
          )}
           <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
