'use client'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import Image from 'next/image'


export const SkeletonThree = () => {
    return (
        <div className=" flex items-center justify-center relative min-h-40 w-full md:min-h-80">
            <Image
            style={{
                transform: 'rotateZ(15deg) rotateY(-20deg) rotateX(0deg) scale(1.2)',
            }}
                src="/shield.png"
                alt="AI Agent"
                width={512}
                height={512}
                className="relative justify-center scale-140 perspective-distant items-center z-20 size-20 object-cover"
            />

            <DottedGlowBackground
                className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
                opacity={1}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
            />
        </div>
    )
}
