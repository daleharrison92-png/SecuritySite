import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-bold text-gold uppercase tracking-wider">
                        {label}
                    </label>
                )}
                <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                >
                    <input
                        ref={ref}
                        className={cn(
                            "w-full bg-black-rich border border-gold/30 rounded-sm p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300",
                            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
                            className
                        )}
                        {...props}
                    />
                </motion.div>
                {error && (
                    <p className="text-red-500 text-xs mt-1">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
