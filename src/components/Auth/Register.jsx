import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Header/Navbar';

const Register = () => {
const RegisterSubmit = (e) => {
   e.preventDefault()
    const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form. password.value;
        console.log(name,photo,email,password);
}

    return (
       
        <div>
             <Navbar></Navbar>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={RegisterSubmit } className="fieldset">
          <label className="label">Name</label>
          <input type="text"name='name' className="input" placeholder="Name" />

          <label className="label">Photo</label>
          <input type="photo"name='photo' className="input" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email"name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password"name='password' className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Login Now <span className='text-red-500'> <Link to="/login">Login</Link></span></p>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;