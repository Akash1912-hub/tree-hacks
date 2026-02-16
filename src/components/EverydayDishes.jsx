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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Your <span className="text-orange-500">Everyday Dishes</span>, Made <span className="text-orange-500">Simpler</span>
                    </h2>
                    <p className="text-lg text-slate-600 italic font-medium">
                        Shared by real users: <span className="underline decoration-orange-400 decoration-2 underline-offset-4">everyday dishes made in PantryPilot</span>
                    </p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div className="animate-scroll gap-6 py-4">
                        {scrollDishes.map((dish, index) => (
                            <div key={index} className="w-[300px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
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
