import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="shadow-md shadow-zinc-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex items-center lg:justify-normal justify-between h-16">

                    <div className="flex-shrink-0 bg-[#620058] px-3 py-1 rounded-md">
                        <a href="/" className="text-white text-lg font-semibold">Dashboard</a>
                    </div>

                    <div className="hidden md:block w-full">
                        <div className="ml-4 flex items-center">
                            <a href="/" className="text-white hover:bg-white hover:text-[#620058] px-4 py-2 rounded-md text-sm font-semibold">Home</a>
                            <a href="/" className="text-white hover:bg-white hover:text-[#620058] px-4 py-2 rounded-md text-sm font-semibold">Demo</a>
                            <a href="/" className="text-white hover:bg-white hover:text-[#620058] px-4 py-2 rounded-md text-sm font-semibold">Users</a>
                            <a href="/" className="text-white hover:bg-white hover:text-[#620058] px-4 py-2 rounded-md text-sm font-semibold">About</a>
                            <div className='ml-auto'>
                                {
                                    isAuthenticated ?
                                        <button className="text-[#620058] hover:bg-[#620058] hover:text-white px-3 py-2 rounded-md text-sm font-semibold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button> : <button className="text-[#620058] hover:bg-[#620058] hover:text-white px-3 py-2 rounded-md text-sm font-semibold" onClick={() => loginWithRedirect()}>Get Started</button>
                                }


                                <a href="/" className="text-[#620058] hover:bg-[#620058] hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Contact us</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none focus:bg-[#620058] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#620058]">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-white hover:bg-white hover:text-[#620058] block px-3 py-2 rounded-md text-base font-semibold">Home</a>
                        <a href="/" className="text-white hover:bg-white hover:text-[#620058] block px-3 py-2 rounded-md text-base font-semibold">Demo</a>
                        <a href="/" className="text-white hover:bg-white hover:text-[#620058] block px-3 py-2 rounded-md text-base font-semibold">Users</a>
                        <a href="/" className="text-white hover:bg-white hover:text-[#620058] block px-3 py-2 rounded-md text-base font-semibold">About</a>
                        {
                            isAuthenticated ?
                                <button className="text-[#620058] hover:bg-[#620058] hover:text-white px-3 py-2 rounded-md text-sm font-semibold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button> : <button className="text-[#620058] hover:bg-[#620058] hover:text-white px-3 py-2 rounded-md text-sm font-semibold" onClick={() => loginWithRedirect()}>Get Started</button>
                        }
                        <a href="/" className="text-white hover:bg-white hover:text-[#620058] block px-3 py-2 rounded-md text-base font-semibold">Contact us</a>


                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
