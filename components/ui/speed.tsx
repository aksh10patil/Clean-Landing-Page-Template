
import React from 'react'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './subheading'
import { LandingImages } from './landing-images'

export const Speed = () => {
    return (
        <Container className="py-10 md:py-20 lg:py-32">
            <div >

                <Heading >
                    Built for speed and scalability, <br /> Desgined for Scale.
                </Heading>

                <Subheading className="py-8 ">
                    Deploy AI Agents that plan, act through your tools,
                    and report back to you without the need for you to do the work.
                </Subheading>


                <LandingImages />



            </div>
        </Container>

    )
}
