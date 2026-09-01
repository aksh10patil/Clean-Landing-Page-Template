'use client';

import Image from 'next/image';
import React from 'react'

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
            <h2 className="text-neutral-500 dark:text-neutral-400 text-center text-lg max-w-xl mx-auto">
                <span className="text-neutral-700 font-medium dark:text-neutral-300">
                    Trusted by modern open source companies and
                </span>
                <br />
                startups to build their AI Agents.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">

                {logos.map((logo, index) =>
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.title}
                        width={100}
                        height={100}
                        className="size-25 object-contain mx-auto" />)}

            </div>
        </section>
    )
}
