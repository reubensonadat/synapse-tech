"use client";

import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { DevicePhoneMobileIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, scaleIn, viewportOnce } from '@/lib/animations';

export default function WebApplicationsPage() {

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">

                    {/* Background Layer */}
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
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
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
                        <DevicePhoneMobileIcon className="w-20 h-20 text-synapse-main mx-auto mb-8" />

                        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Web Application Development
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-slate-400 text-slate-600">
                            Custom business systems that automate your operations, manage your data, and enable direct customer transactions.
                        </p>
                    </div>
                </section>

                {/* Back Link */}
                <section className="px-6 py-8 bg-gray-50 dark:bg-synapse-slate/50">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/studio/services"
                            className="inline-flex items-center gap-2 text-sm text-synapse-main hover:text-synapse-glow transition-colors"
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                            Back to All Services
                        </Link>
                    </div>
                </section>

                {/* What Are Web Applications */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">What Are Web Applications?</h2>
                        <p className="text-lg text-synapse-gray dark:text-gray-400 leading-relaxed mb-8">
                            Unlike traditional websites that just display information, web applications are interactive systems that <strong>do work for you</strong>. Think ordering systems for restaurants, booking platforms for service providers, or inventory management for retail shops. They&apos;re built as Progressive Web Apps (PWAs) - meaning customers can install them on their phones like regular apps, without going through app stores.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-synapse-slate rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">PWA Technology</h3>
                                <p className="text-synapse-gray dark:text-gray-400">
                                    Installable apps without app store fees or approval delays.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-synapse-slate rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">Real-time Data</h3>
                                <p className="text-synapse-gray dark:text-gray-400">
                                    Live updates, instant notifications, and synchronized information.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-synapse-slate rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">Admin Dashboards</h3>
                                <p className="text-synapse-gray dark:text-gray-400">
                                    Manage your business visually with charts, reports, and controls.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-synapse-slate rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                                <h3 className="font-bold text-xl mb-3">WhatsApp Integration</h3>
                                <p className="text-synapse-gray dark:text-gray-400">
                                    Orders and inquiries sent directly to your phone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section - Subtle explanation of tiers */}
                <section className="px-6 py-16 bg-gray-50 dark:bg-synapse-slate/50">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.div className="text-center mb-12" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Tailored to Your Needs</h2>
                            <p className="text-synapse-gray dark:text-gray-400 max-w-2xl mx-auto">
                                We offer different levels of complexity to match your business requirements.
                            </p>
                        </motion.div>

                        <motion.div className="grid lg:grid-cols-3 gap-8" variants={stagger}>
                            {/* Basic Tier */}
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-synapse-black rounded-3xl p-8 border border-gray-200 dark:border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2">Simple Solutions</h3>
                                <p className="text-sm text-synapse-gray dark:text-gray-400 mb-6">
                                    Get started with digital ordering. Customers order through the app, you get notified via WhatsApp.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {['Customer ordering via app', 'WhatsApp order notifications', 'Mobile-first PWA design', 'Owner edits in database', 'Quick setup & delivery'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckIcon className="w-4 h-4 text-synapse-main flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-synapse-gray dark:text-gray-400">
                                    Best for: Small restaurants, local shops, service providers starting out
                                </p>
                            </motion.div>

                            {/* Standard Tier - Highlighted */}
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                                className="relative bg-white dark:bg-synapse-black rounded-3xl p-8 border-2 border-synapse-main shadow-lg shadow-synapse-main/10"
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-synapse-main text-white text-xs font-medium rounded-full">
                                    Most Popular
                                </div>
                                <h3 className="text-xl font-bold mb-2">Business Management</h3>
                                <p className="text-sm text-synapse-gray dark:text-gray-400 mb-6">
                                    Everything in Simple, plus a web dashboard to view orders, see analytics, and manage your menu.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {['Everything in Simple, plus:', 'Web admin dashboard (read-only)', 'Sales analytics & charts', 'Order history & search', 'Real-time order alerts'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckIcon className="w-4 h-4 text-synapse-main flex-shrink-0" />
                                            <span className={i === 0 ? 'font-medium' : ''}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-synapse-gray dark:text-gray-400">
                                    Best for: Growing businesses wanting visibility into operations
                                </p>
                            </motion.div>

                            {/* Premium Tier */}
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-synapse-black rounded-3xl p-8 border border-gray-200 dark:border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-2">Complete Systems</h3>
                                <p className="text-sm text-synapse-gray dark:text-gray-400 mb-6">
                                    Everything in Business, plus full control: user accounts, inventory logic, and a read/write admin panel.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {['Everything in Business, plus:', 'Full admin panel (read & write)', 'Customer user accounts', 'Real-time data sync', 'Inventory management logic', 'Custom business workflows'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckIcon className="w-4 h-4 text-synapse-main flex-shrink-0" />
                                            <span className={i === 0 ? 'font-medium' : ''}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-synapse-gray dark:text-gray-400">
                                    Best for: Enterprises needing complete automation & control
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Subtle link to pricing */}
                        <motion.div className="text-center mt-12" variants={fadeInUp}>
                            <Link
                                href="/studio/pricing"
                                className="inline-flex items-center gap-2 text-synapse-main hover:text-synapse-glow font-medium transition-colors"
                            >
                                See detailed pricing
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Our Process */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Our Process</h2>

                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Discovery', desc: 'We learn about your business workflow and how you want customers to interact with your system.' },
                                { step: '02', title: 'System Design', desc: 'We map out the data structure, user interactions, and admin features you need.' },
                                { step: '03', title: 'Development', desc: 'We build your custom application with clean, tested, production-ready code.' },
                                { step: '04', title: 'Training & Launch', desc: 'We deploy your system and teach you how to manage it effectively.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="text-4xl font-bold text-synapse-main/20">{item.step}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-synapse-gray dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
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
                    <motion.div className="max-w-4xl mx-auto bg-synapse-main/10 dark:bg-synapse-main/20 border border-synapse-main/30 rounded-3xl p-12" variants={scaleIn}>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center">Ready to Automate Your Business?</h2>
                        <p className="text-synapse-gray dark:text-gray-400 text-center mb-8">
                            Let&apos;s build a system that works while you sleep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/studio/contact?service=web-application" variant="primary" className="text-lg px-8 py-4">Get a Quote</Button>
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
