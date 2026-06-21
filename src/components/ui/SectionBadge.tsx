"use client";

import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animations";

interface SectionBadgeProps {
    title: string;
    variant?: 'studio' | 'systems' | 'neutral' | 'success' | 'warning';
    className?: string;
    animated?: boolean;
    withDot?: boolean;
}

/**
 * SectionBadge — the consistent eyebrow label used across every section.
 *
 * Anti-slop fix: previously tracking jumped between 0.2em / 0.3em / "wide".
 * Now every eyebrow uses one deliberate tracking (0.28em) + a pulsing brand
 * dot indicator for the premium "live" feel.
 */
export default function SectionBadge({
    title,
    variant = 'neutral',
    className = "",
    animated = false,
    withDot = true
}: SectionBadgeProps) {
    const dotColor = {
        studio: "bg-primary-glow",
        systems: "bg-systems-glow",
        neutral: "bg-muted-foreground",
        success: "bg-success",
        warning: "bg-warning",
    }[variant];

    const textColor = {
        studio: "text-primary",
        systems: "text-systems",
        neutral: "text-muted-foreground",
        success: "text-success",
        warning: "text-warning",
    }[variant];

    return (
        <motion.div
            className={`inline-flex items-center gap-2.5 mb-6 ${className}`}
            initial={animated ? "hidden" : "visible"}
            animate="visible"
            variants={animated ? fadeInDown : {}}
        >
            {withDot && (
                <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${dotColor}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
                </span>
            )}
            <span className={`text-xs md:text-[13px] font-bold tracking-[0.28em] uppercase ${textColor}`}>
                {title}
            </span>
        </motion.div>
    );
}
