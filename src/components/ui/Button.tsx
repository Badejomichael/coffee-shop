"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<HTMLMotionProps<"button">, "children"> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  Omit<HTMLMotionProps<"a">, "children"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer";

const variants: Record<string, string> = {
  primary: "bg-ember text-ink hover:bg-ember-bright",
  outline:
    "border border-ivory/30 text-ivory hover:border-ember hover:text-ember",
  ghost: "text-ember hover:text-ember-bright",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        className={classes}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={classes}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
