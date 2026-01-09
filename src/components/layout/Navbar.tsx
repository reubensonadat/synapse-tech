'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileMenu from '@/components/layout/MobileMenu';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    //Determine which world we're in
    const isStudioWorld = pathname?.startsWith('/studio');
    const isSystemsWorld = pathname?.startsWith('/systems');
    const isHome = pathname === '/';

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-synapse-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-200">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image src="/logo.png" alt="Synapse Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold font-heading text-black dark:text-white tracking-wide">Synapse</span>
                </Link>

                {/* Conditional Navigation based on world */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {isHome ? (
                        <>
                            {/* Minimal nav for home */}
                            <ThemeToggle />
                        </>
                    ) : isStudioWorld ? (
                        <>
                            {/* Studio navigation */}
                            <Link href="/studio/services" className={`hover:text-synapse-main transition-colors ${pathname === '/studio/services' ? 'text-synapse-main' : ''}`}>Services</Link>
                            <Link href="/studio/portfolio" className={`hover:text-synapse-main transition-colors ${pathname === '/studio/portfolio' ? 'text-synapse-main' : ''}`}>Portfolio</Link>
                            <Link href="/studio/pricing" className={`hover:text-synapse-main transition-colors ${pathname === '/studio/pricing' ? 'text-synapse-main' : ''}`}>Pricing</Link>
                            <Link href="/studio/contact" className={`hover:text-synapse-main transition-colors ${pathname === '/studio/contact' ? 'text-synapse-main' : ''}`}>Contact</Link>
                            <Link href="/about" className={`hover:text-synapse-main transition-colors ${pathname === '/about' ? 'text-synapse-main' : ''}`}>About</Link>
                            <ThemeToggle />
                        </>
                    ) : isSystemsWorld ? (
                        <>
                            {/* Systems navigation */}
                            <Link href="/systems/products" className={`hover:text-synapse-main transition-colors ${pathname === '/systems/products' ? 'text-synapse-main' : ''}`}>Products</Link>
                            <Link href="/systems/impact" className={`hover:text-synapse-main transition-colors ${pathname === '/systems/impact' ? 'text-synapse-main' : ''}`}>Impact</Link>
                            <Link href="/systems/roadmap" className={`hover:text-synapse-main transition-colors ${pathname === '/systems/roadmap' ? 'text-synapse-main' : ''}`}>Roadmap</Link>
                            <Link href="/systems/collaborate" className={`hover:text-synapse-main transition-colors ${pathname === '/systems/collaborate' ? 'text-synapse-main' : ''}`}>Collaborate</Link>
                            <Link href="/about" className={`hover:text-synapse-main transition-colors ${pathname === '/about' ? 'text-synapse-main' : ''}`}>About</Link>
                            <ThemeToggle />
                        </>
                    ) : (
                        <>
                            {/* About page or other - show minimal */}
                            <Link href="/" className="hover:text-synapse-main transition-colors">Home</Link>
                            <Link href="/studio" className="hover:text-synapse-main transition-colors">Studio</Link>
                            <Link href="/systems" className="hover:text-synapse-main transition-colors">Systems</Link>
                            <ThemeToggle />
                        </>
                    )}
                </div>

                {/* CTA Button - conditional based on world */}
                {!isHome && (
                    <Link
                        href={isStudioWorld ? "/studio/contact" : isSystemsWorld ? "/systems/collaborate" : "/studio/contact"}
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-synapse-main rounded-lg hover:bg-synapse-main/90 hover:scale-105 transition-all group"
                    >
                        {isStudioWorld ? "Get Started" : isSystemsWorld ? "Join Us" : "Get Started"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                )}

                {/* Mobile Menu Trigger Button */}
                <MobileMenu />
            </nav>
        </>
    );
}

