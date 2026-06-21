'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileMenu from '@/components/layout/MobileMenu';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NavbarContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const source = searchParams.get('source');

    //Determine which world we're in
    const isStudioWorld = pathname?.startsWith('/studio') || source === 'studio';
    const isSystemsWorld = pathname?.startsWith('/systems') || source === 'systems';
    const isHome = pathname === '/';

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3.5 glass border-b border-border/60 transition-colors duration-300">
                <Link href="/" className="flex items-center gap-2.5 group">
                    {/* Logo */}
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-border/60 shadow-soft transition-transform duration-300 group-hover:scale-105">
                        <Image src="/logo.png" alt="Synapse Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold font-heading text-foreground tracking-tight">Synapse</span>
                </Link>

                {/* Conditional Navigation based on world */}
                <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-muted-foreground">
                    {isHome ? (
                        <>
                            {/* Home navigation with Studio/Systems links */}
                            <Link href="/studio" className="px-3 py-2 rounded-full hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40 transition-all">Studio</Link>
                            <Link href="/systems" className="px-3 py-2 rounded-full hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40 transition-all">Systems</Link>
                            <Link href="/about" className="px-3 py-2 rounded-full hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40 transition-all">About</Link>
                            <ThemeToggle />
                        </>
                    ) : isStudioWorld ? (
                        <>
                            {/* Studio navigation — tightened to 4 links */}
                            <Link href="/studio" className={`px-3 py-2 rounded-full transition-all ${pathname === '/studio' ? 'bg-primary text-primary-foreground shadow-soft' : 'hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40'}`}>Studio</Link>
                            <Link href="/studio/work" className={`px-3 py-2 rounded-full transition-all ${pathname === '/studio/work' ? 'bg-primary text-primary-foreground shadow-soft' : 'hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40'}`}>Work</Link>
                            <Link href="/studio/pricing" className={`px-3 py-2 rounded-full transition-all ${pathname === '/studio/pricing' ? 'bg-primary text-primary-foreground shadow-soft' : 'hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40'}`}>Pricing</Link>
                            <Link href="/about?source=studio" className={`px-3 py-2 rounded-full transition-all ${pathname === '/about' ? 'bg-primary text-primary-foreground shadow-soft' : 'hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40'}`}>About</Link>
                            <ThemeToggle />
                        </>
                    ) : isSystemsWorld ? (
                        <>
                            {/* Systems navigation */}
                            <Link href="/systems" className={`px-3 py-2 rounded-full transition-all ${pathname === '/systems' ? 'bg-systems text-systems-foreground shadow-soft' : 'hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40'}`}>Systems Home</Link>
                            <Link href="/systems/impact" className={`px-3 py-2 rounded-full transition-all ${pathname === '/systems/impact' ? 'bg-systems text-systems-foreground shadow-soft' : 'hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40'}`}>Impact</Link>
                            <Link href="/systems/products" className={`px-3 py-2 rounded-full transition-all ${pathname === '/systems/products' ? 'bg-systems text-systems-foreground shadow-soft' : 'hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40'}`}>Products</Link>
                            <Link href="/systems/collaborate" className={`px-3 py-2 rounded-full transition-all ${pathname === '/systems/collaborate' ? 'bg-systems text-systems-foreground shadow-soft' : 'hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40'}`}>Collaborate</Link>
                            <Link href="/about?source=systems" className={`px-3 py-2 rounded-full transition-all ${pathname === '/about' ? 'bg-systems text-systems-foreground shadow-soft' : 'hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40'}`}>About</Link>
                            <ThemeToggle />
                        </>
                    ) : (
                        <>
                            {/* About page or other - show minimal */}
                            <Link href="/" className="px-3 py-2 rounded-full hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40 transition-all">Home</Link>
                            <Link href="/studio" className="px-3 py-2 rounded-full hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40 transition-all">Studio</Link>
                            <Link href="/systems" className="px-3 py-2 rounded-full hover:text-systems hover:bg-systems-soft/60 dark:hover:bg-systems-soft/40 transition-all">Systems</Link>
                            <Link href="/about" className="px-3 py-2 rounded-full hover:text-primary hover:bg-primary-soft/60 dark:hover:bg-primary-soft/40 transition-all">About</Link>
                            <ThemeToggle />
                        </>
                    )}
                </div>

                {/* CTA Button - conditional based on world */}
                {!isHome && (
                    <Link
                        href={isStudioWorld ? "/studio/work" : isSystemsWorld ? "/systems/collaborate" : "/studio/work"}
                        className={`hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg hover:scale-105 transition-all group ${isSystemsWorld ? 'bg-systems hover:bg-systems' : 'bg-primary hover:bg-primary/90'}`}
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

export default function Navbar() {
    return (
        <Suspense fallback={null}>
            <NavbarContent />
        </Suspense>
    );
}

