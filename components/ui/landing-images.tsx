'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export const LandingImages = ({ className }: { className?: string }) => {
    return (
        <div className={cn("mx-auto w-full max-w-6xl mt-12 md:mt-16", className)}>
            <div className="relative min-h-[440px] sm:min-h-[580px] md:min-h-[680px] lg:min-h-[760px] w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_4%,rgba(0,0,0,0.6)_12%,black_22%,black_48%,rgba(0,0,0,0.75)_62%,rgba(0,0,0,0.3)_76%,rgba(0,0,0,0.05)_88%,transparent_96%),linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.85)_3%,black_7%,black_52%,rgba(0,0,0,0.78)_64%,rgba(0,0,0,0.38)_76%,rgba(0,0,0,0.08)_86%,transparent_93%)] [-webkit-mask-composite:source-in] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_4%,rgba(0,0,0,0.6)_12%,black_22%,black_48%,rgba(0,0,0,0.75)_62%,rgba(0,0,0,0.3)_76%,rgba(0,0,0,0.05)_88%,transparent_96%),linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.85)_3%,black_7%,black_52%,rgba(0,0,0,0.78)_64%,rgba(0,0,0,0.38)_76%,rgba(0,0,0,0.08)_86%,transparent_93%)] [mask-composite:intersect]">

                {/* Back image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                        filter: 'blur(8px)',
                    }}
                    animate={{
                        opacity: 0.45,
                        scale: 1,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 perspective-[1800px] translate-y-12 md:translate-x-4 md:translate-y-16 pointer-events-none select-none"
                >
                    <Image
                        src="/dashboard-new-2.png"
                        alt="Hero Background Preview"
                        height={1080}
                        width={1920}
                        className="absolute left-1/2 top-0 w-[100%] max-w-none -translate-x-1/2 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 object-contain shadow-2xl"
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
                    className="absolute inset-0 perspective-[1800px] translate-y-2 md:translate-x-0 md:translate-y-6"
                >
                    <Image
                        src="/dashboard-new.png"
                        alt="Hero Image"
                        height={1080}
                        width={1920}
                        priority
                        className="absolute left-1/2 top-0 w-[100%] max-w-none -translate-x-1/2 rounded-2xl border border-neutral-200 dark:border-neutral-800 object-contain shadow-brand"
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
