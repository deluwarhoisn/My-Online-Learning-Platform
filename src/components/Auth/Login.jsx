import React, { useContext } from 'react';
import Navbar from '../Header/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success('Signed in successfully');
                navigate('/home');
            })
            .catch(error => {
                const errorMessage = error.message || error.code;
                toast.error(errorMessage);
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Logged in with Google!');
                navigate('/home');
            })
            .catch(error => {
                const errorMessage = error.message || error.code;
                toast.error(errorMessage);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left"></div>

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

                                <div className="text-right">
                                    <a href="#" className="text-blue-500 hover:underline text-sm">Forgot password?</a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                                >
                                    Login
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="divider my-4">OR</div>

                            {/* Google Login Button */}
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <p className="text-center text-gray-600 mt-4">
                                Don't have an account?
                                <Link to="/register" className="text-red-500 ml-1 hover:underline">Register</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
