'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export const ModeToggle = ({ className }: { className?: string }) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={cn("size-9 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50", className)} />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={cn(
                "inline-flex size-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 shadow-xs transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
                className
            )}
        >
            {isDark ? (
                <Sun className="size-4.5 text-neutral-200 transition-transform duration-300 hover:rotate-45" />
            ) : (
                <Moon className="size-4.5 text-neutral-700 transition-transform duration-300 hover:-rotate-12" />
            )}
        </button>
    );
};

export default ModeToggle;
