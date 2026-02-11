"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';
import { IconBuilding, IconUsers, IconCamera, IconCreditCard, IconArrowLeft, IconHostelConnect, IconArrowRight } from '@/components/icons/SystemsIcons';

const features = [
    { Icon: IconBuilding, title: 'Direct Booking', description: 'Book hostels directly through the platform without middlemen.' },
    { Icon: IconUsers, title: 'Manager Integration', description: 'Hostel managers list and manage their properties in real-time.' },
    { Icon: IconCamera, title: 'Virtual Tours', description: 'View hostel rooms and facilities before making a decision.' },
    { Icon: IconCreditCard, title: 'Secure Payments', description: 'Pay deposits and rent securely through the platform.' },
];

export default function HostelConnectPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">

                <section className="relative w-full py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-200" />
                    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <SectionBadge title="Coming Soon" variant="neutral" />

                            <motion.div className="w-20 h-20 rounded-2xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 flex items-center justify-center mb-6" variants={scaleIn}>
                                <IconHostelConnect />
                            </motion.div>

                            <motion.h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4" variants={fadeInUp}>
                                <span className="text-[#2563EB]">Hostel Connect</span>
                            </motion.h1>

                            <motion.p className="text-xl md:text-2xl text-slate-600 dark:text-[#A1A1AA] mb-6" variants={fadeInUp}>
                                Digitized Hostel Booking
                            </motion.p>

                            <motion.p className="text-lg max-w-3xl leading-relaxed text-slate-600 dark:text-[#A1A1AA]" variants={fadeInUp}>
                                No more roaming campus looking for accommodation. Hostel Connect provides direct integration with hostel managers for instant, secure bookings. Find your perfect room before you even arrive on campus.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Back Link */}
                <div className="max-w-5xl mx-auto px-6 py-6">
                    <Link href="/systems/impact" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-[#A1A1AA] hover:text-[#2563EB] transition-colors">
                        <div className="w-4 h-4"><IconArrowLeft /></div>
                        Back to All Systems
                    </Link>
                </div>

                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.3em] mb-4" variants={fadeInUp}>The Problem</motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6" variants={fadeInUp}>Finding Housing is Chaos</motion.h2>
                            <motion.p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed text-lg" variants={fadeInUp}>
                                Students spend their first weeks walking from hostel to hostel, negotiating with managers, and often getting scammed. There's no central platform, no verified listings, and no transparency on availability or pricing.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.3em] mb-4" variants={fadeInUp}>The Solution</motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6" variants={fadeInUp}>Book From Anywhere</motion.h2>
                            <motion.p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed text-lg" variants={fadeInUp}>
                                Hostel Connect brings all verified hostels onto one platform. Browse listings, view photos, compare prices, and book your room — all before you even step on campus. Managers get a dashboard to manage bookings and payments.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.3em] mb-4 text-center" variants={fadeInUp}>Planned Features</motion.p>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center" variants={fadeInUp}>How It Will Work</motion.h2>
                            <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger}>
                                {features.map((feature, index) => (
                                    <motion.div key={index} className="bg-slate-50 dark:bg-[#151521] rounded-2xl p-6 border border-slate-200 dark:border-white/5 group hover:border-[#2563EB]/30 transition-all" variants={scaleIn}>
                                        <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-[#2563EB]">
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

                <section className="py-20 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4" variants={fadeInUp}>Interested in Hostel Connect?</motion.h2>
                            <motion.p className="text-lg text-slate-600 dark:text-[#A1A1AA] mb-8" variants={fadeInUp}>Get notified when we launch, or discuss partnership opportunities.</motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link href="/studio/contact?source=hostel-connect" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#2563EB]/90 transition-all shadow-lg shadow-[#2563EB]/25 group">
                                    Contact Us<div className="w-5 h-5 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <SystemsFooter />
        </div>
    );
}
