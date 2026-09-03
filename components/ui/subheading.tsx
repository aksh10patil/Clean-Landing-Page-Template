import { cn } from '@/lib/utils';
import React from 'react';

export const Subheading = ({
    children,
    className,
    asTag = 'h2',
}: {
    children: React.ReactNode;
    className?: string;
    asTag?: 'h1' | 'h2' | 'p';
}) => {
    const Tag = asTag;

    return (
        <Tag
            className={cn(
                'text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl lg:text-xl tracking-tight font-inter',
                className
            )}
        >
            {children}
        </Tag>
    );
};
