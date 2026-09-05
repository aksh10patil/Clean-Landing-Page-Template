"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/ui/logo"

const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
]

const cardBase =
    "relative size-16 sm:size-20 md:size-22 rounded-2xl md:rounded-3xl "

const patternClasses =
    "absolute inset-0 opacity-80 bg-neutral-50/50 dark:bg-neutral-900/50 [background-image:repeating-linear-gradient(45deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] dark:[background-image:repeating-linear-gradient(45deg,#262626_0,#262626_1px,transparent_0,transparent_50%)] [background-size:10px_10px]"

const DashedCard = ({
    opacity = "opacity-100",
    className,
    children,
}: {
    opacity?: string
    className?: string
    children?: React.ReactNode
}) => (
    <div
        className={cn(
            cardBase,
            opacity,
            "border border-dashed border-neutral-300 dark:border-neutral-700 overflow-hidden shadow-xs",
            className
        )}
    >
        <div className={patternClasses} />
        {children}
    </div>
)

const Item = ({
    children,
    className,
    src = avatars[0],
    alt = "Team Member",
}: {
    children?: React.ReactNode
    className?: string
    src?: string
    alt?: string
}) => {
    return (
        <div
            className={cn(
                cardBase,
                "border border-dashed border-neutral-300 dark:border-neutral-700  flex items-center justify-center",
                className
            )}
        >
            <div className="flex items-center justify-center size-20 bg-gradient-to-br from-black via-transparent to-neutral-700 rounded-[12px] md:rounded-[13px] relative p-[1px] overflow-hidden shadow-sm">
                <Image
                    src={src}
                    width={100}
                    height={100}
                    alt={alt}
                    className="size-full object-cover aspect-square rounded-[12px] md:rounded-[13px]
                    transition-transform duration-300 hover:scale-[1.05] shrink-0"
                />
            </div>
            {children}
        </div>
    )
}

export const SkeletonSecondTest = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-6 select-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]">
            <div className="flex flex-col items-center gap-3 sm:gap-4 scale-90 sm:scale-95 md:scale-100">
                {/* Row 0 (Faint background top) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 opacity-30">
                    <DashedCard />
                    <DashedCard />
                    <DashedCard />
                </div>

                {/* Row 1 (4 items) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 relative">
                    {/* Admin cursor & pill */}
                    <div className="relative">
                        <DashedCard opacity="opacity-80" />
                        <div className="absolute top-10 -right-2 sm:-right-2 flex items-center gap-1.5 z-20 pointer-events-none">
                            <div className="px-2.5 py-1 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white text-[11px] font-medium shadow-md shadow-indigo-500/20 ring-1 ring-white/20">
                                Admin
                            </div>
                            <svg
                                className="size-3.5 text-indigo-600 dark:text-indigo-400 fill-current rotate-45 drop-shadow-sm"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 2l18 10.5-8.5 1.5 5 8-3 1.5-5-8-6.5 5.5z" />
                            </svg>
                        </div>
                    </div>

                    <Item src={avatars[0]} alt="Team Member 1" />
                    <Item src={avatars[1]} alt="Team Member 2" />

                    <DashedCard opacity="opacity-80" />
                </div>

                {/* Row 2 (5 items - naturally staggered) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <DashedCard opacity="opacity-40" />

                    <Item src={avatars[2]} alt="Team Member 3" />

                    {/* Center Brand / Roles Logo with subtle gradient */}
                    <div
                        className={cn(
                            cardBase,
                            "border border-dashed border-neutral-300 dark:border-neutral-700 p-1 flex items-center justify-center shadow-md"
                        )}
                    >
                        <div className="flex items-center justify-center size-full bg-neutral-900 border border-neutral-700/60 rounded-[12px] md:rounded-[18px] text-white">
                            <LogoIcon className="size-8" />
                        </div>
                    </div>

                    <Item src={avatars[3]} alt="Team Member 4" />

                    <DashedCard opacity="opacity-40" />
                </div>

                {/* Row 3 (4 items) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 relative">
                    <DashedCard opacity="opacity-80" />

                    <Item src={avatars[4]} alt="Team Member 5" />

                    {/* Content Reviewer target */}
                    <div className="relative">
                        <Item src={avatars[5]} alt="Content Reviewer" />
                        <div className="absolute -bottom-3 -right-6 sm:-right-8 flex items-center gap-1.5 z-20 pointer-events-none">
                            <svg
                                className="size-3.5 text-emerald-600 dark:text-emerald-400 fill-current rotate-345 drop-shadow-sm"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 2l18 10.5-8.5 1.5 5 8-3 1.5-5-8-6.5 5.5z" />
                            </svg>
                            <div className="px-2.5 py-1 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-[11px] font-medium shadow-md shadow-emerald-500/20 ring-1 ring-white/20 whitespace-nowrap">
                                Content Reviewer
                            </div>
                        </div>
                    </div>

                    <DashedCard opacity="opacity-80" />
                </div>

                {/* Row 4 (Faint background bottom) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 opacity-30">
                    <DashedCard />
                    <DashedCard />
                    <DashedCard />
                </div>
            </div>
        </div>
    )
}

export default SkeletonSecondTest