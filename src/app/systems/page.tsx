"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import { IconMapPin, IconCalendar, IconCalculator, IconBookOpen, IconBuilding, IconSupport, IconArrowRight, IconExternalLink, IconCampusGuide, IconHostelConnect, IconScholasticShield, IconRoommateLink, IconJobPulse } from '@/components/icons/SystemsIcons';
import SectionBadge from '@/components/ui/SectionBadge';

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const end = target;
                    const incrementTime = (duration * 1000) / end;
                    const timer = setInterval(() => {
                        start += Math.ceil(end / 50);
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, incrementTime);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration, hasAnimated]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function SystemsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* ==================== HERO SECTION ==================== */}
                {/* ==================== HERO SECTION ==================== */}
                <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-200" />

                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] opacity-[0.15] dark:opacity-[0.08]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #2563EB 1px, transparent 1px),
                                linear-gradient(to bottom, #2563EB 1px, transparent 1px)
                            `,
                            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    {/* Ambient Glow */}
                    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

                    {/* Content */}
                    <motion.div
                        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <SectionBadge title="Systems" variant="systems" animated={true} />

                        {/* Headline */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-10 leading-tight"
                            variants={fadeInUp}
                        >
                            <span className="text-slate-900 dark:text-white">We don&apos;t build software.</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">We build systems.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-[#A1A1AA] mb-12"
                            variants={fadeInUp}
                        >
                            We architect proprietary solutions that solve real problems, impact thousands, and generate revenue.
                        </motion.p>

                        {/* CTAs - View Impact is PRIMARY */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center"
                            variants={fadeInUp}
                        >
                            <Link
                                href="/systems/impact"
                                className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 group"
                            >
                                View Impact
                                <div className="w-4 h-4 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
                            </Link>
                            <Link
                                href="https://campusguide.pages.dev"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600/10 transition-all group"
                            >
                                Explore Campus Guide
                                <div className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><IconExternalLink /></div>
                            </Link>
                        </motion.div>

                    </motion.div>
                </section>

                {/* ==================== CAMPUS GUIDE: THE FLAGSHIP ==================== */}
                <section className="relative py-32 bg-slate-100 dark:bg-[#0B0B0F] overflow-hidden transition-colors duration-200">
                    {/* Subtle divider line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-600/50 to-transparent" />

                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={stagger}
                        >
                            {/* Section Label */}
                            <motion.div
                                className="text-center mb-16"
                                variants={fadeInUp}
                            >
                                <motion.div className="w-20 h-20 mx-auto mb-6 rounded-2xl" variants={scaleIn}>
                                    <img src='/campusguidelogo.png' />
                                </motion.div>
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">Featured System</p>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Campus Guide</h2>
                                <p className="text-slate-600 dark:text-[#A1A1AA] max-w-2xl mx-auto text-lg">
                                    Your essential campus companion. Everything UCC students need to navigate university life.
                                </p>
                            </motion.div>

                            {/* Stats Row - Updated metrics */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                                variants={fadeInUp}
                            >
                                <div className="bg-white dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                                    <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                                        <AnimatedCounter target={20000} suffix="+" />
                                    </p>
                                    <p className="text-slate-500 dark:text-[#A1A1AA] text-sm uppercase tracking-wider">Students Reached</p>
                                </div>
                                <div className="bg-white dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                                    <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1</p>
                                    <p className="text-slate-500 dark:text-[#A1A1AA] text-sm uppercase tracking-wider">Semester</p>
                                </div>
                                <div className="bg-white dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                                    <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                                        <AnimatedCounter target={10} suffix="%" />
                                    </p>
                                    <p className="text-slate-500 dark:text-[#A1A1AA] text-sm uppercase tracking-wider">Paid Conversion</p>
                                </div>
                                <div className="bg-white dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 text-center shadow-sm">
                                    <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">#1</p>
                                    <p className="text-slate-500 dark:text-[#A1A1AA] text-sm uppercase tracking-wider">Campus App</p>
                                </div>
                            </motion.div>

                            {/* Features Grid */}
                            <motion.div
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                                variants={stagger}
                            >
                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconMapPin />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Interactive Campus Map</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Navigate campus with ease. Find buildings, lecture halls, and facilities instantly.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconCalendar />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Timetable Builder</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Create and manage your class schedule effortlessly. Never miss a lecture again.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconCalculator />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">GPA Calculator</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Track your grades and calculate your GPA instantly. Monitor academic progress.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconBookOpen />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Registration Guides</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Step-by-step course registration and enrollment help. From admission to matriculation.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconBuilding />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Contact Directory</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Quick access to university departments, faculty offices, and essential services.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-white dark:bg-[#151521] rounded-2xl p-10 border border-slate-200 dark:border-white/5 group hover:border-blue-600/30 transition-all shadow-sm"
                                    variants={scaleIn}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconSupport />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">24/7 Support</h3>
                                    <p className="text-slate-600 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                        Always-on resources and support to help you succeed throughout your academic journey.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                className="text-center"
                                variants={fadeInUp}
                            >
                                <Link
                                    href="https://campusguide.pages.dev"
                                    target="_blank"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 text-lg group"
                                >
                                    Launch Campus Guide
                                    <div className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><IconExternalLink /></div>
                                </Link>
                                <p className="text-slate-500 dark:text-[#A1A1AA] text-sm mt-4">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Available Now
                                    </span>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== MORE SYSTEMS ==================== */}
                <section className="relative py-20 bg-white dark:bg-[#151521]/50 overflow-hidden transition-colors duration-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">Expanding Ecosystem</p>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">More Systems</h2>
                                <p className="text-slate-600 dark:text-[#A1A1AA] max-w-2xl mx-auto text-lg">
                                    Specialized solutions powering specific sectors of campus life and beyond.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    id: 'hostel-connect',
                                    name: 'Hostel Connect',
                                    icon: IconHostelConnect,
                                    link: '/systems/hostel-connect',
                                    desc: 'Accommodation management.'
                                },
                                {
                                    id: 'scholastic-shield',
                                    name: 'Scholastic Shield',
                                    icon: IconScholasticShield,
                                    link: '/systems/scholastic-shield',
                                    desc: 'Campus security & safety.'
                                },
                                {
                                    id: 'roommate-link',
                                    name: 'Roommate Link',
                                    icon: IconRoommateLink,
                                    link: '/systems/roommate-link',
                                    desc: 'Find your perfect roommate.'
                                },
                                {
                                    id: 'job-pulse',
                                    name: 'Job Pulse',
                                    icon: IconJobPulse,
                                    link: '/systems/job-pulse',
                                    desc: 'Student career opportunities.'
                                }
                            ].map((system, index) => (
                                <motion.div
                                    key={system.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={scaleIn}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link href={system.link} className="block h-full">
                                        <div className="h-full bg-slate-50 dark:bg-[#0B0B0F] rounded-2xl p-6 border border-slate-200 dark:border-white/5 hover:border-blue-600/40 hover:shadow-lg hover:shadow-blue-600/10 transition-all group">
                                            <div className="w-14 h-14 mb-6 rounded-xl bg-white dark:bg-white/5 p-2 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform">
                                                <system.icon />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                                {system.name}
                                            </h3>
                                            <p className="text-slate-500 dark:text-[#A1A1AA] text-sm leading-relaxed">
                                                {system.desc}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== CTA SECTION ==================== */}
                <section className="relative py-24 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-200">
                    {/* Ambient glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 mb-8"
                                variants={scaleIn}
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
                                variants={fadeInUp}
                            >
                                Build the future with us.
                            </motion.h2>

                            <motion.p
                                className="text-lg text-slate-600 dark:text-[#A1A1AA] mb-10 max-w-xl mx-auto"
                                variants={fadeInUp}
                            >
                                The architecture is ready. The nodes are active. We are waiting for your input signal.
                            </motion.p>

                            <motion.div variants={fadeInUp}>
                                <Link
                                    href="/studio/contact?source=systems"
                                    className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 text-lg group"
                                >
                                    Partner With Us
                                    <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <IconArrowRight />
                                    </div>
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
