"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { fadeInUp } from "@/animations/variants";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-linen px-6 py-24 md:px-10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-bark/10 bg-linen-soft px-8 py-16 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Worth Knowing About
        </span>
        <h2 className="font-display text-3xl leading-tight text-bark md:text-4xl">
          Get first dibs on the new stuff.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-taupe-soft">
          We'll email you when a new bag hits the shelf or something
          seasonal shows up on the menu — maybe once a month, usually less.
          No spam, we genuinely don't have time for that.
        </p>

        {submitted ? (
          <div className="mt-4 flex items-center gap-2 text-ember">
            <FiCheck />
            <span className="text-sm font-medium">
              You&apos;re on the list. Talk soon.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full flex-1 rounded-full border border-bark/15 bg-linen px-5 py-3.5 text-sm text-bark placeholder:text-taupe-soft focus:border-ember focus:outline-none"
            />
            <Button type="submit" variant="primary" className="flex-none">
              Sign Me Up <FiArrowRight size={14} />
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
