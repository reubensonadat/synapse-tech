"use client";

import Navbar from "@/components/layout/Navbar";
import MainFooter from "@/components/layout/MainFooter";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, stagger, viewportOnce } from "@/lib/animations";

// Dynamic import for 3D components to avoid SSR issues
const ViewCanvas = dynamic(() => import("@/components/3d/ViewCanvas"), { ssr: false });
const StudioShape = dynamic(() => import("@/components/3d/StudioShape"), { ssr: false });
const SystemsShape = dynamic(() => import("@/components/3d/SystemsShape"), { ssr: false });

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-gray-900 dark:text-white selection:bg-synapse-main selection:text-white flex flex-col transition-colors duration-300">
            <Navbar />

            <main className="flex-grow flex flex-col pt-24 pb-12 px-6 container mx-auto relative overflow-hidden">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                {/* Hero Text */}
                <motion.div
                    className="relative z-10 max-w-5xl mx-auto w-full mb-16 mt-8 md:mt-16"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.div
                        className="flex items-center gap-3 mb-6"
                        variants={fadeIn}
                    >
                        <span className="w-2 h-2 rounded-full bg-synapse-main animate-pulse" />
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-synapse-main uppercase">
                            Est. 2025 // Global Systems Integrator
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight tracking-tight"
                        variants={fadeInUp}
                    >
                        We create digital solutions <br className="hidden md:block" />
                        that <span className="text-synapse-main">drive growth</span> and <br className="hidden md:block" />
                        build systems for <br className="hidden md:block" />
                        tomorrow.
                    </motion.h1>
                </motion.div>

                {/* World Selector Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-7xl mx-auto w-full h-[500px] md:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >

                    {/* Synapse Studio Card */}
                    <motion.div variants={fadeInLeft}>
                        <Link href="/studio" className="group relative block w-full h-full bg-[#111115] border border-white/10 rounded-3xl overflow-hidden hover:border-synapse-main/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(109,40,217,0.5)] hover:scale-[1.02]">
                            <motion.div
                                className="absolute top-6 left-6 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" /></svg>
                            </motion.div>
                            <motion.div
                                className="absolute top-6 right-6 p-2 text-white/50 group-hover:text-white transition-colors"
                                whileHover={{ x: 5, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowUpRight size={32} />
                            </motion.div>

                            {/* 3D Scene */}
                            <div className="absolute inset-0 top-12 bottom-24 pointer-events-none transition-transform duration-700 md:group-hover:scale-110">
                                <Suspense fallback={null}>
                                    <ViewCanvas>
                                        <StudioShape />
                                    </ViewCanvas>
                                </Suspense>
                            </div>

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={viewportOnce}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Synapse Studio</h2>
                                <p className="text-gray-400 text-lg">Bespoke Client Services & Digital Strategy.</p>
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Synapse Systems Card */}
                    <motion.div variants={fadeInRight}>
                        <Link href="/systems" className="group relative block w-full h-full bg-[#111115] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] hover:scale-[1.02]">
                            <motion.div
                                className="absolute top-6 left-6 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
                                whileHover={{ scale: 1.1, rotate: -15 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon placeholder */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                            </motion.div>
                            <motion.div
                                className="absolute top-6 right-6 p-2 text-white/50 group-hover:text-white transition-colors"
                                whileHover={{ x: 5, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowUpRight size={32} />
                            </motion.div>

                            {/* 3D Scene */}
                            <div className="absolute inset-0 top-12 bottom-24 pointer-events-none transition-transform duration-700 md:group-hover:scale-110">
                                <Suspense fallback={null}>
                                    <ViewCanvas>
                                        <SystemsShape />
                                    </ViewCanvas>
                                </Suspense>
                            </div>

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={viewportOnce}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Synapse Systems</h2>
                                <p className="text-gray-400 text-lg">Proprietary Product Suite & SaaS Solutions.</p>
                            </motion.div>
                        </Link>
                    </motion.div>

                </motion.div>
            </main>

            <MainFooter />
        </div>
    );
}
