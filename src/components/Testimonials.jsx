import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Food Critic",
            text: "The fusion of flavors at Aura Dining is unlike anything I've experienced. A true masterpiece on every plate. The Napoli Pizza is a must-try!",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Sarah Miller",
            role: "Entrepreneur",
            text: "The ambiance is incredibly luxurious. It's the perfect place for a business dinner or a romantic evening. Exceptional service!",
            img: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "David Chen",
            role: "Chef & Blogger",
            text: "Attention to detail is evident in every bite. Their Signature Burger is a masterclass in balance and taste. Highly recommended.",
            img: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    return (
        <section className="w-full py-24 bg-[#0a0a0a]">
            <div className=" mx-auto px-6 lg:px-12">
                
               
                <div className="text-center mb-16">
                    <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 tracking-tighter">What Our Guests Say</h2>
                    <div className="w-16 h-[1px] bg-amber-600/50 mx-auto mt-6"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-[#050505] p-10 border border-gray-900 rounded-sm relative group hover:border-amber-500/30 transition-all duration-500 shadow-xl">
                            
                            <FaQuoteLeft className="text-amber-500/10 text-5xl absolute top-8 left-8 group-hover:text-amber-500/20 transition-colors" />
                            
                         
                            <div className="flex gap-1 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-amber-500 text-xs" />
                                ))}
                            </div>

                            <p className="text-gray-400 italic mb-10 relative z-10 leading-relaxed font-light text-sm">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <img 
                                    src={review.img} 
                                    alt={review.name} 
                                    className="w-12 h-12 rounded-full border border-amber-600/30 object-cover" 
                                />
                                <div>
                                    <h4 className="text-white font-bold tracking-wide text-sm">{review.name}</h4>
                                    <span className="text-amber-500 text-[10px] uppercase font-medium tracking-widest">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;