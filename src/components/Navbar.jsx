import { Menu, Search, User, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 h-20 flex items-center">
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center h-full">
                {/* Logo */}
                <a href="#" className="text-2xl font-extrabold text-orange-500 tracking-tight hover:text-orange-600 transition-colors">
                    PantryPilot
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 font-semibold text-slate-700 text-sm">
                        <li><a href="#home" className="hover:text-orange-500 transition-colors">Our Product</a></li>
                        <li><a href="#demo" className="hover:text-orange-500 transition-colors">How it Works</a></li>
                        <li><a href="#about" className="hover:text-orange-500 transition-colors">Mission</a></li>
                        <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
                    </ul>

                    <div className="flex gap-6 text-slate-600 items-center border-l pl-6 border-slate-200">
                        <button className="hover:text-orange-500 transition-colors"><Search size={20} /></button>
                        <button className="hover:text-orange-500 transition-colors"><User size={20} /></button>
                        <button className="hover:text-orange-500 transition-colors"><ShoppingCart size={20} /></button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-700 hover:text-orange-500 transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-2">
                    <a href="#home" className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>Our Product</a>
                    <a href="#demo" className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>How it Works</a>
                    <a href="#about" className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>Mission</a>
                    <a href="#contact" className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    )
}
