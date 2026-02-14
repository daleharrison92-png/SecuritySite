import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const LeadForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        service: '',
        details: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        alert('Thank you! This is a demo form. In a real application, your request would be processed immediately.');
    };

    return (
        <section id="contact" className="py-24 bg-black-charcoal relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-12 transform translate-x-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white leading-tight">
                            Don't Wait Until It's <span className="text-gold">Too Late</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you need urgent close protection, have a debt that needs collecting, or require premises security, our team is ready to deploy.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl uppercase mb-1">Licensed & Insured</h4>
                                    <p className="text-gray-400">All operatives are fully licensed and our operations are completely insured.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl uppercase mb-1">Rapid Response</h4>
                                    <p className="text-gray-400">Teams available for immediate deployment across the UK.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-black p-8 md:p-10 border border-gold/30 rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                    >
                        <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold text-white uppercase mb-2">Get A Free Quote</h3>
                            <p className="text-gold text-sm font-bold uppercase tracking-wider">Confidential & Secure</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                placeholder="Full Name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Phone Number"
                                type="tel"
                                value={formState.phone}
                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                required
                            />

                            <div className="space-y-2">
                                <select
                                    className="w-full bg-black-rich border border-gold/30 rounded-sm p-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 appearance-none"
                                    value={formState.service}
                                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                    required
                                >
                                    <option value="" disabled>Select Service Needed</option>
                                    <option value="security">Close Protection / Security</option>
                                    <option value="debt">Debt Collection</option>
                                    <option value="eviction">Eviction Service</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    className="w-full bg-black-rich border border-gold/30 rounded-sm p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 min-h-[100px]"
                                    placeholder="Brief details of your requirements..."
                                    value={formState.details}
                                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                                ></textarea>
                            </div>

                            <Button fullWidth size="lg">
                                Request Callback
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
