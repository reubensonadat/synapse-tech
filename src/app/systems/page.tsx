"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { fadeInUp, stagger, viewportOnce } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';
import {
    MapPinIcon,
    CalendarDaysIcon,
    CalculatorIcon,
    BookOpenIcon,
    BuildingOffice2Icon,
    LifebuoyIcon,
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
    ArrowTrendingUpIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import {
    IconCampusGuide,
    IconHostelConnect,
    IconScholasticShield,
    IconRoommateLink,
    IconJobPulse,
    IconRetail,
} from '@/components/icons/SystemsIcons';

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
    const flagshipStats = [
        { value: <AnimatedCounter target={20000} suffix="+" />, label: "Students Reached", accent: false },
        { value: "1", label: "Semester Live", accent: true },
        { value: <AnimatedCounter target={10} suffix="%" />, label: "Paid Conversion", accent: false },
        { value: "#1", label: "Campus App", accent: true },
    ];

    const flagshipFeatures = [
        { icon: MapPinIcon, title: "Interactive Campus Map", desc: "Navigate campus with ease. Find buildings, lecture halls, and facilities instantly." },
        { icon: CalendarDaysIcon, title: "Timetable Builder", desc: "Create and manage your class schedule effortlessly. Never miss a lecture again." },
        { icon: CalculatorIcon, title: "GPA Calculator", desc: "Track grades and calculate your GPA instantly. Monitor academic progress over time." },
        { icon: BookOpenIcon, title: "Registration Guides", desc: "Step-by-step course registration and enrollment help, from admission to matriculation." },
        { icon: BuildingOffice2Icon, title: "Contact Directory", desc: "Quick access to university departments, faculty offices, and essential services." },
        { icon: LifebuoyIcon, title: "24/7 Support", desc: "Always-on resources and support to help you succeed throughout your academic journey." },
    ];

    const productSuite = [
        {
            icon: IconRetail,
            name: "Vendly",
            tag: "B2B Commerce",
            desc: "A multi-tenant point-of-sale & inventory platform for Ghanaian small businesses. Each merchant gets a storefront, product management, order tracking, delivery maps, and analytics.",
            tech: ["React", "Supabase", "Paystack", "R2"],
            link: "/systems/products",
            linkLabel: "Learn more",
            external: false,
        },
        {
            icon: IconRoommateLink,
            name: "Roomate Link",
            tag: "Social Matching",
            desc: "A roommate matching platform for UCC students. Uses a dual-scoring algorithm (70% similarity + 30% preference), real-time chat over WebSocket, and FCM push notifications.",
            tech: ["React 19", "TypeScript", "Supabase", "Firebase"],
            link: "/systems/roommate-link",
            linkLabel: "Learn more",
            external: false,
        },
        {
            icon: IconCampusGuide,
            name: "Campus Guide",
            tag: "Student PWA",
            desc: "A student companion PWA with a widget dashboard, productivity tools (GPA, focus timer, budget), community features, and 12 minigames. Local-first with cloud sync.",
            tech: ["React 18", "Supabase", "Paystack", "OneSignal"],
            link: "https://campusguide.pages.dev",
            linkLabel: "Open app",
            external: true,
        },
    ];

    const moreSystems = [
        { id: 'hostel-connect', name: 'Hostel Connect', icon: IconHostelConnect, link: '/systems/hostel-connect', desc: 'Accommodation management.' },
        { id: 'scholastic-shield', name: 'Scholastic Shield', icon: IconScholasticShield, link: '/systems/scholastic-shield', desc: 'Campus security & safety.' },
        { id: 'roommate-link', name: 'Roommate Link', icon: IconRoommateLink, link: '/systems/roommate-link', desc: 'Find your perfect roommate.' },
        { id: 'job-pulse', name: 'Job Pulse', icon: IconJobPulse, link: '/systems/job-pulse', desc: 'Student career opportunities.' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-200 overflow-hidden">
            <Navbar />

            {/* Background Gradient Blend — same depth system, systems-leaning */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-systems rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
            </div>

            <main className="relative pt-24 z-10">
                {/* ─────────── HERO — left-aligned editorial ─────────── */}
                <section className="px-6 py-20">
                    <div className="max-w-5xl mx-auto">
                        <SectionBadge title="Systems" variant="systems" animated={true} />
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6 mt-6">
                            We don’t build software. <br />
                            <span className="bg-gradient-to-r from-systems to-primary bg-clip-text text-transparent">We build systems.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                            We architect proprietary solutions that solve real problems, impact thousands, and
                            generate revenue. Not demos — production platforms serving real users every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/systems/impact"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-systems text-white font-semibold rounded-xl hover:bg-systems/90 transition-all shadow-lg shadow-systems/25"
                            >
                                View Impact
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://campusguide.pages.dev"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-systems/50 transition-all"
                            >
                                Explore Campus Guide
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─────────── 01 — CAMPUS GUIDE (FLAGSHIP) ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                            {/* Left: heading */}
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-systems to-primary bg-clip-text text-transparent">
                                    01 — Featured System
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-1 ring-systems/20 flex-shrink-0">
                                        <img src='/campusguidelogo.png' alt="Campus Guide" className="w-full h-full object-contain" />
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold font-heading">Campus Guide</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    The essential campus companion PWA. Everything UCC students need to navigate
                                    university life — built as a local-first installable web app.
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mb-8">
                                    {["React 18", "Supabase", "Paystack", "OneSignal", "PWA"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 rounded-full bg-systems/10 text-systems text-xs font-semibold tracking-wide border border-systems/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href="https://campusguide.pages.dev"
                                    target="_blank"
                                    className="group inline-flex items-center gap-2 text-systems font-semibold hover:gap-3 transition-all"
                                >
                                    Launch Campus Guide
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>

                            {/* Right: stats glassmorphic grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {flagshipStats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className={`bg-white/50 dark:bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${i % 2 === 0 ? 'border-systems/20' : 'border-primary/20'}`}
                                    >
                                        <p className={`text-3xl md:text-4xl font-bold mb-2 font-heading ${stat.accent ? 'text-systems' : 'text-primary'}`}>
                                            {stat.value}
                                        </p>
                                        <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {flagshipFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-2xl p-8 hover:border-systems/40 transition-all hover:shadow-lg hover:-translate-y-1"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportOnce}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                >
                                    <div className="text-3xl font-bold mb-4 opacity-20 text-systems">
                                        0{index + 1}
                                    </div>
                                    <feature.icon className="w-7 h-7 text-systems mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold font-heading mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── 02 — PRODUCT SUITE ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-systems to-primary bg-clip-text text-transparent">
                            02 — The Product Suite
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            Real products. Real users.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            Three production systems already in the hands of thousands — each solving a distinct
                            problem with serious engineering behind it.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {productSuite.map((product, index) => (
                                <motion.div
                                    key={product.name}
                                    className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-2xl p-8 hover:border-systems/50 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportOnce}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold mb-4 opacity-20 text-systems">
                                        0{index + 1}
                                    </div>
                                    <div className="w-12 h-12 mb-6 rounded-xl bg-systems/10 p-2.5 border border-systems/20 text-systems">
                                        <product.icon />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-1">{product.name}</h3>
                                    <p className="text-systems text-xs font-bold uppercase tracking-wider mb-3">{product.tag}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                                        {product.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {product.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 rounded-md bg-muted dark:bg-white/5 text-muted-foreground text-[10px] font-semibold tracking-wide">{t}</span>
                                        ))}
                                    </div>
                                    <Link
                                        href={product.link}
                                        target={product.external ? "_blank" : undefined}
                                        className="inline-flex items-center gap-2 text-systems font-semibold text-sm group/link mt-auto"
                                    >
                                        {product.linkLabel}
                                        {product.external ? (
                                            <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        ) : (
                                            <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── 03 — MORE SYSTEMS ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-systems to-primary bg-clip-text text-transparent">
                            03 — Expanding Ecosystem
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            More systems in the pipeline.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            Specialized solutions powering specific sectors of campus life and beyond.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {moreSystems.map((system, index) => (
                                <motion.div
                                    key={system.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportOnce}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                >
                                    <Link href={system.link} className="block h-full group">
                                        <div className={`h-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 ${index % 2 === 0 ? 'border-systems/20 hover:border-systems/50' : 'border-primary/20 hover:border-primary/50'}`}>
                                            <div className={`w-14 h-14 mb-6 rounded-xl p-2.5 border group-hover:scale-110 transition-transform ${index % 2 === 0 ? 'bg-systems/10 border-systems/20 text-systems' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                                                <system.icon />
                                            </div>
                                            <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-systems transition-colors">
                                                {system.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {system.desc}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── CLOSING CTA — gradient story card ─────────── */}
                <section className="px-6 py-20">
                    <motion.div
                        className="max-w-5xl mx-auto bg-gradient-to-br from-systems-soft to-primary-soft dark:from-systems/5 dark:to-primary/5 rounded-3xl p-8 md:p-16 border border-systems/40 dark:border-white/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-systems to-primary bg-clip-text text-transparent">
                                    Build the future with us
                                </p>
                                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                    The architecture is ready.
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The nodes are active. We are waiting for your input signal — whether
                                    that’s a partnership, an integration, or a system worth building together.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/studio/work?source=systems#contact"
                                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-systems text-white font-semibold rounded-xl hover:bg-systems/90 transition-all shadow-lg shadow-systems/25"
                                >
                                    Partner With Us
                                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/systems/impact"
                                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-systems/50 transition-all"
                                >
                                    See Our Impact
                                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <SystemsFooter />
        </div>
    );
}
