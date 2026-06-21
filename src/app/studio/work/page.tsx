import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import PortfolioGallery from './PortfolioGallery';
import ProjectInquiryForm from '@/components/studio/ProjectInquiryForm';
import {
    ChevronRightIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function WorkPage() {
    const contactChannels = [
        {
            icon: EnvelopeIcon,
            label: 'Email',
            value: 'synaptech25@gmail.com',
            href: 'mailto:synaptech25@gmail.com',
            desc: 'Best for detailed project briefs and proposals.',
        },
        {
            icon: PhoneIcon,
            label: 'Phone',
            value: '+233 54 813 5853',
            href: 'tel:+233548135853',
            desc: 'Speak with us directly during business hours.',
        },
        {
            icon: ChatBubbleLeftRightIcon,
            label: 'WhatsApp',
            value: '+233 54 813 5853',
            href: 'https://wa.me/233548135853',
            desc: 'Quick questions and fast conversations.',
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-200 overflow-hidden">
            <Navbar />

            {/* Background Gradient Blend — same depth system as About page */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-systems rounded-full blur-[120px]" />
            </div>

            <main className="relative pt-24 z-10">
                {/* ─────────── HERO — left-aligned editorial ─────────── */}
                <section className="px-6 py-20">
                    <div className="max-w-5xl mx-auto">
                        <SectionBadge title="Portfolio" variant="studio" animated={true} />
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6 mt-6">
                            Work that speaks <br />
                            <span className="bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">for itself.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                            A selection of websites, web apps, and brand content we’ve crafted for ambitious
                            clients. Browse the work — then start a project of your own.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                Start a Project
                                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/studio"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-primary/50 transition-all"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─────────── 01 — SELECTED WORK ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            01 — Selected Work
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            Projects built to perform.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            Filter by category to explore the work that matters most to you. Click any project
                            for the full story.
                        </p>

                        <PortfolioGallery />
                    </div>
                </section>

                {/* ─────────── 02 — START A PROJECT (FORM) ─────────── */}
                <section id="contact" className="px-6 py-16 scroll-mt-24">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/10">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                                02 — Start a Project
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
                                Let’s build together.
                            </h2>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
                                Tell us about your project and we’ll craft a custom solution that drives real
                                results. The more detail you share, the sharper our proposal.
                            </p>

                            <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading form...</div>}>
                                <ProjectInquiryForm />
                            </Suspense>
                        </div>
                    </div>
                </section>

                {/* ─────────── 03 — DIRECT CONTACT (asymmetric) ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: heading */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                                03 — Direct Contact
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                Prefer to talk first?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                No form, no friction. Reach out on the channel that suits you best —
                                we’re responsive and ready to help you think through your next move.
                            </p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                            >
                                Or use the form above
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: contact channels with left-border accents */}
                        <div className="space-y-6">
                            {contactChannels.map((channel, i) => (
                                <a
                                    key={channel.label}
                                    href={channel.href}
                                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`group flex gap-4 border-l-2 pl-6 py-2 transition-colors ${i % 2 === 0 ? 'border-primary' : 'border-systems'}`}
                                >
                                    <div className="flex-shrink-0">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${i % 2 === 0 ? 'bg-primary/10' : 'bg-systems/10'}`}>
                                            <channel.icon className={`w-5 h-5 ${i % 2 === 0 ? 'text-primary' : 'text-systems'}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                                            {channel.label}
                                        </p>
                                        <p className="text-lg font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                                            {channel.value}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {channel.desc}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── WORLD CTAs (large cards with hover glow) ─────────── */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        <Link
                            href="/studio"
                            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-3xl p-12 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(109,40,217,0.3)] overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRightIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 text-primary">
                                Explore Services
                            </h3>
                            <p className="text-muted-foreground">
                                See the full range of what we build — websites, apps, content, and design.
                            </p>
                        </Link>

                        <Link
                            href="/studio/pricing"
                            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-3xl p-12 hover:border-systems/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-systems opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRightIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 text-systems">
                                View Pricing
                            </h3>
                            <p className="text-muted-foreground">
                                Transparent, honest pricing for every service. No hidden fees, no surprises.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>

            <StudioFooter />
        </div>
    );
}
