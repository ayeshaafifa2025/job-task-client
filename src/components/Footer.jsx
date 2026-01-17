import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-gray-900 pt-16 pb-8">
            <div className=" mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
             
                <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold tracking-tighter text-white">
                        AURA <span className="text-amber-500">DINING</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        Experience a symphony of global flavors crafted with passion and served with elegance. Your journey to exquisite fusion dining starts here.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 pt-2">
                        <a href="#" className="p-2 bg-gray-900 rounded-full text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="p-2 bg-gray-900 rounded-full text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="p-2 bg-gray-900 rounded-full text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300">
                            <FaTwitter size={16} />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold tracking-widest text-sm uppercase">Quick Navigation</h3>
                    <ul className="space-y-2 text-gray-500 text-sm">
                        <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
                        <li><a href="/foods" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
                        <li><a href="/login" className="hover:text-amber-500 transition-colors">Reservation</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                    </ul>
                </div>

                
                <div className="space-y-4">
                    <h3 className="text-white font-bold tracking-widest text-sm uppercase">Find Us</h3>
                    <div className="space-y-3 text-gray-500 text-sm">
                        <p className="flex items-center justify-center md:justify-start gap-3">
                            <FaMapMarkerAlt className="text-amber-500" />
                            123 Fusion Street, Culinary Arts, NY 10001
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-3">
                            <FaPhoneAlt className="text-amber-500" />
                            +1 (555) 123-4567
                        </p>
                        <p className="text-amber-500/80 font-medium pt-2 italic">
                            Open: 11:00 AM - 11:00 PM (Everyday)
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="mt-16 border-t border-gray-900 pt-8 text-center">
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} Aura Dining. Crafted for Excellence.
                </p>
            </div>
        </footer>
    );
};

export default Footer;