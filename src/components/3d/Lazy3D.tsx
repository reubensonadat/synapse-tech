'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Lazy3D — defers mounting heavy children (React Three Fiber canvases) until
 * the wrapper is near the viewport. Keeps the hero paint instant and avoids
 * spinning up WebGL contexts the user hasn't scrolled to yet.
 *
 * Once revealed, children stay mounted (no re-mount churn on scroll-back).
 */
export default function Lazy3D({
    children,
    className,
    rootMargin = '250px',
}: {
    children: React.ReactNode;
    className?: string;
    rootMargin?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        // Respect reduced motion users — still mount, just no special handling.
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { rootMargin }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className={className}>
            {inView ? children : null}
        </div>
    );
}
