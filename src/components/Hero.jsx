import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
           
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80')`,
                }}
            >
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <div className="mb-6 flex justify-center items-center gap-4">
                    <div className="h-[1px] w-12 bg-amber-500"></div>
                    <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold">
                        Luxury Dining Experience
                    </span>
                    <div className="h-[1px] w-12 bg-amber-500"></div>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter">
                    Where Every Flavor <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-800">
                        Tells a Story
                    </span>
                </h1>
                
                <p className="text-gray-300 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    "Experience the ultimate global fusion flavors."
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    
                    <Link href="/foods">
                        <button className="group relative px-10 py-4 bg-amber-600 overflow-hidden rounded-sm transition-all duration-300 hover:bg-amber-700 active:scale-95 shadow-2xl shadow-amber-900/30">
                            <span className="relative z-10 text-black font-bold uppercase tracking-widest text-sm">
                                Explore Menu
                            </span>
                        </button>
                    </Link>

                    <button className="px-10 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 transition-all duration-300">
                        Book a Table
                    </button>
                </div>
            </div>

          
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;