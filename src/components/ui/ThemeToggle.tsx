import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const isSystemsWorld = pathname?.startsWith('/systems');

    // Dynamic classes based on world
    const hoverBgColor = isSystemsWorld ? 'hover:bg-blue-600/20' : 'hover:bg-synapse-main/20';
    const hoverBorderColor = isSystemsWorld ? 'hover:border-blue-600/50' : 'hover:border-synapse-main/50';
    const iconHoverColor = isSystemsWorld ? 'group-hover:text-blue-600' : 'group-hover:text-synapse-main';

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg bg-white/5 border border-white/10"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-lg bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 ${hoverBgColor} ${hoverBorderColor} transition-all duration-200 group`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className={`w-5 h-5 text-white ${iconHoverColor} transition-colors duration-200 group-hover:rotate-45 transition-transform`} />
            ) : (
                <Moon className={`w-5 h-5 text-black dark:text-white ${iconHoverColor} transition-colors duration-200 group-hover:-rotate-12 transition-transform`} />
            )}
        </button>
    );
}
