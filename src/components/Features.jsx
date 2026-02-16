import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useRef } from 'react'

export default function Features() {
    const scrollRef = useRef(null)

    const issues = [
        {
            text: "I stare at my fridge for 20 minutes every day and still end up ordering takeout because I can't decide what to cook with what I have.",
        },
        {
            text: "I tried to follow a YouTube tutorial but had to pause it with my dirty hands 50 times. My phone screen is covered in flour.",
        },
        {
            text: "My steak is always either raw in the middle or completely burnt. I just can't get the timing right no matter how hard I try.",
        },
        {
            text: "I bought all these expensive spices for one recipe and now they're just sitting in my cabinet expiring. Total waste of money.",
        },
        {
            text: "By the time I finish chopping everything, the oil in the pan is smoking and the fire alarm goes off. Every. Single. Time.",
        }
    ]

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 500; // Approx card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="issues" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-orange-500">Daily Struggle</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">Cooking shouldn't be this hard. Sound familiar?</p>
                </div>

                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute top-1/2 left-4 md:-left-6 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl border border-slate-100 text-slate-600 hover:text-orange-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute top-1/2 right-4 md:-right-6 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl border border-slate-100 text-slate-600 hover:text-orange-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Container (Carousel) */}
                    <style>{`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 md:gap-8 py-8 px-4 snap-x snap-mandatory hide-scrollbar -mx-4 md:mx-0"
                    >
                        {issues.map((issue, index) => (
                            <div key={index} className="flex-none w-[85vw] md:w-[450px] bg-white p-10 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow relative snap-center flex flex-col justify-start min-h-[300px]">
                                {/* Header: Stars and Google Logo */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={24} className="fill-orange-400 text-orange-400" />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                                        Reviewed on
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-slate-200 p-1">
                                            {/* Google G SVG */}
                                            <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z" fill="#EA4335" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-700 leading-relaxed text-xl font-medium">
                                    "{issue.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
