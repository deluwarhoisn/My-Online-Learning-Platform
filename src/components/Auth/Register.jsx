import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import Navbar from '../Header/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';


const Register = () => {
  const { createUser, setUser , updateUser} = use(AuthContext);

 const navigate= useNavigate();

  const RegisterSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      // console.log(user);
      updateUser({displayName:name ,photo: photo}).then(()=>{
          setUser({...user,displayName:name ,photo: photo });
          navigate("/home")
      })
      .catch((error)=>{
        console.log(error);
        setUser(user);
      });
    
    })
    .catch((error) =>{
      const errorCode = error.code;
      
      alert(errorCode)
    })
  }

  return (

    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">


          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={RegisterSubmit} className="card-body">

              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />

                <label className="label">Photo</label>
                <input type="photo" name='photo' className="input" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p>Login Now <span className='text-red-500'> <Link to="/login">Login</Link></span></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;