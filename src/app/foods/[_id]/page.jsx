
"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaStar, FaFire, FaClock, FaGlobeAmericas, FaLeaf, FaUtensils } from 'react-icons/fa';
import DetailsSkeleton from '@/components/DetailsSkeleton';

const FoodDetailsPage = () => {
    const { _id } = useParams();
    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodDetails = async () => {
            try {
                const res = await fetch(`https://job-task-server-six-beta.vercel.app/foods/${_id}`);
                const data = await res.json();
                setFood(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setTimeout(() => setLoading(false), 600);
            }
        };
        if (_id) fetchFoodDetails();
    }, [_id]);

    if (loading) return <DetailsSkeleton />;
    if (!food) return <div className="text-white text-center py-40">Food not found!</div>;

    return (
        
        <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 lg:p-12 relative overflow-y-auto">
            
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[1300px] w-full flex flex-col lg:flex-row bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[40px] overflow-hidden shadow-2xl my-10">
                
               
                <div className="w-full lg:w-[45%] relative h-[400px] lg:h-auto max-h-[600px] lg:max-h-none border-r border-white/5">
                    <img 
                        src={food.image} 
                        alt={food.name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">
                        <FaGlobeAmericas className="text-amber-500 text-sm" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">{food.origin}</span>
                    </div>
                </div>

                
                <div className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
                    
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaUtensils className="text-amber-500 text-xs" />
                                <span className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-black">Signature Collection</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                                {food.name}
                            </h1>
                            <div className="flex items-center gap-6">
                                <span className="text-3xl font-serif text-amber-500 font-semibold">${food.price}</span>
                                <div className="h-5 w-[1px] bg-white/10"></div>
                                <div className="flex items-center gap-1.5 text-amber-400">
                                    {[...Array(Math.round(food.rating || 5))].map((_, i) => (
                                        <FaStar key={i} size={14} />
                                    ))}
                                    <span className="text-gray-400 text-xs font-medium ml-1">({food.rating || 5}.0 Rating)</span>
                                </div>
                            </div>
                        </div>

                        
                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-light italic border-l-4 border-amber-600/30 pl-6 py-1">
                            "{food.description}"
                        </p>

                       
                        <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center text-amber-500 border border-amber-600/10">
                                    <FaFire size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-0.5">Calories</p>
                                    <p className="text-white text-lg font-bold">{food.calories || "420"} <span className="text-[10px] font-normal text-gray-400">kcal</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center text-amber-500 border border-amber-600/10">
                                    <FaClock size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-0.5">Time</p>
                                    <p className="text-white text-lg font-bold">{food.preparation_time || "25"} <span className="text-[10px] font-normal text-gray-400">min</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-4">
                            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                                <FaLeaf className="text-amber-600" /> Ingredients
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {food.ingredients?.map((item, index) => (
                                    <span key={index} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-400">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action */}
                        <div className="pt-4">
                            <button className="w-full lg:w-auto px-12 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-[0.2em] text-[11px] transition-all rounded-xl shadow-lg shadow-amber-900/20 active:scale-95">
                                Confirm Your Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;