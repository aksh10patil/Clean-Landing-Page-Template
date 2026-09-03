import { cn } from '@/lib/utils';
import { IconPlus } from '@tabler/icons-react';
import React from 'react'

export const Card = ({ className, children }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn('bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-xs', className)}>
            {children}
        </div>
    )
}

export const CardContent = ({ className, children }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn('px-4 pb-6', className)}>
            {children}
        </div>
    )
}


export const CardTitle = ({ className, children }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h3 className={cn('text-lg md:text-2xl font-bold font-display text-neutral-900 dark:text-neutral-100', className)}>
            {children}
        </h3>
    )
}

export const CardCta = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            aria-label="Open feature"
            className=
            {cn('mt-5 flex items-center justify-center size-8 md:size-10 shrink-0 active:scale-0.98 transition duration-200 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer', className)}
            {...props}
        >
            <IconPlus className="size-4 md:size-5" />
        </button>
    )
}

export const CardSkeleton = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn('min-h-40 md:min-h-8 mask-radial-from-50% mask-r-from-80% relative overflow-hidden perspective-distant', className)}>
            {children}
        </div>

    )
}
