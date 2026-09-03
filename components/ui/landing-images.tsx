'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export const LandingImages = ({ className }: { className?: string }) => {
    return (
        <div className={cn("mx-auto w-full max-w-5xl overflow-hidden mask-r-from-80% mask-b-from-75%", className)}>
            <div className="relative min-h-72 w-full overflow-hidden sm:min-h-89 md:min-h-140">

                {/* Back image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                        filter: 'blur(8px)',
                    }}
                    animate={{
                        opacity: 0.4,
                        scale: 1,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 perspective-[1800px] translate-y-16 md:translate-x-10 md:translate-y-24"
                >
                    <Image
                        src="/dashboard-new-2.png"
                        alt="Hero Image"
                        height={1080}
                        width={1920}
                        className="absolute left-1/2 top-0 w-[105%] max-w-none -translate-x-1/2 rounded-2xl object-contain mask-r-from-1% mask-b-from-1%"
                        style={{
                            transform:
                                'rotateX(48deg) rotateY(-10deg) rotateZ(-30deg)',
                            transformOrigin: 'center top',
                        }}
                    />
                </motion.div>

                {/* Main image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.94,
                        filter: 'blur(10px)',
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 perspective-[1800px] translate-y-4 md:translate-x-10 md:translate-y-8"
                >
                    <Image
                        src="/dashboard-new.png"
                        alt="Hero Image"
                        height={1080}
                        width={1920}
                        className="absolute left-1/2 top-2 w-[105%] max-w-none -translate-x-1/2 rounded-2xl border border-neutral-200 dark:border-neutral-800 object-contain shadow-brand mask-r-from-90% mask-b-from-85%"
                        style={{
                            transform:
                                'rotateX(48deg) rotateY(-10deg) rotateZ(-30deg)',
                            transformOrigin: 'center top',
                        }}
                    />
                </motion.div>

            </div>
        </div>
    )
}
