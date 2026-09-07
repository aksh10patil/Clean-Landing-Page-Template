import React from "react";
import { Container } from "../ui/container";
import {
  IconLockAccess,
  IconUsersPlus,
  IconIdBadge,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

interface PlanProps {
  price: string;
  period?: string;
  description: string;
  features: string[];
  variant?: "filled" | "outlined";
}

const plans: PlanProps[] = [
  {
    price: "$10",
    period: "/mon",
    description: "Perfect for individuals or small teams exploring automation.",
    features: [
      "1 AI agent included",
      "Standard integrations",
      "Basic approval flows",
      "7-day activity logs",
    ],
    variant: "filled",
  },
  {
    price: "$60",
    period: "/mon",
    description: "Ideal for growing teams ready to scale automation safely.",
    features: [
      "Up to 5 AI agents",
      "Multi-agent orchestration",
      "Advanced approval routing",
      "30-day audit trails",
      "ROI insights",
    ],
    variant: "outlined",
  },
];

const highlights = [
  {
    icon: IconLockAccess,
    title: "Built-in Guardrails",
  },
  {
    icon: IconUsersPlus,
    title: "Agent Orchestration",
  },
  {
    icon: IconIdBadge,
    title: "Human-in-the-Loop",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Information & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm md:text-[15px] font-semibold text-neutral-400 dark:text-neutral-500 mb-3 tracking-tight">
                Trusted by 500+ enterprise companies
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-6">
                Affordable pricing.
                <br />
                Easy scaling.
              </h2>

              <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md">
                Start small to explore automation, add agents as you scale, and
                unlock enterprise-grade guardrails, orchestration, and reporting
                when you’re ready
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-10 lg:mt-16">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon
                      className="w-5 h-5 text-neutral-800 dark:text-neutral-200 shrink-0"
                      stroke={2.2}
                    />
                    <span className="text-base font-semibold text-neutral-800 dark:text-neutral-200 tracking-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Pricing Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const PricingCard = ({
  price,
  period = "/mon",
  description,
  features,
  variant = "filled",
}: PlanProps) => {
  const isFilled = variant === "filled";

  return (
    <div
      className={`rounded-[32px] -translate-y-5 p-8 sm:p-10 transition-all ${
        isFilled
          ? "bg-neutral-100/50 border border-neutral-700 dark:bg-neutral-900/60"
          : "border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/40"
      }`}
    >
      <div className="grid grid-cols-1  sm:grid-cols-[1fr_auto] gap-8 sm:gap-10 items-start justify-between">
        {/* Pricing Info & CTA */}
        <div className="flex flex-col items-start">
          <div className="flex items-baseline">
            <span className="text-5xl sm:text-[52px] font-bold tracking-tight text-neutral-900 dark:text-white">
              {price}
            </span>
            <span className="text-2xl sm:text-[26px] font-normal text-neutral-400 dark:text-neutral-500 ml-0.5">
              {period}
            </span>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed mt-3 mb-7 max-w-[220px]">
            {description}
          </p>

          <button
            type="button"
            className="bg-[#222222] hover:bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer"
          >
            Start now
          </button>
        </div>

        {/* Feature List with Checkmarks */}
        <div className="sm:pt-2 sm:min-w-[230px]">
          <ul className="space-y-1.5 ">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-neutral-600 dark:text-neutral-300"
              >
                <IconCircleCheckFilled className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-neutral-300/90 dark:text-neutral-500 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
