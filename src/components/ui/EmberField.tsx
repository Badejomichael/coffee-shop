"use client";

import { motion } from "framer-motion";
import { emberFloat } from "@/animations/variants";

const embers = [
  { left: "12%", size: 3, delay: 0 },
  { left: "22%", size: 2, delay: 1.2 },
  { left: "35%", size: 4, delay: 0.6 },
  { left: "58%", size: 2, delay: 2 },
  { left: "71%", size: 3, delay: 0.9 },
  { left: "85%", size: 2, delay: 1.6 },
  { left: "48%", size: 3, delay: 2.6 },
  { left: "92%", size: 2, delay: 0.3 },
];

export default function EmberField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {embers.map((ember, i) => (
        <motion.span
          key={i}
          variants={emberFloat}
          initial="hidden"
          animate="visible"
          transition={{ delay: ember.delay }}
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            bottom: "8%",
          }}
          className="absolute rounded-full bg-ember shadow-[0_0_8px_2px_rgba(201,162,75,0.7)]"
        />
      ))}
    </div>
  );
}
