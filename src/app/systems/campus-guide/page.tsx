"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';
import { IconMapPin, IconCalendar, IconCalculator, IconBookOpen, IconBuilding, IconSupport, IconArrowLeft, IconArrowRight, IconExternalLink, IconCampusGuide } from '@/components/icons/SystemsIcons';

const features = [
    { Icon: IconMapPin, title: 'Interactive Campus Map', description: 'Navigate campus with ease. Find buildings, lecture halls, and facilities instantly.' },
    { Icon: IconCalendar, title: 'Timetable Builder', description: 'Create and manage your class schedule effortlessly. Never miss a lecture again.' },
    { Icon: IconCalculator, title: 'GPA Calculator', description: 'Track your grades and calculate your GPA instantly. Monitor academic progress.' },
    { Icon: IconBookOpen, title: 'Registration Guides', description: 'Step-by-step course registration and enrollment help. From admission to matriculation.' },
    { Icon: IconBuilding, title: 'Contact Directory', description: 'Quick access to university departments, faculty offices, and essential services.' },
    { Icon: IconSupport, title: '24/7 Support', description: 'Always-on resources and support to help you succeed throughout your academic journey.' },
];

const techStack = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Cloudflare Pages',
    'Framer Motion',
];

export default function CampusGuidePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">

                {/* ==================== HERO SECTION ==================== */}
                <section className="relative w-full py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-200" />

                    {/* Ambient Glow */}
                    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                        >
                            {/* Badge */}
                            <SectionBadge title="Live" variant="success" />

                            {/* Logo */}
                            <motion.div className="w-20 h-20 md:w-32 md:h-32 mb-6" variants={scaleIn}>
                                <img
                                    src="/campusguidelogo.png"
                                    alt="Campus Guide Logo"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-4"
                                variants={fadeInUp}
                            >
                                <span className="text-blue-600">Campus Guide</span>
                            </motion.h1>

                            {/* Tagline */}
                            <motion.p
                                className="text-xl md:text-2xl text-slate-600 dark:text-[#A1A1AA] mb-6"
                                variants={fadeInUp}
                            >
                                Your Essential Campus Companion
                            </motion.p>

                            {/* Description */}
                            <motion.p
                                className="text-lg max-w-3xl leading-relaxed text-slate-600 dark:text-[#A1A1AA] mb-10"
                                variants={fadeInUp}
                            >
                                Everything UCC students need to navigate university life. From academic guides to essential tools,
                                Campus Guide puts the entire university at your fingertips.
                            </motion.p>

                            {/* CTA */}
                            <motion.div variants={fadeInUp}>
                                <a
                                    href="https://campusguide.pages.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 group"
                                >
                                    Launch Campus Guide
                                    <div className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><IconExternalLink /></div>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== BACK LINK ==================== */}
                <div className="max-w-5xl mx-auto px-6 py-6">
                    <Link
                        href="/systems/impact"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-[#A1A1AA] hover:text-blue-600 transition-colors"
                    >
                        <div className="w-4 h-4"><IconArrowLeft /></div>
                        Back to All Systems
                    </Link>
                </div>

                {/* ==================== STATS ==================== */}
                <section className="py-12 bg-white dark:bg-[#151521]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.div variants={scaleIn}>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">20,000+</p>
                                <p className="text-sm text-slate-500 dark:text-[#A1A1AA] uppercase tracking-wider mt-1">Students Reached</p>
                            </motion.div>
                            <motion.div variants={scaleIn}>
                                <p className="text-3xl md:text-4xl font-bold text-blue-600">1</p>
                                <p className="text-sm text-slate-500 dark:text-[#A1A1AA] uppercase tracking-wider mt-1">Semester</p>
                            </motion.div>
                            <motion.div variants={scaleIn}>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">10%</p>
                                <p className="text-sm text-slate-500 dark:text-[#A1A1AA] uppercase tracking-wider mt-1">Paid Conversion</p>
                            </motion.div>
                            <motion.div variants={scaleIn}>
                                <p className="text-3xl md:text-4xl font-bold text-blue-600">#1</p>
                                <p className="text-sm text-slate-500 dark:text-[#A1A1AA] uppercase tracking-wider mt-1">Campus App</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== PROBLEM ==================== */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4" variants={fadeInUp}>
                                The Problem
                            </motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6" variants={fadeInUp}>
                                Freshmen Are Lost
                            </motion.h2>
                            <motion.div className="prose prose-lg dark:prose-invert max-w-none" variants={fadeInUp}>
                                <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed">
                                    Every semester, thousands of new students arrive at UCC with no idea how to navigate campus life.
                                    Where is the registrar&apos;s office? How do I register for courses? What&apos;s my GPA? Who do I contact
                                    for accommodation issues?
                                </p>
                                <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed mt-4">
                                    Information is scattered across outdated websites, WhatsApp groups, and word of mouth.
                                    Students waste hours trying to find basic information, leading to missed deadlines,
                                    wrong course selections, and unnecessary stress.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== SOLUTION ==================== */}
                <section className="py-20 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4" variants={fadeInUp}>
                                The Solution
                            </motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6" variants={fadeInUp}>
                                One App. Everything You Need.
                            </motion.h2>
                            <motion.div className="prose prose-lg dark:prose-invert max-w-none" variants={fadeInUp}>
                                <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed">
                                    Campus Guide consolidates everything into a single, beautifully designed progressive web app.
                                    From interactive campus maps to GPA calculators, from registration guides to contact directories —
                                    it&apos;s all here.
                                </p>
                                <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed mt-4">
                                    No downloads required. Works offline. Always updated. And designed specifically for UCC students,
                                    by people who understand the campus.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== FEATURES ==================== */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4 text-center" variants={fadeInUp}>
                                Features
                            </motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center" variants={fadeInUp}>
                                Everything In One Place
                            </motion.h2>

                            <motion.div
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={stagger}
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-slate-50 dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all"
                                        variants={scaleIn}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <feature.Icon />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== TECH STACK ==================== */}
                <section className="py-16 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4" variants={fadeInUp}>
                                Built With
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap justify-center gap-3 mt-6"
                                variants={fadeInUp}
                            >
                                {techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white dark:bg-[#0B0B0F] border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-[#A1A1AA]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== CTA ==================== */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
                                variants={fadeInUp}
                            >
                                Ready to explore?
                            </motion.h2>
                            <motion.p
                                className="text-lg text-slate-600 dark:text-[#A1A1AA] mb-10"
                                variants={fadeInUp}
                            >
                                Join 20,000+ UCC students already using Campus Guide.
                            </motion.p>
                            <motion.div className="flex flex-wrap gap-4 justify-center" variants={fadeInUp}>
                                <a
                                    href="https://campusguide.pages.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 group"
                                >
                                    Launch Campus Guide
                                    <div className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><IconExternalLink /></div>
                                </a>
                                <Link
                                    href="/studio/contact?source=campus-guide"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
                                >
                                    Build Something Similar
                                    <div className="w-5 h-5"><IconArrowRight /></div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* ==================== FOOTER ==================== */}
            <SystemsFooter />
        </div>
    );
}
