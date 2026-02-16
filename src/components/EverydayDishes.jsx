export default function EverydayDishes() {
    const dishes = [
        {
            name: "White Sauce Pasta",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            name: "Fried Chicken",
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
        <section className="py-20 bg-transparent overflow-hidden">
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
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                        Your <span className="bg-gradient-to-r from-orange-500 to-coral-500 bg-clip-text text-transparent">Everyday Dishes</span>, Made <span className="bg-gradient-to-r from-orange-500 to-coral-500 bg-clip-text text-transparent">Simpler</span>
                    </h2>
                    <p className="text-xl text-slate-600 italic font-semibold">
                        Shared by real users: <span className="underline decoration-orange-400/50 decoration-4 underline-offset-8">everyday dishes made in PantryPilot</span>
                    </p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                    <div className="animate-scroll gap-6 py-4">
                        {scrollDishes.map((dish, index) => (
                            <div key={index} className="w-[320px] flex-shrink-0 bg-white/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 group transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    />
                                </div>
                                <div className="p-8 text-center bg-white/10 backdrop-blur-md">
                                    <h3 className="font-black text-slate-900 leading-tight text-xl tracking-tight uppercase italic">{dish.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
