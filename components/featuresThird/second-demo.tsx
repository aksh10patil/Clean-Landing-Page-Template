import { LogoIcon } from '@/components/ui/logo'

export default function Second() {
    const patternClasses =
        'absolute inset-0 opacity-80 bg-neutral-50/50 dark:bg-neutral-900/50 [background-image:repeating-linear-gradient(45deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] dark:[background-image:repeating-linear-gradient(45deg,#262626_0,#262626_1px,transparent_0,transparent_50%)] [background-size:10px_10px]'

    const cardBase =
        'relative size-16 sm:size-20 md:size-22 rounded-2xl md:rounded-3xl transition-transform duration-300 hover:scale-105 shrink-0'

    const dashedCard = (opacity = 'opacity-100') => (
        <div
            className={`${cardBase} ${opacity} border border-dashed border-neutral-300 dark:border-neutral-700 overflow-hidden shadow-xs`}
        >
            <div className={patternClasses} />
        </div>
    )

    const avatarCard = (src: string, alt: string) => (
        <div
            className={`${cardBase} overflow-hidden border border-neutral-200/80 dark:border-neutral-700/80 shadow-md bg-neutral-100 dark:bg-neutral-800`}
        >
            <img src={src} alt={alt} className="size-full object-cover" />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
        </div>
    )

    return (
        <div className="w-full h-full flex flex-col items-center justify-center py-6 select-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]">
            <div className="flex flex-col items-center gap-3 sm:gap-4 scale-90 sm:scale-95 md:scale-100">
                {/* Row 0 (Faint background top) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 opacity-30">
                    {dashedCard()}
                    {dashedCard()}
                    {dashedCard()}
                </div>

                {/* Row 1 (4 items) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 relative">
                    {/* Admin cursor & pill */}
                    <div className="relative ">
                        {dashedCard('opacity-80')}
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

                    {avatarCard(
                        '/images/avatars/avatar-1.jpg',
                        'Team Member'
                    )}

                    {avatarCard(
                        '/images/avatars/avatar-2.jpg',
                        'Team Member'
                    )}

                    {dashedCard('opacity-80')}
                </div>

                {/* Row 2 (5 items - naturally staggered by half item) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    {dashedCard('opacity-40')}

                    {avatarCard(
                        '/images/avatars/avatar-3.jpg',
                        'Team Member'
                    )}

                    {/* Center Brand / Roles Logo */}
                    <div
                        className={`${cardBase} border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md flex items-center justify-center text-neutral-900 dark:text-neutral-100`}
                    >
                        <LogoIcon className="size-8" />
                    </div>

                    {avatarCard(
                        '/images/avatars/avatar-4.jpg',
                        'Team Member'
                    )}

                    {dashedCard('opacity-40')}
                </div>

                {/* Row 3 (4 items - aligned with Row 1) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 relative">
                    {dashedCard('opacity-80')}

                    {avatarCard(
                        '/images/avatars/avatar-5.jpg',
                        'Team Member'
                    )}

                    {/* Content Reviewer target */}
                    <div className="relative">
                        {avatarCard(
                            '/images/avatars/avatar-6.jpg',
                            'Content Reviewer'
                        )}
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

                    {dashedCard('opacity-80')}
                </div>

                {/* Row 4 (Faint background bottom) */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 opacity-30">
                    {dashedCard()}
                    {dashedCard()}
                    {dashedCard()}
                </div>
            </div>
        </div>
    )
}