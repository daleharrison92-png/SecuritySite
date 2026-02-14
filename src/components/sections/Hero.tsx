import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.1] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-10" />

                {/* Animated Glow Overlay */}
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 blur-[120px] rounded-full z-10 pointer-events-none"
                />

                {/* Pattern Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-4 relative z-30 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gold/40 bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-2"
                    >
                        <Shield className="w-5 h-5 text-gold animate-pulse" />
                        <span className="text-gold text-sm font-bold uppercase tracking-[0.2em]">Premium Security & Enforcement</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase leading-[0.9] tracking-tighter">
                        <span className="text-white drop-shadow-2xl">Elite</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4CF57] via-[#D4AF37] to-[#B48F17] drop-shadow-sm filter">Protection</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Professional bodyguards, asset protection, and <span className="text-gold font-bold">No Win No Fee</span> debt collection.
                        <br className="hidden md:block" />
                        Badged official operatives available 24/7.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[220px] text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
                            Get Protected Now <ChevronRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[220px] text-lg font-bold backdrop-blur-sm">
                            View All Services
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-gold/80">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
            </motion.div>
        </section>
    );
};
