'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Logo, LogoIcon } from './logo';
import { Container } from './container';
import { Button } from './button';
import { IconLayoutSidebar, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';



const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Feature', href: '/feature' },
    { name: 'Socials', href: '/socials' },
    { name: 'Product', href: '/product' },
];

export const Navbar = () => {


    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800">
            <DesktopNavbar />
            <MobileNavbar />

        </div>
    );
};

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div className="flex items-center justify-between px-4 py-2 md:hidden">
                <Logo />

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    className="inline-flex size-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                >
                    <IconLayoutSidebar className="size-5" />
                </button>
            </div>


            <div>
                <div>
                    <AnimatePresence>

                        <div>
                            {isOpen && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        backdropFilter: "blur(15px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        backdropFilter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    className="fixed inset-0 z-100 min-h-dvh w-screen"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        aria-label="Close menu"
                                        className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                                    >
                                        <IconX className="size-5" />
                                    </button>


                                    <div className="flex  justify-center items-center pt-24 font-display text-shadow-black gap-6">
                                        {navLinks.map((item) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{
                                                    opacity: 0,
                                                    y: -20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -20,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: 0.1 * navLinks.indexOf(item),
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-lg text-neutral-600 text-shadow-black dark:text-neutral-400 font-medium"
                                                >
                                                    {item.name}
                                                </Link>

                                            </motion.div>

                                        ))}

                                    </div>


                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            delay: 0.1
                                        }}
                                    >

                                        <div className="flex items-center justify-center gap-4 pt-10">
                                            <Button
                                                href="/signup"
                                                className="px-4 py-2 text-sm text-white bg-neutral-800 shadow-brand rounded-xl hover:bg-neutral-700 transition-colors"
                                            >
                                                Sign Up
                                            </Button>

                                            <Button
                                                href="/login"
                                                className="px-4 py-2 text-sm text-black bg-white shadow-brand rounded-xl hover:bg-neutral-700 transition-colors"
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    </motion.div>


                                </motion.div>
                            )}
                        </div>

                    </AnimatePresence>

                </div>


            </div>


        </>
    );
}


export const DesktopNavbar = () => {
    return (

        <Container className="hidden items-center justify-between py-4 md:flex">
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


    )
}
