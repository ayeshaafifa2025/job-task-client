import React from 'react';

const About = () => {
    return (
        <section className="w-full py-20 bg-[#0a0a0a] overflow-hidden">
            <div className=" mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                   
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 overflow-hidden rounded-sm border border-gray-800">
                            <img 
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                alt="Chef Crafting Fusion Food" 
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                       
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/10 border border-amber-500/20 -z-0 hidden md:block"></div>
                    </div>

                 
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-semibold">
                                Our Heritage
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                                Crafting a Symphony of <br />
                                <span className="text-amber-500">Global Flavors</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            At Aura Dining, we believe that food transcends borders. Our journey started with a simple idea: to bring together the bold spices of the East and the refined techniques of the West.
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-4">
                            <div>
                                <h4 className="text-amber-500 text-3xl font-bold">15+</h4>
                                <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Global Cuisines</p>
                            </div>
                            <div>
                                <h4 className="text-amber-500 text-3xl font-bold">25+</h4>
                                <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Master Chefs</p>
                            </div>
                        </div>

                        <p className="text-gray-500 italic border-l-2 border-amber-600 pl-4 py-2">
                            "Every plate is a canvas, and every ingredient is a note in our global culinary masterpiece."
                        </p>

                        <button className="mt-4 px-8 py-3 border border-amber-500/50 text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300 rounded-sm font-semibold tracking-widest uppercase text-xs">
                            Discover More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;