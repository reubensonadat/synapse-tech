"use client";

import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import { CodeBracketIcon, PencilSquareIcon, SwatchIcon, PresentationChartLineIcon, Cog6ToothIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';

export default function ServicesPage() {
    const services = [
        {
            id: 'website-development',
            icon: CodeBracketIcon,
            title: 'Website Development',
            description: 'Custom websites built with modern technologies to ensure fast loading, responsive design, and excellent user experiences.',
        },
        {
            id: 'content-creation',
            icon: PencilSquareIcon,
            title: 'Content Creation',
            description: 'Short-form video, brand photography, and social assets for businesses to grow their online presence (Brand-focused, not influencer content).',
        },
        {
            id: 'graphic-design',
            icon: SwatchIcon,
            title: 'Graphic Design',
            description: 'Brand graphics, banners, and promotional assets that elevate your brand identity.',
        },
        {
            id: 'powerpoint-presentations',
            icon: PresentationChartLineIcon,
            title: 'PowerPoint Presentations',
            description: 'High-quality branded pitch decks and presentations that communicate your vision clearly.',
        },
        {
            id: 'website-maintenance',
            icon: Cog6ToothIcon,
            title: 'Website Maintenance',
            description: 'Keep your website fast, secure, and updated with our ongoing maintenance services.',
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">

                    {/* Background Layer: Enhanced Gradients */}
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        {/* Light Mode: Sky -> Indigo -> Purple */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />

                        {/* Dark Mode: Deep Slate -> Midnight -> Rich Violet */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
                    </div>

                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #7c3aed45 1px, transparent 1px),
                                linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)
                            `,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    {/* Ambient Glow Spots */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

                    {/* Content Container */}
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        {/* Badge / Pill */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-purple-200 dark:border-white/10 backdrop-blur-sm mb-8 shadow-sm transition-all duration-300 hover:scale-105 cursor-default"
                            variants={fadeInDown}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-wide uppercase text-purple-700 dark:text-purple-300">
                                Studio Services
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 transition-colors duration-300"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Your Digital Presence
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 dark:text-slate-400 text-slate-600"
                            variants={fadeInUp}
                        >
                            We provide a full range of creative and technical services tailored to meet your brand&apos;s goals.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Services Grid */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={stagger}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    variants={scaleIn}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        href={`/studio/services/${service.id}`}
                                        className="group relative block h-full bg-white dark:bg-synapse-slate border-2 border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:border-synapse-main/50 dark:hover:border-synapse-main/50 transition-all duration-300 hover:shadow-2xl hover:shadow-synapse-main/20"
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="w-12 h-12 text-synapse-main mb-6 group-hover:scale-110 transition-transform duration-300" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-synapse-main transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-synapse-gray dark:text-gray-400 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="inline-flex items-center gap-2 text-synapse-main font-medium group-hover:gap-3 transition-all group-hover:text-synapse-glow">
                                            Learn More
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </div>

                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-synapse-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>

            <StudioFooter />
        </div>
    );
}
