import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 relative mt-auto">
            {/* Floating Action Buttons */}
            <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">
                <a href="#" className="bg-orange-500 p-4 rounded-full text-white shadow-lg hover:bg-orange-600 transition-all hover:scale-110 flex items-center justify-center">
                    <Phone size={24} />
                </a>
                <a href="#" className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center">
                    <MessageCircle size={24} />
                </a>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <h3 className="text-2xl font-bold text-orange-500 mb-6">PantryPilot.ai</h3>
                    </div>

                    {/* What's up */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2">What's up</h4>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">7-Day Easy Returns</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessories</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Resources</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Retail Partnership</a>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2">Legal</h4>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Payment and Order</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund and Returns</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping and Delivery</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Product T&C</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">POSH Policy</a>
                    </div>

                    {/* Contact us */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2">Contact us</h4>
                        <div className="text-gray-400 text-sm flex flex-col gap-2">
                            <p><span className="text-white font-medium">Call us:</span> +91xxxxxxxxxx</p>
                            <p><span className="text-white font-medium">WhatsApp:</span> +91xxxxxxxxxx</p>
                            <p><span className="text-white font-medium">Email:</span> hi@pantrypilot.ai</p>
                            <div className="mt-4">
                                    {/* <p className="font-medium text-white mb-1">Helpdesk</p>
                                    <p>PantryPilot AI Plot 132,</p>
                                    <p>Brigade Rd, Shanthala</p>
                                    <p>Nagar, Bengaluru</p>
                                    <p>560025</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold mb-2">Social Media</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a> {/* X logo proxy */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()}, PantryPilot.ai. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <a href="#" className="hover:text-white transition-colors">Refund policy</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                        <a href="#" className="hover:text-white transition-colors">Shipping policy</a>
                        <a href="#" className="hover:text-white transition-colors">Contact information</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
