import React from 'react';
import { FaLeaf, FaUtensils, FaGlobeAmericas } from 'react-icons/fa';

const Philosophy = () => {
    const features = [
        {
            icon: <FaLeaf className="text-amber-500 text-4xl" />,
            title: "Fresh Ingredients",
            desc: "We source organic, farm-fresh ingredients daily to ensure the purest taste in every bite."
        },
        {
            icon: <FaUtensils className="text-amber-500 text-4xl" />,
            title: "Expert Chefs",
            desc: "Our master chefs bring years of international experience to create perfect fusion masterpieces."
        },
        {
            icon: <FaGlobeAmericas className="text-amber-500 text-4xl" />,
            title: "Global Flavors",
            desc: "Experience an authentic journey through the world's finest cuisines under one roof."
        }
    ];

    return (
        <section className="w-full py-20 bg-[#0a0a0a] border-y border-gray-900">
            <div className=" mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 p-8 hover:bg-white/5 transition-all duration-300 rounded-sm group">
                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-white text-xl font-serif font-bold tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;