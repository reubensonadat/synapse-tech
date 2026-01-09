"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
    return (
        <Link href={link} className="group block">
            <div className="relative h-full bg-white dark:bg-synapse-slate border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-synapse-main/50 dark:hover:border-synapse-main/50 transition-all duration-300 hover:shadow-xl hover:shadow-synapse-main/10">

                {/* Icon with hover animation */}
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="w-10 h-10 text-synapse-main mb-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-heading mb-3 text-black dark:text-white group-hover:text-synapse-main dark:group-hover:text-synapse-main transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-synapse-gray dark:text-gray-400 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Learn More link with arrow */}
                <div className="inline-flex items-center gap-2 text-synapse-main font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                        →
                    </motion.span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-synapse-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </Link>
    );
}
