import { useState } from 'react';

export default function EverydayDishes() {
    const dishes = [
        {
            name: "White Sauce Pasta",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Poha",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Aglio Olio Pasta",
            image: "https://images.unsplash.com/photo-1626844131082-256783844137?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Jeera Aloo Dry",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Hakka Chowmein",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];

    // Duplicate for seamless loop
    const scrollDishes = [...dishes, ...dishes];

    return (
        <section className="py-20 bg-[#fbfbf9] overflow-hidden">
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Your <span className="text-orange-500">Everyday Dishes</span>, Made <span className="text-orange-500">Simpler</span>
                    </h2>
                    <p className="text-lg text-slate-600 italic font-medium">
                        Shared by real users: <span className="underline decoration-orange-400 decoration-2 underline-offset-4">everyday dishes made in PantryPilot</span>
                    </p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fbfbf9] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fbfbf9] to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-scroll gap-6">
                        {scrollDishes.map((dish, index) => (
                            <div key={index} className="w-[300px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-bold text-slate-900 leading-tight text-lg">{dish.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
