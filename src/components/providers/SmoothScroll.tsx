'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

/**
 * SmoothScrollProvider — premium, buttery inertial scroll across the entire app.
 *
 * Mirrors Vendly's Lenis configuration (duration 1.2, exponential ease-out) so
 * the whole site shares the same "daddy chill" dampened feel: fast flicks are
 * smoothed into a graceful glide instead of snapping. Lenis v1 drives native
 * scroll position, so position:fixed / sticky elements (Navbar, overlays) keep
 * working perfectly.
 */
export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Respect users who prefer reduced motion — hand back to native scroll.
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        let frameId: number;
        function raf(time: number) {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        }
        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);

    // Reset to top on every route change so navigation always lands cleanly.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [pathname]);

    return <>{children}</>;
}
