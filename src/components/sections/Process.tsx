import { motion } from 'framer-motion';
import { Phone, FileSearch, ShieldAlert, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: Phone,
        title: 'Initial Consultation',
        description: 'Immediate assessment of your situation. We discuss your specific security or debt recovery needs in strict confidence.'
    },
    {
        icon: FileSearch,
        title: 'Strategy & Intelligence',
        description: 'Our team formulates a bespoke operational plan, conducting necessary reconnaissance and risk assessments.'
    },
    {
        icon: ShieldAlert,
        title: 'Deployment',
        description: 'Rapid deployment of licensed operatives. We execute the agreed strategy with precision and professional force.'
    },
    {
        icon: CheckCircle2,
        title: 'Resolution',
        description: 'Successful conclusion of the task. Assets secured, debts recovered, or safety guaranteed. Complete case reporting.'
    }
];

export const Process = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2 hidden lg:block" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white mb-4">
                        How We <span className="text-gold">Operate</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A proven, strategic approach to every deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Number Background */}
                            <span className="absolute -top-10 text-[120px] font-black text-white/5 select-none leading-none">
                                0{index + 1}
                            </span>

                            <div className="w-20 h-20 bg-black-charcoal rounded-full border-2 border-gold flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:bg-gold transition-colors duration-500">
                                <step.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors duration-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
