import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'text';
    className?: string;
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
    const baseStyles = "inline-flex items-center gap-2 font-medium transition-all duration-200";

    const variants = {
        primary: "px-6 py-3 bg-synapse-main text-white rounded-xl hover:bg-synapse-main/90 hover:scale-105 hover:shadow-lg hover:shadow-synapse-main/30",
        secondary: "px-6 py-3 border border-synapse-main text-synapse-main dark:text-synapse-main rounded-xl hover:bg-synapse-main/10",
        text: "text-synapse-main hover:text-synapse-main/80 group"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
                {variant === 'text' && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
            {variant === 'primary' && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
        </button>
    );
}
