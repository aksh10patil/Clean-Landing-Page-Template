import Link from 'next/link';
import React from 'react';

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
        primary: 'bg-gray-600 text-black cursor-pointer',
        secondary: 'bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300',
    };

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-sm ${variantClasses[variant]} ${className}`}
        >
            {children}
        </Link>
    );
};
