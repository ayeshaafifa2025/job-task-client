import Link from 'next/link';
import React from 'react';


export const FoodSkeleton = () => {
    return (
        <div className="bg-[#0a0a0a] border border-gray-900 rounded-sm overflow-hidden animate-pulse">
            <div className="h-80 bg-gray-800"></div> 
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-800 w-3/4 rounded-md"></div>
                <div className="h-4 bg-gray-800 w-full rounded-md"></div>
                <div className="h-4 bg-gray-800 w-5/6 rounded-md"></div>
                <div className="flex justify-between items-center pt-4">
                    <div className="h-6 bg-gray-800 w-12 rounded-md"></div>
                    <div className="h-8 bg-gray-800 w-24 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};


const FoodCard = ({ food }) => {
    return (
        <div className="group bg-[#0a0a0a] border border-gray-900 rounded-sm overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-xl flex flex-col h-full">
           
            <div className="relative h-80 overflow-hidden shrink-0">
                <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
               
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] text-amber-500 font-bold uppercase tracking-widest border border-amber-500/20">
                    {food.origin}
                </div>
            </div>

          
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {food.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 italic font-light leading-relaxed flex-grow">
                    {food.description}
                </p>
                
             
                <div className="flex justify-between items-center border-t border-gray-900 pt-4 mt-auto">
                    <span className="text-2xl font-bold text-white">${food.price}</span>
                    <Link href={`/foods/${food._id}`}>
        <button className="px-5 py-2 bg-amber-600 text-black text-[11px] font-bold uppercase tracking-widest hover:bg-amber-700 active:scale-95 transition-all">
            View Details
        </button>
    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;