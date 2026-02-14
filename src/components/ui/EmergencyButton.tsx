import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export const EmergencyButton = () => {
    return (
        <motion.a
            href="tel:0800000000" // Replace with actual number
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-red-700 text-white pl-4 pr-2 py-2 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] border-2 border-white/20 cursor-pointer overflow-hidden group hover:bg-red-600 transition-colors"
        >
            <div className="flex flex-col items-start leading-none group-hover:mr-1 transition-all">
                <span className="text-[10px] uppercase font-bold text-red-200">Emergency?</span>
                <span className="font-bold text-sm">24/7 Rapid Response</span>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full animate-ping bg-red-500/20 -z-10" />
        </motion.a>
    );
};
