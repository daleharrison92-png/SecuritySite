import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Shield className="w-8 h-8 text-gold" />
                    <span className="text-xl font-heading font-bold text-white tracking-wider">
                        ALL AROUND <span className="text-gold">PROTECTION</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <Button variant="outline" size="sm" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Get Quote
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black-charcoal border-b border-gold/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-gold font-bold uppercase tracking-wider py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button fullWidth>Get a Quote</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
