import React from 'react'
import { Button } from './button'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './subheading'
import { LandingImages } from './landing-images'

export const Hero = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center mx-auto max-w-7xl py-40 md:mx-auto">
                    <div className="w-full">
                        <Heading asTag='h1' className=" justify-left text-neutral-900 dark:text-neutral-100">
                            Agents That do the Work for You <br />
                            Approvals that keep you in the Loop.
                        </Heading>

                        <Subheading asTag='p' className="text-2xl leading-relaxed py-10 tracking-wide dark:text-neutral-400 mt-4">
                            Deploy AI Agents that plan, act through your tools, and <br />
                            report back to you without the need for you to do the work.
                        </Subheading>

                        <div className="flex flex-wrap gap-4">

                            <Button
                                href="/signup"
                                className="px-5 py-2.5 text-sm text-white bg-neutral-900 shadow-brand rounded-xl hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-colors"
                            >
                                Start a trial today
                            </Button>

                            <Button
                                href="/signup"
                                className="px-5 py-2.5 text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                View Demo based on your use case &gt;
                            </Button>
                        </div>
                        <LandingImages />
                    </div>
                </div>


            </Container>



        </div>


    )
}
