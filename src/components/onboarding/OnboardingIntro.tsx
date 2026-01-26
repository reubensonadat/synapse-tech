"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, X, Server, Rocket, Users, Globe, Smartphone, Video } from 'lucide-react';
import { CodeBracketIcon, DevicePhoneMobileIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface OnboardingIntroProps {
    onComplete: () => void;
}

// Section Types
interface Section {
    type: 'welcome' | 'studio' | 'systems' | 'cta';
    title: string;
    highlight?: string;
    subtitle: string;
    items?: { icon: any; label: string; desc: string; }[];
    heroIcon?: any;
    heroDesc?: string;
}

// Master Content Configuration - Single Comprehensive Flow
const contentSections: Section[] = [
    {
        type: 'welcome',
        title: 'Welcome to',
        highlight: 'Synapse',
        subtitle: 'The convergence of creativity and engineering.'
    },
    {
        type: 'studio',
        title: 'Synapse Studio',
        subtitle: 'Our Digital Agency Arm',
        heroDesc: 'We partner with visionary businesses to design, develop, and launch world-class digital experiences.',
        items: [
            { icon: CodeBracketIcon, label: 'Website Development', desc: 'Custom websites built with modern technologies for speed and performance.' },
            { icon: DevicePhoneMobileIcon, label: 'Web Applications', desc: 'Custom business systems that automate operations and transactions.' },
            { icon: PencilSquareIcon, label: 'Content Creation', desc: 'Short-form video and brand assets to grow your online presence.' }
        ]
    },
    {
        type: 'systems',
        title: 'Synapse Systems',
        subtitle: 'Our Product Innovation Lab',
        heroDesc: 'We engineer and deploy our own proprietary SaaS platforms to solve critical infrastructure challenges.',
        items: [
            { icon: Server, label: 'Inventory Systems', desc: 'Smart stock management reducing waste and optimizing operations.' },
            { icon: Rocket, label: 'EdTech Platform', desc: 'Modern learning experiences for students and institutions.' },
            { icon: Users, label: 'R&D Labs', desc: 'Continuously identifying and solving real-world problems.' }
        ]
    },
    {
        type: 'cta',
        title: 'Two Worlds, One Vision',
        subtitle: 'Explore our services or discover our products.',
    }
];

// Particle component for background
function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                        opacity: 0,
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        y: [null, Math.random() * -100 - 50],
                        x: [null, (Math.random() - 0.5) * 50]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
}

// Welcome Slide
function WelcomeSlide({ section }: { section: Section }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full w-full px-6 py-12 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                className="mb-6 md:mb-8 relative z-10"
            >
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-synapse-main" />
            </motion.div>

            <motion.h1
                className="text-3xl sm:text-4xl md:text-7xl font-bold font-heading text-white mb-4 md:mb-6 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                {section.title}{' '}
                <span className="block mt-2 md:inline md:mt-0">
                    <motion.span
                        className="bg-gradient-to-r from-synapse-main via-purple-400 to-blue-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {section.highlight}
                    </motion.span>
                </span>
            </motion.h1>

            <motion.p
                className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                {section.subtitle}
            </motion.p>
        </div>
    );
}

// Detailed Slide (Studio/Systems)
function DetailSlide({ section }: { section: Section }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full w-full px-4 sm:px-6 py-12 text-center max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 md:mb-10 w-full"
            >
                <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold font-heading text-white mb-2 md:mb-3">
                    {section.title}
                </h2>
                <p className="text-lg md:text-2xl text-synapse-main font-medium mb-3 md:mb-4">{section.subtitle}</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    {section.heroDesc}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
                {section.items?.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.label}
                            className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-left backdrop-blur-sm"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-synapse-main/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 text-synapse-main">
                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{item.label}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// CTA Slide
function CTASlide({ section, onComplete }: { section: Section, onComplete: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full w-full px-6 text-center max-w-4xl mx-auto">
            <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {section.title}
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {section.subtitle}
            </motion.p>

            <motion.button
                onClick={onComplete}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-synapse-main text-white font-bold rounded-full overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(109,40,217,0.8)] transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
            >
                <span className="relative z-10 flex items-center gap-2 text-base md:text-lg">
                    Begin Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
        </div>
    );
}


export default function OnboardingIntro({ onComplete }: OnboardingIntroProps) {
    const [currentSection, setCurrentSection] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const STORAGE_KEY = 'synapse-onboarding-completed';

    // Check if already seen
    useEffect(() => {
        const hasSeen = sessionStorage.getItem(STORAGE_KEY);
        if (hasSeen === 'true') {
            setIsVisible(false);
            onComplete();
        }
    }, [onComplete]);

    // Lock Body Scroll
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

        const currentType = contentSections[currentSection].type;
        // Detailed sections get 2x time (16s), others get 8s
        const duration = (currentType === 'studio' || currentType === 'systems') ? 16000 : 8000;

        const timer = setTimeout(() => {
            if (currentSection < contentSections.length - 1) {
                setCurrentSection(prev => prev + 1);
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [currentSection, isVisible, isPaused]);

    const handleComplete = useCallback(() => {
        sessionStorage.setItem(STORAGE_KEY, 'true');
        setIsVisible(false);
        // Small delay to let animation finish before unlocking parent
        setTimeout(onComplete, 500);
    }, [onComplete]);

    if (!isVisible) return null;

    const section = contentSections[currentSection];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] bg-synapse-black text-white h-[100dvh] overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-synapse-main/10 via-black to-blue-500/10 pointer-events-none" />
                <Particles />

                {/* Fixed UI Controls */}
                <motion.button
                    onClick={handleComplete}
                    className="fixed top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span>Skip Intro</span>
                    <X className="w-4 h-4" />
                </motion.button>

                {/* Progress Indicators */}
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                    {contentSections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSection(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSection ? 'w-12 bg-synapse-main' : 'w-4 bg-white/20 hover:bg-white/40'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col pt-24 pb-24 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSection}
                            className="w-full min-h-full flex flex-col justify-center"
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {section.type === 'welcome' && <WelcomeSlide section={section} />}
                            {(section.type === 'studio' || section.type === 'systems') && <DetailSlide section={section} />}
                            {section.type === 'cta' && <CTASlide section={section} onComplete={handleComplete} />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
