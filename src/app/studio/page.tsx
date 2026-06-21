import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    PencilSquareIcon,
    SwatchIcon,
    PresentationChartLineIcon,
    Cog6ToothIcon,
    ChevronRightIcon,
    SparklesIcon,
    BoltIcon,
    ShieldCheckIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export default function StudioPage() {
    const services = [
        { id: 'website-development', icon: CodeBracketIcon, title: 'Website Development', description: 'Custom websites built with modern technologies to ensure fast loading, responsive design, and excellent user experiences.' },
        { id: 'web-applications', icon: DevicePhoneMobileIcon, title: 'Web Applications', description: 'Custom business systems that automate operations, manage data, and enable direct customer transactions via installable PWAs.' },
        { id: 'content-creation', icon: PencilSquareIcon, title: 'Content Creation', description: 'Short-form video, brand photography, and social assets for businesses to grow their online presence.' },
        { id: 'graphic-design', icon: SwatchIcon, title: 'Graphic Design', description: 'Brand graphics, banners, and promotional assets that elevate your brand identity.' },
        { id: 'powerpoint-presentations', icon: PresentationChartLineIcon, title: 'PowerPoint Presentations', description: 'High-quality branded pitch decks and presentations that communicate your vision clearly.' },
        { id: 'website-maintenance', icon: Cog6ToothIcon, title: 'Website Maintenance', description: 'Keep your website fast, secure, and updated with our ongoing maintenance services.' },
    ];

    const stats = [
        { value: '50+', label: 'Projects Delivered' },
        { value: '25+', label: 'Happy Clients' },
        { value: '3+', label: 'Years Experience' },
        { value: '100%', label: 'Commitment' },
    ];

    const process = [
        { step: '01', title: 'Discover', desc: 'We dive deep into your business, goals, and audience to understand exactly what you need.' },
        { step: '02', title: 'Design', desc: 'We craft a concept and visual direction, giving you a clear preview before any code is written.' },
        { step: '03', title: 'Develop', desc: 'Our team builds your solution with modern, scalable technology and rigorous quality standards.' },
        { step: '04', title: 'Deliver', desc: 'We launch, optimize, and support your product to ensure it performs long after go-live.' },
    ];

    const pillars = [
        { icon: SparklesIcon, title: 'Design-Led', desc: 'Every pixel is intentional. We lead with design thinking to create experiences that feel effortless.' },
        { icon: BoltIcon, title: 'Fast & Reliable', desc: 'Modern tech stacks optimized for speed, SEO, and rock-solid performance on any device.' },
        { icon: ShieldCheckIcon, title: 'Built to Last', desc: 'Clean code, ongoing maintenance, and scalable architecture that grows with your business.' },
        { icon: RocketLaunchIcon, title: 'Results-Focused', desc: 'We measure success by your growth — more leads, more sales, more loyal customers.' },
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
                        <SectionBadge title="Studio" variant="studio" animated={true} />
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6 mt-6">
                            Digital experiences <br />
                            <span className="bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">that drive growth.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                            We design, develop, and deploy websites, web apps, and brand content that help
                            businesses convert visitors into loyal customers and achieve real results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/studio/work"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                Start a Project
                                <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/studio/pricing"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 font-semibold rounded-xl hover:border-primary/50 transition-all"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─────────── STATS — glassmorphic strip ─────────── */}
                <section className="px-6 py-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/10">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((s, i) => (
                                    <div key={s.label} className="text-center">
                                        <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-systems'}`}>
                                            {s.value}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─────────── 01 — CAPABILITIES ─────────── */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            01 — Capabilities
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight max-w-3xl">
                            A full-stack creative studio for ambitious brands.
                        </h2>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                            From custom websites to business systems and brand content — everything you need
                            to build a powerful digital presence, under one roof.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Link
                                    key={service.id}
                                    href={`/studio/services/${service.id}`}
                                    className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className={`text-4xl font-bold mb-4 opacity-20 ${index % 2 === 0 ? 'text-primary' : 'text-systems'}`}>
                                        0{index + 1}
                                    </div>
                                    <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                                        Learn More
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── 02 — PROCESS (asymmetric grid) ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: heading */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                                02 — Process
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                A proven process, built for results.
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                No guesswork. Just a clear, transparent path from first conversation to final
                                delivery. Every project follows the same battle-tested methodology.
                            </p>
                            <Link
                                href="/studio/work"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                            >
                                Start your project
                                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: numbered steps with left-border accents */}
                        <div className="space-y-6">
                            {process.map((p, i) => (
                                <div
                                    key={p.step}
                                    className={`border-l-2 pl-6 py-2 ${i % 2 === 0 ? 'border-primary' : 'border-systems'}`}
                                >
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className={`text-2xl font-bold font-heading opacity-30 ${i % 2 === 0 ? 'text-primary' : 'text-systems'}`}>
                                            {p.step}
                                        </span>
                                        <h3 className="text-xl font-bold font-heading">{p.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── 03 — WHY SYNAPSE (gradient story card) ─────────── */}
                <section className="px-6 py-16">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-soft to-systems-soft dark:from-primary/5 dark:to-systems/5 rounded-3xl p-8 md:p-12 border border-primary/40 dark:border-white/5">
                        <p className="text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-primary to-systems bg-clip-text text-transparent">
                            03 — Why Synapse
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                            Built different. Built to last.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {pillars.map((p, i) => (
                                <div key={p.title} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i % 2 === 0 ? 'bg-primary/10' : 'bg-systems/10'}`}>
                                            <p.icon className={`w-5 h-5 ${i % 2 === 0 ? 'text-primary' : 'text-systems'}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-heading mb-1">{p.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─────────── WORLD CTAs (large cards with hover glow) ─────────── */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        <Link
                            href="/studio/work"
                            className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-3xl p-12 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(109,40,217,0.3)] overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRightIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-4 text-primary">
                                Start a Project
                            </h3>
                            <p className="text-muted-foreground">
                                Tell us about your vision and we’ll craft a custom solution that drives real results.
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
