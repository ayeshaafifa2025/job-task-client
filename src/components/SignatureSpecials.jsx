import React from 'react';
import Link from 'next/link';

const SignatureSpecials = () => {

    const topPicks = [
        {
            id: 1,
            name: "Napoli Artisan Pizza",
            origin: "Italy",
            price: 18,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            description: "Thin-crust masterpiece with buffalo mozzarella."
        },
        {
            id: 2,
            name: "The Aura Signature Burger",
            origin: "USA",
            price: 15,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            description: "Double wagyu beef with caramelized onions."
        },
        {
            id: 3,
            name: "Royal Nawab Biryani",
            origin: "India",
            price: 25,
            image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop",
            description: "Long-grain basmati rice with tender mutton."
        }
    ];

    return (
        <section className="w-full py-24 bg-[#050505]">
            <div className=" mx-auto px-6 lg:px-12">
                
               
                <div className="text-center mb-16">
                    <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">Chef's Selection</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">Signature Specials</h2>
                    <div className="w-24 h-[1px] bg-amber-600 mx-auto mt-6"></div>
                </div>

         
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {topPicks.map((item) => (
                        <div key={item.id} className="group relative bg-[#0a0a0a] border border-gray-900 rounded-sm overflow-hidden hover:border-amber-500/30 transition-all duration-500">
                            
                         
                            <div className="relative h-72 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20">
                                    <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">{item.origin}</span>
                                </div>
                            </div>

                          
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 font-light line-clamp-2 italic">
                                    "{item.description}"
                                </p>
                                <div className="flex justify-between items-center border-t border-gray-900 pt-6">
                                    <span className="text-2xl font-bold text-white">${item.price}</span>
                                    <Link href="/foods">
                                        <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 hover:text-white transition-colors">
                                            Order Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="text-center mt-16">
                    <Link href="/foods">
                        <button className="px-12 py-4 bg-transparent border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs">
                            View Full Menu
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default SignatureSpecials;