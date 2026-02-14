import { Shield, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black-charcoal border-t border-gold/20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-8 h-8 text-gold" />
                            <span className="text-xl font-heading font-bold text-white tracking-wider">
                                ALL AROUND <span className="text-gold">PROTECTION</span>
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-xs">
                            Professional security and debt collection services. No win, no fee. Badged official operatives.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Services</h3>
                        <ul className="space-y-3">
                            {['Bodyguards', 'Debt Collection', 'Car Repossessions', 'Evictions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-gold" />
                                <a href="mailto:allaroundprotection666@gmail.com" className="hover:text-gold transition-colors">
                                    allaroundprotection666@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-gold" />
                                <span>Available 24/7 for emergencies</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} All Around Protection. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
