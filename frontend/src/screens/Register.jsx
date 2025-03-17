import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';
import Navbar from '../components/Navbar';
import BackgroundPattern from '../components/BackgroundPattern';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post('/users/register', { name, email, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response?.data || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative auth-container">
            <BackgroundPattern />
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-24 relative z-10 mt-24">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-10">Create your account</h1>
                    
                    {/* Email Registration Form */}
                    <form onSubmit={submitHandler} className="space-y-5">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-gray-100/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-gray-100/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-gray-100/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Confirm Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-gray-100/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        
                        <div className="flex items-center">
                            <input
                                id="show-password"
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className="h-4 w-4 rounded border-gray-700 bg-transparent text-teal-400 focus:ring-0 focus:ring-offset-0"
                            />
                            <label htmlFor="show-password" className="ml-2 text-sm text-gray-400">
                                Show Password
                            </label>
                        </div>
                        
                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-700 bg-transparent text-teal-400 focus:ring-0 focus:ring-offset-0"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                                I agree to the <a href="#" className="text-teal-400 hover:text-teal-300">Terms of Service</a> and <a href="#" className="text-teal-400 hover:text-teal-300">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-md bg-teal-400 text-black font-medium hover:bg-teal-500 transition-colors"
                        >
                            Create Account
                        </button>
                        
                        <p className="text-gray-500 text-center text-sm mt-6">
                            Already have an account?{' '}
                            <Link 
                                to="/login" 
                                className="text-teal-400 hover:text-teal-300"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
