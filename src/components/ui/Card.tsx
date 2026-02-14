import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
    children?: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={cn(
                "bg-black-charcoal p-8 border border-white/10 relative overflow-hidden group rounded-sm shadow-xl",
                className
            )}
            {...props}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.15), transparent 40%)`,
                }}
            />
            {/* Border Glow */}
            <div
                className="absolute inset-0 rounded-sm pointer-events-none transition duration-500 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.4), transparent 40%)`,
                    zIndex: -1,
                    margin: '-1px'
                }}
            />

            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px] group-hover:bg-gold/10 transition-all duration-700" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

