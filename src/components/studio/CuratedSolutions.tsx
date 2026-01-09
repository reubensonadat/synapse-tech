"use client";

import ServiceCard from './ServiceCard';
import { CodeBracketIcon, SwatchIcon, PencilSquareIcon, PresentationChartLineIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, viewportOnce } from '@/lib/animations';

export default function CuratedSolutions() {
    const services = [
        {
            icon: CodeBracketIcon,
            title: 'Website Development',
            description: 'We design, develop, and launch fast, responsive websites that convert visitors into loyal customers and drive real business results.',
            link: '/studio/services/website-development'
        },
        {
            icon: PencilSquareIcon,
            title: 'Content Creation',
            description: 'Short-form video, brand photography, and social assets for businesses to grow their online presence (Brand-focused, not influencer content).',
            link: '/studio/services/content-creation'
        },
        {
            icon: SwatchIcon,
            title: 'Graphic Design',
            description: 'Brand graphics, banners, and promotional assets that elevate your brand identity (GH₵100 per design).',
            link: '/studio/services/graphic-design'
        },
        {
            icon: PresentationChartLineIcon,
            title: 'PowerPoint Presentations',
            description: 'High-quality branded presentations that communicate your vision clearly and help you win deals and secure funding.',
            link: '/studio/services/powerpoint-presentations'
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-synapse-black/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="flex items-end justify-between mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="text-sm text-synapse-gray uppercase tracking-wide mb-2">
                            Our Expertise
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-black dark:text-white">
                            Curated Solutions
                        </h2>
                        <p className="text-lg text-synapse-gray mt-4 max-w-2xl">
                            We don't use cookie-cutter templates. Our services are tailored to fit your unique
                            needs and business goals.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/studio/services"
                            className="hidden md:inline-flex items-center gap-2 text-synapse-main font-medium hover:gap-3 transition-all group"
                        >
                            See all solutions
                            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile "See all" link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/studio/services"
                        className="md:hidden inline-flex items-center gap-2 text-synapse-main font-medium hover:gap-3 transition-all mt-8 group"
                    >
                        See all solutions
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
