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

/**
 * ServiceCard — premium boutique card for Studio services.
 * Anti-slop: hover-lift physics, token colors, consistent radius,
 * refined icon treatment (no wiggling arrow loop).
 */
export default function ServiceCard({ icon: Icon, title, description, link, pricingLink }: ServiceCardProps) {
    return (
        <div className="group relative h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover-lift shadow-soft">

            {/* Icon */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex"
            >
                <Icon className="w-10 h-10 text-primary mb-5" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">
                {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-5">
                {description}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
                <Link href={link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/link">
                    Learn More
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                </Link>

                {pricingLink && (
                    <Link
                        href={pricingLink}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium text-sm transition-colors"
                    >
                        View Prices
                    </Link>
                )}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}
