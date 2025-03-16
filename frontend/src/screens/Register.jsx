import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import axios from '../config/axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/register', { email, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response?.data || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-sans overflow-hidden" 
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
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Column - Form (Reversed from login) */}
                    <div className="md:w-1/2 relative mb-8 md:mb-0 flex justify-center">
                        {/* Decorative Elements - Repositioned */}
                        <div className="absolute rounded-full shadow-lg h-56 w-56 -top-20 md:-top-24 left-0 md:-left-16 opacity-70" 
                             style={{
                                background: 'radial-gradient(#083a2c, #10b981)',
                                overflow: 'hidden',
                                zIndex: 0
                             }}>
                        </div>
                        <div className="absolute shadow-lg -bottom-20 md:-bottom-24 -right-16 md:-right-20 w-72 h-72 opacity-70" 
                             style={{
                                borderRadius: '38% 62% 63% 37% / 70% 33% 67% 30%',
                                background: 'radial-gradient(#065073, #0ea5e9)',
                                overflow: 'hidden',
                                zIndex: 0
                             }}>
                        </div>
                        
                        {/* Card */}
                        <div className="my-5 rounded-lg shadow-lg p-6 relative z-10 max-w-md w-full" 
                             style={{
                                backgroundColor: 'rgba(10, 20, 25, 0.85)',
                                backdropFilter: 'saturate(180%) blur(20px)',
                                border: '1px solid rgba(16, 185, 129, 0.1)'
                             }}>
                            <form onSubmit={submitHandler} className="space-y-6">
                                <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Create Account</h2>
                                
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
                                    Register
                                </button>
                            </form>
                            
                            <p className="text-gray-400 mt-6 text-center text-sm">
                                Already have an account?{' '}
                                <Link to="/login" className="text-teal-400 hover:text-teal-300 hover:underline transition-all">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Column - Text (Reversed from login) */}
                    <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center px-4">
                        <h1 className="my-5 text-5xl font-bold leading-tight text-white">
                            Join Our <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Community Today</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Create an account to unlock all features and start your journey with us.
                        </p>
                        
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4 text-teal-400">
                                Why Sign Up?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-400">✓</span>
                                    <span className="text-gray-300">Access to premium content and exclusive features</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-400">✓</span>
                                    <span className="text-gray-300">Connect with like-minded professionals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-400">✓</span>
                                    <span className="text-gray-300">Track your progress and set personal goals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-teal-400">✓</span>
                                    <span className="text-gray-300">Receive personalized recommendations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
