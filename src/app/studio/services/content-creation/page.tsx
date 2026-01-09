"use client";

import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { PencilSquareIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';

export default function ContentCreationPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
                    </div>

                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #7c3aed45 1px, transparent 1px), linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)`,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.div variants={scaleIn}>
                            <PencilSquareIcon className="w-20 h-20 text-synapse-main mx-auto mb-8" />
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Content Creation
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-slate-400 text-slate-600"
                            variants={fadeInUp}
                        >
                            Professional video and photography that tells your brand story and drives engagement.
                        </motion.p>
                    </motion.div>
                </section>

                <section className="px-6 py-8 bg-gray-50 dark:bg-synapse-slate/50">
                    <div className="max-w-7xl mx-auto">
                        <Link href="/studio/services" className="inline-flex items-center gap-2 text-sm text-synapse-main hover:text-synapse-glow transition-colors group">
                            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to All Services
                        </Link>
                    </div>
                </section>

                {/* What We Do */}
                <section className="px-6 py-16">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.h2 className="text-3xl md:text-4xl font-bold font-heading mb-6" variants={fadeInUp}>What We Do</motion.h2>
                        <motion.p className="text-lg text-synapse-gray dark:text-gray-400 leading-relaxed mb-8" variants={fadeInUp}>
                            We create authentic, brand-focused content that connects with your audience. From short-form videos to professional photography, every piece is designed to elevate your brand and drive meaningful engagement.
                        </motion.p>

                        <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger}>
                            {[
                                { title: 'Short-Form Video', desc: 'Engaging videos optimized for social media and web.' },
                                { title: 'Brand Photography', desc: 'Professional product and lifestyle shots that capture your brand essence.' },
                                { title: 'Social Media Assets', desc: 'Graphics and content designed for maximum social impact.' },
                                { title: 'Testimonial Videos', desc: 'Client stories that build trust and credibility.' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white dark:bg-synapse-slate rounded-2xl p-6 border border-gray-200 dark:border-white/10"
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-synapse-gray dark:text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Our Process */}
                <section className="px-6 py-16 bg-gray-50 dark:bg-synapse-slate/50">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center" variants={fadeInDown}>Our Process</motion.h2>

                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Brand Understanding', desc: 'We dive deep into your brand identity, values, and target audience.' },
                                { step: '02', title: 'Concept & Planning', desc: 'We develop creative concepts and plan the shoot timeline.' },
                                { step: '03', title: 'Production', desc: 'Professional filming and photography on location or in studio.' },
                                { step: '04', title: 'Post-Production', desc: 'Expert editing, color grading, and optimization for multiple platforms.' }
                            ].map((item, idx) => (
                                <motion.div key={idx} className="flex gap-6 items-start" variants={fadeInUp}>
                                    <div className="text-4xl font-bold text-synapse-main/20">{item.step}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-synapse-gray dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Visual Section */}
                <motion.section
                    className="px-6 py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <PencilSquareIcon className="w-32 h-32 text-synapse-main/30 mx-auto mb-4" />
                                    <p className="text-synapse-gray">Professional Content Creation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    className="px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    <motion.div className="max-w-4xl mx-auto bg-synapse-main/10 dark:bg-synapse-main/20 border border-synapse-main/30 rounded-3xl p-12" variants={scaleIn}>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">
                            Ready to Tell Your Story?
                        </h2>
                        <p className="text-synapse-gray dark:text-gray-400 text-center mb-8">
                            Let's create content that resonates with your audience and drives real results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/studio/contact?service=content-creation" variant="primary" className="text-lg px-8 py-4">
                                Get a Quote
                            </Button>
                            <Button href="/studio/pricing" variant="secondary" className="text-lg px-8 py-4">
                                View Pricing
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            <StudioFooter />
        </div>
    );
}
