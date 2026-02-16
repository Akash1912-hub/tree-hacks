import { Play, ArrowRight, Search } from 'lucide-react'
import BlurText from './ui/BlurText'

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <section id="home" className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-transparent">
            {/* Removed Aurora to show global Liquid Background */}

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-7xl">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="text-5xl md:text-5xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                        <BlurText
                            text="Better Success On Cooking"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="inline-block"
                        />
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-orange-500 via-coral-500 to-orange-600 bg-clip-text text-transparent inline-block py-1">
                            <BlurText
                                text="Into Dinner."
                                className="inline-block"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                            />
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                        PantryPilot is a smart kitchen device that guides you through the entire cooking process, telling you exactly when to stir, add ingredients, or adjust heat. Cook with confidence .
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                        <button className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/30 text-lg">
                            Pre-order Now <ArrowRight size={22} />
                        </button>
                        <a href="#demo" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border border-white/40 hover:bg-white/20 text-slate-800 font-bold py-5 px-10 rounded-full transition-all text-lg shadow-sm">
                            <div className="bg-orange-500 rounded-full p-2 text-white">
                                <Play fill="currentColor" size={14} />
                            </div>
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Hero 3D Device Shot */}
                <div className="flex-1 w-full relative">
                    <div className="relative z-10 group animate-float">
                        {/* Device Shadow */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-slate-900/10 blur-[40px] rounded-full scale-y-[0.2]"></div>

                        <div className="relative rounded-[3rem] p-8 transition-all duration-700 hover:rotate-2 hover:scale-105 perspective-1000 group">
                            <img
                                src="/assets/pantrypilot_transparent.png"
                                alt="PantryPilot 3D Smart Device"
                                className="w-full h-auto object-contain opacity-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
