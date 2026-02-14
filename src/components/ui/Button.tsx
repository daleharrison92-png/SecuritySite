import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-gold text-black hover:bg-gold-light shadow-[0_0_15px_rgba(212,175,55,0.3)] border-2 border-transparent',
            outline: 'bg-transparent border-2 border-gold text-gold hover:bg-gold/10',
            ghost: 'bg-transparent text-white hover:text-gold hover:bg-white/5',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'font-bold uppercase tracking-wider transition-all duration-300 rounded-sm flex items-center justify-center gap-2',
                    variants[variant],
                    sizes[size],
                    fullWidth ? 'w-full' : '',
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
