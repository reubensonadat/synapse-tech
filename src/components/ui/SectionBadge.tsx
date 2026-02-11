"use client";

import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animations";

interface SectionBadgeProps {
    title: string;
    variant?: 'studio' | 'systems' | 'neutral' | 'success' | 'warning';
    className?: string;
}

export default function SectionBadge({ title, variant = 'neutral', className = "" }: SectionBadgeProps) {
    const variants = {
        studio: "from-purple-400 to-indigo-400 text-purple-600 dark:text-purple-400",
        systems: "from-blue-400 to-cyan-400 text-blue-600 dark:text-blue-400",
        neutral: "from-slate-400 to-gray-400 text-slate-600 dark:text-slate-400",
        success: "from-green-400 to-emerald-400 text-green-600 dark:text-green-400",
        warning: "from-amber-400 to-orange-400 text-amber-600 dark:text-amber-400"
    };

    const colorClass = variants[variant];

    return (
        <motion.div
            className={`inline-flex items-center gap-2 mb-6 ${className}`}
            variants={fadeInDown}
        >
            {/* Tech Slash Decoration */}
            <span className={`text-lg font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent opacity-80`}>
                //
            </span>

            {/* Title */}
            <span className={`text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                {title}
            </span>
        </motion.div>
    );
}
