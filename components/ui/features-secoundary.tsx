'use client'

import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import {
    IconArrowDown,
    IconArrowIteration,
    IconBrandAdobe,
    IconBrandAirtable,
    IconBrandCloudflare,
    IconBrandGoogle,
    IconBrandMessenger,
    IconBrandNotion,
    IconBrandSlack,
    IconBrandTelegram,
    IconBrandTiktok,
    IconBrandWhatsapp,
    IconCloudDataConnection,
    IconFriends,
    IconJumpRope,
    IconMoustache,
} from '@tabler/icons-react'
import React from 'react'
import { LogoIcon } from './logo'
import { SkeletonSecond } from '../features/skeletos/second'
import { motion } from 'motion/react'

export const FeaturesSecoundary = () => {
    return (
        <section className='py-10 md:py-20 lg:py-32 relative overflow-hidden'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800'>
                    <div className='p-4'>

                        <h2 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                            Agent Studio
                        </h2>
                        <p className='text-neutral-600 dark:text-neutral-400 mt-2'>
                            Design, launch and monitor your AI Agents with our Agent Studio. Our Agent Studio provides you with a visual interface to design your AI Agents.
                        </p>

                        <CardSkeleton>
                            <div className='relative w-full mx-auto p-4 rounded-3xl space-y-4'>
                                <div className='absolute inset-0 bg-gradient-to-br from-neutral-100 to-white/80 dark:from-neutral-900/40 dark:to-neutral-950/80 blur-2xl -z-10 rounded-3xl'></div>
                                <Card
                                    title='Connect Data'
                                    description='Link CRMs, helpdesks, and APIs to give agents secure, role-based access.'
                                    items={[
                                        { name: 'Airtable', icon: <IconBrandAirtable className='size-4 text-emerald-500' /> },
                                        { name: 'Notion', icon: <IconBrandNotion className='size-4 text-neutral-700 dark:text-neutral-200' /> },
                                        { name: 'Slack', icon: <IconBrandSlack className='size-4 text-amber-500' /> },
                                    ]}
                                    icon={<IconCloudDataConnection className='size-5' stroke={2.2} />}
                                />
                                <Card
                                    title='Deploy Agents'
                                    description='Deploy agents to multiple channels and platforms with a single click.'
                                    items={[
                                        { name: 'WhatsApp', icon: <IconBrandWhatsapp className='size-4 text-emerald-500' /> },
                                        { name: 'Facebook Messenger', icon: <IconBrandMessenger className='size-4 text-blue-500' /> },
                                        { name: 'Telegram', icon: <IconBrandTelegram className='size-4 text-sky-500' /> },

                                    ]}
                                    icon={<IconBrandCloudflare className='size-5 text-white' stroke={2.2} />}
                                    iconBgClassName='bg-red-500 text-white'
                                />
                            </div>
                        </CardSkeleton>

                    </div>
                    <div className='p-4 '>
                        <h2 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                            Multi-Tool Integration
                        </h2>
                        <p className='text-neutral-600 dark:text-neutral-400 mt-2'>
                            Our AI Agents can integrate with multiple tools to provide you with a seamless experience and give real-time updates on the status of your workflows.
                        </p>
                        <CardSkeleton>
                            <CardSkeletontwo />
                        </CardSkeleton>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                    <div className='col-span-1'>
                        <div className='flex items-center gap-3'>
                            <IconJumpRope />
                            <h2 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                                Workflow Automation
                            </h2>
                        </div>
                        <p className='text-neutral-600 dark:text-neutral-400 mt-6'>
                            Orchestrate complex workflows seamlessly. Define custom logic, approvals, and escalation paths to automate business processes with precision.
                        </p>
                    </div>

                    <div className='col-span-1'>
                        <div className='flex items-center gap-3'>
                            <IconArrowIteration />
                            <h2 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                                Integration Fabric
                            </h2>
                        </div>
                        <p className='text-neutral-600 dark:text-neutral-400 mt-6'>
                            Integrate with any system, service, or application. Our flexible architecture ensures smooth data flow and interoperability across your entire tech stack.
                        </p>
                    </div>

                    <div className='col-span-1'>
                        <div className='flex items-center gap-3'>
                            <IconMoustache />
                            <h2 className='text-lg font-bold text-neutral-900 dark:text-neutral-100'>
                                Human-in-the-loop
                            </h2>
                        </div>
                        <p className='text-neutral-600 dark:text-neutral-400 mt-6'>
                            Design, launch and monitor your AI Agents with our Agent Studio. Our Agent Studio provides you with a visual interface to design your AI Agents.
                        </p>
                    </div>
                </div>








            </Container>
        </section>

    )
}

export interface CardItem {
    name: string;
    icon: React.ReactNode;
}

export const Card = ({
    title,
    description,
    items,
    icon,
    iconBgClassName = 'bg-blue-500 text-white',
}: {
    title: string;
    description: string;
    items?: CardItem[];
    icon: React.ReactNode;
    iconBgClassName?: string;
}) => {
    return (
        <div className='mx-auto w-full inset-x-1 max-w-sm rounded-[28px] mt-5 border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950'>
            <div className='flex items-start gap-5'>
                <div className={cn('flex size-8 shrink-0 items-center justify-center rounded-full', iconBgClassName)}>
                    {icon}
                </div>

                <div>
                    <h3 className='text-md font-semibold leading-none text-neutral-900 dark:text-neutral-100'>
                        {title}
                    </h3>
                    <p className='mt-3 max-w-md text-base leading-7 text-neutral-600 dark:text-neutral-400'>
                        {description}
                    </p>
                    {items && items.length > 0 && (
                        <div className='mt-3 flex flex-row flex-wrap items-center gap-2'>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className='inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-xs transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800'
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export const CardSkeleton = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn('h-full w-full mx-auto', className)}>
            {children}
        </div>
    )
}

export const CardSkeletontwo = () => {
    return (
        <div
            style={{ transform: 'rotateZ(-20deg) rotateY(-20deg) rotateX(-10deg) scale(1.1)' }}
            className='flex-1 overflow-hidden rounded-t-3xl gap-2 flex w-full h-full items-center justify-center inset-x-0 perspective-distant mask-t-from-80% mask-l-from-80% mask-r-from-80%'>
            <Circle
                style={{ transform: 'rotateX(30deg) ' }}
                className='size-90 bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 [transform-style:preserve-3d]'
            >
                <SkeletonSecond
                    isTilted={false}
                    className='absolute -top-45 -left-30 scale-70 z-10' />
                <Circle className='size-70 bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60'>

                    <Circle className='bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800' >
                        <LogoIcon className='absolute size-10 opacity-70' />
                    </Circle>

                </Circle>


                <div className='absolute bottom-20 -left-20 flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xs gap-3 px-3 py-1.5 justify-center bg-white dark:bg-neutral-900 z-10'>
                    <IconFriends className='size-4 text-neutral-600 dark:text-neutral-400' />
                    <span className='text-sm leading-none text-neutral-700 dark:text-neutral-300 font-medium'>Audience Insights Feed</span>
                    <IconArrowDown className='size-4 text-neutral-600 dark:text-neutral-400' />
                </div>

                <motion.div
                    initial={{ rotate: 20, scale: 1.1 }}
                    whileHover={{ y: -6, scale: 1.08, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className='absolute bottom-6 right-10 z-10 flex size-14  items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900'
                >
                    <IconBrandGoogle className='size-8 text-emerald-500' />
                </motion.div>

                <motion.div
                    whileHover={{ y: -3, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className='absolute top-35 -right-20 z-10 flex size-14  items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900'
                >
                    <IconBrandTiktok className='size-8 text-neutral-900 dark:text-neutral-100' />
                </motion.div>

                <motion.div
                    whileHover={{ y: -3, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className='absolute -top-6 -right-6 z-10 flex size-14 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900'
                >
                    <IconBrandAdobe className='size-8 text-blue-500' />
                </motion.div>
            </Circle>

        </div>
    )
}


export const Circle = ({
    className,
    children,
    style,
}: {
    className?: string;
    size?: number;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            style={style}
            className={cn(`size-40 relative shadow-xs flex items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-full mx-auto`, className)}
        >
            {children}
        </div>
    )
}
