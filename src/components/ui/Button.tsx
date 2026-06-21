import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'systems' | 'secondary' | 'outline' | 'outlineSystems' | 'text' | 'white' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

/**
 * Button — peak-UI button system.
 *
 * Physics (anti-slop):
 *  - Hover: vertical lift (translateY -2px) + shadow growth. No scale on hover
 *    (scaling nudges neighbors in tight grids).
 *  - Active: push-down (translateY 1px + scale 0.98) — tactile, like pressing
 *    into the surface.
 *  - Focus-visible ring inherited globally for keyboard users.
 *
 * Variants cover both worlds: purple (Studio) + blue (Systems).
 */
export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button',
    disabled = false
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-premium focus-visible:outline-none active:translate-y-[1px] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const variants = {
        primary:
            'bg-primary text-primary-foreground shadow-medium hover:-translate-y-0.5 hover:shadow-strong hover:bg-primary/95',
        systems:
            'bg-systems text-systems-foreground shadow-medium hover:-translate-y-0.5 hover:shadow-strong hover:bg-systems/95',
        secondary:
            'bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-muted',
        outline:
            'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5',
        outlineSystems:
            'bg-transparent border-2 border-systems text-systems hover:bg-systems hover:text-systems-foreground hover:-translate-y-0.5',
        text:
            'bg-transparent text-muted-foreground hover:text-primary',
        ghost:
            'bg-transparent text-foreground hover:bg-muted',
        white:
            'bg-white text-primary shadow-medium hover:-translate-y-0.5 hover:shadow-strong hover:bg-white/90',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-[15px]',
        lg: 'h-13 px-8 text-base py-3.5',
    };

    const styles = twMerge(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles} disabled={disabled}>
            {children}
        </button>
    );
}
