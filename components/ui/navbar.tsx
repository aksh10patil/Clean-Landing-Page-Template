'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Logo } from './logo';
import { Container } from './container';
import { Button } from './button';
import { IconLayoutSidebar, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import ModeToggle from './mode-toggle';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Feature', href: '/feature' },
    { name: 'Socials', href: '/socials' },
    { name: 'Product', href: '/product' },
];

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
            <DesktopNavbar />
            <MobileNavbar />
        </header>
    );
};

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between px-4 py-3 md:hidden">
                <Logo />

                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        className="inline-flex size-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                    >
                        <IconLayoutSidebar className="size-5" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-100 min-h-dvh w-screen bg-white/95 backdrop-blur-xl dark:bg-neutral-950/95"
                    >
                        <div className="flex items-center justify-between px-4 py-3">
                            <Logo />
                            <div className="flex items-center gap-2">
                                <ModeToggle />
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                    className="inline-flex size-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                                >
                                    <IconX className="size-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center pt-16 font-display gap-6">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2, delay: 0.05 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2, delay: 0.25 }}
                        >
                            <div className="flex items-center justify-center gap-4 pt-12">
                                <Button
                                    href="/signup"
                                    className="px-5 py-2.5 text-sm text-white bg-neutral-900 shadow-brand rounded-xl hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-colors"
                                >
                                    Sign Up
                                </Button>

                                <Button
                                    href="/login"
                                    className="px-5 py-2.5 text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900 shadow-brand rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    Login
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export const DesktopNavbar = () => {
    return (
        <Container className="hidden items-center justify-between py-4 md:flex">
            <Logo />

            <div className="flex items-center gap-6">
                {navLinks.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-3">
                <Link
                    href="/login"
                    className="text-sm px-3 py-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
                >
                    Login
                </Link>
                <Button
                    href="/signup"
                    className="px-4 py-2 text-sm text-white bg-neutral-900 shadow-brand rounded-xl hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-colors"
                >
                    Sign Up
                </Button>
                <ModeToggle />
            </div>
        </Container>
    );
};
