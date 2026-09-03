'use client'

import { cn } from '@/lib/utils'
import { IconChecks, IconCircleDashedCheck, IconLoader2 } from '@tabler/icons-react'
import React from 'react'

export const SkeletonSecond = ({
    className,
    isTilted = true,
}: {
    className?: string;
    isTilted?: boolean;
} = {}) => {
    return (
        <div className={cn("group relative min-h-72 w-full overflow-hidden p-6 md:min-h-80", !isTilted && "overflow-visible", className)}>
            <div
                style={isTilted ? { transform: 'rotateZ(-30deg) rotateY(-30deg) rotateX(-20deg) scale(1.1) ' } : undefined}
                className={cn(
                    'mx-auto h-full shadow-md w-full max-w-[88%] rounded-lg border border-neutral-200 bg-white/90 p-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90',
                    isTilted && 'translate-x-2 perspective-distant'
                )}
            >
                <div className='flex items-center  gap-3'>
                    <IconCircleDashedCheck className='size-4 shrink-0 text-neutral-800 dark:text-neutral-200' />
                    <p className='min-w-0 flex-1 text-sm font-medium text-neutral-800 dark:text-neutral-100 persepective-distant'>
                        Campaign Planner
                    </p>
                </div>

                <div

                    className={cn(
                        'relative mt-6 h-44   rounded-md border border-neutral-200/70 dark:border-neutral-800/70',
                        "",
                        '[--pattern-fg:rgba(15,23,42,0.08)] [--row-line:rgba(15,23,42,0.1)] dark:[--pattern-fg:rgba(255,255,255,0.08)] dark:[--row-line:rgba(255,255,255,0.12)]',
                        'bg-[image:linear-gradient(135deg,_rgba(245,245,245,0.95),_rgba(229,229,229,0.7)_45%,_rgba(212,212,212,0.55)),repeating-linear-gradient(0deg,_var(--row-line)_0,_var(--row-line)_1px,_transparent_1px,_transparent_44px),repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:linear-gradient(135deg,_rgba(38,38,38,0.95),_rgba(23,23,23,0.78)_45%,_rgba(64,64,64,0.55)),repeating-linear-gradient(0deg,_var(--row-line)_0,_var(--row-line)_1px,_transparent_1px,_transparent_44px),repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]',
                        'bg-[size:100%_100%,100%_44px,10px_10px]'
                    )}
                >
                    <div className='absolute inset-0 z-20 h-full w-full overflow-hidden border-neutral-100 rounded-md border  bg-white/70 shadow-sm backdrop-blur transition-transform duration-300 translate-x-4 -translate-y-4 group-hover:translate-y-0 group-hover:translate-x-0 dark:border-white/10 dark:bg-neutral-950/55'>
                        <Row icon={<IconChecks className='size-4 text-green-500 ' />} text="Fetching data..." time="10 sec" />
                        <Row icon={<IconChecks className='size-4 text-green-500' />} text="Processing data..." time="3 sec" />
                        <Row icon={<IconChecks className='size-4 text-green-500' />} text="Generating report..." time="1 sec" />
                        <Row icon={<IconLoader2 className='size-4 text-yellow-500 animate-spin' />} text="Performing action..." time="Just now" />
                    </div>
                </div>

            </div>
        </div>
    )
}


const Row = ({ icon, text, time }: {
    icon: React.ReactNode;
    text: string;
    time: string;
}) => {
    return (
        <div className='flex items-center gap-3 border-b border-neutral-200/70 px-3 py-3 last:border-b-0 dark:border-neutral-800/80'>
            {icon}
            <p className='min-w-0 flex-1 text-sm font-medium text-neutral-800 dark:text-neutral-100'>{text}</p>
            <p className='text-xs font-normal text-neutral-500 dark:text-neutral-400'>{time}</p>
        </div>
    )
}
