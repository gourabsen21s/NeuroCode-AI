import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Helper function to check if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-center px-5 md:px-10 py-4 z-50">
            <nav className={`relative z-10 bg-black/80 backdrop-blur-md py-3 px-6 rounded-xl border border-gray-800/50 transition-all duration-300 w-full max-w-5xl mx-auto ${scrolled ? 'shadow-lg shadow-teal-900/10' : ''}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center rounded-lg px-2 py-1 hover:bg-gray-800/30 transition-colors">
                        <svg className="w-6 h-6 text-teal-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        </svg>
                        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                            NeuroCode AI
                        </span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-4 mx-6">
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white transition-colors flex items-center text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30">
                                Resources
                                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <Link 
                            to="/pricing" 
                            className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/pricing') ? 'active' : ''}`}
                        >
                            Pricing
                        </Link>
                        <Link 
                            to="/documentation" 
                            className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/documentation') ? 'active' : ''}`}
                        >
                            Documentation
                        </Link>
                        <Link 
                            to="/github" 
                            className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/github') ? 'active' : ''}`}
                        >
                            GitHub
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden flex items-center text-gray-300 hover:text-white rounded-lg p-1.5 hover:bg-gray-800/30"
                        onClick={toggleMobileMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-3">
                        {user ? (
                            <>
                                <Link 
                                    to="/dashboard" 
                                    className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/dashboard') ? 'active' : ''}`}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-teal-400 text-black px-4 py-1.5 rounded-lg hover:bg-teal-500 transition-colors text-sm"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/login') ? 'active' : ''}`}
                                >
                                    Sign in
                                </Link>
                                <Link 
                                    to="/register" 
                                    className={`text-gray-300 hover:text-white transition-colors text-sm rounded-lg px-3 py-1.5 hover:bg-gray-800/30 ${isActive('/register') ? 'active' : ''}`}
                                >
                                    Sign up
                                </Link>
                                <Link to="/download" className="bg-teal-400 text-black px-4 py-1.5 rounded-lg hover:bg-teal-500 transition-colors text-sm">
                                    Download
                                </Link>
                                <button className="p-2 rounded-lg bg-transparent border border-gray-700 hover:bg-gray-800 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-black/90 backdrop-blur-md rounded-xl border border-gray-800/50 p-4 shadow-lg shadow-teal-900/10 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            <Link 
                                to="/pricing" 
                                className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/pricing') ? 'active' : ''}`}
                            >
                                Pricing
                            </Link>
                            <Link 
                                to="/documentation" 
                                className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/documentation') ? 'active' : ''}`}
                            >
                                Documentation
                            </Link>
                            <Link 
                                to="/github" 
                                className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/github') ? 'active' : ''}`}
                            >
                                GitHub
                            </Link>
                            <div className="h-px bg-gray-800 my-2"></div>
                            {user ? (
                                <>
                                    <Link 
                                        to="/dashboard" 
                                        className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/dashboard') ? 'active' : ''}`}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-teal-400 text-black px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors text-sm mt-2"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        to="/login" 
                                        className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/login') ? 'active' : ''}`}
                                    >
                                        Sign in
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        className={`text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-800/30 ${isActive('/register') ? 'active' : ''}`}
                                    >
                                        Sign up
                                    </Link>
                                    <Link to="/download" className="bg-teal-400 text-black px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors text-sm mt-2">
                                        Download
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar; 
