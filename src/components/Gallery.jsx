import React from 'react';

const Gallery = () => {
    
    const images = [
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    ];

    return (
        <section className="w-full py-24 bg-[#050505]">
            <div className=" mx-auto px-6 lg:px-12">
                
               
                <div className="text-center mb-16">
                    <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Atmosphere</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">The Aura Experience</h2>
                    <div className="w-20 h-[1px] bg-amber-600/50 mx-auto mt-6"></div>
                </div>

              
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <div key={index} className="relative overflow-hidden group rounded-sm border border-gray-900 shadow-2xl">
                            <img 
                                src={img} 
                                alt={`Aura Dining Moment ${index + 1}`} 
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            
                           
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-amber-500 text-[10px] uppercase tracking-[0.3em] block mb-2">View Full</span>
                                    <div className="w-8 h-[1px] bg-white mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;