"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import { CheckIcon, ChatBubbleLeftRightIcon, PaintBrushIcon, CreditCardIcon, BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import SectionBadge from '@/components/ui/SectionBadge';

interface ContentTier {
    name: string;
    type: 'retainer' | 'project';
    popular?: boolean;
    monthly?: Record<string, number>;
    price?: string;
    features: string[];
    description: string;
}

// Inner component that safely uses useSearchParams
function PricingContent({ onCategoryChange }: { onCategoryChange: (category: 'websites' | 'webapps') => void }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam === 'webapps' || categoryParam === 'websites') {
            onCategoryChange(categoryParam);
        }
    }, [searchParams, onCategoryChange]);

    return null;
}

export default function PricingPage() {
    const [selectedTerm, setSelectedTerm] = useState<'3-month' | '6-month' | '12-month'>('12-month');
    const [selectedCategory, setSelectedCategory] = useState<'websites' | 'webapps'>('websites');

    const contentCreationTiers: ContentTier[] = [
        {
            name: 'Basic',
            type: 'retainer',
            monthly: {
                '3-month': 1875,
                '6-month': 1725,
                '12-month': 1500
            },
            features: [
                '3 short-form videos/month',
                '10 flyers & graphics/month',
                'Basic editing',
                'Social media formats',
                'Delivery only (no planning)'
            ],
            description: "Keep your page alive. Honest, professional updates to show customers you are open for business."
        },
        {
            name: 'Standard',
            type: 'retainer',
            popular: true,
            monthly: {
                '3-month': 3250,
                '6-month': 2990,
                '12-month': 2600
            },
            features: [
                '5-6 short-form videos/month',
                '10-20 flyers & carousels/month',
                'Advanced editing',
                'Monthly content calendar',
                'Hashtag & caption strategy',
                'Basic performance report'
            ],
            description: "Growth mode. Strategic content and higher production quality to turn followers into customers."
        },
        {
            name: 'Campaign Launch',
            type: 'project',
            price: '4,000+',
            features: [
                'Cinematic Commercial Ad',
                'Motion Graphics & 3D Effects',
                'Viral Campaign Strategy',
                'Ad Spend Management',
                'Distribution Strategy',
                'On-Location Production',
                'High-end Production Value'
            ],
            description: "Go viral. High-end cinematic production for product launches and major promotions."
        }
    ];

    // Brand Websites - Identity packages
    const brandWebsitePackages = [
        {
            name: 'Basic',
            subtitle: 'Starter',
            priceRange: '2,500 - 3,500',
            idealClient: 'Personal Brands, Students, Solopreneurs',
            features: [
                '1-3 Static Pages',
                'Contact Form (Email)',
                'Mobile Responsive',
                '1 Month Free Support'
            ],
            maintenance: 100
        },
        {
            name: 'Standard',
            subtitle: 'Professional',
            popular: true,
            priceRange: '4,000 - 5,500',
            idealClient: 'Small Businesses, Shops, NGOs',
            features: [
                '5-8 Pages',
                'Blog / News Section',
                'SEO Optimization',
                'Google Maps Integration'
            ],
            maintenance: 150
        },
        {
            name: 'Premium',
            subtitle: 'Enterprise',
            priceRange: '7,000+',
            idealClient: 'Established Companies, Luxury Brands',
            features: [
                'Unlimited Pages',
                'Motion Graphics / Video Intro',
                'Professional Copywriting',
                'Custom Animations'
            ],
            maintenance: 300
        }
    ];

    // Business Applications - Systems packages
    const businessAppPackages = [
        {
            name: 'Basic App',
            subtitle: 'The Order Taker',
            priceRange: '4,000 - 5,500',
            techStack: 'Next.js + database',
            deliveryFormat: 'PWA (Installable)',
            features: [
                'Customer ordering via app',
                'WhatsApp order notifications',
                'Mobile-first PWA design',
                'Owner edits in database',
                'Quick setup & delivery'
            ],
            maintenance: 200
        },
        {
            name: 'Standard App',
            subtitle: 'The Manager',
            popular: true,
            priceRange: '6,500 - 9,000',
            techStack: 'Next.js + Admin Dashboard + Supabase/Firebase',
            deliveryFormat: 'PWA (Installable)',
            features: [
                'Everything in Basic, plus:',
                'Web admin dashboard (read-only)',
                'Sales analytics & charts',
                'Order history & search',
                'Real-time order alerts'
            ],
            maintenance: 350
        },
        {
            name: 'Premium App',
            subtitle: 'The Full System',
            priceRange: 'Custom Quote',
            techStack: 'Next.js + Full Stack + Supabase/Firebase',
            deliveryFormat: 'PWA (Installable)',
            features: [
                'Everything in Standard, plus:',
                'Full admin panel (read & write)',
                'Customer user accounts',
                'Real-time data sync',
                'Inventory management logic',
                'Custom business workflows'
            ],
            maintenance: 700
        }
    ];

    const categoryInfo = {
        websites: {
            title: 'Website Development',
            description: 'Perfect for portfolios, corporate profiles, NGOs, and professional services. Get found online, look professional, and build trust with your audience.',
            valueProposition: 'Get found, look professional, build trust.'
        },
        webapps: {
            title: 'Web Application Development',
            description: 'Ideal for restaurants, retail shops, booking agencies, and service providers. Automate your operations, manage data, and sell directly to customers.',
            valueProposition: 'Automate operations, manage data, sell directly.'
        }
    };

    const currentPackages = selectedCategory === 'websites' ? brandWebsitePackages : businessAppPackages;

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Suspense fallback={null}>
                <PricingContent onCategoryChange={setSelectedCategory} />
            </Suspense>
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
                        <SectionBadge title="Transparent Pricing" variant="studio" />

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

                {/* Website / Web App Development Pricing - FIRST */}
                <section className="px-6 py-20 bg-gray-50 dark:bg-synapse-black/50">
                    <motion.div
                        className="max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        {/* Dynamic Section Header */}
                        <motion.div className="text-center mb-8" variants={fadeInUp}>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                                {categoryInfo[selectedCategory].title}
                            </h2>
                            <p className="text-synapse-gray dark:text-gray-400 max-w-2xl mx-auto">
                                One-time investment. Choose the package that fits your needs.
                            </p>
                        </motion.div>

                        {/* Category Toggle */}
                        <motion.div className="flex justify-center mb-6" variants={fadeInUp}>
                            <div className="inline-flex items-center bg-white dark:bg-synapse-slate rounded-full p-1.5 border-2 border-gray-200 dark:border-white/10 shadow-lg">
                                <button
                                    onClick={() => setSelectedCategory('websites')}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === 'websites'
                                        ? 'bg-synapse-main text-white shadow-lg shadow-synapse-main/30'
                                        : 'text-synapse-gray dark:text-gray-400 hover:text-synapse-main'
                                        }`}
                                >
                                    Websites
                                </button>
                                <button
                                    onClick={() => setSelectedCategory('webapps')}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === 'webapps'
                                        ? 'bg-synapse-main text-white shadow-lg shadow-synapse-main/30'
                                        : 'text-synapse-gray dark:text-gray-400 hover:text-synapse-main'
                                        }`}
                                >
                                    Web Apps
                                </button>
                            </div>
                        </motion.div>

                        {/* Category Description */}
                        <motion.div
                            className="max-w-3xl mx-auto mb-12 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl text-center"
                            variants={fadeInUp}
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-sm text-synapse-gray dark:text-gray-300">
                                <span className="font-semibold text-synapse-main">{selectedCategory === 'websites' ? 'Brand Identity:' : 'Business Systems:'}</span>{' '}
                                {categoryInfo[selectedCategory].description}
                            </p>
                        </motion.div>

                        {/* Pricing Cards */}
                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={stagger}
                            key={`cards-${selectedCategory}`}
                        >
                            {currentPackages.map((pkg) => (
                                <motion.div
                                    key={pkg.name}
                                    variants={scaleIn}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className={`relative bg-white dark:bg-synapse-slate rounded-3xl p-8 border-2 ${pkg.popular ? 'border-synapse-main shadow-2xl shadow-synapse-main/20' : 'border-gray-200 dark:border-white/10'}`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-synapse-main text-white text-xs font-bold rounded-full">
                                            POPULAR
                                        </div>
                                    )}

                                    {/* Name with Subtitle */}
                                    <div className="mb-2">
                                        <h3 className="text-2xl font-bold">{pkg.name}</h3>
                                        {'subtitle' in pkg && (
                                            <p className="text-xs text-synapse-gray dark:text-gray-400 italic">{pkg.subtitle}</p>
                                        )}
                                    </div>

                                    {/* Tech Stack for Web Apps */}
                                    {'techStack' in pkg && (
                                        <div className="mb-3">
                                            <span className="inline-block px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                                                {pkg.techStack}
                                            </span>
                                        </div>
                                    )}

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold text-synapse-main">
                                            {pkg.priceRange === 'Custom Quote' ? 'Custom Quote' : `GH₵${pkg.priceRange}`}
                                        </span>
                                        <p className="text-sm text-synapse-gray dark:text-gray-400 mt-2">One-time payment</p>
                                    </div>

                                    {/* Ideal Client for Websites */}
                                    {'idealClient' in pkg && (
                                        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                                            <p className="text-xs text-synapse-gray dark:text-gray-400">
                                                <span className="font-medium">Ideal for:</span> {pkg.idealClient}
                                            </p>
                                        </div>
                                    )}

                                    {/* Delivery Format for Web Apps */}
                                    {'deliveryFormat' in pkg && (
                                        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                                            <p className="text-xs text-synapse-gray dark:text-gray-400">
                                                <span className="font-medium">Delivery:</span> {pkg.deliveryFormat}
                                            </p>
                                        </div>
                                    )}

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckIcon className="w-5 h-5 text-synapse-main flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Maintenance */}
                                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl mb-6">
                                        <p className="text-xs text-synapse-gray dark:text-gray-400">
                                            {selectedCategory === 'websites' ? 'Optional maintenance:' : 'Monthly maintenance:'}
                                        </p>
                                        <p className="text-sm font-bold text-synapse-main">
                                            {typeof pkg.maintenance === 'number' && pkg.maintenance >= 500
                                                ? `GH₵${pkg.maintenance}+/month`
                                                : `GH₵${pkg.maintenance}/month`
                                            }
                                        </p>
                                    </div>

                                    <Button
                                        href={`/studio/contact?service=${selectedCategory === 'websites' ? 'website-development' : 'web-application'}&package=${pkg.name.toLowerCase().replace(' ', '-')}`}
                                        variant={pkg.popular ? "primary" : "secondary"}
                                        className="w-full"
                                    >
                                        {pkg.priceRange === 'Custom Quote' ? 'Request Quote' : 'Get a Quote'}
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

                        {/* Flexibility Note */}
                        <motion.div
                            className="flex justify-center mb-8"
                            variants={fadeInUp}
                        >
                            <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-xl px-4 py-3 text-sm text-center">
                                <span className="font-semibold text-indigo-700 dark:text-indigo-300 block sm:inline">Need flexibility? </span>
                                <span className="text-synapse-gray dark:text-gray-400">
                                    All packages are adjustable. Swap <strong>1 Video → 2 Flyers</strong>. Need more videos? Swap <strong>3 Flyers → 1 Video</strong>.
                                </span>
                            </div>
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
                                    {'description' in tier && (
                                        <p className="text-sm text-synapse-gray dark:text-gray-400 mb-4 min-h-[40px]">
                                            {(tier as any).description}
                                        </p>
                                    )}

                                    <div className="mb-6">
                                        {tier.type === 'retainer' && 'monthly' in tier ? (
                                            <>
                                                <span className="text-4xl font-bold text-synapse-main">GH₵{tier.monthly?.[selectedTerm]?.toLocaleString()}</span>
                                                <span className="text-synapse-gray dark:text-gray-400">/mo</span>
                                                <p className="text-sm text-synapse-gray dark:text-gray-400 mt-1">{selectedTerm.replace('-', ' ')} term</p>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold text-synapse-main">
                                                    {'price' in tier ? `GH₵${tier.price}` : 'Custom'}
                                                </span>
                                                <p className="text-sm text-synapse-gray dark:text-gray-400 mt-1">
                                                    One-time payment
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckIcon className="w-5 h-5 text-synapse-main flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        href={`/studio/contact?service=content-creation&tier=${tier.name.toLowerCase().replace(' ', '-')}&term=${'type' in tier && tier.type === 'retainer' ? selectedTerm : 'one-time'}`}
                                        variant={tier.popular ? "primary" : "secondary"}
                                        className="w-full"
                                    >
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

                        <motion.div className="grid md:grid-cols-3 gap-6" variants={stagger}>
                            <motion.div
                                className="bg-white dark:bg-synapse-slate rounded-2xl p-8 border border-gray-200 dark:border-white/10"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Graphic Design</h3>
                                <p className="text-4xl font-bold text-synapse-main mb-4">GH₵100</p>
                                <p className="text-synapse-gray dark:text-gray-400">per design (banners, social posts)</p>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-synapse-slate rounded-2xl p-8 border border-gray-200 dark:border-white/10"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Single Video</h3>
                                <p className="text-4xl font-bold text-synapse-main mb-4">GH₵350</p>
                                <p className="text-synapse-gray dark:text-gray-400">per video (reels, tiktok, shorts)</p>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-synapse-slate rounded-2xl p-8 border border-gray-200 dark:border-white/10"
                                variants={scaleIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Presentations</h3>
                                <p className="text-2xl font-bold text-synapse-main mb-4">Custom</p>
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
