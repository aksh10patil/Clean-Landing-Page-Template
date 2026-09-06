'use client'

import React from "react"
import { motion } from "motion/react"
import {
    IconLogout,
    IconSparkles,
    IconZoomScan,
    IconMessageChatbot,
    IconChartPie,
    IconUserCheck,
    IconFileSearch
} from "@tabler/icons-react"
import {
    Clock,
    Hourglass,
    Timer,
    History,
    ClockCheck,
} from "lucide-react"

type Variant = 'success' | 'failed' | 'processing' | 'pending'

const variantConfig: Record<Variant, { label: string; className: string }> = {
    success: {
        label: 'Successful',
        className: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
    },
    failed: {
        label: 'Failed',
        className: 'bg-red-500/15 text-red-600 dark:text-red-400',
    },
    processing: {
        label: 'Processing',
        className: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
    },
    pending: {
        label: 'Pending',
        className: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    },
}

const IconBadge = ({
    icon: Icon,
    className = "bg-blue-500",
}: {
    icon: React.ComponentType<{ className?: string; stroke?: number }>
    className?: string
}) => {
    return (
        <div className={`size-[21px] rounded-[6.5px] ${className} text-white flex items-center justify-center shrink-0 shadow-xs`}>
            <Icon className="size-3" stroke={2.2} />
        </div>
    )
}

interface TableItemData {
    icon: React.ReactNode
    text: string
    status?: string
    statusColor?: string
    variant?: Variant
    description: string
    timerIcon?: React.ReactNode
}

const tableData: TableItemData[] = [
    {
        icon: <IconBadge icon={IconSparkles} className="bg-blue-500" />,
        text: "Personalized Email",
        status: "15s",
        timerIcon: <Clock className="size-3 shrink-0" />,
        statusColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
        description: "Personalized Email sent to ••••• @gmail.com",
    },
    {
        icon: <IconBadge icon={IconZoomScan} className="bg-purple-500" />,
        text: "Peer Review",
        status: "3",
        timerIcon: <History className="size-3 shrink-0 text-red-500" />,
        statusColor: "bg-red-500/10 text-red-600 dark:text-red-400",
        variant: "failed",
        description: "Reviewed and approved 2 outputs from pipeline",
    },
    {
        icon: <IconBadge icon={IconMessageChatbot} className="bg-sky-400" />,
        text: "Content Drafting",
        variant: "processing",
        description: "Generated draft campaign brief",
    },
    {
        icon: <IconBadge icon={IconUserCheck} className="bg-neutral-800 dark:bg-neutral-700" />,
        text: "Admin Approval",
        variant: "processing",
        description: "Final approval of marketing copy before dispatch",
    },
    {
        icon: <IconBadge icon={IconChartPie} className="bg-purple-500 dark:bg-purple-600" />,
        text: "Weekly Campaign Report",
        status: "2m",
        timerIcon: <Timer className="size-3 shrink-0" />,
        statusColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
        description: "Generated campaign performance report",
    },
    {
        icon: <IconBadge icon={IconFileSearch} className="bg-neutral-800 dark:bg-neutral-700" />,
        text: "SEO Audit",
        status: "5m",
        timerIcon: <Clock className="size-3 shrink-0" />,
        statusColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
        description: "Checked 50 web pages for SEO health and indexing",
    },
    {
        icon: <IconBadge icon={IconSparkles} className="bg-blue-500" />,
        text: "Price Monitoring Agent",
        status: "3",
        timerIcon: <History className="size-3 shrink-0 text-red-500" />,
        statusColor: "bg-red-500/10 text-red-600 dark:text-red-400",
        variant: "failed",
        description: "Checked competitor prices for top-ranked products",
    },
    {
        icon: <IconBadge icon={IconZoomScan} className="bg-emerald-500" />,
        text: "Research",
        status: "3m",
        timerIcon: <Clock className="size-3 shrink-0" />,
        statusColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
        description: "Searched 20 webpages for industry insights",
    },
    {
        icon: <IconBadge icon={IconFileSearch} className="bg-amber-500" />,
        text: "Data Enrichment",
        status: "12s",
        timerIcon: <ClockCheck className="size-3 shrink-0 text-emerald-500" />,
        statusColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
        variant: "success",
        description: "Enriched customer records and synced knowledge base",
    },
]

export const First = () => {
    return (
        <div className="w-full mt-6 md:mt-8 rounded-tl-2xl md:rounded-tl-3xl border-t border-l border-neutral-200/80 dark:border-neutral-800 p-1.5 pr-0 pb-0 bg-neutral-100/70 dark:bg-neutral-900/40 overflow-hidden">
            <div className="relative w-full rounded-tl-xl md:rounded-tl-2xl border-t border-l border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-xs">
                <div className="flex items-center px-5 py-3 gap-2 border-b border-neutral-100 dark:border-neutral-800">
                    <IconLogout className="size-5 text-neutral-700 dark:text-neutral-300" />
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Recent Activity</p>
                </div>

                <div className="divide-y divide-neutral-100/50 dark:divide-neutral-800 min-w-[500px] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]">
                    {tableData.map((item, index) => (
                        <TableItems
                            key={index}
                            index={index}
                            {...item}
                        />
                    ))}
                </div>

                {/* Bottom blur and gradient submerged fade */}
                <div className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 backdrop-blur-[2px]" />
            </div>
        </div>
    )
}

export const TableItems = ({
    icon,
    text,
    status,
    statusColor = 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    variant,
    description,
    timerIcon,
    index = 0,
}: {
    icon: React.ReactNode
    text: string
    status?: string
    statusColor?: string
    variant?: Variant
    description: string
    timerIcon?: React.ReactNode
    index?: number
}) => {
    const v = variant ? variantConfig[variant] : null

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
                filter: 'blur(4px)',
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            }}
            transition={{
                duration: 0.35,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
            grid
            grid-cols-[270px_1fr]
            items-center
            gap-6
            pl-5
            pr-0
            py-3
            border-b
            border-neutral-100/70
            dark:border-neutral-800
            last:border-b-0
        ">
            {/* Left */}
            <div className="flex items-center gap-2">
                {icon}

                <p className="text-xs truncate">
                    {text}
                </p>

                {/* Timer tag */}
                {status && (
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${statusColor}`}>
                        {timerIcon || <Hourglass className="size-3 shrink-0" />}
                        <span>{status}</span>
                    </div>
                )}

                {/* Variant badge */}
                {v && (
                    <div className={`px-2.5 py-1 rounded-md text-xs uppercase ${v.className}`}>
                        {v.label}
                    </div>
                )}
            </div>

            {/* Right */}
            <p className="text-xs text-neutral-500 whitespace-nowrap overflow-hidden text-left">
                {description}
            </p>
        </motion.div>
    )
}