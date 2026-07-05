"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative z-30 flex h-10 w-10 flex-none items-center justify-center text-ivory lg:hidden"
    >
      <motion.span
        className="absolute h-[1.5px] w-6 rounded-full bg-current"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -7 }}
        transition={{ duration: 0.35, ease }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 rounded-full bg-current"
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 8 : 0 }}
        transition={{ duration: 0.2, ease }}
      />
      <motion.span
        className="absolute h-[1.5px] w-6 rounded-full bg-current"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 7 }}
        transition={{ duration: 0.35, ease }}
      />
    </button>
  );
}
