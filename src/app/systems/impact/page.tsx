"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';
import { IconCampusGuide, IconScholasticShield, IconHostelConnect, IconRoommateLink, IconJobPulse, IconArrowRight, IconExternalLink } from '@/components/icons/SystemsIcons';

// Systems data with custom icons
const systems = [
    {
        id: 'campus-guide',
        name: 'Campus Guide',
        tagline: 'Your Essential Campus Companion',
        description: 'Everything UCC students need to navigate university life. From academic guides to essential tools, all in one place.',
        status: 'live' as const,
        Icon: IconCampusGuide,
        image: '/campusguidelogo.png',
        stats: { users: '20,000+', timeframe: '1 Semester' },
        link: '/systems/campus-guide',
        externalLink: 'https://campusguide.pages.dev'
    },
    {
        id: 'scholastic-shield',
        name: 'Scholastic Shield',
        tagline: 'National Student Database',
        description: 'A system designed to combat fee evasion via school hopping. Track student fee status across participating schools nationwide.',
        status: 'coming-soon' as const,
        Icon: IconScholasticShield,
        stats: null,
        link: '/systems/scholastic-shield',
        externalLink: null
    },
    {
        id: 'hostel-connect',
        name: 'Hostel Connect',
        tagline: 'Digitized Hostel Booking',
        description: 'No more roaming campus looking for accommodation. Direct integration with hostel managers for instant, secure bookings.',
        status: 'coming-soon' as const,
        Icon: IconHostelConnect,
        stats: null,
        link: '/systems/hostel-connect',
        externalLink: null
    },
    {
        id: 'roommate-link',
        name: 'Roommate Link',
        tagline: 'Personality-Based Matching',
        description: 'Find the perfect roommate using our 50+ question algorithm. Because a bad roommate can ruin your GPA.',
        status: 'coming-soon' as const,
        Icon: IconRoommateLink,
        stats: null,
        link: '/systems/roommate-link',
        externalLink: null
    },
    {
        id: 'job-pulse',
        name: 'Job Pulse',
        tagline: 'National Career Engine',
        description: 'AI-driven job matching for the entire Ghanaian workforce. Connecting talent with opportunity at national scale.',
        status: 'coming-soon' as const,
        Icon: IconJobPulse,
        stats: null,
        link: '/systems/job-pulse',
        externalLink: null
    }
];


export default function ImpactPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-slate-900 dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* ==================== HERO SECTION ==================== */}
                <section className="relative w-full py-24 md:py-32 overflow-hidden">
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
                    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                        >
                            <SectionBadge title="Synapse Systems" variant="systems" />

                            {/* Title */}
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6"
                                variants={fadeInUp}
                            >
                                <span className="text-slate-900 dark:text-white">Our </span>
                                <span className="text-[#2563EB]">Impact</span>
                            </motion.h1>

                            {/* Subtext */}
                            <motion.p
                                className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-[#A1A1AA]"
                                variants={fadeInUp}
                            >
                                The systems we've built to solve real problems and impact thousands.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== SYSTEMS LIST ==================== */}
                <section className="py-20 bg-white dark:bg-[#0B0B0F] transition-colors duration-200">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            {systems.map((system) => (
                                <motion.div
                                    key={system.id}
                                    variants={fadeInUp}
                                    className="group"
                                >
                                    <Link href={system.link}>
                                        <div className="bg-slate-50 dark:bg-[#151521] rounded-2xl p-8 border border-slate-200 dark:border-white/5 hover:border-[#2563EB]/30 transition-all shadow-sm hover:shadow-lg">
                                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                                {/* Icon */}
                                                {/* Icon or Image */}
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${system.image ? 'bg-white p-2 border border-slate-100 dark:border-white/10 dark:bg-white/5' : 'bg-[#2563EB]/10 dark:bg-[#2563EB]/20 p-3'}`}>
                                                    {system.image ? (
                                                        <img src={system.image} alt={`${system.name} Logo`} className="w-full h-full object-contain" />
                                                    ) : (
                                                        <system.Icon />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{system.name}</h3>
                                                        {system.status === 'live' && (
                                                            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center gap-1">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                                Live
                                                            </span>
                                                        )}
                                                        {system.status === 'coming-soon' && (
                                                            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/20 rounded-full">
                                                                Coming Soon
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm font-medium text-[#2563EB] mb-2">{system.tagline}</p>
                                                    <p className="text-slate-600 dark:text-[#A1A1AA] leading-relaxed">{system.description}</p>

                                                    {/* Stats for live systems */}
                                                    {system.stats && (
                                                        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-200 dark:border-white/5">
                                                            <div>
                                                                <span className="text-2xl font-bold text-[#2563EB]">{system.stats.users}</span>
                                                                <span className="text-sm text-slate-500 dark:text-[#A1A1AA]/60 ml-2">students</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-slate-500 dark:text-[#A1A1AA]/60">in</span>
                                                                <span className="text-lg font-semibold text-slate-900 dark:text-white ml-2">{system.stats.timeframe}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Arrow / External Link */}
                                                <div className="flex items-center gap-3">
                                                    {system.externalLink && (
                                                        <a
                                                            href={system.externalLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="p-3 rounded-xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors"
                                                        >
                                                            <div className="w-5 h-5"><IconExternalLink /></div>
                                                        </a>
                                                    )}
                                                    <div className="p-3 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-400 dark:text-[#A1A1AA]/40 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                                                        <div className="w-5 h-5"><IconArrowRight /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ==================== CTA SECTION ==================== */}
                <section className="py-20 bg-slate-50 dark:bg-[#151521]/50 transition-colors duration-200">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
                                variants={fadeInUp}
                            >
                                Want something similar?
                            </motion.h2>
                            <motion.p
                                className="text-lg text-slate-600 dark:text-[#A1A1AA] mb-8"
                                variants={fadeInUp}
                            >
                                We apply the same rigor to every project. Let's build systems that work.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link
                                    href="/studio/contact?source=systems-impact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#2563EB]/90 transition-all shadow-lg shadow-[#2563EB]/25 group"
                                >
                                    Contact Us
                                    <div className="w-5 h-5 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
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
