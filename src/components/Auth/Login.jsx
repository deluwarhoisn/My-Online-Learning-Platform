import React, { useContext, useState } from 'react';
import Navbar from '../Header/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle, FaSpinner, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Demo credentials
    const demoCredentials = {
        student: { email: 'student@demo.com', password: 'Demo123!' },
        admin: { email: 'admin@demo.com', password: 'Admin123!' }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        
        try {
            await signIn(formData.email, formData.password);
            toast.success('Welcome back! Signed in successfully');
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Login error:', error);
            
            // Handle specific Firebase auth errors
            let errorMessage = 'Login failed. Please try again.';
            
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email address. Please register first or use Google sign-in.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please try again.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address format.';
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = 'This account has been disabled.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Please try again later.';
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Invalid email or password. Please check your credentials or try Google sign-in.';
            }
            
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        
        try {
            await signInWithGoogle();
            toast.success('Welcome! Signed in with Google successfully');
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Google login error:', error);
            toast.error('Google sign-in failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const fillDemoCredentials = (type) => {
        const credentials = demoCredentials[type];
        setFormData(credentials);
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-4">
                <div className="max-w-md w-full">
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to continue your learning journey</p>
                    </div>

                    {/* Demo Instructions */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold text-green-800 mb-3">🚀 Quick Demo Access</h3>
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                                className="w-full btn btn-success flex items-center justify-center gap-2"
                            >
                                <FaGoogle />
                                Sign in with Google (Recommended)
                            </button>
                            <div className="text-center text-sm text-green-700">
                                <p><strong>Fastest way to test the app!</strong></p>
                                <p>No setup required - works instantly</p>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Options */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold text-blue-800 mb-3">Alternative Options</h3>
                        <div className="space-y-2 text-sm text-blue-700">
                            <p><strong>Option 1:</strong> Create a new account with the Register button below</p>
                            <p><strong>Option 2:</strong> Test form validation by entering any email/password</p>
                        </div>
                        <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-600">
                            <strong>Note:</strong> Demo credentials need Firebase setup. 
                            Google sign-in works immediately!
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className="card">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Email Field */}
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`input ${errors.email ? 'error' : ''}`}
                                    placeholder="Enter your email address"
                                    disabled={isLoading}
                                />
                                {errors.email && (
                                    <div className="form-error">
                                        <FaExclamationCircle />
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`input pr-12 ${errors.password ? 'error' : ''}`}
                                        placeholder="Enter your password"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <div className="form-error">
                                        <FaExclamationCircle />
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <Link 
                                    to="/forgot-password" 
                                    className="text-sm text-primary-blue hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn btn-primary w-full"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin mr-2" />
                                        Signing In...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            className="btn btn-secondary w-full"
                        >
                            <FaGoogle className="mr-2" />
                            Sign in with Google
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-center text-gray-600 mt-6">
                            Don't have an account?{' '}
                            <Link 
                                to="/register" 
                                className="text-primary-blue font-semibold hover:underline"
                            >
                                Create one now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
