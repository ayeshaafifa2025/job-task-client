

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const checkAuth = () => {
            const cookies = document.cookie.split(';');
            const auth = cookies.find(c => c.trim().startsWith('auth='));
            setIsLoggedIn(auth?.includes('true') || false);
        };
        
        checkAuth();

        window.addEventListener('focus', checkAuth);
        return () => window.removeEventListener('focus', checkAuth);
    }, []);

    const handleLogout = () => {
        
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        setIsOpen(false); 
        router.push('/login');
        router.refresh(); 
    };

    return (
        <nav className="bg-[#0a0a0a] border-b border-gray-900 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-tr from-amber-600 to-yellow-200 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/20">
                            <span className="text-black font-bold text-xl">A</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white leading-none">
                                AURA <span className="text-amber-500">DINING</span>
                            </h1>
                            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                                A Global Fusion Eatery
                            </span>
                        </div>
                    </Link>

                
                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/" className="text-gray-300 hover:text-amber-500 text-sm font-semibold tracking-widest transition-colors duration-300">
                            HOME
                        </Link>
                        <Link href="/foods" className="text-gray-300 hover:text-amber-500 text-sm font-semibold tracking-widest transition-colors duration-300">
                            FOODS
                        </Link>
                        
                        {isLoggedIn ? (
                            <button 
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-sm text-xs font-black tracking-[0.2em] transition-all active:scale-95"
                            >
                                LOGOUT
                            </button>
                        ) : (
                            <Link href="/login" className="bg-amber-600 hover:bg-amber-700 text-black px-8 py-2.5 rounded-sm text-xs font-black tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-amber-900/20">
                                LOGIN
                            </Link>
                        )}
                    </div>

                    
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="p-2 text-gray-400 hover:text-amber-500 transition-colors"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

           
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-t border-gray-900 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-8 space-y-6">
                        <Link 
                            href="/" 
                            className="block text-gray-300 hover:text-amber-500 text-lg font-bold tracking-widest border-b border-gray-900 pb-2" 
                            onClick={() => setIsOpen(false)}
                        >
                            HOME
                        </Link>
                        <Link 
                            href="/foods" 
                            className="block text-gray-300 hover:text-amber-500 text-lg font-bold tracking-widest border-b border-gray-900 pb-2" 
                            onClick={() => setIsOpen(false)}
                        >
                            FOODS
                        </Link>
                        
                        <div className="pt-4">
                            {isLoggedIn ? (
                                <button 
                                    onClick={handleLogout} 
                                    className="w-full bg-red-600 text-white py-4 rounded-lg font-black tracking-widest text-sm"
                                >
                                    LOGOUT
                                </button>
                            ) : (
                                <Link 
                                    href="/login" 
                                    className="block w-full bg-amber-600 text-black text-center py-4 rounded-lg font-black tracking-widest text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    LOGIN
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
