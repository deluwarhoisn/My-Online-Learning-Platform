import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';


const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const RegisterSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photo: photo }).then(() => {
          setUser({ ...user, displayName: name, photo: photo });
          navigate("/home")
        })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

      })
      .catch((error) => {
        const errorCode = error.code;

        alert(errorCode)
      })
  }

  return (

    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Register Now!</h1>
          <form onSubmit={RegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Photo URL</label>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Register
            </button>
            <p className="text-center text-gray-600 mt-2">
              Already have an account?
              <Link to="/login" className="text-red-500 ml-1 hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;