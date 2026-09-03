import { cn } from '@/lib/utils';
import React from 'react';

export const Heading = ({
    children,
    className,
    asTag = 'h1',
}: {
    children: React.ReactNode;
    className?: string;
    asTag?: 'h1' | 'h2';
}) => {
    const Tag = asTag;

    return (
        <Tag
            className={cn(
                'text-2xl md:text-3xl lg:text-6xl tracking-tight font-bold font-display text-neutral-900 dark:text-neutral-100',
                className
            )}
        >
            {children}
        </Tag>
    );
};
