'use client';

import Image from 'next/image';
import React from 'react'

import { motion } from 'framer-motion'

export const LogoCloud = () => {


    const logos = [
        {
            title: 'Open AI',
            src: 'https://assets.aceternity.com/logos/openai.png',
        },
        {
            title: 'Hello Patient',
            src: 'https://assets.aceternity.com/logos/hello-patient.png',
        },
        {
            title: 'Granola',
            src: 'https://assets.aceternity.com/logos/granola.png',
        },
        {
            title: 'Character AI',
            src: 'https://assets.aceternity.com/logos/characterai.png',
        },
        {
            title: 'Portola',
            src: 'https://assets.aceternity.com/logos/portola.png',
        },
        {
            title: 'Oracle',
            src: 'https://assets.aceternity.com/logos/oracle.png',
        },

    ];

    return (
        <section>
            <h2 className="text-neutral-600 dark:text-neutral-400 text-center text-lg max-w-xl mx-auto mb-10">
                <span className="text-neutral-900 font-semibold dark:text-neutral-100">
                    Trusted by modern open source companies and
                </span>
                <br />
                startups to build their AI Agents.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">

                {logos.map((logo, index) =>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            filter: 'blur(8px)',
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 1.2,
                            delay: index * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        key={index}
                        className="flex items-center justify-center p-4"
                    >

                        <Image
                            key={index}
                            src={logo.src}
                            alt={logo.title}
                            width={100}
                            height={100}
                            className="size-25 object-contain mx-auto dark:invert dark:opacity-85 transition-all" />
                    </motion.div>
                )}
            </div>
        </section>
    )
}


