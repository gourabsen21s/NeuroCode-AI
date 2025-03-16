import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response?.data || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-sans" 
             style={{
                backgroundColor: '#000000',
                backgroundImage: `
                    radial-gradient(650px circle at 0% 0%,
                        #0f2d2a 15%,
                        #081b1a 35%,
                        #061211 75%,
                        #050a0a 80%,
                        transparent 100%),
                    radial-gradient(1250px circle at 100% 100%,
                        #0b3b46 15%,
                        #072530 35%,
                        #051a20 75%,
                        #03131a 80%,
                        transparent 100%)
                `
             }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column - Text */}
                    <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center mb-8 md:mb-0">
                        <h1 className="my-5 text-4xl font-bold leading-tight px-3 text-white">
                            Welcome Back <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">to NeuroCode AI</span>
                        </h1>
                        <p className="px-3 text-gray-300">
                            Access your account to manage your projects, 
                            track your progress, and connect with our 
                            community. We're glad to see you again!
                        </p>
                    </div>
                    
                    {/* Right Column - Login Form */}
                    <div className="md:w-1/2 relative">
                        {/* Decorative Elements */}
                        <div className="absolute rounded-full shadow-lg h-56 w-56 -top-16 -left-32 opacity-70" 
                             style={{
                                background: 'radial-gradient(#083a2c, #10b981)',
                                overflow: 'hidden',
                                zIndex: 0
                             }}>
                        </div>
                        <div className="absolute shadow-lg -bottom-16 -right-28 w-72 h-72 opacity-70" 
                             style={{
                                borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
                                background: 'radial-gradient(#065073, #0ea5e9)',
                                overflow: 'hidden',
                                zIndex: 0
                             }}>
                        </div>
                        
                        {/* Card */}
                        <div className="my-5 rounded-lg shadow-lg p-6 relative z-10 max-w-md mx-auto" 
                             style={{
                                backgroundColor: 'rgba(10, 20, 25, 0.8)',
                                backdropFilter: 'saturate(180%) blur(20px)',
                                border: '1px solid rgba(16, 185, 129, 0.1)'
                             }}>
                            <form onSubmit={submitHandler} className="space-y-6">
                                <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Login</h2>
                                
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="email">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="password">Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full p-3 rounded-lg text-black font-medium transition-all duration-300 bg-teal-400 hover:bg-teal-500"
                                >
                                    Login
                                </button>
                            </form>
                            
                            <p className="text-gray-400 mt-6 text-center text-sm">
                                Don't have an account?{' '}
                                <Link to="/register" className="text-teal-400 hover:text-teal-300 hover:underline transition-all">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
