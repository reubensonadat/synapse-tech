import Link from 'next/link';
import Button from '@/components/ui/Button';
import { TrendingUp } from 'lucide-react';

export default function StudioHero() {
    return (
        <section className="py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-synapse-gray hover:text-synapse-main transition-colors mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Go back to home
                </Link>

                {/* Hero Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                            Creating digital experiences that{' '}
                            <span className="text-synapse-main">drive real growth</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-synapse-gray dark:text-synapse-gray mb-8 leading-relaxed">
                            We simplify the complex, turning your vision into high-quality websites,
                            compelling content, and brand experiences that convert visitors into customers.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/studio/contact" variant="primary">
                                Book a free consultation
                            </Button>
                            <Button href="/studio/portfolio" variant="text">
                                Explore our work
                            </Button>
                        </div>
                    </div>

                    {/* Right: Metrics Card */}
                    <div className="relative">
                        <div className="bg-white dark:bg-synapse-slate border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-sm text-synapse-gray uppercase tracking-wide mb-2">Client Growth</p>
                                    <p className="text-4xl font-bold font-heading text-black dark:text-white">+124%</p>
                                </div>
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-gradient-to-r from-synapse-main to-synapse-glow rounded-full" />
                                </div>
                            </div>

                            <p className="text-sm text-synapse-gray">
                                Average conversion rate increase for our clients in the first 6 months
                            </p>

                            {/* Star Rating */}
                            <div className="flex items-center gap-1 mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-synapse-main/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-synapse-glow/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
