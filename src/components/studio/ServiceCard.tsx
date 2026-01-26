"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    link: string;
    pricingLink?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link, pricingLink }: ServiceCardProps) {
    return (
        <div className="relative h-full bg-white dark:bg-synapse-slate border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-synapse-main/50 dark:hover:border-synapse-main/50 transition-all duration-300 hover:shadow-xl hover:shadow-synapse-main/10">

            {/* Icon with hover animation */}
            <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <Icon className="w-10 h-10 text-synapse-main mb-4" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold font-heading mb-3 text-black dark:text-white">
                {title}
            </h3>

            {/* Description */}
            <p className="text-synapse-gray dark:text-gray-400 leading-relaxed mb-4">
                {description}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
                {/* Learn More link with arrow */}
                <Link href={link} className="inline-flex items-center gap-2 text-synapse-main font-medium text-sm hover:gap-3 transition-all group">
                    Learn More
                    <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                        →
                    </motion.span>
                </Link>

                {/* View Prices link */}
                {pricingLink && (
                    <Link
                        href={pricingLink}
                        className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-synapse-main dark:hover:text-synapse-main font-medium text-sm transition-colors"
                    >
                        View Prices
                    </Link>
                )}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-synapse-main/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
}

