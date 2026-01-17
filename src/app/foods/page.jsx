"use client";
import FoodCard, { FoodSkeleton } from '@/components/FoodCard';
import React, { useEffect, useState } from 'react';


const FoodsPage = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await fetch('https://job-task-server-six-beta.vercel.app/foods');
                const data = await res.json();
                setFoods(data);
            } catch (error) {
                console.error("Error fetching foods:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFoods();
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] pt-28 pb-20">
            <div className=" mx-auto px-6 lg:px-12">
                
               
                <div className="text-center mb-16">
                    <span className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">Our Collection</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 italic">The Global Menu</h1>
                    <div className="w-20 h-[1px] bg-amber-600 mx-auto mt-6"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                       
                        Array.from({ length: 10 }).map((_, idx) => (
                            <FoodSkeleton key={idx} />
                        ))
                    ) : (
                        
                        foods.map((food) => (
                            <FoodCard key={food._id} food={food} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodsPage;