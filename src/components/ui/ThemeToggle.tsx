"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

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
            className="p-2 rounded-lg bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:bg-synapse-main/20 hover:border-synapse-main/50 transition-all duration-200 group"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white group-hover:text-synapse-main transition-colors duration-200 group-hover:rotate-45 transition-transform" />
            ) : (
                <Moon className="w-5 h-5 text-black dark:text-white group-hover:text-synapse-main transition-colors duration-200 group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    );
}
