'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const source = searchParams.get('source');

    // Determine which world we're in
    const isStudioWorld = pathname?.startsWith('/studio') || source === 'studio';
    const isSystemsWorld = pathname?.startsWith('/systems') || source === 'systems';
    const isHome = pathname === '/';

    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const closeMenu = () => setIsOpen(false);

    // Navigation links based on context
    const getNavigationLinks = () => {
        if (isHome) {
            return [
                { href: '/studio', label: 'Synapse Studio', description: 'Client Services' },
                { href: '/systems', label: 'Synapse Systems', description: 'Our Products' },
            ];
        } else if (isStudioWorld) {
            return [
                { href: '/studio', label: 'Studio', description: undefined },
                { href: '/studio/work', label: 'Work', description: undefined },
                { href: '/studio/pricing', label: 'Pricing', description: undefined },
                { href: '/about?source=studio', label: 'About', description: undefined },
            ];
        } else if (isSystemsWorld) {
            return [
                { href: '/systems', label: 'Systems Home', description: undefined },
                { href: '/systems/impact', label: 'Impact', description: undefined },
                { href: '/systems/products', label: 'Products', description: undefined },
                { href: '/systems/collaborate', label: 'Collaborate', description: undefined },
                { href: '/about?source=systems', label: 'About', description: undefined },
            ];
        } else {
            // About or other pages
            return [
                { href: '/', label: 'Home', description: undefined },
                { href: '/studio', label: 'Studio', description: undefined },
                { href: '/systems', label: 'Systems', description: undefined },
                { href: '/about', label: 'About', description: undefined },
            ];
        }
    };

    const navigationLinks = getNavigationLinks();

    return (
        <>
            {/* Hamburger Button - Only visible on mobile */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-black dark:text-white transition-colors p-1"
                aria-label="Open menu"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
            >
                <motion.div className="relative w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible">
                        <motion.line
                            x1="4" y1="4" x2="20" y2="4"
                            variants={{ hover: { y: -6 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        />
                        <motion.line
                            x1="4" y1="20" x2="20" y2="20"
                            variants={{ hover: { y: 6 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        />
                        <motion.line
                            x1="4" y1="12" x2="9" y2="12"
                            variants={{ hover: { x: -5 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        />
                        <motion.polyline
                            points="17 8 13 12 17 16"
                            variants={{ hover: { x: 5 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        />
                    </svg>
                </motion.div>
            </motion.button>

            {/* Mobile Menu Overlay - Rendered via Portal to escape Navbar constraints */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeMenu}
                            />

                            {/* Slide-in Menu Panel */}
                            <motion.div
                                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-background border-l border-border dark:border-white/10 z-[9999] md:hidden overflow-y-auto"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-border dark:border-white/10">
                                    <h2 className="text-xl font-bold font-heading">{isStudioWorld ? 'Studio' : isSystemsWorld ? 'Systems' : 'Menu'}</h2>
                                    <motion.button
                                        onClick={closeMenu}
                                        className="p-2 hover:bg-red-50 dark:hover:bg-red-900/10 text-muted-foreground hover:text-red-500 dark:text-muted-foreground dark:hover:text-red-400 rounded-lg transition-colors"
                                        aria-label="Close menu"
                                        whileHover={{ rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Navigation Links */}
                                <div className="p-6 space-y-2">
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`block px-4 py-3 rounded-xl font-medium transition-all ${pathname === link.href
                                                ? (isSystemsWorld ? 'bg-systems text-white' : 'bg-primary text-white')
                                                : `text-foreground dark:text-muted-foreground/70 ${isSystemsWorld ? 'hover:bg-systems-soft' : 'hover:bg-primary-soft'} dark:hover:bg-white/5`
                                                }`}
                                        >
                                            <div>
                                                <div className="font-bold">{link.label}</div>
                                                {link.description && (
                                                    <div className="text-xs mt-1 opacity-80">{link.description}</div>
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* World Switcher */}
                                {!isHome && (
                                    <div className="p-6 border-t border-border dark:border-white/10">
                                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground dark:text-muted-foreground mb-3">
                                            Switch World
                                        </p>
                                        {isStudioWorld ? (
                                            <Link
                                                href="/systems"
                                                onClick={closeMenu}
                                                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-systems-soft to-primary-soft dark:from-systems-deep/20 dark:to-primary-deep/20 border border-systems/30 dark:border-systems/30 rounded-xl hover:shadow-lg transition-all group"
                                            >
                                                <div>
                                                    <div className="font-bold text-systems dark:text-systems">Synapse Systems</div>
                                                    <div className="text-xs text-systems dark:text-systems-glow mt-1">
                                                        Explore our products
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-systems dark:text-systems-glow group-hover:translate-x-1 transition-transform stroke-[2]" />
                                            </Link>
                                        ) : isSystemsWorld ? (
                                            <Link
                                                href="/studio"
                                                onClick={closeMenu}
                                                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-soft to-primary-soft dark:from-primary-deep/20 dark:to-primary-deep/20 border border-primary/30 dark:border-primary/30 rounded-xl hover:shadow-lg transition-all group"
                                            >
                                                <div>
                                                    <div className="font-bold text-primary dark:text-primary">Synapse Studio</div>
                                                    <div className="text-xs text-primary dark:text-primary-glow mt-1">
                                                        Client services
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-primary dark:text-primary-glow group-hover:translate-x-1 transition-transform stroke-[2]" />
                                            </Link>
                                        ) : null}
                                    </div>
                                )}

                                {/* Dark Mode Toggle */}
                                <div className="p-6 border-t border-border dark:border-white/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-foreground dark:text-muted-foreground/70">
                                            Theme
                                        </span>
                                        <ThemeToggle />
                                    </div>
                                </div>

                                {/* CTA Button */}
                                {!isHome && (
                                    <div className="p-6 border-t border-border dark:border-white/10">
                                        <Link
                                            href={isStudioWorld ? '/studio/work' : isSystemsWorld ? '/systems/collaborate' : '/studio/work'}
                                            onClick={closeMenu}
                                            className={`block w-full px-6 py-3 text-center font-bold text-white rounded-xl hover:shadow-lg transition-all ${isSystemsWorld
                                                ? 'bg-systems hover:bg-systems hover:shadow-systems/30'
                                                : 'bg-primary hover:bg-primary/90 hover:shadow-primary/30'
                                                }`}
                                        >
                                            {isStudioWorld ? 'Get Started' : isSystemsWorld ? 'Join Us' : 'Get Started'}
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
