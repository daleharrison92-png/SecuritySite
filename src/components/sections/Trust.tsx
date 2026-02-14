import { CheckCircle2 } from 'lucide-react';

export const Trust = () => {
    const features = [
        "SIA Licensed Operatives",
        "Fully Insured Services",
        "Nationwide Coverage",
        "24/7 Rapid Response",
        "No Win No Fee Recovery",
        "Discreet & Confidential"
    ];

    return (
        <section className="py-20 bg-gold relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-black opacity-10 pattern-grid-lg" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-black mb-12">
                        Why Choose All Around Protection?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 bg-black/5 p-4 rounded-sm border border-black/10">
                                <CheckCircle2 className="w-6 h-6 text-black" />
                                <span className="font-bold text-black uppercase text-sm tracking-wide text-left">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
