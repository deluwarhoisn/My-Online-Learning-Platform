
import React, { useContext } from 'react';
import Navbar from '../Header/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Signed in successfully');
                navigate('/home');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message || error.errorMessage;
                toast.error(errorMessage || errorCode);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="flex justify-center items-center min-h-screen bg-gray-100">
                        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
                            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Login Now!</h1>
                            <form onSubmit={submitForm} className="space-y-4">
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
                                <div className=''>
                                    <label className="block text-gray-700 mb-2 font-medium">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="text-right">
                                    <a href="#" className="text-blue-500 hover:underline text-sm">Forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                                >
                                    Login
                                </button>
                                {/* Google sign-in removed */}
                                <p className="text-center text-gray-600 mt-4">
                                    Don't have an account?
                                    <Link to="/register" className="text-red-500 ml-1 hover:underline">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Login;