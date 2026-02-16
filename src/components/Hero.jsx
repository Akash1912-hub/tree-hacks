import { Play, ArrowRight } from 'lucide-react'
import Aurora from './ui/Aurora'
import BlurText from './ui/BlurText'

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Aurora
                    colorStops={["#ffedd5", "#fb923c", "#f97316"]}
                    amplitude={1.0}
                    blend={0.5}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-7xl">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold mb-6 border border-orange-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Now Available for Pre-order
                    </div>
                    <div className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                        <BlurText
                            text="Turn Your Pantry"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="inline-block mb-2 md:mb-0"
                        />
                        <br className="hidden md:block" />
                        <BlurText
                            text="Into Dinner."
                            className="text-orange-500 inline-block"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                        PantryPilot scans your ingredients using AI vision and instantly suggests recipes you can actually cook. Stop wasting food, start cooking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 text-lg shadow-xl shadow-slate-900/10">
                            Pre-order Now <ArrowRight size={20} />
                        </button>
                        <a href="#demo" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 text-slate-700 font-bold py-4 px-8 rounded-full transition-all text-lg">
                            <Play fill="currentColor" size={20} />
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Hero Image / Product Shot */}
                <div className="flex-1 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Smart Cooking Assistant Interface"
                            className="relative z-10 w-full h-auto object-cover opacity-95"
                        />
                        {/* Enhanced UI Overlay Mockup matching new style */}
                        <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 flex items-center gap-3 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-green"></div>
                            <span className="text-xs font-bold tracking-wider text-slate-700">AI ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
