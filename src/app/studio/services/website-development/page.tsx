"use client";

import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';

export default function WebsiteDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">

                    {/* Background Layer */}
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-bl from-systems-soft/40 via-primary-soft/40 to-primary-soft/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-background-subtle via-background to-primary-deep dark:opacity-100 opacity-0 transition-opacity duration-700" />
                    </div>

                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #7c3aed45 1px, transparent 1px), linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)`,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    {/* Ambient Glow Spots */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-primary/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-systems/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-primary/10 dark:opacity-40" />

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
                        <CodeBracketIcon className="w-20 h-20 text-primary mx-auto mb-8" />

                        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-primary-soft dark:to-primary from-background-subtle via-primary to-background-subtle">
                                Website Development
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-muted-foreground text-muted-foreground">
                            Custom websites built with modern technologies to ensure fast loading, responsive design, and excellent user experiences.
                        </p>
                    </div>
                </section>

                {/* Back Link */}
                <section className="px-6 py-8 bg-background-subtle dark:bg-background-subtle/50">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/studio/services"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
                        >
                            <ChevronLeftIcon className="w-4 h-4" />
                            Back to All Services
                        </Link>
                    </div>
                </section>

                {/* What We Do */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">What We Do</h2>
                        <p className="text-lg text-synapse-gray dark:text-muted-foreground leading-relaxed mb-8">
                            We design and develop high-performance websites that turn visitors into customers. From sleek landing pages to full e-commerce platforms, we build digital experiences that drive real business results.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-background-subtle rounded-2xl p-6 border border-border dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">Responsive Design</h3>
                                <p className="text-synapse-gray dark:text-muted-foreground">
                                    Beautiful on every device - mobile, tablet, and desktop.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-background-subtle rounded-2xl p-6 border border-border dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">Lightning Fast</h3>
                                <p className="text-synapse-gray dark:text-muted-foreground">
                                    Optimized for speed to keep visitors engaged and improve SEO.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-background-subtle rounded-2xl p-6 border border-border dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">Modern Stack</h3>
                                <p className="text-synapse-gray dark:text-muted-foreground">
                                    Built with React, Next.js, and cutting-edge web technologies.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-background-subtle rounded-2xl p-6 border border-border dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">SEO Optimized</h3>
                                <p className="text-synapse-gray dark:text-muted-foreground">
                                    Built-in best practices to help you rank higher in search results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="px-6 py-16 bg-background-subtle dark:bg-background-subtle/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Our Process</h2>

                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience.' },
                                { step: '02', title: 'Design', desc: 'We create beautiful mockups that match your brand identity.' },
                                { step: '03', title: 'Development', desc: 'We build your site with clean, efficient, modern code.' },
                                { step: '04', title: 'Launch & Support', desc: 'We deploy your site and provide ongoing support.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-synapse-gray dark:text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Section */}
                <section className="px-6 py-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative h-96 bg-gradient-to-br from-background-subtle to-background-subtle dark:from-background-subtle dark:to-background-subtle rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <CodeBracketIcon className="w-32 h-32 text-primary/30 mx-auto mb-4" />
                                    <p className="text-synapse-gray">Professional Website Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section
                    className="px-6 py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    <motion.div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-3xl p-12" variants={scaleIn}>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">Ready to Build Your Website?</h2>
                        <p className="text-synapse-gray dark:text-muted-foreground text-center mb-8">
                            Let&apos;s create a website that grows your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/studio/contact?service=website-development" variant="primary" className="text-lg px-8 py-4">Get a Quote</Button>
                            <Button href="/studio/pricing?category=websites" variant="secondary" className="text-lg px-8 py-4">
                                View Pricing
                                <ChevronRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            <StudioFooter />
        </div>
    );
}
