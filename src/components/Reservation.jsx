import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';

const Reservation = () => {
    return (
        <section className="w-full py-24 bg-[#050505] border-t border-gray-900">
            <div className="mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                   
                    <div className="space-y-10">
                        <div>
                            <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">Visit Us</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Find Your Table</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-amber-500 text-xl mt-1" />
                                <div>
                                    <h4 className="text-white font-bold tracking-wide">Location</h4>
                                    <p className="text-gray-500 text-sm">123 Fusion Street, Culinary Arts, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaClock className="text-amber-500 text-xl mt-1" />
                                <div>
                                    <h4 className="text-white font-bold tracking-wide">Opening Hours</h4>
                                    <p className="text-gray-500 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
                                    <p className="text-amber-500/80 text-[10px] uppercase mt-1 italic font-semibold tracking-widest">Open Every Day</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-amber-500 text-xl mt-1" />
                                <div>
                                    <h4 className="text-white font-bold tracking-wide">Phone</h4>
                                    <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="bg-[#0a0a0a] p-10 border border-gray-800 rounded-sm text-center space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-white italic">Ready to Experience Aura?</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Whether it’s a romantic date or a family gathering, we ensure a memorable dining experience for you.
                        </p>
                        <div className="pt-4">
                            <button className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-black font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-xl shadow-amber-900/10">
                                Book A Table Now
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest italic pt-2">
                            * Instant Confirmation via Email
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Reservation;