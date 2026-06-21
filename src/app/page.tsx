"use client";

import { useState, useCallback, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import MainFooter from "@/components/layout/MainFooter";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, stagger, viewportOnce } from "@/lib/animations";
import Lazy3D from "@/components/3d/Lazy3D";
import SectionBadge from "@/components/ui/SectionBadge";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    SwatchIcon,
    Squares2X2Icon,
    ArrowUpRightIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

// Dynamic import for 3D components to avoid SSR issues
const ViewCanvas = dynamic(() => import("@/components/3d/ViewCanvas"), { ssr: false });
const StudioShape = dynamic(() => import("@/components/3d/StudioShape"), { ssr: false });
const SystemsShape = dynamic(() => import("@/components/3d/SystemsShape"), { ssr: false });
const OnboardingIntro = dynamic(() => import("@/components/onboarding/OnboardingIntro"), { ssr: false });

/* What separates a real company from a student project */
const pillars = [
    {
        icon: UsersIcon,
        title: "One team, two disciplines",
        body: "A design studio and an engineering lab under one roof. No handoffs, no lost-in-translation — strategy, craft, and code move together.",
        accent: "primary" as const,
    },
    {
        icon: ChartBarIcon,
        title: "Battle-tested by real users",
        body: "Our systems serve thousands of real people every day. We ship, measure, and iterate — we don't just build demos that never launch.",
        accent: "systems" as const,
    },
    {
        icon: ShieldCheckIcon,
        title: "We deliver.",
        body: "A dedicated team that sees every project through to completion. Reliable execution you can stake a launch, a semester, or a business on.",
        accent: "primary" as const,
    },
];

const stats = [
    { value: "2", label: "Worlds, one vision" },
    { value: "3", label: "Live production systems" },
    { value: "1", label: "Team that delivers" },
    { value: "2025", label: "Established" },
];

export default function Home() {
    const [showOnboarding, setShowOnboarding] = useState(true);

    const handleOnboardingComplete = useCallback(() => {
        setShowOnboarding(false);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white flex flex-col transition-colors duration-200 overflow-x-hidden">
            {/* Premium Onboarding Experience */}
            {showOnboarding && (
                <OnboardingIntro onComplete={handleOnboardingComplete} />
            )}

            <Navbar />

            {/* Background Gradient Blend — same depth system as About page */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-systems rounded-full blur-[120px]" />
            </div>

            <main className="relative pt-24 z-10 flex-grow">
                {/* ============================================================
                    HERO — left-aligned editorial
                    ============================================================ */}
                <section className="px-6 py-16 md:py-24 min-h-[80vh] flex items-center">
                    <div className="max-w-5xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <SectionBadge title="Est. 2025 // Global Systems Integrator" variant="neutral" animated={true} />
                        </motion.div>

                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold font-heading leading-[0.95] tracking-tight mb-6 mt-6"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        >
                            <span className="bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                                SYNAPSE
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        >
                            We build digital experiences that{" "}
                            <span className="text-foreground font-semibold">drive growth</span> — and engineer{" "}
                            <span className="text-foreground font-semibold">systems</span> that define tomorrow.
                            Two worlds, one vision.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        >
                            <Link
                                href="/studio"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                Explore Studio
                                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/systems"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-systems/50 transition-all"
                            >
                                Explore Systems
                            </Link>
                        </motion.div>
                    </div>

                    {/* Scroll cue */}
                    <motion.div
                        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDownIcon className="w-4 h-4" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* ============================================================
                    STATS — glassmorphic strip
                    ============================================================ */}
                <section className="px-6 py-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewportOnce}
                                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 ${i % 2 === 0 ? "text-primary" : "text-systems"}`}>
                                            {s.value}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                            {s.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    01 — TWO DIVISIONS (3D dual-world cards)
                    ============================================================ */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            01 — Choose your world
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            Two divisions. One standard.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            Whether you need a bespoke experience built for your brand, or a platform engineered to
                            scale — you’re working with the same team, the same rigor.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Synapse Studio Card */}
                            <motion.div
                                className="h-[460px] md:h-[540px]"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewportOnce}
                                transition={{ type: "spring", stiffness: 70, damping: 16 }}
                            >
                                <Link href="/studio" className="group relative block w-full h-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_40px_-5px_rgba(109,40,217,0.3)]">
                                    <div className="absolute top-6 left-6 z-20 p-3 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur-sm text-primary border border-white/20 dark:border-white/10">
                                        <SwatchIcon className="w-6 h-6" />
                                    </div>
                                    <div className="absolute top-6 right-6 z-20 p-2 text-muted-foreground group-hover:text-primary transition-colors">
                                        <ArrowUpRightIcon className="w-8 h-8" />
                                    </div>

                                    {/* 3D — lazy mounted only when this card nears the viewport */}
                                    <Lazy3D className="absolute inset-0 top-0 bottom-36 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                                        <Suspense fallback={null}>
                                            <ViewCanvas>
                                                <StudioShape />
                                            </ViewCanvas>
                                        </Suspense>
                                    </Lazy3D>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-white dark:from-background via-white/90 dark:via-background/90 to-transparent">
                                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Client Services</p>
                                        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">Synapse Studio</h3>
                                        <p className="text-muted-foreground text-sm md:text-base">Bespoke digital experiences & brand strategy.</p>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Synapse Systems Card */}
                            <motion.div
                                className="h-[460px] md:h-[540px]"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewportOnce}
                                transition={{ type: "spring", stiffness: 70, damping: 16 }}
                            >
                                <Link href="/systems" className="group relative block w-full h-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-3xl overflow-hidden hover:border-systems/50 transition-all hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.3)]">
                                    <div className="absolute top-6 left-6 z-20 p-3 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur-sm text-systems border border-white/20 dark:border-white/10">
                                        <Squares2X2Icon className="w-6 h-6" />
                                    </div>
                                    <div className="absolute top-6 right-6 z-20 p-2 text-muted-foreground group-hover:text-systems transition-colors">
                                        <ArrowUpRightIcon className="w-8 h-8" />
                                    </div>

                                    <Lazy3D className="absolute inset-0 top-0 bottom-36 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                                        <Suspense fallback={null}>
                                            <ViewCanvas>
                                                <SystemsShape />
                                            </ViewCanvas>
                                        </Suspense>
                                    </Lazy3D>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-white dark:from-background via-white/90 dark:via-background/90 to-transparent">
                                        <p className="text-xs font-bold uppercase tracking-wider text-systems mb-2">Proprietary Products</p>
                                        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">Synapse Systems</h3>
                                        <p className="text-muted-foreground text-sm md:text-base">A product suite solving real problems at scale.</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    02 — WHY SYNAPSE
                    ============================================================ */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            02 — Why Synapse
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            Built like a company. Not a side project.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            What separates a real company from a student project is discipline, ownership, and a
                            track record of delivery. Here’s ours.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {pillars.map((p, index) => {
                                const accent = p.accent === "systems";
                                return (
                                    <motion.div
                                        key={p.title}
                                        className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewportOnce}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className={`text-4xl font-bold mb-4 opacity-20 ${accent ? "text-systems" : "text-primary"}`}>
                                            0{index + 1}
                                        </div>
                                        <div className={`inline-flex p-3 rounded-xl mb-5 ${accent ? "bg-systems/10 text-systems" : "bg-primary/10 text-primary"}`}>
                                            <p.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading mb-2.5">{p.title}</h3>
                                        <p className="text-muted-foreground text-[15px] leading-relaxed">{p.body}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    CLOSING CTA — gradient story card
                    ============================================================ */}
                <section className="px-6 py-20">
                    <motion.div
                        className="max-w-5xl mx-auto bg-gradient-to-br from-primary-soft to-systems-soft dark:from-primary/5 dark:to-systems/5 rounded-3xl p-8 md:p-16 border border-primary/40 dark:border-white/5 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.p variants={fadeIn} className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            Two worlds, one vision
                        </motion.p>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-[1.05] mb-6">
                            Let’s build something <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">worth remembering.</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                            Whether it’s a bespoke experience or a platform that scales, we have the team to deliver it.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/studio/work"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                Start a project
                                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-primary/50 transition-all"
                            >
                                About Synapse
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <MainFooter />
        </div>
    );
}
