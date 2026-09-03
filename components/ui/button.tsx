import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
    href: string;
}

export const Button = ({
    children,
    className,
    variant = 'primary',
    href,
}: ButtonProps) => {
    const variantClasses = {
        primary: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white shadow-brand',
        secondary: 'border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800',
    };

    return (
        <Link
            href={href}
            className={cn('inline-flex items-center justify-center font-medium transition-colors cursor-pointer', variantClasses[variant], className)}
        >
            {children}
        </Link>
    );
};
