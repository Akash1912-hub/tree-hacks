import { User, Mail, Phone, MessageSquare, Utensils } from 'lucide-react'

export default function Preorder() {
    return (
        <section id="waitlist" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Join the <span className="text-orange-500">Waitlist</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Want to start cooking smarter? Fill the form. Click join. Let's cook.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Name Input */}
                            <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all hover:border-slate-300">
                                <div className="bg-slate-50 px-4 flex items-center justify-center border-r border-slate-200 min-w-[60px]">
                                    <User className="text-slate-400" size={20} />
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-4 outline-none placeholder:text-slate-400 text-slate-700"
                                    placeholder="Name*"
                                    required
                                />
                            </div>

                            {/* Phone Input (Replacing 'Company' from ref) */}
                            <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all hover:border-slate-300">
                                <div className="bg-slate-50 px-4 flex items-center justify-center border-r border-slate-200 min-w-[60px]">
                                    <Phone className="text-slate-400" size={20} />
                                </div>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-4 outline-none placeholder:text-slate-400 text-slate-700"
                                    placeholder="Phone"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all hover:border-slate-300">
                                <div className="bg-slate-50 px-4 flex items-center justify-center border-r border-slate-200 min-w-[60px]">
                                    <Mail className="text-slate-400" size={20} />
                                </div>
                                <input
                                    type="email"
                                    className="w-full px-4 py-4 outline-none placeholder:text-slate-400 text-slate-700"
                                    placeholder="Email Address*"
                                    required
                                />
                            </div>

                            {/* Preferences Input (Replacing 'Phone' duplicate if needed, or keeping structure) */}
                            <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all hover:border-slate-300">
                                <div className="bg-slate-50 px-4 flex items-center justify-center border-r border-slate-200 min-w-[60px]">
                                    <Utensils className="text-slate-400" size={20} />
                                </div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-4 outline-none placeholder:text-slate-400 text-slate-700"
                                    placeholder="Favorite Cuisine (Optional)"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all hover:border-slate-300">
                            <div className="bg-slate-50 px-4 pt-4 border-r border-slate-200 min-w-[60px]">
                                <MessageSquare className="text-slate-400" size={20} />
                            </div>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-4 outline-none placeholder:text-slate-400 text-slate-700 resize-none h-40"
                                placeholder="Any specific dietary requirements or messages?"
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-orange-600/20 active:scale-[0.98] transition-all text-lg"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
