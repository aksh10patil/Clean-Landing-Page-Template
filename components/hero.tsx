import React from 'react'
import { Button } from './button'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './subheading'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { LandingImages } from './landing-images'

export const Hero = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center mx-auto max-w-7xl py-40">
                    <div >
                        <Heading asTag='h1' className="font-bold justify-left text-neutral-900 dark:text-neutral-100">
                            Agents That do the Work for You <br />
                            Approvals that keep you in the Loop.
                        </Heading>

                        <Subheading asTag='p' className="text-2xl leading-relaxed py-10 tracking-wide dark:text-neutral-400 mt-4">
                            Deploy AI Agents that plan, act through your tools, and <br />
                            report back to you without the need for you to do the work.
                        </Subheading>

                        <div className="flex gap-4">

                            <Button
                                href="/signup"
                                className="px-4 text-sm text-white bg-neutral-800 text-md
                        shadow-brand rounded-xl hover:bg-neutral-700 transition-colors"
                            >
                                Start a trail today
                            </Button >

                            <Button
                                href="/signup"
                                className="px-4 text-sm border-2 border-black text-black bg-white text-md
                         rounded-xl "
                            >
                                View Demo based on your use case &gt;
                            </Button >
                        </div>
                        <LandingImages />
                    </div>
                </div>


            </Container>



        </div>


    )
}
