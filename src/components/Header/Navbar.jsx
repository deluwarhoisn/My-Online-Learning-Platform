import React, { use } from 'react';
import logo from '../../assets/online.png'
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';
import usericon from '../../assets/icon.jpg'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
 const handleLogOut=()=>{
logOut().then(()=>{
alert('You LogOut successfully')
}).catch((error) =>{
console.log(error);
});
 }
  const link = <>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/courses">Courses</Link></li>

    {
      <li><Link to="/dashboard">Dashboard</Link></li>
    }
  </>

  return (
    
   <section>
    <div className='text-start w-11/12 mx-auto '>{user && user.email}</div>
     <div className='w-11/12 mx-auto'>
       
     
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                link
              }


            </ul>
          </div>
          <div className='flex'>
            <img className='w-[50px] h-[50px]' src={logo} alt="" />
            <a className="btn btn-ghost text-xl">Online Learning</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              link
            }


          </ul>
        </div>
        <div className="navbar-end">
          <img className='w-[50px] h-[50px] rounded-full' src={`${user ? user.photo :usericon}`} alt="" />
          {
            user ? <button onClick={handleLogOut} className='btn btn-primary rounded-2xl'>LogOut</button> : <Link to="/login" className="btn btn-primary rounded-2xl">Login</Link>
          }
          
        </div>
      </div>
    </div>
   </section>
  );
};

export default Navbar;