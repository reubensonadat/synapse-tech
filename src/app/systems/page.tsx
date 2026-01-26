"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, viewportOnce } from '@/lib/animations';
import { Server, Rocket, Users, ArrowRight } from 'lucide-react';

export default function SystemsPage() {
    return (
        <div className="min-h-screen bg-synapse-black text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
                    {/* Background gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-synapse-black to-indigo-950" />

                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] opacity-[0.15]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #3b82f645 1px, transparent 1px),
                                linear-gradient(to bottom, #3b82f645 1px, transparent 1px)
                            `,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    {/* Ambient glow */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                    {/* Content */}
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-blue-400/20 backdrop-blur-sm mb-8 shadow-sm"
                            variants={fadeInDown}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-wide uppercase text-blue-300">
                                Synapse Systems
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
                                Building Products That Shape Tomorrow
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-400"
                            variants={fadeInUp}
                        >
                            Our proprietary suite of solutions tackling real-world problems—from inventory management to education technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                            variants={fadeInUp}
                        >
                            <Link
                                href="/systems/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] transition-all duration-300 group"
                            >
                                Explore Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/systems/roadmap"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                View Roadmap
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                {/* What We Build Section */}
                <section className="px-6 py-20 bg-synapse-black/50">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.div className="text-center mb-16" variants={fadeInUp}>
                            <p className="text-sm text-blue-400 uppercase tracking-wide mb-2">Our Vision</p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading">
                                Solving Real Problems
                            </h2>
                            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                                We don't just build for clients—we build our own solutions that address genuine market needs in Ghana and beyond.
                            </p>
                        </motion.div>

                        {/* Product Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Server,
                                    title: 'Inventory Systems',
                                    description: 'Smart stock management for SMEs, reducing waste and optimizing operations.',
                                    status: 'In Development'
                                },
                                {
                                    icon: Rocket,
                                    title: 'EdTech Platform',
                                    description: 'Modern learning experiences for Ghanaian students and institutions.',
                                    status: 'Coming Soon'
                                },
                                {
                                    icon: Users,
                                    title: 'More Products',
                                    description: 'We\'re constantly identifying problems worth solving. Stay tuned.',
                                    status: 'In Pipeline'
                                }
                            ].map((product, index) => (
                                <motion.div
                                    key={product.title}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 group"
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <product.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading mb-3">{product.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">{product.description}</p>
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                        {product.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <motion.section
                    className="px-6 py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    <motion.div
                        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-12 text-center"
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">Want to Collaborate?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            We're open to partnerships, investments, and collaborations. Let's build something impactful together.
                        </p>
                        <Link
                            href="/systems/collaborate"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] transition-all duration-300 group"
                        >
                            Get In Touch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.section>
            </main>

            {/* Simple Footer */}
            <footer className="px-6 py-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Synapse Systems. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
