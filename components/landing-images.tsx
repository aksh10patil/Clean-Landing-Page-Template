'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export const LandingImages = () => {
    return (
        <div>
            <div className="relative min-h-140 w-full ">

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
                    className="perspective-[1800px] translate-x-20 translate-y-30"
                >
                    <Image
                        src="/dashboard-new-2.png"
                        alt="Hero Image"
                        height={1080}
                        width={1920}
                        className="absolute inset-0 object-contain rounded-2xl mask-r-from-1% mask-b-from-1%"
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
                    className="perspective-[1800px] translate-x-20 translate-y-60"
                >
                    <Image
                        src="/dashboard-new.png"
                        alt="Hero Image"
                        height={1080}
                        width={1920}
                        className="absolute inset-2 border border-gray-300 object-contain rounded-2xl mask-r-from-0% mask-b-from-30%"
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