
"use client"
import React, { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const demoEmail = "admin@example.com";
        const demoPassword = "password123";

        if (email === demoEmail && password === demoPassword) {
            document.cookie = "auth=true; path=/";
            window.location.href = "/foods";
        } else {
            setError("Invalid email or password. Access Denied!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Email Address
                </label>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/20 p-3 rounded-lg text-white outline-none focus:border-amber-500 transition-all placeholder:text-gray-600"
                    required
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Password
                </label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full bg-white/5 border border-white/20 p-3 rounded-lg text-white outline-none focus:border-amber-500 transition-all placeholder:text-gray-600"
                    required
                />
            </div>

            {error && (
                <p className="text-red-500 text-xs font-medium bg-red-500/10 p-2 rounded border border-red-500/20 text-center animate-pulse">
                    {error}
                </p>
            )}

            <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold py-3 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-amber-900/20"
            >
                SIGN IN NOW
            </button>
        </form>
    );
}

