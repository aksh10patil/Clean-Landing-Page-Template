import { cn } from '@/lib/utils'
import { IconCircleDashedCheck, IconClock, IconRipple } from '@tabler/icons-react'
import React from 'react'

export const SkeletonFirst = () => {
    return (
        <div style={{
            transform: 'rotateZ(15deg) rotateY(-20deg) rotateX(30deg) scale(1.2)',
        }} className="relative h-72  overflow-hidden pt-6 perspective-distant md:h-80 shadow-md">

            <SkeletonCard
                className="absolute left-1/2 top-26 z-30  -translate-x-1/2 "
                icon={<IconCircleDashedCheck className='size-4 shrink-0 text-neutral-700 dark:text-neutral-200' />}
                title='Campaign Planner'
                description='Campaigns are better planned with AI Agents that can help you plan, execute and monitor.'
                variant='success'
            />
            <SkeletonCard
                className="absolute top-16 left-44 z-20 max-w-[85%] -translate-x-1/2 scale-95 opacity-80"
                icon={<IconClock className='size-4 shrink-0 text-neutral-700 dark:text-neutral-200' />}
                title='Approval Process'
                description='AI Agents can help you automate your approval process by providing you with real time updates on the status of your approvals.'
                variant='warning'
            />
            <SkeletonCard
                className="absolute left-38 top-6 z-10 max-w-[80%] -translate-x-1/2 scale-90 opacity-60"
                icon={<IconRipple className='size-4 shrink-0 text-neutral-700 dark:text-neutral-200' />}
                title='Workflow Automation'
                description='AI Agents can help you automate your workflows by providing you with real time updates on the status of your workflows.'
                variant='danger'
            />
        </div>
    )
}





const SkeletonCard = ({ icon, title, description, variant, className }: { icon: React.ReactNode, title: string, description: string, variant?: 'danger' | 'success' | 'warning', className?: string }) => {
    return (
        <div className={cn('group/card max-w-[88%] h-fit w-full transition-[margin] duration-300 hover:-mt-2 hover:mb-2', className)}>
            <div className='rounded-lg border border-neutral-200 bg-white p-3 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100'>
                <div className='flex gap-3 items-center'>
                    {icon}
                    <p className='min-w-0 flex-1 text-sm font-medium text-neutral-900 dark:text-neutral-100'>{title}</p>
                    <Badge variant={variant} text='120S' />
                </div>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 py-3'>
                    {description}
                </p>
                <div className='flex items-center gap-2 mt-2 flex-wrap'>
                    <Tag text='AI Agent' />
                    <Tag text='SAAS' />
                    <Tag text='Automation' />
                </div>
            </div>
        </div>
    )
}

const Tag = ({ text }: { text: string }) => {
    return (
        <div className="px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-normal">{text}</p>
        </div>
    )
}


const Badge = ({ variant, text }: { variant?: 'danger' | 'success' | 'warning'; text: string }) => {
    return (
        <div className={cn('px-2 py-0.5 rounded-full flex items-center gap-1',
            variant === 'danger' ? 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-900/50' :
                variant === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900/50' :
                    variant === 'warning' ? 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900/50' :
                        'bg-neutral-100 text-neutral-700 border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700'
        )}>
            <IconClock className={cn('size-3')} />
            <IconRipple className={cn('size-3')} />
            <p className="text-xs font-normal">{text}</p>
        </div>
    )
}
