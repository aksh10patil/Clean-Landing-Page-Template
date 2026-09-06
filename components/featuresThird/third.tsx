"use client";

import React from "react";
import { motion } from "motion/react";
import { IconLoader2, IconMessageDots } from "@tabler/icons-react";
import ArrowSvg from "@/public/arrow-svg";
import { cn } from "@/lib/utils";

export const Third = ({ mirrored = false }: { mirrored?: boolean }) => {
  return (
    <div className="w-full h-full min-h-[280px] md:min-h-[320px] flex items-center justify-center relative overflow-hidden [perspective:1000px] select-none p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          rotateX: [-30, -28, -30],
          rotateY: mirrored ? [-5, -7, -5] : [5, 7, 5],
          rotateZ: mirrored ? [-30, -30.5, -30] : [30, 30.5, 30],
        }}
        transition={{
          rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        }}
        className="relative [transform-style:preserve-3d] z-10 w-full h-full flex items-center justify-center mask-radial-from-1%"
      >
        {/* Block grid pattern in sync with the 3D plane */}
        <Pattern />

        <div
          className={cn(
            "relative z-10 flex items-center justify-center gap-2",
            mirrored && "flex-row-reverse",
          )}
        >
          {/* Processing Badge */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: mirrored ? -12 : 12 }}
            viewport={{ once: true }}
            animate={{ y: [-2, 2, -2] }}
            transition={{
              y: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className={cn(
              "z-20 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs md:text-sm font-medium bg-yellow-300 text-yellow-950 dark:bg-yellow-400 dark:text-yellow-950 rounded-lg shadow-xs cursor-default select-none",
              mirrored ? "-translate-x-3" : "translate-x-3",
            )}
          >
            <IconLoader2
              className="size-4 animate-spin [animation-duration:3s] shrink-0"
              stroke={2.2}
            />
            <span>Processing...</span>
          </motion.div>

          {/* Reciprocal Loop Arrows */}
          <div
            className={cn(
              "relative flex flex-col gap-y-10 z-10",
              mirrored && "scale-x-[-1]",
            )}
          >
            {/* Radial mask backdrop behind both SVGs */}
            <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-full bg-white/80 dark:bg-neutral-950/80 blur-lg [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

            {/* Top Arrow */}
            <motion.div
              animate={{
                x: [-2, 3, -2],
                scale: [0.98, 1.02, 0.98],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative origin-center"
            >
              {/* Mask behind top SVG */}
              <div className="absolute inset-0 -inset-x-2 -inset-y-1 z-0 rounded-full bg-white/70 dark:bg-neutral-950/70 blur-md [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />
              <ArrowSvg className="relative z-10 size-40 text-neutral-300 dark:text-neutral-700 rotate-180 transition-colors duration-300 hover:text-yellow-500/80" />
            </motion.div>

            {/* Bottom Arrow */}
            <motion.div
              animate={{
                x: [2, -3, 2],
                scale: [0.98, 1.02, 0.98],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="relative origin-center"
            >
              {/* Mask behind bottom SVG */}
              <div className="absolute inset-0 -inset-x-2 -inset-y-1 z-0 rounded-full bg-white/70 dark:bg-neutral-950/70 blur-md [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />
              <ArrowSvg className="relative z-10 size-40 text-neutral-300 dark:text-neutral-700 transition-colors duration-300 hover:text-green-500/80" />
            </motion.div>
          </div>

          {/* Feedback Badge */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: mirrored ? 12 : -12 }}
            viewport={{ once: true }}
            animate={{ y: [2, -2, 2] }}
            transition={{
              y: {
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
              opacity: { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            }}
            className={cn(
              "z-20 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs md:text-sm font-medium bg-green-300 text-green-950 dark:bg-green-400 dark:text-green-950 rounded-lg shadow-xs cursor-default select-none",
              mirrored ? "translate-x-3" : "-translate-x-3",
            )}
          >
            <IconMessageDots className="size-4 shrink-0" stroke={2.2} />
            <span>Feedback</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute -inset-40 z-0 bg-[#f9fafb] dark:bg-neutral-950 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_70%)] pointer-events-none" />
  );
};
