import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            title: 'Innovation and creativity',
            description: 'We push boundaries and explore new possibilities to deliver unique solutions.'
        },
        {
            title: 'Integrity and transparency',
            description: 'We believe in honest communication and ethical business practices.'
        },
        {
            title: 'Client success above all',
            description: "Your success is our success. We're committed to delivering results that exceed expectations."
        },
        {
            title: 'Continuous learning',
            description: 'We stay updated with the latest trends and technologies to provide cutting-edge solutions.'
        }
    ];

    const philosophyPrinciples = [
        {
            title: 'Simplicity',
            description: 'Stripping away the noise to reveal the value. We design for clarity, not clutter.'
        },
        {
            title: 'Resonance',
            description: 'Creating systems that actually matter. We build with intention and purpose, not just features.'
        },
        {
            title: 'Speed',
            description: 'Because time is your most valuable currency. We prioritize performance in everything we build.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200 overflow-hidden">
            <Navbar />

            {/* Background Gradient Blend */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-synapse-main rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]" />
            </div>

            <main className="relative pt-24 z-10">
                {/* Hero Section */}
                <section className="px-6 py-20">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-sm font-bold bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent uppercase tracking-[0.2em] mb-6">
                            — OVERVIEW
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6">
                            Orchestrating <br />
                            <span className="bg-gradient-to-r from-synapse-main to-blue-500 bg-clip-text text-transparent">Intelligence.</span>
                        </h1>
                        <p className="text-lg text-synapse-gray max-w-2xl leading-relaxed">
                            Bridging the gap between human intuition and digital speed.
                            The Synapse Way blends calm tones with intelligent design.
                        </p>
                    </div>
                </section>

                {/* Vision Statement */}
                <section className="px-6 py-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-indigo-500/10">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent">
                                01 — Vision
                            </p>
                            <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
                                &quot;Our vision is to create a digital ecosystem where every interaction
                                is <span className="border-b-2 border-synapse-main text-synapse-main">meaningful</span>,
                                <span className="border-b-2 border-purple-500 text-purple-500"> efficient</span>, and
                                <span className="border-b-2 border-blue-500 text-blue-500"> intuitively human</span>.&quot;
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Mission */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent">
                                02 — MISSION
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                Connect disparate systems into a unified entity.
                            </h2>
                            <p className="text-synapse-gray leading-relaxed mb-8">
                                We believe technology should breathe. It shouldn't just function;
                                it should anticipate, adapt, and move alongside its users.
                            </p>

                            {/* Mission Image - Gradient Blob */}
                            <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 rounded-2xl overflow-hidden border border-white/10">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-r from-synapse-main to-blue-600 rounded-full blur-3xl animate-pulse opacity-50" />
                                </div>
                            </div>
                        </div>

                        {/* Right: Philosophy */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider mb-8 bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent">
                                03 — PHILOSOPHY
                            </p>
                            <div className="space-y-8">
                                {philosophyPrinciples.map((principle, index) => (
                                    <div key={index} className={`border-l-2 pl-6 py-2 ${index === 0 ? 'border-synapse-main' : index === 1 ? 'border-purple-500' : 'border-blue-500'}`}>
                                        <h3 className="text-xl font-bold font-heading mb-2">
                                            {principle.title}
                                        </h3>
                                        <p className="text-sm text-synapse-gray leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="px-6 py-16">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 dark:from-synapse-main/5 dark:to-blue-600/5 rounded-3xl p-8 md:p-12 border border-purple-100 dark:border-white/5">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent">
                            OUR STORY
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Built by creators, for builders.
                        </h2>
                        <p className="text-lg text-synapse-gray leading-relaxed mb-6">
                            Synap Tech began with a simple idea — that technology should empower creativity,
                            not complicate it. Founded by young innovators with a passion for design,
                            communication, and digital problem-solving, we help brands grow through
                            thoughtful design and purposeful execution.
                        </p>
                        <p className="text-lg text-synapse-gray leading-relaxed">
                            We&apos;re not just building websites or apps. We&apos;re building systems—platforms
                            that solve real problems, serve real users, and stand the test of time.
                        </p>
                    </div>
                </section>

                {/* Core Values */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-8 text-center bg-gradient-to-r from-synapse-main to-blue-600 bg-clip-text text-transparent">
                            CORE VALUES
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-synapse-main/50 transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className={`text-4xl font-bold mb-4 opacity-20 ${index % 2 === 0 ? 'text-synapse-main' : 'text-blue-600'}`}>
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold font-heading mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-synapse-gray leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Positioning */}
                <section className="px-6 py-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-synapse-main/10 to-blue-600/10 border border-synapse-main/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-synapse-main">
                            Who We Are
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Synapse is a digital systems company that builds for clients today
                            and platforms for tomorrow.
                        </h2>
                        <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
                            We&apos;re not just a web agency. We&apos;re not just a product studio.
                            We&apos;re building the infrastructure for the next generation of digital experiences.
                        </p>
                    </div>
                </section>

                {/* World CTAs */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Explore Services */}
                        <Link
                            href="/studio"
                            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-12 hover:border-synapse-main/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(109,40,217,0.3)] overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-synapse-main opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 text-synapse-main">
                                Explore Services
                            </h3>
                            <p className="text-synapse-gray">
                                Discover how we can power your vision through bespoke digital solutions.
                            </p>
                        </Link>

                        {/* View Systems */}
                        <Link
                            href="/systems"
                            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-12 hover:border-blue-600/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 text-blue-600">
                                View Systems
                            </h3>
                            <p className="text-synapse-gray">
                                Explore the platforms and the engineering that powers our intelligent design.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>

            <MainFooter />
        </div>
    );
}
