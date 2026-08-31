'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="fixed right-4 top-4 z-50 inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
};

export default ModeToggle;
