
import { Card } from '../ui/Card';
import { Shield, Coins, Car, Users, Lock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Shield,
        title: 'Bodyguards & CP',
        description: 'Elite close protection services for high-net-worth individuals, executives, and VIPs including residential security.'
    },
    {
        icon: Coins,
        title: 'Debt Collection',
        description: 'Professional "No Win No Fee" debt recovery. We handle the difficult conversations so you get paid.'
    },
    {
        icon: Car,
        title: 'Vehicle Repossession',
        description: 'Fast and legal asset recovery services. We locate and secure your vehicle assets efficiently.'
    },
    {
        icon: Users,
        title: 'Evictions',
        description: 'Expert squatter eviction and tenant removal services, handling all legal protocols and enforcement.'
    },
    {
        icon: Lock,
        title: 'Security Premises',
        description: 'Comprehensive security for homes and businesses. Door staff, static guards, and patrol services.'
    },
    {
        icon: Eye,
        title: 'CCTV Operatives',
        description: 'Professional surveillance monitoring to protect your assets and provide 24/7 peace of mind.'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white">
                        Our <span className="text-gold">Services</span>
                    </h2>
                    <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive security and enforcement solutions tailored to your unique requirements.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={item} className="h-full">
                            <Card className="h-full flex flex-col group hover:bg-white/5 transition-colors">
                                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold group-hover:bg-gold transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
