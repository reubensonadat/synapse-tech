"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';
import { IconUsers, IconLightbulb, IconHandshake, IconRocket, IconFileText, IconMail, IconArrowRight } from '@/components/icons/SystemsIcons';

export default function CollaboratePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Hero */}
                <section className="relative w-full py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50 dark:bg-[#0B0B0F] transition-colors duration-200" />
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <SectionBadge title="Join Us" variant="systems" />

                            <motion.h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6" variants={fadeInUp}>
                                <span className="text-slate-900 dark:text-white">Let's Build </span>
                                <span className="text-[#2563EB]">Together</span>
                            </motion.h1>

                            <motion.p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-[#A1A1AA]" variants={fadeInUp}>
                                Whether you want to join our team or bring your idea to life, we're here to collaborate.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Two Pathways */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="grid md:grid-cols-2 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            {/* Internship Path */}
                            <motion.div variants={scaleIn}>
                                <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#151521] dark:to-[#1a1a2e] rounded-3xl p-8 border border-slate-200 dark:border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-[60px]" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-6">
                                            <div className="w-8 h-8">
                                                <IconUsers />
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Join as an Intern</h2>

                                        <p className="text-slate-600 dark:text-[#A1A1AA] mb-6 leading-relaxed">
                                            Want to learn and grow with us? We're looking for passionate individuals who want to gain real-world experience building impactful systems.
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-[#2563EB] text-xs font-bold">1</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">Apply</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">Send us your CV and tell us why you want to join</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-[#2563EB] text-xs font-bold">2</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">Interview</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">We'll have a conversation about your skills and interests</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-[#2563EB] text-xs font-bold">3</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">Join the Team</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">Start working on real projects and grow with us</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="mailto:internships@synapsetech.dev?subject=Internship Application" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#2563EB]/90 transition-all group">
                                            Apply for Internship
                                            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                                <IconMail />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bring Your Idea Path */}
                            <motion.div variants={scaleIn}>
                                <div className="h-full bg-gradient-to-br from-[#2563EB]/5 to-[#2563EB]/10 dark:from-[#2563EB]/10 dark:to-[#2563EB]/20 rounded-3xl p-8 border border-[#2563EB]/20 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#2563EB]/20 rounded-full blur-[80px]" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white mb-6">
                                            <div className="w-8 h-8 text-white">
                                                <IconLightbulb />
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Bring Your Idea</h2>

                                        <p className="text-slate-600 dark:text-[#A1A1AA] mb-6 leading-relaxed">
                                            Have a system idea but need help building it? Partner with us and get equity on your idea. We build it, manage it, and you share in the success.
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-3 h-3 text-white">
                                                        <IconLightbulb />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">Share Your Vision</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">Tell us about your idea and the problem it solves</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-3 h-3 text-white">
                                                        <IconFileText />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">Sign Partnership</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">We draft a legal contract with equity terms</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-3 h-3 text-white">
                                                        <IconRocket />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">We Build & Launch</h4>
                                                    <p className="text-sm text-slate-500 dark:text-[#A1A1AA]/80">Your idea becomes a real system under Synapse</p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="mailto:partnerships@synapsetech.dev?subject=Partnership Idea" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0B0B0F] text-[#2563EB] font-bold rounded-xl border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all group">
                                            Submit Your Idea
                                            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Partner Section */}
                <section className="py-20 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4" variants={fadeInUp}>
                                Why Partner with Synapse?
                            </motion.h2>
                            <motion.p className="text-lg text-slate-600 dark:text-[#A1A1AA]" variants={fadeInUp}>
                                When you're under Synapse, you get the advantage of our reach and expertise.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.div variants={fadeInUp} className="text-center p-6">
                                <div className="text-4xl font-bold text-[#2563EB] mb-2">20,000+</div>
                                <p className="text-slate-600 dark:text-[#A1A1AA]">Students using our systems</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="text-center p-6">
                                <div className="text-4xl font-bold text-[#2563EB] mb-2">5+</div>
                                <p className="text-slate-600 dark:text-[#A1A1AA]">Systems in development</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="text-center p-6">
                                <div className="text-4xl font-bold text-[#2563EB] mb-2">Proven</div>
                                <p className="text-slate-600 dark:text-[#A1A1AA]">Track record of delivery</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4" variants={fadeInUp}>
                                Questions?
                            </motion.h2>
                            <motion.p className="text-lg text-slate-600 dark:text-[#A1A1AA] mb-8" variants={fadeInUp}>
                                Not sure which path is right for you? Reach out and let's chat.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link href="/studio/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:opacity-90 transition-all group">
                                    Contact Us
                                    <div className="w-5 h-5 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
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
