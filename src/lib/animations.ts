/**
 * Animation utilities using Framer Motion
 * Provides consistent animations across the site
 */

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const staggerFast = {
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

export const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

// Viewport settings for scroll-triggered animations
export const viewportOnce = {
    once: true,
    amount: 0.3
};

export const viewportDefault = {
    once: false,
    amount: 0.2
};
