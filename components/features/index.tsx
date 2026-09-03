import React from 'react'
import { Container } from '../ui/container'
import { Heading } from '../ui/heading'
import { Subheading } from '../ui/subheading'
import { Card, CardContent, CardCta, CardSkeleton, } from './card'
import { CardTitle } from './card'
import { SkeletonFirst } from './skeletos/first'
import { SkeletonThree } from './skeletos/third'
import { SkeletonSecond } from './skeletos/second'

export const Features = () => {
    return (
        <Container className="py-10 md:py-20 lg:py-32">
            <div className="flex items-baseline-last justify-between ">

                <Heading>
                    Built for fast and scalable AI Agents.
                </Heading>
                <Subheading>
                    Deploy AI Agents that plan, act through your tools,
                    and report back to you without the need for you to do the work.
                </Subheading>



            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
                <Card>
                    <CardSkeleton>
                        <SkeletonFirst />
                    </CardSkeleton>
                    <CardContent>
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle className="flex-1">
                                Pre built Agents, Tuned to your use case.
                            </CardTitle>
                            <CardCta />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardSkeleton>
                        <SkeletonSecond />

                    </CardSkeleton>
                    <CardContent>
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle>
                                Automate your workflows with AI Agents.
                            </CardTitle>
                            <CardCta />

                        </div>
                    </CardContent>



                </Card>


                <Card>
                    <CardSkeleton>

                        <SkeletonThree />
                    </CardSkeleton>
                    <CardContent>
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle>
                                Approve and Monitor your AI Agents in real time.
                            </CardTitle>
                            <CardCta />
                        </div>
                    </CardContent>
                </Card>

            </div>



        </Container>
    )
}
