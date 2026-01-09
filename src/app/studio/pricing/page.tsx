"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import { CheckIcon, ChatBubbleLeftRightIcon, PaintBrushIcon, CreditCardIcon, BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function PricingPage() {
    const [selectedTerm, setSelectedTerm] = useState<'3-month' | '6-month' | '12-month'>('12-month');

    const contentCreationTiers = [
        {
            name: 'Basic',
            monthly: {
                '3-month': 1875,
                '6-month': 1725,
                '12-month': 1500
            },
            features: [
                '1 short-form video/month',
                '3-4 professional photos/month',
                'Basic editing',
                'Social media formats'
            ]
        },
        {
            name: 'Standard',
            popular: true,
            monthly: {
                '3-month': 3250,
                '6-month': 2990,
                '12-month': 2600
            },
            features: [
                '3 short-form videos/month',
                '6-8 professional photos/month',
                'Advanced editing',
                'Multi-platform formats',
                'Content calendar planning'
            ]
        },
        {
            name: 'Premium',
            monthly: {
                '3-month': 4750,
                '6-month': 4370,
                '12-month': 3800
            },
            features: [
                '5 short-form videos/month',
                '10+ professional photos/month',
                'Premium editing & effects',
                'Brand strategy session',
                'Monthly content package',
                'Priority support'
            ]
        }
    ];

    const websitePackages = [
        {
            name: 'Starter',
            priceRange: '3,500 - 5,000',
            features: [
                'Up to 5 pages',
                'Responsive design',
                'Contact form',
                'Basic SEO',
                '1 month free support'
            ],
            maintenance: 250
        },
        {
            name: 'Business',
            popular: true,
            priceRange: '8,000 - 12,000',
            features: [
                'Up to 15 pages',
                'Custom design',
                'Advanced SEO',
                'Blog/CMS setup',
                'Analytics integration',
                '2 months free support'
            ],
            maintenance: 400
        },
        {
            name: 'E-Commerce',
            priceRange: '18,000 - 25,000',
            features: [
                'Unlimited pages',
                'Product catalog',
                'Payment integration',
                'User accounts',
                'Admin dashboard',
                'Inventory management',
                '3 months free support'
            ],
            maintenance: 800
        }
    ];

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
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-purple-200 dark:border-white/10 backdrop-blur-sm mb-8 shadow-sm"
                            variants={fadeInDown}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-wide uppercase text-purple-700 dark:text-purple-300">
                                Transparent Pricing
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Invest in Your Growth
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-slate-400 text-slate-600"
                            variants={fadeInUp}
                        >
                            Clear, honest pricing for every service. No hidden fees, no surprises.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Website Development Pricing - FIRST */}
                <section className="px-6 py-20 bg-gray-50 dark:bg-synapse-black/50">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.div className="text-center mb-12" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Website Development</h2>
                            <p className="text-synapse-gray dark:text-gray-400 max-w-2xl mx-auto">
                                One-time investment. Choose the package that fits your needs.
                            </p>
                        </motion.div>

                        <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger}>
                            {websitePackages.map((pkg) => (
                                <motion.div
                                    key={pkg.name}
                                    variants={scaleIn}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`relative bg-white dark:bg-synapse-slate rounded-3xl p-8 border-2 ${pkg.popular ? 'border-synapse-main shadow-2xl shadow-synapse-main/20' : 'border-gray-200 dark:border-white/10'}`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-synapse-main text-white text-xs font-bold rounded-full">
                                            POPULAR
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-synapse-main">GH₵{pkg.priceRange}</span>
                                        <p className="text-sm text-synapse-gray dark:text-gray-400 mt-2">One-time payment</p>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckIcon className="w-5 h-5 text-synapse-main flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl mb-6">
                                        <p className="text-xs text-synapse-gray dark:text-gray-400">Optional maintenance:</p>
                                        <p className="text-sm font-bold text-synapse-main">GH₵{pkg.maintenance}/month</p>
                                    </div>

                                    <Button href={`/studio/contact?service=website-development&package=${pkg.name.toLowerCase()}`} variant={pkg.popular ? "primary" : "secondary"} className="w-full">
                                        Get a Quote
                                    </Button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Content Creation Pricing - SECOND */}
                <section className="px-6 py-20">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.div className="text-center mb-12" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Content Creation</h2>
                            <p className="text-synapse-gray dark:text-gray-400 max-w-2xl mx-auto">
                                Monthly subscription packages. Longer terms = better rates.
                            </p>
                        </motion.div>

                        {/* Interactive Term Selector */}
                        <motion.div className="flex justify-center gap-2 mb-12 flex-wrap" variants={fadeInUp}>
                            {(['12-month', '6-month', '3-month'] as const).map((term) => (
                                <button
                                    key={term}
                                    onClick={() => setSelectedTerm(term)}
                                    className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${selectedTerm === term
                                        ? 'bg-synapse-main text-white border-synapse-main shadow-lg shadow-synapse-main/30'
                                        : 'border-gray-300 dark:border-white/20 hover:border-synapse-main/50'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{term.replace('-', ' ').toUpperCase()}</span>
                                    {term === '12-month' && <span className="ml-2 text-xs">BEST VALUE</span>}
                                </button>
                            ))}
                        </motion.div>

                        <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger}>
                            {contentCreationTiers.map((tier) => (
                                <motion.div
                                    key={tier.name}
                                    variants={scaleIn}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`relative bg-white dark:bg-synapse-slate rounded-3xl p-8 border-2 ${tier.popular ? 'border-synapse-main shadow-2xl shadow-synapse-main/20' : 'border-gray-200 dark:border-white/10'}`}
                                >
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-synapse-main text-white text-xs font-bold rounded-full">
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-synapse-main">GH₵{tier.monthly[selectedTerm].toLocaleString()}</span>
                                        <span className="text-synapse-gray dark:text-gray-400">/mo</span>
                                        <p className="text-sm text-synapse-gray dark:text-gray-400 mt-1">{selectedTerm.replace('-', ' ')} term</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckIcon className="w-5 h-5 text-synapse-main flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button href={`/studio/contact?service=content-creation&tier=${tier.name.toLowerCase()}&term=${selectedTerm}`} variant={tier.popular ? "primary" : "secondary"} className="w-full">
                                        Get Started
                                    </Button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Other Services */}
                <section className="px-6 py-20 bg-gray-50 dark:bg-synapse-black/50">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12" variants={fadeInUp}>
                            Additional Services
                        </motion.h2>

                        <motion.div className="grid md:grid-cols-2 gap-6" variants={stagger}>
                            <motion.div
                                className="bg-white dark:bg-synapse-slate rounded-2xl p-8 border border-gray-200 dark:border-white/10"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Graphic Design</h3>
                                <p className="text-4xl font-bold text-synapse-main mb-4">GH₵100</p>
                                <p className="text-synapse-gray dark:text-gray-400">per design (logos, banners, social posts)</p>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-synapse-slate rounded-2xl p-8 border border-gray-200 dark:border-white/10"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">PowerPoint Presentations</h3>
                                <p className="text-2xl font-bold text-synapse-main mb-4">Custom Quote</p>
                                <p className="text-synapse-gray dark:text-gray-400">Pricing based on slide count and complexity</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* How It Works - WITH HEROICONS */}
                <section className="px-6 py-20">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.div className="text-center mb-12" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">How It Works</h2>
                            <p className="text-synapse-gray dark:text-gray-400">Our transparent process from consultation to delivery</p>
                        </motion.div>

                        <motion.div className="space-y-4" variants={stagger}>
                            {[
                                { Icon: ChatBubbleLeftRightIcon, title: 'Free consultation', desc: 'Discuss your needs and project goals' },
                                { Icon: PaintBrushIcon, title: 'Concept preview', desc: 'See our vision before committing' },
                                { Icon: CreditCardIcon, title: '60% deposit', desc: 'Secure your project slot and begin work' },
                                { Icon: BoltIcon, title: 'We build', desc: 'Professional execution of your project' },
                                { Icon: CheckCircleIcon, title: 'Final payment & delivery', desc: 'Pay remaining 40%, receive complete deliverables' }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-4 bg-white dark:bg-synapse-slate p-6 rounded-2xl border border-gray-200 dark:border-white/10"
                                    variants={fadeInUp}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="p-3 bg-synapse-main/10 dark:bg-synapse-main/20 rounded-xl">
                                        <step.Icon className="w-6 h-6 text-synapse-main" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                        <p className="text-synapse-gray dark:text-gray-400 text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl"
                            variants={scaleIn}
                        >
                            <p className="text-sm text-center text-synapse-gray dark:text-gray-400">
                                <strong>Note:</strong> A 60% deposit is required to begin work. Full payment must be completed before final delivery. See our <Link href="/terms" className="text-synapse-main underline">Terms & Conditions</Link> for details.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* CTA */}
                <motion.section
                    className="px-6 py-20 bg-gray-50 dark:bg-synapse-black/50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={stagger}
                >
                    <motion.div className="max-w-4xl mx-auto bg-synapse-main/10 dark:bg-synapse-main/20 border border-synapse-main/30 rounded-3xl p-12 text-center" variants={scaleIn}>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Get Started?</h2>
                        <p className="text-synapse-gray dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and find the perfect package for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/studio/contact" variant="primary" className="text-lg px-8 py-4">
                                Book Free Consultation
                            </Button>
                            <Button href="/studio/services" variant="secondary" className="text-lg px-8 py-4">
                                View Services
                            </Button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            <StudioFooter />
        </div>
    );
}
