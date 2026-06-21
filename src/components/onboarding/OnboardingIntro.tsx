"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

// 3D centerpieces — the real brand objects, dynamically imported (no SSR)
const ViewCanvas = dynamic(() => import('@/components/3d/ViewCanvas'), { ssr: false });
const StudioShape = dynamic(() => import('@/components/3d/StudioShape'), { ssr: false });
const SystemsShape = dynamic(() => import('@/components/3d/SystemsShape'), { ssr: false });

interface OnboardingIntroProps {
    onComplete: () => void;
}

type SlideType = 'welcome' | 'studio' | 'systems' | 'cta';

interface Slide {
    type: SlideType;
    eyebrow: string;
    title: string;
    highlight?: string;
    subtitle: string;
    shape: 'studio' | 'systems' | 'both' | 'none';
    accent: 'purple' | 'blue' | 'aurora';
}

const slides: Slide[] = [
    {
        type: 'welcome',
        eyebrow: 'Est. 2025',
        title: 'SYNAPSE',
        subtitle: 'The convergence of creativity and engineering. We build digital solutions that drive growth — and systems that define tomorrow.',
        shape: 'studio',
        accent: 'purple',
    },
    {
        type: 'studio',
        eyebrow: 'World One',
        title: 'Synapse',
        highlight: 'Studio',
        subtitle: 'A digital agency crafting bespoke client experiences — websites, web applications, content, and brand strategy for visionary businesses.',
        shape: 'studio',
        accent: 'purple',
    },
    {
        type: 'systems',
        eyebrow: 'World Two',
        title: 'Synapse',
        highlight: 'Systems',
        subtitle: 'A product innovation lab engineering proprietary platforms — real software solving real problems for thousands of real users.',
        shape: 'systems',
        accent: 'blue',
    },
    {
        type: 'cta',
        eyebrow: 'Two Worlds, One Vision',
        title: 'Choose your path.',
        subtitle: 'Explore bespoke client services, or discover the systems we\'ve built.',
        shape: 'both',
        accent: 'aurora',
    },
];

// Ambient glow color per accent
const glowFor = (accent: Slide['accent']) => {
    if (accent === 'purple') return 'bg-primary-glow/25';
    if (accent === 'blue') return 'bg-systems-glow/25';
    return 'bg-primary-glow/20';
};
const glowSecondaryFor = (accent: Slide['accent']) => {
    if (accent === 'purple') return 'bg-systems-glow/10';
    if (accent === 'blue') return 'bg-primary-glow/10';
    return 'bg-systems-glow/20';
};

export default function OnboardingIntro({ onComplete }: OnboardingIntroProps) {
    const [current, setCurrent] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const STORAGE_KEY = 'synapse-onboarding-completed';

    const slide = slides[current];

    // Check if already seen
    useEffect(() => {
        try {
            const hasSeen = localStorage.getItem(STORAGE_KEY);
            if (hasSeen === 'true') {
                setIsVisible(false);
                onComplete();
            }
        } catch {
            /* localStorage unavailable — show intro */
        }
    }, [onComplete]);

    // Lock body scroll while visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [isVisible]);

    // Auto-advance
    useEffect(() => {
        if (!isVisible || isPaused) return;
        const duration = slide.type === 'welcome' || slide.type === 'cta' ? 7000 : 9000;
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
        }, duration);
        return () => clearTimeout(timer);
    }, [current, isVisible, isPaused, slide.type]);

    const handleComplete = useCallback(() => {
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch {
            /* ignore */
        }
        setIsVisible(false);
        setTimeout(onComplete, 600);
    }, [onComplete]);

    const goTo = (i: number) => setCurrent(i);
    const goNext = useCallback(() => {
        setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, []);
    const goPrev = useCallback(() => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    // Keyboard navigation — arrow keys + Enter to enter on last slide
    useEffect(() => {
        if (!isVisible) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goNext();
            else if (e.key === 'ArrowLeft') goPrev();
            else if (e.key === 'Enter' && current === slides.length - 1) handleComplete();
            else if (e.key === 'Escape') handleComplete();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isVisible, current, goNext, goPrev, handleComplete]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] bg-background text-foreground h-[100dvh] overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Cinematic background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-subtle" />

                {/* Drifting grid */}
                <div
                    className="absolute inset-0 bg-grid-purple bg-grid opacity-[0.10] animate-grid-drift"
                    style={{
                        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
                    }}
                />

                {/* Ambient glow spots — transition color per slide */}
                <AnimatePresence>
                    <motion.div
                        key={`glow-a-${slide.accent}`}
                        className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${glowFor(slide.accent)}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        key={`glow-b-${slide.accent}`}
                        className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${glowSecondaryFor(slide.accent)}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                </AnimatePresence>

                {/* 3D centerpiece — swaps shape per slide */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full max-w-[900px] max-h-[900px] opacity-90">
                        <Suspense fallback={null}>
                            <ViewCanvas>
                                {slide.shape === 'studio' && <StudioShape />}
                                {slide.shape === 'systems' && <SystemsShape />}
                                {slide.shape === 'both' && (
                                    <group>
                                        <group position={[-2.4, 0, 0]} scale={0.75}><StudioShape /></group>
                                        <group position={[2.4, 0, 0]} scale={0.75}><SystemsShape /></group>
                                    </group>
                                )}
                            </ViewCanvas>
                        </Suspense>
                    </div>
                </div>

                {/* Skip control */}
                <motion.button
                    onClick={handleComplete}
                    className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-all press"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <span>Skip Intro</span>
                    <X className="w-3.5 h-3.5" />
                </motion.button>

                {/* Content overlay */}
                <div className="relative w-full h-full flex flex-col items-center justify-end md:justify-center px-6 pb-28 md:pb-0 pt-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="w-full max-w-4xl mx-auto text-center"
                            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Eyebrow */}
                            <motion.p
                                className={`label-eyebrow mb-5 ${slide.accent === 'blue' ? 'text-systems' : slide.accent === 'aurora' ? 'text-gradient-aurora' : 'text-primary'
                                    }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slide.eyebrow}
                            </motion.p>

                            {/* Title */}
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading tracking-tight leading-[1] mb-6">
                                {slide.highlight ? (
                                    <>
                                        {slide.title}{' '}
                                        <span className={slide.accent === 'blue' ? 'text-gradient-systems' : 'text-gradient-brand'}>
                                            {slide.highlight}
                                        </span>
                                    </>
                                ) : (
                                    <span className={slide.accent === 'aurora' ? 'text-gradient-aurora' : slide.accent === 'blue' ? 'text-gradient-systems' : 'text-gradient-brand'}>
                                        {slide.title}
                                    </span>
                                )}
                            </h1>

                            {/* Subtitle */}
                            <motion.p
                                className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                            >
                                {slide.subtitle}
                            </motion.p>

                            {/* CTA on final slide */}
                            {slide.type === 'cta' && (
                                <motion.button
                                    onClick={handleComplete}
                                    className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-strong hover:-translate-y-0.5 transition-all press"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Enter Synapse
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Prev / Next navigation controls — vertically centered at screen edges */}
                <div className="fixed inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-40 px-4 md:px-8">
                    <motion.button
                        onClick={goPrev}
                        disabled={current === 0}
                        aria-label="Previous slide"
                        className={`pointer-events-auto flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full glass press transition-all duration-300 ${current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 text-foreground hover:text-primary'}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        onClick={current === slides.length - 1 ? handleComplete : goNext}
                        aria-label={current === slides.length - 1 ? 'Enter Synapse' : 'Next slide'}
                        className={`pointer-events-auto flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full glass press transition-all duration-300 hover:scale-110 ${slide.accent === 'blue' ? 'text-systems hover:text-systems-glow' : 'text-primary hover:text-primary-glow'}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Progress indicators */}
                <div className="fixed bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-50 items-center">
                    {slides.map((s, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-premium ${index === current
                                ? s.accent === 'blue'
                                    ? 'w-10 bg-systems'
                                    : 'w-10 bg-primary'
                                : 'w-4 bg-border hover:bg-muted-foreground/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
