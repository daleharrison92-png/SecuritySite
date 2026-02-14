import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 15, suffix: 'M+', label: 'Debt Recovered (£)', duration: 2 },
    { value: 500, suffix: '+', label: 'Clients Protected', duration: 2.5 },
    { value: 100, suffix: '%', label: 'Success Rate*', duration: 2 },
    { value: 24, suffix: '/7', label: 'Rapid Response', duration: 1.5 },
];

const Counter = ({ value, suffix, duration }: { value: number, suffix: string, duration: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const totalDuration = duration * 1000;
            const incrementTime = totalDuration / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export const Stats = () => {
    return (
        <section className="py-20 bg-black-charcoal border-y border-gold/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="space-y-2"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gold">
                                <Counter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8 text-gray-600 text-xs uppercase tracking-wider">
                    * On all accepted cases
                </div>
            </div>
        </section>
    );
};
