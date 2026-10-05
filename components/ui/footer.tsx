import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { Container } from './container';
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandDiscord,
    IconBrandLinkedin,
} from '@tabler/icons-react';

const footerLinks = {
    product: [
        { name: 'Features', href: '/#features' },
        { name: 'Integrations', href: '/#integrations' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Changelog', href: '/changelog' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Customers', href: '/customers' },
        { name: 'Contact', href: '/contact' },
    ],
    resources: [
        { name: 'Community', href: '/community' },
        { name: 'Help Center', href: '/help' },
        { name: 'API Reference', href: '/api' },
        { name: 'System Status', href: '/status' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security', href: '/security' },
    ],
};

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: IconBrandGithub },
    { name: 'X', href: 'https://x.com', icon: IconBrandX },
    { name: 'Discord', href: 'https://discord.com', icon: IconBrandDiscord },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: IconBrandLinkedin },
];

export const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 bg-background">
            <Container className="py-16 md:py-20">
                {/* Main grid */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
                        <div className="space-y-4 max-w-sm">
                            <Logo />
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                                Deploy autonomous AI agents that plan, act through your everyday tools, and report back with built-in guardrails.
                            </p>
                        </div>

                        {/* Status indicator */}
                        <div className="mt-8 flex items-center gap-2.5">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                All systems operational
                            </span>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 font-sans">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-sans"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 font-sans">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-sans"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 font-sans">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-sans"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 font-sans">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-sans"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom sub-footer */}
                <div className="mt-14 pt-8 border-t border-neutral-200/70 dark:border-neutral-800/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                        &copy; {new Date().getFullYear()} Agenforce, Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.name}
                                    className="size-8 rounded-lg flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/80 transition-all cursor-pointer"
                                >
                                    <Icon className="size-4" stroke={1.8} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
