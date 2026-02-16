import { useState } from 'react'

export default function Demo() {
    const steps = [
        {
            id: "01",
            title: "Scan Your Pantry",
            desc: "Point your camera at your fridge or shelves. PantryPilot instantly identifies ingredients you already have using advanced computer vision."
        },
        {
            id: "02",
            title: "Get Matched Recipes",
            desc: "Our AI generates instant recipe ideas based on what’s available, helping you use up ingredients before they spoil."
        },
        {
            id: "03",
            title: "Cook & Enjoy",
            desc: "Follow simple, personalized guides. Save time, reduce waste, and discover new favorites without a grocery run."
        }
    ]

    const [activeStep, setActiveStep] = useState(0)

    return (
        <section id="demo" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How It Works</h2>
                    <p className="text-xl text-slate-500 font-medium">From setup to serving, we guide you every step of the way.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Video Container */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-video">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                poster="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            >
                                <source src="/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-slate-500"> Watch the full walkthrough</p>
                    </div>

                    {/* Simple Text Steps */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative pl-6 border-l-2 border-slate-200 hover:border-orange-500 transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
