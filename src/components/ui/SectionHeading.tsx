"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const eyebrowColor = "text-ember";
  const titleColor = tone === "dark" ? "text-ivory" : "text-bark";
  const subtitleColor = tone === "dark" ? "text-taupe" : "text-taupe-soft";
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col ${alignment} max-w-2xl gap-4`}
    >
      <span
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl md:text-5xl leading-[1.1] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
