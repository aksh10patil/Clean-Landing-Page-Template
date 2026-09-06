"use client";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  IconArrowDown,
  IconBrandAdobe,
  IconBrandGoogle,
  IconBrandTiktok,
  IconFriends,
} from "@tabler/icons-react";
import React from "react";
import { LogoIcon } from "./logo";
import { SkeletonSecond } from "../features/skeletos/second";
import { motion } from "motion/react";
import { First } from "../featuresThird/first";
import { SkeletonSecondTest } from "../featuresThird/second-test";
import { Third } from "../featuresThird/third";
import Fourth from "../featuresThird/fourth";

export const FeaturesThird = () => {
  return (
    <section className="py-5 md:py-10 lg:py-15 relative overflow-hidden">
      <Container>
        {/* First layout  */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="pt-3 pl-3 pr-0 pb-0 md:pt-8 md:pl-8 relative overflow-hidden flex flex-col justify-between">
            <div className="pr-3 md:pr-8">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Audit Trail
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Design, launch and monitor your AI Agents with our Agent Studio.
                Our Agent Studio provides you with a visual interface to design
                your AI Agents.
              </p>
            </div>

            <CardSkeleton className="mt-2 flex-1 flex flex-col justify-end overflow-hidden">
              <First />
            </CardSkeleton>
          </div>
          <div className="p-3 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Roles Based Access
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Manage user roles and permissions to ensure that only authorized
                personnel can access and modify sensitive information.
              </p>
            </div>

            <CardSkeleton className=" flex-1 flex items-center justify-center mask-radial-from-1% overflow-hidden">
              <SkeletonSecondTest />
            </CardSkeleton>
          </div>
        </div>

        {/* Second layout  */}

        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="p-3 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Guardrail Engine
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Leverage our AI Guardrails to detect and block harmful, biased,
                or off-brand content before it reaches your users.
              </p>
            </div>

            <CardSkeleton className="mt-2 flex-1 flex flex-col justify-center items-center overflow-hidden">
              <Fourth />
            </CardSkeleton>
          </div>
          <div className="p-3 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Approval Queue
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Review AI-generated content, requests, and actions in a single
                queue before they go live. Approve or reject with just a click.
              </p>
            </div>

            <CardSkeleton className="mt-2 flex-1 flex items-center justify-center overflow-hidden">
              <Third mirrored />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export interface CardItem {
  name: string;
  icon: React.ReactNode;
}

export const Card = ({
  title,
  description,
  items,
  icon,
  iconBgClassName = "bg-blue-500 text-white",
}: {
  title: string;
  description: string;
  items?: CardItem[];
  icon: React.ReactNode;
  iconBgClassName?: string;
}) => {
  return (
    <div className="mx-auto w-full inset-x-1 max-w-sm rounded-[28px] mt-5 border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex items-start gap-5">
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            iconBgClassName,
          )}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-md font-semibold leading-none text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          {items && items.length > 0 && (
            <div className="mt-3 flex flex-row flex-wrap items-center gap-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-xs transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
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
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("h-full w-full mx-auto", className)}>{children}</div>
  );
};

export const CardSkeletontwo = () => {
  return (
    <div
      style={{
        transform: "rotateZ(-20deg) rotateY(-20deg) rotateX(-10deg) scale(1.1)",
      }}
      className="flex-1 overflow-hidden rounded-t-3xl gap-2 flex w-full h-full items-center justify-center inset-x-0 perspective-distant mask-t-from-80% mask-l-from-80% mask-r-from-80%"
    >
      <Circle
        style={{ transform: "rotateX(30deg) " }}
        className="size-90 bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60 [transform-style:preserve-3d]"
      >
        <SkeletonSecond
          isTilted={false}
          className="absolute -top-45 -left-30 scale-70 z-10"
        />
        <Circle className="size-70 bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
          <Circle className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <LogoIcon className="absolute size-10 opacity-70" />
          </Circle>
        </Circle>

        <div className="absolute bottom-20 -left-20 flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xs gap-3 px-3 py-1.5 justify-center bg-white dark:bg-neutral-900 z-10">
          <IconFriends className="size-4 text-neutral-600 dark:text-neutral-400" />
          <span className="text-sm leading-none text-neutral-700 dark:text-neutral-300 font-medium">
            Audience Insights Feed
          </span>
          <IconArrowDown className="size-4 text-neutral-600 dark:text-neutral-400" />
        </div>

        <motion.div
          initial={{ rotate: 20, scale: 1.1 }}
          whileHover={{ y: -6, scale: 1.08, rotate: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="absolute bottom-6 right-10 z-10 flex size-14  items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900"
        >
          <IconBrandGoogle className="size-8 text-emerald-500" />
        </motion.div>

        <motion.div
          whileHover={{ y: -3, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="absolute top-35 -right-20 z-10 flex size-14  items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900"
        >
          <IconBrandTiktok className="size-8 text-neutral-900 dark:text-neutral-100" />
        </motion.div>

        <motion.div
          whileHover={{ y: -3, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="absolute -top-6 -right-6 z-10 flex size-14 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900"
        >
          <IconBrandAdobe className="size-8 text-blue-500" />
        </motion.div>
      </Circle>
    </div>
  );
};

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
      className={cn(
        `size-40 relative shadow-xs flex items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-full mx-auto`,
        className,
      )}
    >
      {children}
    </div>
  );
};
