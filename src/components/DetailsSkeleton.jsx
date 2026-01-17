import React from 'react';

const DetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center py-20 animate-pulse">
            <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden h-auto lg:h-[750px]">
                    <div className="lg:col-span-6 bg-gray-800/50 w-full h-[450px] lg:h-full"></div>
                    <div className="lg:col-span-6 p-8 lg:p-16 flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <div className="h-3 bg-gray-800/60 w-32 rounded-full"></div>
                            <div className="h-16 bg-gray-800/60 w-full rounded-md"></div>
                            <div className="h-16 bg-gray-800/60 w-3/4 rounded-md"></div>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="h-6 bg-gray-800/60 w-32 rounded-full"></div>
                            <div className="h-8 bg-gray-800/60 w-20 rounded-md"></div>
                        </div>
                        <div className="space-y-3 pt-6">
                            <div className="h-4 bg-gray-800/40 w-full rounded-full"></div>
                            <div className="h-4 bg-gray-800/40 w-full rounded-full"></div>
                        </div>
                        <div className="h-16 bg-gray-800/80 w-full lg:w-64 rounded-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSkeleton;