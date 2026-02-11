import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'white';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

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
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300';

    const variants = {
        primary: 'bg-synapse-main text-white hover:bg-synapse-main/90 shadow-lg shadow-synapse-main/30 hover:shadow-synapse-main/50 hover:scale-105',
        secondary: 'bg-gray-100 dark:bg-white/10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/20',
        outline: 'bg-transparent border-2 border-synapse-main text-synapse-main hover:bg-synapse-main hover:text-white',
        text: 'bg-transparent text-synapse-gray dark:text-gray-400 hover:text-synapse-main',
        white: 'bg-white text-synapse-main hover:bg-gray-100 shadow-lg'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const styles = twMerge(baseStyles, variants[variant], sizes[size], disabled ? 'opacity-50 cursor-not-allowed' : '', className);

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
