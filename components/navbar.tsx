'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Logo, LogoIcon } from './logo';
import { Container } from './container';
import { Button } from './button';
import { IconLayoutSidebar, IconX } from '@tabler/icons-react';



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

        <div className="flex md:hidden px-4 py-2 justify-between">
            <LogoIcon className="size-8" />
            <button onClick={() => setIsOpen(!isOpen)}>
                <IconLayoutSidebar className="size-4 " />

            </button>


            {isOpen && (<div className="fixed inset-0 h-full w-full bg-white">
                <button>
                    <IconX className="absolute top-2 right-2" onClick={() => setIsOpen(false)} />
                </button>
            </div>)}
        </div>

    )
}


export const DesktopNavbar = () => {
    return (

        <Container className="py-4  items-center justify-between hidden lg:flex">
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
