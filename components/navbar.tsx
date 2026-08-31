import React from 'react';
import Link from 'next/link';

import { Logo } from './logo';
import { Container } from './container';
import { Button } from './button';

export const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Feature', href: '/feature' },
        { name: 'Socials', href: '/socials' },
        { name: 'Product', href: '/product' },
    ];

    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800">
            <Container className="py-4 flex items-center justify-between">
                <Logo />

                <div className="flex items-center gap-4">
                    {navLinks.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium">
                        Login
                    </Link>
                    <Button
                        href="/signup"
                        className="px-4 py-2 text-sm text-white bg-neutral-800 shadow-brand rounded-xl hover:bg-neutral-700 transition-colors"
                    >
                        Sign Up
                    </Button>
                </div>
            </Container>
        </div>
    );
};
