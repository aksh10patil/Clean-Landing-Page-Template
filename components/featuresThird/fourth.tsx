"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconRosette,
  IconRosetteFilled,
  IconStarFilled,
  IconCertificate,
  IconLeaf,
  IconPointerCheck,
  IconAdjustmentsCheck,
  IconShieldCheckFilled,
  IconShieldFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

type TagVariant = "blue" | "green" | "purple" | "neutral" | "rose";

interface TagItem {
  text: string;
  icon: React.ComponentType<{ className?: string; stroke?: number }>;
  variant: TagVariant;
}

const variantStyles: Record<TagVariant, string> = {
  blue: "bg-blue-50/90 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200/70 dark:border-blue-800/60 shadow-blue-500/5",
  green:
    "bg-emerald-50/90 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200/70 dark:border-emerald-800/60 shadow-emerald-500/5",
  purple:
    "bg-purple-50/90 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200/70 dark:border-purple-800/60 shadow-purple-500/5",
  neutral:
    "bg-neutral-100/90 text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-700/80 shadow-black/5",
  rose: "bg-rose-50/90 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200/70 dark:border-rose-800/60 shadow-rose-500/5",
};

const activeRingStyles: Record<TagVariant, string> = {
  blue: "ring-2 ring-blue-500/80 shadow-md shadow-blue-500/15 opacity-100 font-semibold",
  green:
    "ring-2 ring-emerald-500/80 shadow-md shadow-emerald-500/15 opacity-100 font-semibold",
  purple:
    "ring-2 ring-purple-500/80 shadow-md shadow-purple-500/15 opacity-100 font-semibold",
  neutral:
    "ring-2 ring-neutral-500/80 shadow-md shadow-neutral-500/15 opacity-100 font-semibold",
  rose: "ring-2 ring-rose-500/80 shadow-md shadow-rose-500/15 opacity-100 font-semibold",
};

const row1: TagItem[] = [
  { text: "Brand & Style", icon: IconRosette, variant: "blue" },
  { text: "Compliance & Policy", icon: IconCertificate, variant: "green" },
];

const row2: TagItem[] = [
  { text: "Content Safety Filters", icon: IconLeaf, variant: "purple" },
  { text: "Approval Triggers", icon: IconPointerCheck, variant: "neutral" },
];

const row3: TagItem[] = [
  {
    text: "Output Quality Checks",
    icon: IconAdjustmentsCheck,
    variant: "rose",
  },
];

interface CardContextData {
  title: string;
  icon: React.ReactNode;
  section1Title: string;
  section1Text: string;
  section2Title: string;
  tags: string[];
}

const cardContexts: Record<string, CardContextData> = {
  "Brand & Style": {
    title: "Brand & Style",
    icon: (
      <div className="relative flex items-center justify-center size-5 shrink-0">
        <IconRosetteFilled className="size-5 text-blue-500" />
        <IconStarFilled className="size-2 text-white absolute" />
      </div>
    ),
    section1Title: "Tone Guidelines",
    section1Text:
      "Use a light, conversational style with simple language, steering clear of formal phrasing or industry-specific terms",
    section2Title: "Banned Words",
    tags: ["Free", "Guaranteed", "Cheap", "Salesforce", "Exclusive Offer"],
  },
  "Compliance & Policy": {
    title: "Compliance & Policy",
    icon: (
      <div className="relative flex items-center justify-center size-5 shrink-0">
        <IconRosetteFilled className="size-5 text-emerald-500" />
        <IconShieldCheckFilled className="size-2.5 text-white absolute" />
      </div>
    ),
    section1Title: "Regulatory Standards",
    section1Text:
      "Ensure strict adherence to GDPR, SOC2, and HIPAA regulations. Automatically mask and redact all PII data prior to model storage.",
    section2Title: "Enforced Rules",
    tags: [
      "PII Redaction",
      "HIPAA Safeguard",
      "GDPR Consent",
      "Zero Retention",
    ],
  },
  "Content Safety Filters": {
    title: "Content Safety Filters",
    icon: (
      <div className="relative flex items-center justify-center size-5 shrink-0">
        <IconRosetteFilled className="size-5 text-purple-500" />
        <IconShieldFilled className="size-2.5 text-white absolute" />
      </div>
    ),
    section1Title: "Threshold Controls",
    section1Text:
      "Block toxic prompts, hate speech, jailbreak attempts, and adversarial prompt injections with high-confidence automated filtering.",
    section2Title: "Active Filters",
    tags: [
      "Prompt Injection (Block)",
      "Hate Speech (Strict)",
      "Toxicity (>0.8)",
      "PII Leakage",
    ],
  },
  "Approval Triggers": {
    title: "Approval Triggers",
    icon: (
      <div className="relative flex items-center justify-center size-5 shrink-0">
        <IconRosetteFilled className="size-5 text-neutral-700 dark:text-neutral-300" />
        <IconCircleCheckFilled className="size-2.5 text-white dark:text-neutral-950 absolute" />
      </div>
    ),
    section1Title: "Escalation Policy",
    section1Text:
      "Route high-impact actions, outbound payments, and sensitive account mutations to human reviewers before final model dispatch.",
    section2Title: "Trigger Conditions",
    tags: [
      "Refunds > $500",
      "Contract Sign-Off",
      "VIP Member Actions",
      "Confidence < 70%",
    ],
  },
  "Output Quality Checks": {
    title: "Output Quality Checks",
    icon: (
      <div className="relative flex items-center justify-center size-5 shrink-0">
        <IconRosetteFilled className="size-5 text-rose-500" />
        <IconStarFilled className="size-2 text-white absolute" />
      </div>
    ),
    section1Title: "Validation Criteria",
    section1Text:
      "Verify factual consistency against reference documents. Detect model hallucinations, validate citations, and enforce JSON schema conformity.",
    section2Title: "Quality Checks",
    tags: [
      "Factuality Index",
      "Citation Match",
      "JSON Schema Valid",
      "No Hallucinations",
    ],
  },
};

export default function Fourth() {
  const [selectedTag, setSelectedTag] = useState<string>("Brand & Style");
  const activeContext =
    cardContexts[selectedTag] || cardContexts["Brand & Style"];

  return (
    <div className="w-full h-full min-h-[340px] flex flex-col  justify-between relative select-none overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 z-20 bg-radial-[150%_75%_at_50%_50%]  from-neutral-100/70 via-transparent to-transparent dark:from-neutral-900/30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center  gap-2 sm:gap-2.5 pt-4 sm:pt-6 px-4">
        {/* Row 1 - Offset left */}
        <div className="flex items-center  justify-center gap-1 sm:gap-1.5 -translate-x-2 sm:-translate-x-3">
          {row1.map((item, i) => (
            <Tag
              key={item.text}
              text={item.text}
              icon={item.icon}
              variant={item.variant}
              delay={i * 0.08}
              isActive={selectedTag === item.text}
              onClick={() => setSelectedTag(item.text)}
            />
          ))}
        </div>

        {/* Row 2 - Offset right */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 translate-x-1 sm:translate-x-2">
          {row2.map((item, i) => (
            <Tag
              key={item.text}
              text={item.text}
              icon={item.icon}
              variant={item.variant}
              delay={0.16 + i * 0.08}
              isActive={selectedTag === item.text}
              onClick={() => setSelectedTag(item.text)}
            />
          ))}
        </div>

        {/* Row 3 - Centered */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5">
          {row3.map((item, i) => (
            <Tag
              key={item.text}
              text={item.text}
              icon={item.icon}
              variant={item.variant}
              delay={0.32 + i * 0.08}
              isActive={selectedTag === item.text}
              onClick={() => setSelectedTag(item.text)}
            />
          ))}
        </div>
      </div>

      <Card context={activeContext} />
    </div>
  );
}

const Tag = ({
  text,
  icon: Icon,
  variant,
  className,
  delay = 0,
  isActive = false,
  onClick,
}: {
  text: string;
  icon: React.ComponentType<{ className?: string; stroke?: number }>;
  variant: TagVariant;
  className?: string;
  delay?: number;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 8, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        opacity: isActive ? 1 : 0.65,
        scale: isActive ? 1.025 : 1,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.25,
        delay: delay * 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-0.5 rounded-xl sm:rounded-2xl border text-xs sm:text-sm tracking-tight shadow-xs cursor-pointer select-none backdrop-blur-xs outline-none transition-[box-shadow,border-color,background-color] duration-300 ease-out",
        variantStyles[variant],
        isActive ? activeRingStyles[variant] : "font-medium",
        className,
      )}
    >
      <Icon className="size-3.5 sm:size-4 shrink-0" stroke={2} />
      <span>{text}</span>
    </motion.button>
  );
};

const Card = ({ context }: { context: CardContextData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-[460px] mx-auto mt-4 md:mt-6 rounded-2xl md:rounded-3xl border border-neutral-200/80 dark:border-neutral-800 p-1.5 bg-neutral-100/70 dark:bg-neutral-900/40 shadow-xs"
    >
      <div className="relative w-full min-h-[220px] rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-xs p-4 sm:p-5 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={context.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3.5 sm:space-y-4"
          >
            {/* Header */}
            <div className="flex items-center gap-2">
              {context.icon}
              <h3 className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200 tracking-tight">
                {context.title}
              </h3>
            </div>

            {/* Section 1 */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {context.section1Title}
              </p>
              <div className="rounded-lg border border-dashed border-neutral-300/90 dark:border-neutral-700/90 p-3 sm:p-3.5 bg-neutral-50/50 dark:bg-neutral-900/20">
                <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {context.section1Text}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {context.section2Title}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {context.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.44,
                      delay: 0.12 + index * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-2.5 py-1 rounded-md border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-xs text-neutral-700 dark:text-neutral-300 font-normal shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
